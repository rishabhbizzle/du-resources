// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';
import path from 'path';


export default async function handler(req, res) {
  // console.log
  // console.log(req.query)
  const jsonDirectory = path.join(process.cwd(), 'jsondata');
  // console.log(jsonDirectory)
  try {
    const contents = await fs.readFile(jsonDirectory + `/${req.query.course}.json`, 'utf-8');
  return res.status(200).json(JSON.parse(contents));

  } catch (error) {
    return res.status(404).json({error: true});
  }
  
  
}
