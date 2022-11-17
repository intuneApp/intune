export interface ICandidate  {
    id: string;
    name: string;
    email: string;
    phone: string;
    desiredLocation: string[];
    desiredRoles: string[];
    desiredWorkType: string;
    desiredStartDate: string;
    accept_unpaid: boolean;
    accept_remote: boolean;
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
    startDate: Date;
    endDate: Date;
    description: string;
    candidateID: string;
    role: string;
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




