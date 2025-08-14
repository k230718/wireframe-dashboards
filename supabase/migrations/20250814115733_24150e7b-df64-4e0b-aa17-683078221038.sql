-- Give dummy admin email access to all modules
INSERT INTO public.profiles (user_id, full_name, email, role) 
VALUES (
  'a0000000-0000-0000-0000-000000000000'::uuid,
  'System Admin',
  'admin@pharmaerp.com',
  'admin'
) ON CONFLICT (user_id) DO NOTHING;

-- Insert all 8 module permissions for the admin
INSERT INTO public.module_permissions (user_id, module_name, has_access)
VALUES 
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'project-management', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'procurement', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'inventory', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'production', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'sales', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'marketing', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'finance', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'supply-chain', true),
  ('a0000000-0000-0000-0000-000000000000'::uuid, 'hr', true)
ON CONFLICT (user_id, module_name) DO UPDATE SET has_access = true;

-- Create department access requests table
CREATE TABLE public.department_access_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  department text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.department_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own requests" 
ON public.department_access_requests 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own requests" 
ON public.department_access_requests 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all requests" 
ON public.department_access_requests 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role = 'admin'
));

-- Update the handle_new_user function to not give default access
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  
  -- No default module access - users need to request access
  
  RETURN NEW;
END;
$function$;