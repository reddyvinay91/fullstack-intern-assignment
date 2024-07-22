
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== process.env.AUTH_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Process the request if authenticated
  res.status(200).json({ message: "Protected content" });
};

export default handler;
