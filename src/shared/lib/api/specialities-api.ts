import axios from 'axios';
import { SPECIALITIES_API_URL } from '../../config';

export const specialitiesApi = axios.create({
    baseURL: SPECIALITIES_API_URL,
});
