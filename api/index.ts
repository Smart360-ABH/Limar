import { createApp } from "../server/app";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = createApp();

export default (req: VercelRequest, res: VercelResponse) => {
  app(req as any, res as any);
};
