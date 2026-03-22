import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, phone, message, source } = body;

    const accessKey = "b72142e0-b7bb-4249-862f-1f74d6594cf6";
    
    // Dynamic Subject Line 
    const subjectPrefix = source === "chatbot" ? "AI Chatbot" : "Website Contact Form";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Lead from ${subjectPrefix}: ${name || "Unknown"}`,
        from_name: "Xyphora Website",
        replyto: email || "noreply@xyphora.ai",
        // The fields below will automatically be formatted into a nice table by Web3Forms!
        Name: name,
        Email: email,
        Phone: phone || "Not Provided",
        Company: company || "Not Provided",
        Service: service || "Not Provided",
        Message: message || "No message provided",
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
