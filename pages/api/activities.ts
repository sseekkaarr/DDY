import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { category_id } = req.query;

      if (category_id) {
        const activities = await prisma.selfCareActivities.findMany({
          where: { category_id: category_id as string },
          select: {
            id: true,
            activity_name: true,
            description: true,
            duration: true,
          },
        });

        res.status(200).json(activities);
      } else {
        const categories = await prisma.selfCareActivities.findMany({
          distinct: ["category_id"],
          select: { category_id: true, category: true },
        });

        res.status(200).json(categories);
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
