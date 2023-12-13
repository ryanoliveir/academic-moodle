import type { NextApiResponse, NextApiRequest } from 'next';
import { getStudent } from '@/services/student';

const allowMethods = [`GET`];


export default async function handle(req: NextApiRequest, res: NextApiResponse){
    try {
        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }
        
        
        const data = await getStudent(req.headers)
        console.log(data);
        res.status(200).send({ student: data})


    } catch (error){
        return res.status(500).send({ message: `Server Error` })
    }


}