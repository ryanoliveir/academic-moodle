import type { NextApiRequest, NextApiResponse } from "next";

const allowMethods = [`POST`];

export default async function handle(req: NextApiRequest, res: NextApiResponse){

    try {

        if(!req.method || !allowMethods.includes(req.method) || req.method === `OPTIONS`){
            return res.status(405).send({ message: `Method not allowed.` });
        }


        return res.status(200).send({ message: `success`});
    } catch (error: any) {
        return res.status(400).json(error.message);
    }

}
