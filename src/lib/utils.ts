import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY!;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Encode the token
export function encodeToken(token: string): string {
    return jwt.sign({ token }, secretKey);
}

// Decode the token
export function decodeToken(encodedToken: string): string | null {
    try {
        const decodedToken: JwtPayload | string = jwt.verify(
            encodedToken,
            secretKey
        );
        return typeof decodedToken === "string"
            ? decodedToken
            : decodedToken.token;
    } catch (error) {
        // Token verification failed
        return null;
    }
}
