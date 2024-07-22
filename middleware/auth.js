
import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const withAuth = (handler: NextApiHandler) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];

    if (token !== process.env.AUTH_TOKEN) {
      return res.status(401).json({ message: "Invalid token" });
    }

    return handler(req, res);
  };
};

export default withAuth;
