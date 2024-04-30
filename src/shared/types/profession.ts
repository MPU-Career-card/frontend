export interface MapPointer {
  id: number
  title: string
  description: string
  salary: string
  profession: number
}

export interface Skill {
  id: number
  name: string
  description: string
  svg: string
  profession: number
}

export interface StudyProgram {
  id: number
  faculty_name: string
  speciality_name: string
  link: string
  profession: number
}

export interface Partner {
  id: number
  name: string
  link: string
  image_link: string
  profession: number
}

export interface UsefulLink {
  id: number
  name: string
  description: string
  link: string
  profession: number
}

export interface Tag {
  id: number
  name: string
  profession: number
}

export interface Task {
  id: number
  title: string
  text: string
  profession: number
}

export interface Profession {
  bachelors: StudyProgram[]
  hh_vacancies: string[]
  id: number
  map_pointers: MapPointer[]
  masters: StudyProgram[]
  further_educations: StudyProgram[]
  partners: Partner[]
  skills: Skill[]
  title: string
  useful_links: UsefulLink[]
  image_link: string
  description: string
  faculty: string
  tags: Tag[]
  tasks: Task[]
}
