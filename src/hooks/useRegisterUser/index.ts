import { useMutation } from 'react-query';
import axios from 'axios';


interface RegisterProps {
    email: string
	password: string, 
	name:string, 
	bith_date: string, 
	type: string
}


const fetchRegisterUser = async (body: RegisterProps) => {
    const response = await axios.post('/api/users/register', body, {
        headers: { 'Content-Type': 'application/json' },
    });

    if(!response) throw new Error('Error send login data');
    return response.data
}




export const useRegisterUser = () => {
    return useMutation(fetchRegisterUser)
}

