import type { NextApiRequest, NextApiResponse } from "next";
import withAuth from "@/middleware/auth";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Process the request if authenticated
  res.status(200).json({ message: "Protected content" });
};

export default withAuth(handler);