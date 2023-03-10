import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x21D8f7a11D6390158976f3aD70Ec94eC8Bf7F195",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "VES Student",
        description: "This NFT will give you access to ChainBank!",
        image: readFileSync("scripts/assets/vesimg.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
