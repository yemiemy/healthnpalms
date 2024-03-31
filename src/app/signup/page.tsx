"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "@/lib/api";
import { InfoIcon, Loader } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const EMAIL_REGEX =
    /^[a-zA-Z][a-zA-Z0-9-_.]{1,23}@[a-zA-z]{1,23}\.[a-zA-z]{2,23}$/;
const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.\\^&*()-_+=/`~]).{8,}$/;

const Page = () => {
    const router = useRouter();

    const [email, setEmail] = React.useState<string>("");
    const [validEmail, setValidEmail] = React.useState<boolean>(false);
    const [emailFocus, setEmailFocus] = React.useState<boolean>(false);
    const [pwd, setPwd] = React.useState<string>("");
    const [validPwd, setValidPwd] = React.useState<boolean>(false);
    const [pwdFocus, setPwdFocus] = React.useState<boolean>(false);

    const [matchPwd, setMatchPwd] = React.useState<string>("");
    const [validMatch, setValidMatch] = React.useState<boolean>(false);
    const [matchFocus, setMatchFocus] = React.useState<boolean>(false);

    const [loader, setLoader] = React.useState<boolean>(false);

    React.useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    React.useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    React.useEffect(() => {
        if (Cookies.get("__token")) {
            router.replace("/");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);

        const registerForm: HTMLFormElement | any = e.target;
        const registerFormData = new FormData(registerForm);

        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            toast.error("Invalid entry for email or password");
            setLoader(false);
            return;
        }

        try {
            await axios.post("/accounts/register/", registerFormData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Account created successfully!");

            router.push(`/account/verify?email=${email}`);
        } catch (err: any) {
            console.log(err);
            if (!err.response) {
                toast.error(err.message);
            }
            if (err.response.data) {
                const emailErr = err.response.data?.email;
                const passwordErr = err.response.data?.password;
                const non_field_errors = err.response.data?.non_field_errors;
                if (emailErr) {
                    setValidEmail(false);
                    setEmailFocus(true);
                    toast.error(emailErr[0]);
                }
                if (passwordErr) {
                    setValidPwd(false);
                    setPwdFocus(false);
                    toast.error(passwordErr[0]);
                }
                if (non_field_errors) {
                    toast.error(non_field_errors[0]);
                }
            }
        } finally {
            setLoader(false);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-full max-w-screen-xl p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
                <div className="text-center mb-4 text-2xl font-semibold">
                    Get Started!
                </div>
                <div className="text-sm mb-1">
                    <span>Already have an account? </span>
                    <Link
                        href="/login"
                        className="hover:underline text-primary"
                        replace>
                        Sign In
                    </Link>
                </div>
                <form className="w-full md:max-w-sm" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        required={true}
                        id="first_name"
                        className="mb-2"
                        name="first_name"
                        placeholder="First name"
                    />
                    <Input
                        type="text"
                        required={true}
                        id="last_name"
                        className="mb-2"
                        name="last_name"
                        placeholder="Last name"
                    />
                    <Input
                        type="email"
                        required={true}
                        id="email"
                        className={cn("mb-2", {
                            "focus-visible:ring-red-600":
                                !validEmail && email.length > 0,
                        })}
                        name="email"
                        placeholder="Email address here"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p
                        id="uidnote"
                        className={
                            emailFocus && email && !validEmail
                                ? "relative text-xs items-center flex gap-2 bg-green-100 p-2 rounded-md mb-2"
                                : "hidden"
                        }>
                        <span>
                            <InfoIcon width={12} height={12} />
                        </span>
                        <span>
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.{" "}
                            <br />
                            Must have a format similar to
                            &ldquo;youremail@domain.com&rdquo;.
                        </span>
                    </p>
                    <Input
                        type="password"
                        required={true}
                        id="password"
                        className={cn("mb-2", {
                            "focus-visible:ring-red-600":
                                !validPwd && pwd.length > 0,
                        })}
                        name="password"
                        placeholder="**************"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p
                        id="pwdnote"
                        className={
                            pwdFocus && !validPwd
                                ? "relative text-xs items-center flex gap-2 bg-green-100 p-2 rounded-md mb-2"
                                : "hidden"
                        }>
                        <span>
                            <InfoIcon width={12} height={12} />
                        </span>
                        <span>
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a
                            number and a special character.
                        </span>
                    </p>
                    <Input
                        type="password"
                        required={true}
                        id="confirm_password"
                        className={cn("mb-2", {
                            "focus-visible:ring-red-600":
                                !validMatch && matchPwd.length > 0,
                        })}
                        name="confirm_password"
                        placeholder="**************"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p
                        id="confirmnote"
                        className={
                            matchFocus && !validMatch
                                ? "relative text-xs items-center flex gap-2 bg-green-100 p-2 rounded-md mb-2"
                                : "hidden"
                        }>
                        <span>
                            <InfoIcon width={12} height={12} />
                        </span>
                        <span>Must match the first password field.</span>
                    </p>
                    <Button
                        type="submit"
                        className="w-full text-white"
                        disabled={
                            !validEmail || !validPwd || !validMatch || loader
                                ? true
                                : false
                        }>
                        {loader ? (
                            <Loader className="animate-spin" />
                        ) : (
                            "Sign Up"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;
