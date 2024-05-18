import axios from 'axios';
import { FACULTIES_API_URL } from '../../config';
import { Profession } from '../../types';

export const facultiesApi = axios.create({
    baseURL: FACULTIES_API_URL,
});

export const getFaculty = (
    faculty: string,
) => facultiesApi.get<{ professions: Profession[] }>(faculty);
