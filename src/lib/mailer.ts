import AbstractModel from "@/Model/AbstractModel";

const createEmailTemplate = (content: any) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abstract Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #022873;
            color: #F2F2F2;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-color: #F2F2F2;
            padding: 20px;
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #D94814;
            color: #F2F2F2;
            text-decoration: none;
            border-radius: 5px;

        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #CACACA;
        }
        .qr-code {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Abstract Submission</h1>
    </div>
    <div class="content">
        ${content}
    </div>
    <div class="footer">
        <p>© 2024 Your Organization. All rights reserved.</p>
    </div>
</body>
</html>
`;

export const sendEmail = async (
  {
    _id,
    emailType,
  }: {
    _id: string;
    emailType: "SUBMMITED" | "UPDATE_STATUS";
  },
  p0?: string
) => {
  try {
    if (emailType !== "SUBMMITED" && emailType !== "UPDATE_STATUS") {
      throw new Error(
        "Invalid emailType. It should be either 'SUBMMITED' or 'UPDATE_STATUS'."
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Missing Resend API key. Set the RESEND_API_KEY environment variable."
      );
    }

    const abstract = await AbstractModel.findOne({ _id });

    if (!abstract) {
      throw new Error(`No abstract found for email`);
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const submissionDetailsUrl = `${baseUrl}/abstractForm/${abstract._id}`;

    let content, subject;

    if (emailType === "SUBMMITED") {
      content = `
        <h2>Thank you for your submission!</h2>
        <p>Your abstract has been successfully submitted. Your temporary abstract code is: <strong>${abstract.temporyAbstractCode}</strong></p>
        <p>You can use the QR code below to check for updates on your submission status:</p>
        <div class="qr-code">
            <img src="${abstract.qrCodeUrl}" alt="QR Code" style="max-width: 200px;">
        </div>
        <p>If you need to make any changes or have any questions, please don't hesitate to contact us.</p>
        <p>
            <a href="${submissionDetailsUrl}" class="button">View Submission Details</a>
        </p>
      `;
      subject = `Abstract Submission Confirmation - ${abstract.temporyAbstractCode}`;
    } else if (emailType === "UPDATE_STATUS") {
      let statusSpecificContent = "";
      let codeToShow = abstract.temporyAbstractCode;
      let statusForSubject = abstract.Status;

      if (abstract.Status === "Accepted") {
        codeToShow = abstract.AbstractCode;
        statusSpecificContent = `
      <p>Congratulations! Your abstract has been accepted.</p>
      <p>Your official abstract code is: <strong>${abstract.AbstractCode}</strong></p>
    `;
      } else if (abstract.Status === "Rejected" && abstract.rejectionComment) {
        statusSpecificContent = `
      <p>We regret to inform you that your abstract has not been accepted.</p>
      <p>Reason for rejection: ${abstract.rejectionComment}</p>
    `;
      }

      content = `
    <h2>Your Abstract Status Has Been Updated</h2>
    <p>There has been an update to your abstract submission (Code: <strong>${codeToShow}</strong>).</p>
    <p>Current Status: <strong>${abstract.Status}</strong></p>
    ${statusSpecificContent}
    <p>Please scan the QR code below or click the button to view the current status of your submission:</p>
    <div class="qr-code">
        <img src="${abstract.qrCodeUrl}" alt="QR Code" style="max-width: 200px;">
    </div>
    <p>If you have any questions about this update, please contact our support team.</p>
    <p>
        <a href="${submissionDetailsUrl}" class="button">View Submission Details</a>
    </p>
  `;
      subject = `Abstract ${statusForSubject} - ${codeToShow}`;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "dev@ravindrachoudhary.in",
        to: abstract.email,
        subject: subject,
        html: createEmailTemplate(content),
      }),
    });

    if (!response.ok) {
      throw new Error(`Error sending email: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
