export interface User {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    date_of_birth: string;
    phone_number: string;
    address_1: string;
    address_2: string;
    state: string;
    country: string;
    email: string;
    is_email_verified: boolean;
    is_phone_number_verified: boolean;
    is_staff: boolean;
    is_medical_professional: boolean;
}
