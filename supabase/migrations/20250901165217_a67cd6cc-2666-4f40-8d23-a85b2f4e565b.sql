-- Give admin full access to all modules
UPDATE module_permissions 
SET has_access = true 
WHERE user_id = (SELECT user_id FROM profiles WHERE email = 'yahyashaikh2003@gmail.com');