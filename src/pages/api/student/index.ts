import type { NextApiResponse, NextApiRequest } from 'next';
import { getStudent, updateStudent } from '@/services/student';

const allowMethods = [`GET`, `PUT`];


export default async function handle(req: NextApiRequest, res: NextApiResponse){
    try {
        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }
        
        

        if(req.method === `GET`) {
            const data = await getStudent(req.headers)
           
            res.status(200).send({ student: data})
        }


        if(req.method === `PUT`) {
            const data = await updateStudent(req.body, req.headers,)
            res.status(200).send({ student: data})
        }



    } catch (error){
        console.log(error)
        return res.status(500).send({ message: `Server Error` })
    }


}