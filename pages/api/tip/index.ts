import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await prisma.tip.findMany();
    res.json(response);
  }
  if (req.method === "POST") {
    const response = await prisma.tip.create({
      data: {
        title: req.body.title,
        subTitle: req.body.subTitle,
        content: req.body.content,
        tags: {
          connectOrCreate: 
              req.body.tags.map((tag: string) => {
              return { where: { name: tag }, create: { name: tag } };
            }),
        },
      },
    });
    res.json(response);
  }
}
