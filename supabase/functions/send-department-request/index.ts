import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DepartmentRequestData {
  fullName: string;
  email: string;
  department: string;
}

const departmentHeads = {
  "project-management": "pm-head@pharmaerp.com",
  "procurement": "procurement-head@pharmaerp.com",
  "inventory": "inventory-head@pharmaerp.com",
  "production": "production-head@pharmaerp.com",
  "sales": "sales-head@pharmaerp.com",
  "marketing": "marketing-head@pharmaerp.com",
  "finance": "finance-head@pharmaerp.com",
  "supply-chain": "supply-chain-head@pharmaerp.com",
  "hr": "hr-head@pharmaerp.com"
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, department }: DepartmentRequestData = await req.json();

    const departmentHead = departmentHeads[department as keyof typeof departmentHeads];
    
    if (!departmentHead) {
      return new Response(
        JSON.stringify({ error: "Invalid department" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
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
        ...corsHeaders,
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