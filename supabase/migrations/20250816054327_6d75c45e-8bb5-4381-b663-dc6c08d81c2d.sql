-- Update handle_new_user function to not give default access
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  
  -- New users get no module access by default, they must request access
  INSERT INTO public.module_permissions (user_id, module_name, has_access)
  VALUES 
    (NEW.id, 'project-management', false),
    (NEW.id, 'procurement', false),
    (NEW.id, 'inventory', false),
    (NEW.id, 'production', false),
    (NEW.id, 'sales', false),
    (NEW.id, 'marketing', false),
    (NEW.id, 'finance', false),
    (NEW.id, 'supply-chain', false),
    (NEW.id, 'hr', false);
    
  RETURN NEW;
END;
$$;

-- Create admin user function for testing
CREATE OR REPLACE FUNCTION public.create_admin_user(admin_email TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Find user by email
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = admin_email;
  
  IF admin_user_id IS NOT NULL THEN
    -- Update profile to admin role
    UPDATE public.profiles 
    SET role = 'admin' 
    WHERE user_id = admin_user_id;
    
    -- Give admin access to all modules
    UPDATE public.module_permissions 
    SET has_access = true 
    WHERE user_id = admin_user_id;
  END IF;
END;
$$;

-- Create department heads table for email routing
CREATE TABLE public.department_heads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL UNIQUE,
  head_email TEXT NOT NULL,
  head_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert dummy department heads
INSERT INTO public.department_heads (department, head_email, head_name) VALUES
  ('project-management', 'pm-head@company.com', 'PM Department Head'),
  ('procurement', 'procurement-head@company.com', 'Procurement Head'),
  ('inventory', 'inventory-head@company.com', 'Inventory Head'),
  ('production', 'production-head@company.com', 'Production Head'),
  ('sales', 'sales-head@company.com', 'Sales Head'),
  ('marketing', 'marketing-head@company.com', 'Marketing Head'),
  ('finance', 'finance-head@company.com', 'Finance Head'),
  ('supply-chain', 'supply-chain-head@company.com', 'Supply Chain Head'),
  ('hr', 'hr-head@company.com', 'HR Head');

-- Enable RLS on department_heads
ALTER TABLE public.department_heads ENABLE ROW LEVEL SECURITY;

-- Create policy for department_heads (readable by authenticated users)
CREATE POLICY "Authenticated users can view department heads" 
ON public.department_heads 
FOR SELECT 
USING (auth.role() = 'authenticated');