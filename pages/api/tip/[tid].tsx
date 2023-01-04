import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()
export default async function handle(req:NextApiRequest , res:NextApiResponse) {
  if (req.method === 'GET'){
    const res = await prisma.tip.findUnique({
      where: {
        id: req.query.tid
      }
    })
  }
  
  res.json(res)
}
