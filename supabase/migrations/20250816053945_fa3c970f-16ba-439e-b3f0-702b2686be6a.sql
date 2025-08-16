-- Update function to set search_path for security linter compliance
CREATE OR REPLACE FUNCTION public.insert_department_request(
  p_user_id UUID,
  p_full_name TEXT,
  p_email TEXT,
  p_department TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.department_access_requests (user_id, full_name, email, department)
  VALUES (p_user_id, p_full_name, p_email, p_department);
END;
$$;