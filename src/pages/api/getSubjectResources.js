import { promises as fs } from 'fs';
import path from 'path';


export default async function handler(req, res) {
  console.log(req.query)
  const subject = req.query.sub;
  const jsonDirectory = path.join(process.cwd(), 'jsondata');
  try {
    const contents = await fs.readFile(jsonDirectory + `/${subject}.json`, 'utf-8');
    return res.status(200).json(JSON.parse(contents));

  } catch (error) {
    return res.status(404).json({error: true});
  }
  
}