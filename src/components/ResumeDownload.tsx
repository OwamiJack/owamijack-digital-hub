import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a professional resume PDF content
    const resumeContent = `
OWAMI JACK
081 380 9090 | owamlukhangele@gmail.com
Port Elizabeth, Eastern Cape, South Africa

ABOUT ME
I am a hard-working professional who adapts easily to working environments. I am self-driven and have the ability to work under pressure and multitask effectively. I am devoted and believe in completing tasks before time. I excel in communication.

EDUCATION
Matric, Happy Home Academy - 2021

EXPERIENCE

Digital Associate - CAPACITI (2025 – Present)
• Supported digital adoption and transformation projects
• Tested and deployed AI-powered productivity tools
• Assisted in analyzing workflow data to optimize team performance

System Support - Masifunde Training & Development (2023 – 2024)
• Provided IT and system support to staff and learners
• Resolved technical issues and documented common solutions
• Improved helpdesk response times and system performance

Front of House - KFC (Sep 2024 – Present)
• Assisted customers with buying food and drinks
• Maintained cleanliness of the sitting area and restaurant lobby
• Provided excellent customer service in a fast-paced environment

Retail Assistant, Shop Assistant - Rage (Mar 2024 – Aug 2024)
• Assisted customers with opening/paying accounts and purchasing goods
• Managed stock packing and displaying clothes as assigned
• Delivered quality customer service and met sales targets

PERSONAL INFO
Age: 23
Gender: Female
Nationality: South African
Home Language: isiXhosa
Additional Languages: English, Afrikaans

LOCATION & TRANSPORT
Willing to relocate
Access to public transport
    `.trim();

    // Create a blob from the text content
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Owami_Jack_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleDownload}
      size="lg"
      className="bg-primary hover:bg-primary/90"
    >
      <Download className="mr-2 h-5 w-5" />
      Download Resume
    </Button>
  );
};

export default ResumeDownload;
