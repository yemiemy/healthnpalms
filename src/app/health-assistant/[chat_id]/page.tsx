"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Cookies from "js-cookie";
import DashboardNavBar from "@/components/layouts/DashboardNavBar";
import { User } from "@/lib/models/accounts/models";
import axios from "@/lib/api";
import { useRouter } from "next/navigation";
import PatientSideBar from "@/components/layouts/PatientSideBar";
import ChatForm from "./components/ChatForm";
import ExampleMessages from "./components/ExampleMessages";
import HeroMessage from "./components/HeroMessage";
import { User2Icon } from "lucide-react";
import ChatMessage from "./components/ChatMessage";

export const runtime = "edge";

export default function Chat() {
    const router = useRouter();
    const token = Cookies.get("__token");
    const [user, setUser] = useState<User>();

    const getUser = useCallback(async () => {
        if (!token) {
            router.push("/login?next=" + window.location.href);
        }
        try {
            const response = await axios.get("/accounts/details/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await response.data;
            setUser(data);
        } catch (err: any) {
            console.log("Error getting user:", err);
        }
    }, [token, router]);

    const { messages, input, setInput, handleInputChange, handleSubmit } =
        useChat({
            api: "/api/chat/",
            onError: (e) => {
                console.log(e);
            },
        });
    const chatParent = useRef<HTMLUListElement>(null);
    const chatSubmit = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const domNode = chatParent.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    });

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <div className="flex overflow-hidden">
            <PatientSideBar isPatientsActive isPatient />
            <main
                className="flex-1 flex flex-col w-full h-screen max-h-dvh bg-background overflow-auto"
                ref={chatParent}>
                <DashboardNavBar user={user} />
                <header className="p-4 border-b w-full md:max-w-4xl 2xl:max-w-7xl md:mx-auto">
                    <h1 className="text-2xl font-bold">
                        AI Health Assistant Chat
                    </h1>
                </header>
                {messages.length === 0 ? (
                    <section className="pt-4 px-4">
                        <HeroMessage />
                    </section>
                ) : (
                    <section className="container px-0 pt-4 pb-8 flex flex-col flex-grow gap-4 md:pb-[200px] md:mx-auto md:max-w-4xl 2xl:max-w-7xl">
                        <div className="relative px-4">
                            {messages.map((message, index) => (
                                <ChatMessage key={index} message={message} />
                            ))}
                        </div>
                    </section>
                )}

                <section className="pt-4">
                    <div className="from-muted/30 to-muted/30 animate-in dark:from-background/10 dark:to-background/80 fixed inset-x-0 bottom-0 w-full duration-300 ease-in-out peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px] dark:from-10%">
                        <div className="px-4 md:pl-44 md:pr-28 xl:pl-[302px] xl:pr-60">
                            {messages.length <= 0 && (
                                <ExampleMessages
                                    chatSubmit={chatSubmit}
                                    setInput={setInput}
                                />
                            )}

                            <ChatForm
                                input={input}
                                handleInputChange={handleInputChange}
                                handleSubmit={handleSubmit}
                                chatSubmit={chatSubmit}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
