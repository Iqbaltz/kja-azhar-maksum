import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  res.setDraftMode({ enable: true });
  switch (type) {
    case "services":
      res.writeHead(307, { Location: "/services" });
    case "team":
      res.writeHead(307, { Location: "/team" });
    case "about":
      res.writeHead(307, { Location: "/about" });
    case "contact":
      res.writeHead(307, { Location: "/contact" });
    default:
      res.writeHead(307, { Location: "/" });
  }
  res.end();
}
