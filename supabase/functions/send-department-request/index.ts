import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? ''
);

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DepartmentRequestData {
  fullName: string;
  email: string;
  department: string;
}

// Department heads will be fetched from database
const getDepartmentHead = async (department: string): Promise<string | null> => {
  try {
    const { data, error } = await supabase
      .from('department_heads')
      .select('head_email')
      .eq('department', department)
      .single();
    
    if (error) {
      console.error('Error fetching department head:', error);
      return null;
    }
    
    return data?.head_email || null;
  } catch (error) {
    console.error('Error in getDepartmentHead:', error);
    return null;
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, department }: DepartmentRequestData = await req.json();

    // Get department head email from database
    const departmentHead = await getDepartmentHead(department);
    if (!departmentHead) {
      return new Response(
        JSON.stringify({ error: 'Department head not found' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "PharmaERP System <onboarding@resend.dev>",
      to: [departmentHead],
      subject: `New Access Request for ${department.charAt(0).toUpperCase() + department.slice(1)} Department`,
      html: `
        <h1>New Department Access Request</h1>
        <p>A new user has requested access to the ${department} module:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Department:</strong> ${department}</li>
        </ul>
        <p>Please review this request and approve/deny access accordingly in the admin panel.</p>
        <p>Best regards,<br>PharmaERP System</p>
      `,
    });

    console.log("Department access request email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        ...corsHeaders 
      },
    });
  } catch (error: any) {
    console.error("Error sending department request email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);