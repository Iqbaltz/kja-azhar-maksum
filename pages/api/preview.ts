import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const { type } = query;
  const slug = typeof query.slug === "string" ? query.slug : undefined;

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
      if (slug) {
        res.setDraftMode({ enable: true });
        res.writeHead(307, { Location: `/news/${slug}` });
        res.end();
        return;
      }
      res.writeHead(307, { Location: "/" });
  }
  res.end();
}
