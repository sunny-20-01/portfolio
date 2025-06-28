import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      const cvPath = path.join(process.cwd(), "attached_assets", "Sunny_CV_1751125426730.pdf");
      
      if (!fs.existsSync(cvPath)) {
        return res.status(404).json({ message: "CV file not found" });
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Sunny_CV.pdf");
      
      const fileStream = fs.createReadStream(cvPath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error downloading CV:", error);
      res.status(500).json({ message: "Failed to download CV" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
