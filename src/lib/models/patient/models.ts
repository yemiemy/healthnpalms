import { MedicalProfessional } from "../staff/models";

export interface Patient {
    id: string;
    full_name: string;
    gender: "M" | "F";
    email: string;
    date_of_birth: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
}

export interface MedicalHistory {
    id: string;
    patient: Patient;
    medical_conditions: string;
    allergies: string;
    medications: string;
    immunization_history: string;
    family_medical_history: number;
}

export interface VisitHistory {
    id: string;
    patient: Patient;
    medical_professional: MedicalProfessional;
    visit_date: string;
    reason_for_visit: string;
    treatments_received: string;
    physician_notes: string;
}
