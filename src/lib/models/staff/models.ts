import { User } from "../accounts/models";
import { Patient } from "../patient/models";

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

export interface Availability {
    id: string;
    medical_professional: string;
    start_time: string;
    end_time: string;
    is_booked: boolean;
}

export interface DoctorPatientTableModel {
    patient: Patient;
    medical_professional: MedicalProfessional;
    full_name: string;
    gender: string;
    email: string;
}
