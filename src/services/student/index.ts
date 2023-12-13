import { sign ,  verify } from 'jsonwebtoken';
import { student, user , user_type } from '@prisma/client';
import { hash, compare } from 'bcryptjs';
import prisma from '@libs/prisma';
import { headers } from 'next/headers';
import { JwtPayload } from 'jsonwebtoken';
import { currentUser } from '../users';
const SECRET = process.env.JWT_SECRET as string;



export const getStudent = async (headers: any) => {

    const { authorization } = headers;

    if(!authorization) throw new Error(`Auth Error`);

    const user = await currentUser(headers);
    const { id } = user as JwtPayload;

    const currentUserProfile = await prisma.user.findUnique({
        where: {
            id: parseInt(id as string, 10),
        },
        select: {
            email: true,
            type: true,
            student: {
                select: {
                    id: true,
                    name: true,
                    birthDate: true,   
                }
            }

        }

    })

    return currentUserProfile;

}