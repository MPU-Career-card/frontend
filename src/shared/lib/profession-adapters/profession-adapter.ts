import { Profession } from '../../types';

export const professionAdapter = {
    mapPointer: (
        profession: Profession,
    ) => profession.map_pointers.map(({ title, description, salary }) => ({
        title,
        description,
        salary,
    })),
    tasks: (
        profession: Profession,
    ) => profession.tasks.map(({ title, text }) => ({
        title,
        description: text,
    })),
    skills: (
        profession: Profession,
    ) => profession.skills.map(({ name, description, svg }) => ({
        title: name,
        image: svg,
        description,
    })),
    bachelors: (
        profession: Profession,
    ) => profession.bachelors.map(({ link, faculty_name, speciality_name }) => ({
        link,
        faculty: faculty_name,
        speciality: speciality_name,
    })),
    masters: (
        profession: Profession,
    ) => profession.masters.map(({ link, faculty_name, speciality_name }) => ({
        link,
        faculty: faculty_name,
        speciality: speciality_name,
    })),
    dpo: (
        profession: Profession,
    ) => profession.further_educations.map(({ link, faculty_name, speciality_name }) => ({
        link,
        faculty: faculty_name,
        speciality: speciality_name,
    })),
    partners: (
        profession: Profession,
    ) => profession.partners.slice(0, 3).map(({ link, image_link }) => ({
        to: link,
        image: image_link,
    })),
    links: (
        profession: Profession,
    ) => profession.useful_links.map(({ name, description, link }) => ({
        to: link,
        title: name,
        description,
    })),
};
