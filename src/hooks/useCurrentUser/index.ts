import { useQuery } from "react-query";
import axios from 'axios'


const fetchCurrentUser = async (token: any) => {
    const response = await axios.get('/api/users/me', { headers: { authorization: token }});

    if(!response) throw new Error('Error in get currentUser');
    return response.data.user;
}


export const useCurrentUser = (token: any) => {
    return useQuery(['currentUser'], () => fetchCurrentUser(token))
}