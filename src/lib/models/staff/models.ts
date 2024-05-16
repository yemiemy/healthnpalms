import { User } from "../accounts/models";

export interface MedicalProfessional {
    id: string;
    user: User;
    medical_license_number: string;
    specialization: string;
    education_and_qualifications: string;
    work_history: string;
    certifications: string;
    department: string;
}
