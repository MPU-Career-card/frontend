import axios from 'axios';

import { FACULTIES_API_URL, SEARCH_FACULTIES_API_URL } from '../../config';
import { Profession, Speciality } from '../../types';

export const facultiesApi = axios.create({
    baseURL: FACULTIES_API_URL,
});

type GetFacultyReturn = {
    professions: Profession[];
    specialities: Speciality[];
};

type SearchReturn = Record<string, GetFacultyReturn>;

export const getFaculty = (
    faculty: string,
) => facultiesApi.get<GetFacultyReturn>(faculty);

export const searchFacultiesApi = axios.create({
    baseURL: SEARCH_FACULTIES_API_URL,
});

export const searchSpecialities = (search: string) => searchFacultiesApi.get<SearchReturn>(search);
