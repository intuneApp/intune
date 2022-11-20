export interface ICandidate  {
    id: string;
    first_name: string;
    middle_initial?: string;
    last_name: string;
    email: string;
    phone: string;
    desired_location: string[];
    desired_roles: string[];
    desired_work_type: string;
    desired_start_date: string;
    accept_unpaid: boolean;
    accept_parttime: boolean;
    parttime_hours: number;
    clubExperienceIDs: string[];
    workExperienceIDs: string[];
    researchExperienceIDs: string[];
    HonorsIDs: string[];
    skills: string[];
    caseDemoIDs: string[];
    self_intro: string;
    resume: string;
    educationIDs: string[];

}


export interface IClubExperience {
    id: string;
    club_name: string;
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;
    candidateID: string;
}

export interface IWorkExperience {
    id: string;
    company_name: string;
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;
    candidateID: string;

}

export interface IResearchExperience {
    id: string;
    lab_name: string;
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;

    candidateID: string;
}

export interface IHonors {
    id: string;
    honor_name: string;
    description: string;
    candidateID: string;
    time: Date;
}

export interface IEducation {
    id: string;
    school_name: string;
    degree: string;
    major: string[];
    minor: string[];
    gpa: number;
    candidateID: string;
    startDate: Date;
    endDate: Date;
    courses: string[];

}

export interface ICaseDemo {
    id: string;
    title: string;
    description: string;
    candidateID: string;
    link: string;
}



//list of all college majors
export const MAJORS = [
    "Accounting",
    "Actuarial Science",
    "Aerospace Engineering",
    "African American Studies",
    "American Studies",
    "Animal Science",
    "Anthropology",
    "Applied Mathematics",
    "Applied Physics",
    "Architecture",
    "Art",
    "Art History",
    "Asian Studies",
    "Astronomy",
    "Atmospheric Science",
    "Biochemistry",
    "Bioengineering",
    "Biology",
    "Biomedical Engineering",
    "Biophysics",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Chinese",
    "Civil Engineering",
    "Classics",
    "Clinical Psychology",
    "Cognitive Science",
    "Communication",
    "Comparative Literature",
    "Computer Engineering",
    "Computer Science",
    "Creative Writing",
    "Criminal Justice",
    "Criminology",
    "Dance",
    "Data Science",
    "Design",
    "Dietetics",
    "Drama",
    "Early Childhood Education",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Engineering",
    "English",
    "Entrepreneurship",
    "Environmental Engineering",
    "Environmental Science",
    "Environmental Studies",
    "Ethnic Studies",
    "European Studies",
    "Film",
    "Finance",
    "Food Science",
    "French",
    "General Engineering",
    "General Science",
    "Geography",
    "Geology",
    "German",
    "Global Studies",
    "Graphic Design",
    "Health Science",
    "Healthcare Administration",
    "History",
    "Human Biology",
    "Human Development",
    "Human Resource Management",
    "Human Services",
    "Industrial Engineering",
    "Information Technology",
    "Information Systems",
    "Interior Design",
    "International Business",
    "International Relations",
    "Italian",
    "Japanese",
    "Jewish Studies",
    "Journalism",
    "Kinesiology",
    "Landscape Architecture",
    "Latin",
    "Latin American Studies",
    "Law",
    "Legal Studies",
    "Linguistics",
    "Management",
    "Marketing",
    "Mathematics",
    "Mechanical Engineering",
    "Media Studies",
    "Medical Technology",
    "Medicine",
    "Middle Eastern Studies",
    "Military Science",
    "Music",
    "Neuroscience",
    "Nursing",
    "Nutrition",
    "Philosophy",
    "Photography",
    "Physical Therapy",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Health",
    "Public Relations",
    "Public Safety",
    "Religious Studies",
    "Russian",
    "Social Work",
    "Sociology",
    "Spanish",
    "Special Education",
    "Speech Communication",
    "Statistics",
    "Studio Art",
    "Supply Chain Management",
    "Sustainable Business",
    "Sustainable Energy",
    "Theater",
    "Urban Planning",
    "Veterinary  Medicine",
    "Visual Arts",
    "Web Design",
    "Writing",
    "Zoology",
    "Other"
];







