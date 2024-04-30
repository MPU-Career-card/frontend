import axios from 'axios';
import { PROFESSIONS_API_URL } from '../../config';

export const professionsApi = axios.create({
    baseURL: PROFESSIONS_API_URL,
});
