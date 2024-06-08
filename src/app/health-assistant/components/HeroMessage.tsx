import React from "react";

type Props = {};

const HeroMessage = (props: Props) => {
    return (
        <div className="bg-background flex flex-col gap-2 rounded-lg border p-8 md:max-w-4xl 2xl:max-w-7xl mx-auto">
            <h1 className="text-lg font-semibold">
                Welcome to Your Healthcare AI Assistant
            </h1>
            <p className="text-muted-foreground leading-normal">
                Get insights and preliminary diagnoses based on your symptoms.
                Remember, our AI is here to assist, not replace professional
                medical advice. Always consult a healthcare provider for
                accurate diagnosis and treatment.
            </p>
            <p className="text-muted-foreground leading-normal">
                Start chatting now for better health!
            </p>
        </div>
    );
};

export default HeroMessage;
