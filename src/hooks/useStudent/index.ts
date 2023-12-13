import { useQuery } from 'react-query';
import axios from 'axios';


const featStudent = async (token: any) => {
    const response = await axios.get('/api/student', { headers: { authorization: token }})
    
    if(!response) throw new Error('Error in get Student Information');
    console.log(response.data.student);
    return response.data.student
}

export const useStudent = (token: any) => {
    return useQuery(['student'], () => featStudent(token));
}