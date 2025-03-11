import { connect } from "../dbConfig/dbConfig";
import RegistrationModel from "../Model/RegistrationModel";
import { FeesRecipt } from "../../src/feesRecipt";
import mongoose from "mongoose";

// Connect to the database
connect();

async function updateFeesReceipts() {
  try {
    console.log("Starting to update fees receipts...");

    let updatedCount = 0;
    let notFoundCount = 0;

    // Process each receipt from the feesRecipt.ts file
    for (const receipt of FeesRecipt) {
      const registrationId = receipt["Registration ID"];
      const receiptUrl = receipt["Merged Doc URL - Fee Receipts"];

      if (!registrationId || !receiptUrl) {
        console.log("Skipping entry with missing data:", receipt);
        continue;
      }

      // Find the registration by registration code
      const registration = await RegistrationModel.findOne({
        registrationCode: registrationId,
      });

      if (registration) {
        // Update the fees receipt URL
        registration.feesReceiptUrl = receiptUrl;
        await registration.save();
        updatedCount++;
        console.log(`Updated receipt URL for ${registrationId}`);
      } else {
        notFoundCount++;
        console.log(`Registration not found for ID: ${registrationId}`);
      }
    }

    console.log(
      `Update complete. Updated: ${updatedCount}, Not found: ${notFoundCount}`
    );
  } catch (error) {
    console.error("Error updating fees receipts:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

// Run the update function
export default updateFeesReceipts;
