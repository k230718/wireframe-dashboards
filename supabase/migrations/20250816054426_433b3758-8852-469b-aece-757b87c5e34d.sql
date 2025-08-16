-- Update department_heads table for correct 8 modules
DELETE FROM public.department_heads;

INSERT INTO public.department_heads (department, head_email, head_name) VALUES
  ('project-management', 'pm-head@company.com', 'PM Department Head'),
  ('procurement', 'procurement-head@company.com', 'Procurement Head'),
  ('inventory', 'inventory-head@company.com', 'Inventory Head'),
  ('production', 'production-head@company.com', 'Production Head'),
  ('sales-marketing', 'sales-marketing-head@company.com', 'Sales & Marketing Head'),
  ('finance', 'finance-head@company.com', 'Finance Head'),
  ('supply-chain', 'supply-chain-head@company.com', 'Supply Chain Head'),
  ('hr', 'hr-head@company.com', 'HR Head');

-- Update handle_new_user function for correct 8 modules
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
    (NEW.id, 'sales-marketing', false),
    (NEW.id, 'finance', false),
    (NEW.id, 'supply-chain', false),
    (NEW.id, 'hr', false);
    
  RETURN NEW;
END;
$$;