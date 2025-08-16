import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const departments = [
  { value: 'project-management', label: 'Project Management' },
  { value: 'procurement', label: 'Procurement' },
  { value: 'inventory', label: 'Inventory' },
  { value: 'production', label: 'Production' },
  { value: 'sales-marketing', label: 'Sales & Marketing' },
  { value: 'finance', label: 'Finance' },
  { value: 'supply-chain', label: 'Supply Chain' },
  { value: 'hr', label: 'Human Resources' },
];

const DepartmentRequest = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !formData.fullName || !formData.department) return;

    setLoading(true);

    try {
      // Save request to database using RPC function
      const { error: dbError } = await supabase
        .from('department_access_requests')
        .insert({
          user_id: user.id,
          full_name: formData.fullName,
          email: user.email || '',
          department: formData.department,
        });

      if (dbError) {
        throw dbError;
      }

      // Send email to department head
      const { error: emailError } = await supabase.functions.invoke('send-department-request', {
        body: {
          fullName: formData.fullName,
          email: user.email,
          department: formData.department,
        },
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't throw error as the DB insert succeeded
      }

      toast({
        title: 'Request Submitted',
        description: 'Your department access request has been submitted. You will be notified once approved.',
      });

      setFormData({ fullName: '', department: '' });
    } catch (error: any) {
      console.error('Error submitting request:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Department Access Request</CardTitle>
          <CardDescription>
            Please select your department to request access to the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select
                value={formData.department}
                onValueChange={(value) => setFormData({ ...formData, department: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepartmentRequest;