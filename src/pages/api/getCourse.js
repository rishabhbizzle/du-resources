// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import path from 'path';


export default async function handler(req, res) {
  // console.log
  // console.log(req.query)
  let api = await fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(api.status);
  let data = await api.json();
  return res.status(200).json(data);

  // fs.readFile(`jsondata/${req.query.course}.json`, 'utf-8', (err, data) => {
  //   if (err){
  //     console.log(err)
  //     return res.status(404).json({"error": true, "message": "Course not found"})
  //   }
  //   // console.log(data)
  //   return res.status(200).json(JSON.parse(data));
  // })
  
}
