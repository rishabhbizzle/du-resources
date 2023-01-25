import * as fs from 'fs';


export default async function handler(req, res) {
  console.log(req.query)
  const subject = req.query.sub;
  fs.readFile(`jsondata/${subject}.json`, 'utf-8', (err, data) => {
    if (err){
      console.log(err)
      return res.status(500).json({ error: "No such subject found" })
    }
    // console.log(data)
    return res.status(200).json(JSON.parse(data));
  })
  
}