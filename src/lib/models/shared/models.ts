import { Patient } from "../patient/models";
import { MedicalProfessional } from "../staff/models";

export interface Appointment {
    id: string;
    patient: Patient;
    medical_professional: MedicalProfessional;
    note: string;
    status: string;
    start_time: string;
    end_time: string;
    created_at: string;
}

export interface AppointmentTableModel {
    id: string;
    medical_professional_id: string;
    doctor: string;
    note?: string;
    status: string;
    start_time: string;
    end_time: string;
    created_at: string;
}

export interface DoctorAppointmentTableModel {
    id: string;
    medical_professional_id: string;
    patient: string;
    note?: string;
    status: string;
    start_time: string;
    end_time: string;
    created_at: string;
}
