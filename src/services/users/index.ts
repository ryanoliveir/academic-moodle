import { sign ,  verify } from 'jsonwebtoken';
import { student, user , user_type } from '@prisma/client';
import { hash, compare } from 'bcryptjs';
import prisma from '@libs/prisma';
const SECRET = process.env.JWT_SECRET as string;



interface LoginProps {
    email: string,
    password: string,
}

interface RegisterProps {
    email: string,
    password: string,
    name: string, 
    bith_date: string,
    type: user_type
}


export const createToken = async(user: user) => {
    return sign({ id: user.id, email: user.email, userType: user.type}, SECRET);
}


const readToken = (token: any) => {
    try{
        return verify(token, SECRET);
    } catch (error) {
        throw new Error(`Invalid Token.`);
    }

}


export const verifyToken =  async (token: any) => {
    return readToken(token);
}




export const register = async (body: RegisterProps) => {
    const { email, password, name, bith_date, type = 'aluno' } = body;
    console.log(body);


    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });


    if(user) throw new Error('User already exists');

    const encryptedPassword =  await hash(password, 10);


    const userCreated = await prisma.user.create({
        data: {
            email: email.toLowerCase(),
            password: encryptedPassword,
            type: type     

        }
    }) as user;


    const studentCreated = await prisma.student.create({
        data: {
            name: name,
            birthDate: new Date(bith_date),
            user: {
                connect: {
                    id: userCreated.id
                }
            }
        }
    }) as student;

    const accessToken = await createToken(userCreated);

    return accessToken;

}

export const signIn = async (body: LoginProps) => {
    const { email, password } = body;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    }) as user ;


    if(!user || !(await compare(password, user.password as string))) throw new Error('Invalid crenditals');

    const accessToken = await createToken(user);

    return {
        accessToken: accessToken,
        user : {
            id: user.id,
            email: user.email,
            type: user.type
        }
    }

}
