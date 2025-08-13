-- Fix security warnings by setting proper search paths for functions

-- Update handle_new_user function with secure search path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  
  -- Give default access to project management and procurement modules
  INSERT INTO public.module_permissions (user_id, module_name, has_access)
  VALUES 
    (NEW.id, 'project-management', true),
    (NEW.id, 'procurement', true),
    (NEW.id, 'inventory', false),
    (NEW.id, 'production', false),
    (NEW.id, 'sales', false),
    (NEW.id, 'marketing', false),
    (NEW.id, 'finance', false),
    (NEW.id, 'supply-chain', false),
    (NEW.id, 'hr', false);
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Update update_updated_at_column function with secure search path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;