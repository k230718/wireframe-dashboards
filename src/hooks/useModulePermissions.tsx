import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface ModulePermission {
  module_name: string;
  has_access: boolean;
}

export const useModulePermissions = () => {
  const { user } = useAuth();
  const [permissions, setPermissions] = useState<ModulePermission[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setPermissions([]);
      setLoading(false);
      return;
    }

    const fetchPermissions = async () => {
      try {
        const [profileResult, permsResult] = await Promise.all([
          supabase
            .from('profiles')
            .select('role')
            .eq('user_id', user.id)
            .single(),
          supabase
            .from('module_permissions')
            .select('module_name, has_access')
            .eq('user_id', user.id)
        ]);

        if (profileResult.error) {
          console.error('Error fetching profile:', profileResult.error);
        }
        setIsAdmin(profileResult.data?.role === 'admin');

        if (permsResult.error) {
          console.error('Error fetching permissions:', permsResult.error);
        }
        setPermissions(permsResult.data || []);
      } catch (error) {
        console.error('Error fetching permissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [user]);

  const hasAccess = (moduleName: string) => {
    if (isAdmin) return true;
    const permission = permissions.find(p => p.module_name === moduleName);
    return permission?.has_access || false;
  };

  return {
    permissions,
    hasAccess,
    loading
  };
};