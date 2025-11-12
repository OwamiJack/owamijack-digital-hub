import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `
You are an AI assistant helping potential employers learn about Owami Jack. Here's her information:

ABOUT:
Owami Jack is a dedicated and detail-oriented professional with a growing passion for digital transformation, technology integration, and system support. Her career bridges the gap between people and technology, helping organizations work smarter through effective use of digital tools and systems.

EXPERIENCE:
1. Digital Associate at CAPACITI (2025 – Present)
   - Supported digital adoption and transformation projects
   - Tested and deployed AI-powered productivity tools
   - Assisted in analyzing workflow data to optimize team performance

2. System Support at Masifunde Training & Development (2023 – 2024)
   - Provided IT and system support to staff and learners
   - Resolved technical issues and documented common solutions
   - Improved helpdesk response times and system performance

TECHNICAL SKILLS:
- Microsoft 365, Google Workspace
- Troubleshooting, CRM Systems, IT Support
- Data Entry

DIGITAL TOOLS:
- Notion, Canva, Trello, ChatGPT
- Power BI (Basic)

SOFT SKILLS:
- Communication, Collaboration
- Time Management, Problem Solving
- Adaptability

EDUCATION:
- Higher Certificate in System Support (Pearson Institute)
- Matric Certificate (Unathi High School, 2022)

KEY TRAITS:
- Tech-Savvy, Collaborative, Solution-Oriented
- Passionate about continuous learning
- Interested in AI tools, data analytics, and digital process improvement

CONTACT:
- Work Email: owami.jack@capaciti.org.za
- Personal Email: owamlukhangele@gmail.com
- LinkedIn: linkedin.com/in/owami-jack
- GitHub: github.com/owamijack

Answer questions professionally and enthusiastically, highlighting her strengths and experience. Keep responses conversational but professional.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error("Message is required");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
