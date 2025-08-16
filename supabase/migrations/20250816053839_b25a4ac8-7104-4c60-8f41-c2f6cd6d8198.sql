-- Create department_access_requests table
CREATE TABLE public.department_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.department_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own requests" 
ON public.department_access_requests 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" 
ON public.department_access_requests 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create RPC function for inserting department requests
CREATE OR REPLACE FUNCTION public.insert_department_request(
  p_user_id UUID,
  p_full_name TEXT,
  p_email TEXT,
  p_department TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.department_access_requests (user_id, full_name, email, department)
  VALUES (p_user_id, p_full_name, p_email, p_department);
END;
$$;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_department_requests_updated_at
BEFORE UPDATE ON public.department_access_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();