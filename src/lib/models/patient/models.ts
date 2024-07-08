import { User } from "../accounts/models";
import { Appointment } from "../shared/models";
import { MedicalProfessional } from "../staff/models";

export interface Patient {
    id: string;
    user: User;
    allergies: string;
    blood_group: string;
    genotype: string;
    smoking_status: string;
    alcohol_consumption: string;
    height?: number;
    weight?: number;
    bmi?: number;
    emergency_contact: string;
    preferred_pharmacy: string;
    preferred_language: string;
    medical_history: MedicalHistory[];
}

export interface MedicalHistory {
    id: string;
    patient: Patient;
    medical_conditions: string;
    allergies: string;
    medications: string;
    immunization_history: string;
    family_medical_history: string;
    created_at: string;
}

export interface VisitHistory {
    id: string;
    appointment: Appointment;
    patient: Patient;
    medical_professional: MedicalProfessional;
    visit_date: string;
    reason_for_visit: string;
    treatments_received: string;
    physician_notes: string;
}

export interface VisitHistoryTableModel {
    id: string;
    doctor: string;
    visit_date: string;
}
