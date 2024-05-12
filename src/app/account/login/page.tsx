"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/lib/api";
import { Loader } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();
    const nextUrl = useSearchParams().get("next");

    const emailRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = React.useState<string>("");
    const [pwd, setPwd] = React.useState<string>("");

    const [loader, setLoader] = React.useState<boolean>(false);

    React.useEffect(() => {
        emailRef.current?.focus();
    }, []);

    React.useEffect(() => {
        if (Cookies.get("__token")) {
            if (Cookies.get("is_staff") === "true") {
                router.replace("/staff/");
            } else {
                router.replace("/");
            }
        }
    }, [router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true);
        try {
            const response = await axios.post(
                "/accounts/token/",
                JSON.stringify({
                    email: user,
                    password: pwd,
                })
            );
            const data = await response.data;

            const res = await axios.get("/accounts/details/", {
                headers: {
                    Authorization: `Token ${data.access}`,
                },
            });

            const user_data = await res.data;
            Cookies.set("__token", data.access, {
                expires: 1,
            });
            Cookies.set("is_staff", user_data.is_staff, {
                expires: 1,
            });
            toast.success("Welcome back!");

            // Redirect user back to the original URL if available
            if (nextUrl) {
                router.push(nextUrl);
            } else {
                router.push("/");
            }
        } catch (err: any) {
            console.log(err);
            if (err.response) {
                if (err.response.data.non_field_errors)
                    toast.error(err.response.data.non_field_errors[0]);
                else if (err.response.data.detail)
                    toast.error(err.response.data.detail);
            } else {
                toast.error(err.message);
            }
        } finally {
            setLoader(false);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-full max-w-screen-xl p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
                <div className="text-center mb-4 text-2xl font-semibold">
                    Welcome Back!
                </div>
                <div className="text-sm mb-1">
                    <span>Don&apos;t have an account? </span>
                    <Link
                        href="/account/signup"
                        className="hover:underline text-primary"
                        replace>
                        Create Account
                    </Link>
                </div>
                <form className="w-full md:max-w-sm" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        required={true}
                        id="username"
                        className="mb-2"
                        name="username"
                        placeholder="Email address here"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                    />
                    <Input
                        type="password"
                        required={true}
                        id="password"
                        className="mb-2"
                        name="password"
                        placeholder="**************"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                    />
                    <Button type="submit" className="w-full" disabled={loader}>
                        {loader ? (
                            <Loader className="animate-spin" />
                        ) : (
                            "Submit"
                        )}
                    </Button>
                    <div className="flex justify-end text-sm">
                        <Link
                            href="/account/forgot-password"
                            className="hover:underline text-primary"
                            replace>
                            Forgot your password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
