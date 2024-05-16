export interface User {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    date_of_birth: string;
    phone_number: string;
    email: string;
    is_email_verified: boolean;
    is_phone_number_verified: boolean;
    is_staff: boolean;
    is_medical_professional: boolean;
}
