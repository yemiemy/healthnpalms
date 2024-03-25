import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Generate a random pastel color
function getRandomPastelColor(): string {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 80%, 80%)`; // Adjust saturation and lightness for pastel effect
    return pastel;
}

const getInitials = (text: string) => {
    let words = text.split(" ");
    let res = "";
    if (words.length > 1) {
        res += words[0].charAt(0) + words[1].charAt(0);
    } else if (words.length > 0) {
        res += words[0].charAt(0);
    }
    return res.toUpperCase();
};

export function generateInitialsImage(text: string) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const size = 200;
    const initials = getInitials(text);

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Generate random background color
    const color = getRandomPastelColor();
    if (context) {
        // Draw background
        context.fillStyle = color;
        context.fillRect(0, 0, size, size);

        // Draw text
        context.fillStyle = "#000000";
        context.font = `${size / 2}px Verdana`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(initials, size / 2, size / 2);
    }
    // Convert canvas to image
    return canvas.toDataURL("image/png");
}
