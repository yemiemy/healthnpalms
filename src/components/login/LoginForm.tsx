import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/lib/api";
import { Loader } from "lucide-react";
import { encodeToken } from "@/lib/utils";
import Cookies from "js-cookie";
import { toast } from "sonner";
import Link from "next/link";

type Props = {
    emailRef: any;
    user: string;
    setUser: any;
    pwd: string;
    setPwd: any;
    loader: boolean;
    setLoader: any;
    router: any;
};

const LoginForm = ({
    emailRef,
    user,
    setUser,
    pwd,
    setPwd,
    loader,
    setLoader,
    router,
}: Props) => {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true);
        try {
            const response = await axios.post(
                "/accounts/login/",
                JSON.stringify({
                    username: user,
                    password: pwd,
                }),
                {
                    headers: {},
                }
            );
            const data = await response.data;
            const encodedToken = encodeToken(data.token);
            Cookies.set("__token", encodedToken, {
                expires: 1,
            });
            toast.success("Welcome back!");
            router.push("/");
        } catch (err: any) {
            console.log(err);
            if (err.response) {
                toast.error(err.response.data.non_field_errors[0]);
            } else {
                toast.error(err.message);
            }
        } finally {
            setLoader(false);
        }
    };
    return (
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
                {loader ? <Loader className="animate-spin" /> : "Submit"}
            </Button>
            <div className="flex justify-end text-sm">
                <Link
                    href="/account/forget-password"
                    className="hover:underline text-primary"
                    replace>
                    Forgot your password?
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
