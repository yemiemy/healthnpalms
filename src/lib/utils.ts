import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const PROMPT_TEMPLATE = `

==============================
Current conversation: {chat_history}

user: {question}
assistant:
`;