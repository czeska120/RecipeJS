import fs from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    dataDirectory + "/recipe.json",
    "utf8"
  );
  console.log(dataDirectory);
  const recipes = JSON.parse(fileContents);
  res.status(200).json(recipes);
}
