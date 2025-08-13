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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setPermissions([]);
      setLoading(false);
      return;
    }

    const fetchPermissions = async () => {
      try {
        const { data, error } = await supabase
          .from('module_permissions')
          .select('module_name, has_access')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching permissions:', error);
          return;
        }

        setPermissions(data || []);
      } catch (error) {
        console.error('Error fetching permissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [user]);

  const hasAccess = (moduleName: string) => {
    const permission = permissions.find(p => p.module_name === moduleName);
    return permission?.has_access || false;
  };

  return {
    permissions,
    hasAccess,
    loading
  };
};