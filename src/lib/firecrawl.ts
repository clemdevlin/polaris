import Firecrawl from "@mendable/firecrawl-js";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const firecrawl = new Firecrawl({
  apiKey:
    process.env.NODE_ENV === "development"
      ? "fc-0a60b552939449dda447a69cbb05890a"
      : process.env.FIRECRAWL_API_KEY!,
});
