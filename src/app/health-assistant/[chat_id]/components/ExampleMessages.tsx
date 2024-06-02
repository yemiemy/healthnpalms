import React from "react";

type Props = {
    chatSubmit: React.RefObject<HTMLButtonElement>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
};

const exampleMessages = [
    {
        heading: "Feeling Unwell",
        message:
            "I have a sore throat and a runny nose. What could be causing this?",
    },
    {
        heading: "Persistent Pain",
        message:
            "I've had a headache for three days and feel nauseous. What should I do?",
    },
    {
        heading: "Managing Chronic Conditions",
        message:
            "I have high blood pressure and feel dizzy lately. Should I be concerned?",
    },
    {
        heading: "General Health Advice",
        message: "What can I do to boost my immune system?",
    },
];

const ExampleMessages = ({ chatSubmit, setInput }: Props) => {
    return (
        <div className="flex-1 mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
            {exampleMessages.map((example, index) => (
                <div
                    key={example.heading}
                    className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                        index > 1 && "hidden md:block"
                    }`}
                    onClick={async () => {
                        const submitBtn = chatSubmit.current;

                        if (submitBtn) {
                            setInput(example.message);
                            setTimeout(() => {
                                submitBtn.click();
                            }, 0);
                        }
                    }}>
                    <div className="text-sm font-semibold">
                        {example.heading}
                    </div>
                    <div className="text-sm text-zinc-600">
                        {example.message}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExampleMessages;
