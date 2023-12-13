import type { NextApiResponse, NextApiRequest } from 'next';
import { currentUser } from '@/services/users';
const allowMethods = [`GET`];


export default async function handle(req: NextApiRequest, res: NextApiResponse){
    try {
        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }
        
        
        const data = await currentUser(req.headers)
        res.status(200).send({ user: data})


    } catch (error){
        return res.status(500).send({ message: `Server Error` })
    }


}