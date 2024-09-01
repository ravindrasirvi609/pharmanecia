import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const config = {
  runtime: "edge",
};

function generateHTML(name: string, affiliation: string, imageUrl: string) {
  return `
    <html>
      <head>
        <style>
          body {
            width: 1080px;
            height: 1080px;
            background: linear-gradient(180deg, #300060 0%, #530060 100%);
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            padding: 40px;
            box-sizing: border-box;
          }
          h1 {
            color: #FFD700;
            font-size: 60px;
            margin: 0 0 20px;
          }
          .subtitle {
            font-size: 24px;
            margin: 0 0 20px;
          }
          h2 {
            font-size: 28px;
            margin: 0 0 20px;
            padding: 0 100px;
            line-height: 1.4;
          }
          .date {
            font-size: 24px;
            margin: 0 0 40px;
          }
          .card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            width: 80%;
            margin: 0 auto;
          }
          .profile-pic {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 4px solid #FFA500;
            overflow: hidden;
            margin: 0 auto 20px;
          }
          .profile-pic img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .name {
            color: #000080;
            font-size: 28px;
            margin: 0 0 10px;
          }
          .designation {
            color: #FFA500;
            font-size: 24px;
            margin: 0 0 10px;
          }
          .institute {
            color: #000000;
            font-size: 20px;
            margin: 0 0 20px;
          }
          .attending {
            color: #FFA500;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }
          .footer {
            font-size: 16px;
            margin-top: 30px;
          }
          .hashtags {
            font-size: 16px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Pharmanecia 4.E</h1>
        <p class="subtitle">International Research Conference on</p>
        <h2>"Recent Advances in Artificial Intelligence and Machine Learning Driven Drug Discovery"</h2>
        <p class="date">7th and 8th March, 2025</p>
        <div class="card">
          <div class="profile-pic">
            <img src="${imageUrl}" alt="${name}" />
          </div>
          <h3 class="name">${name}</h3>
          <p class="designation">Student</p>
          <p class="institute">${affiliation}</p>
          <p class="attending">Hey! I'm Attending Pharmanecia 4.E</p>
        </div>
        <div class="footer">
          <p>Organized by Department of Pharmaceutical Chemistry,</p>
          <p>JSS College of Pharmacy, Ooty</p>
          <p>Hosted by Operant Pharmacy Federation</p>
        </div>
        <p class="hashtags">#Pharmanecia4E #AIinDrugDiscovery #MachineLearning #PharmaceuticalSciences</p>
      </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const { name, affiliation, imageUrl } = await req.json();

    const html = generateHTML(name, affiliation, imageUrl);

    // Use puppeteer to convert HTML to image
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.setViewport({ width: 1080, height: 1080 });
    const screenshot = await page.screenshot({ type: "png" });
    await browser.close();

    return new NextResponse(screenshot, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename=${name.replace(
          /\s+/g,
          "_"
        )}_Pharmanecia_Share.png`,
      },
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to generate image" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
