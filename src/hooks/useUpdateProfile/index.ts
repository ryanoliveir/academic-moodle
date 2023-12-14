import { useMutation } from "react-query";
import axios from "axios";


interface UpdateProps {
    name: string
    birthDate: Date
    token: string
}


const fetchUpdate = async (body: UpdateProps) => {
    const { token, ...data } = body;
    
    const response = await axios.put('/api/student', data, {
        headers: { 
            'Content-Type': 'application/json',
            authorization: token
        },
    })


    if(!response) throw new Error('Error update information for student');
    return response.data;
}


export const useUpdateProfile = () => {
    return useMutation(fetchUpdate);
    
}


