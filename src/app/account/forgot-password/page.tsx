"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/lib/api";
import { Loader } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import AuthPageLogo from "@/components/layouts/AuthPageLogo";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();

    const emailRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = React.useState<string>("");

    const [loader, setLoader] = React.useState<boolean>(false);

    React.useEffect(() => {
        emailRef.current?.focus();
    }, []);

    React.useEffect(() => {
        if (Cookies.get("__token")) {
            router.replace("/");
        }
    }, [router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true);
        try {
            await axios.post(
                "/accounts/forgot-password/",
                JSON.stringify({
                    email: user,
                })
            );
            toast.success("Password reset token has been sent to your email.");
            router.push("/account/reset-password");
        } catch (err: any) {
            console.log(err);
            if (err.response) {
                if (err.response.data.non_field_errors)
                    toast.error(err.response.data.non_field_errors[0]);
                else if (err.response.data.email)
                    toast.error(err.response.data.email[0]);
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
                <AuthPageLogo />
                <div className="text-center mb-4 text-2xl font-semibold">
                    Forgot Password
                </div>
                <div className="text-sm mb-2">
                    <span>
                        Enter your email below to get a token to reset your
                        password.
                    </span>
                </div>
                <form className="w-full md:max-w-sm" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        required={true}
                        id="email"
                        className="mb-2"
                        name="email"
                        placeholder="Email address here"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                    />
                    <Button type="submit" className="w-full" disabled={loader}>
                        {loader ? (
                            <Loader className="animate-spin" />
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;
