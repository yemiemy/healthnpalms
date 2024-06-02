import React from "react";

type Props = {
    input: string;
    handleInputChange: any;
    handleSubmit: any;
    chatSubmit: any;
};

const ChatForm = ({
    input,
    handleInputChange,
    handleSubmit,
    chatSubmit,
}: Props) => {
    return (
        <div className="flex-none bg-background space-y-4 border-t px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-background relative flex max-h-60 w-full grow flex-col overflow-hidden pr-8 sm:rounded-md sm:border sm:pr-12">
                    <textarea
                        tabIndex={0}
                        placeholder="Type your question here..."
                        value={input}
                        onChange={handleInputChange}
                        className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                        spellCheck="false"
                        autoComplete="off"
                        autoCorrect="off"
                        name="message"
                        rows={1}
                        style={{
                            height: "62px !important",
                        }}></textarea>
                    <div className="absolute right-0 top-[13px] sm:right-4">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9"
                            type="submit"
                            disabled={input.length === 0}
                            data-state="closed"
                            ref={chatSubmit}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                fill="currentColor"
                                className="size-4">
                                <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </div>
            </form>
            <p className="text-muted-foreground px-2 text-center text-xs leading-normal hidden sm:block">
                AI may make mistakes. Please verify information and consult your
                healthcare provider.
            </p>
        </div>
    );
};

export default ChatForm;
