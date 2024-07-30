// app/api/generate-share-image/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getBrowser } from "@/lib/puppeteer-service";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      affiliation,
      designation,
      imageUrl,
      registrationType,
      registrationCode,
    } = await req.json();

    const browser = await getBrowser();
    const page = await browser.newPage();

    // Set the viewport to match Instagram post size (1080x1080)
    await page.setViewport({ width: 1080, height: 1080 });

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
            
            body {
              width: 1080px;
              height: 1080px;
              margin: 0;
              padding: 40px;
              background: linear-gradient(135deg, #021373, #D94814);
              color: white;
              font-family: 'Roboto', sans-serif;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-sizing: border-box;
            }
            .header, .footer { text-align: center; }
            .content {
              background: rgba(255, 255, 255, 0.9);
              border-radius: 20px;
              padding: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
              box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .image-container {
              width: 200px;
              height: 200px;
              border-radius: 50%;
              border: 4px solid #D94814;
              overflow: hidden;
              margin-bottom: 20px;
            }
            .image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .info { color: #021373; text-align: center; }
            .name { font-size: 32px; font-weight: 900; margin-bottom: 8px; }
            .designation { color: #D94814; font-size: 22px; margin-bottom: 4px; font-weight: 700; }
            .affiliation { color: #333; font-size: 18px; margin-bottom: 4px; }
            .registration { font-size: 18px; color: #021373; margin-top: 8px; font-weight: 700; }
            .attending { font-size: 50px; color: #D94814; margin-top: 20px; font-weight: 800; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="font-size: 44px; font-weight: 900; margin-bottom: 10px;">Pharmanecia 4.E</h1>
            <p style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">International Research Conference on</p>
            <p style="font-size: 24px; font-weight: 700; margin-bottom: 10px;">"Recent Advances in Artificial Intelligence and Machine learning driven drug discovery"</p>
            <p style="font-size: 22px; font-weight: 700;">7th and 8th March, 2025</p>
          </div>
          <div class="content">
            <div class="image-container">
              <img src="${imageUrl}" alt="${name}" class="image" />
            </div>
            <div class="info">
              <div class="name">${name}</div>
              ${
                designation
                  ? `<div class="designation">${designation}</div>`
                  : ""
              }
              ${
                affiliation
                  ? `<div class="affiliation">${affiliation}</div>`
                  : ""
              }
            </div>
            <div class="attending">Hey! I'm attending Pharmanecia 4.E</div>
          </div>
          <div class="footer">
            <p style="font-size: 18px; margin-bottom: 10px;">Organized by Department of Pharmaceutical Chemistry,</p>
            <p style="font-size: 18px; margin-bottom: 10px;">JSS College of Pharmacy, Ooty</p>
            <p style="font-size: 18px; margin-bottom: 20px;">Hosted by, Operant Pharmacy Federation</p>
            <p style="font-size: 18px;">#Pharmanecia4E #AIinDrugDiscovery #MachineLearning #PharmaceuticalSciences</p>
          </div>
        </body>
      </html>
    `;

    await page.setContent(html, { waitUntil: "networkidle0" });

    // Wait for any images to load
    await page.evaluate(
      () =>
        new Promise((resolve) => {
          const images = document.querySelectorAll("img");
          if (images.length === 0) resolve(null);
          let loadedImages = 0;
          images.forEach((img) => {
            if (img.complete) {
              loadedImages++;
              if (loadedImages === images.length) resolve(null);
            } else {
              img.addEventListener("load", () => {
                loadedImages++;
                if (loadedImages === images.length) resolve(null);
              });
              img.addEventListener("error", () => {
                loadedImages++;
                if (loadedImages === images.length) resolve(null);
              });
            }
          });
        })
    );

    // Add a small delay to ensure all styles are applied
    await new Promise((resolve) => setTimeout(resolve, 500));

    const imageBuffer = await page.screenshot({ type: "png" });

    await browser.close();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename=${name.replace(
          /\s+/g,
          "_"
        )}_Pharmanecia4E_Share.png`,
      },
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { message: "Error generating image" },
      { status: 500 }
    );
  }
}
