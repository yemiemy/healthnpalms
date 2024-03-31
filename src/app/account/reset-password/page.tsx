"use client";
import { Button } from "@/components/ui/button";
import axios from "@/lib/api";
import { InfoIcon, Loader } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {};

const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.\\^&*()-_+=/`~]).{8,}$/;

const Page = (props: Props) => {
    const router = useRouter();

    const [reset_token, setOTP] = React.useState<string>("");
    const [new_password, setNewPWD] = React.useState<string>("");
    const [validPwd, setValidPwd] = React.useState<boolean>(false);
    const [pwdFocus, setPwdFocus] = React.useState<boolean>(false);
    const [loader, setLoader] = React.useState<boolean>(false);
    const otpRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        otpRef.current?.focus();
    }, []);

    React.useEffect(() => {
        const result = PWD_REGEX.test(new_password);
        setValidPwd(result);
    }, [new_password]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);

        const v2 = PWD_REGEX.test(new_password);
        if (!v2 || reset_token.length !== 6) {
            toast.error("Invalid entry for token or password");
            setLoader(false);
            return;
        }

        try {
            await axios.post(
                "/accounts/reset-password/",
                JSON.stringify({
                    reset_token,
                    new_password,
                })
            );
            toast.success("Password reset successful!");

            router.push("/login");
        } catch (err: any) {
            console.log(err);
            if (!err.response) {
                toast.error(err.message);
            }
            if (err.response.data) {
                const reset_tokenErr = err.response.data?.reset_token;
                const new_passwordErr = err.response.data?.new_password;
                if (reset_tokenErr) {
                    toast.error(reset_tokenErr[0]);
                }
                if (new_passwordErr) {
                    toast.error(new_passwordErr[0]);
                }
            }
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-full max-w-screen-xl p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
                <div className="text-center text-2xl font-semibold">
                    Reset Your Password
                </div>
                <div className="text-center text-sm mb-8">
                    <span>
                        Enter the 6-digit code sent to your email and your new
                        password.
                    </span>
                </div>
                <form className="w-full md:max-w-sm" onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <InputOTP
                            maxLength={6}
                            value={reset_token}
                            onChange={(value) => setOTP(value)}
                            ref={otpRef}
                            pattern={REGEXP_ONLY_DIGITS}
                            required>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <div className="flex flex-col items-center">
                        <Input
                            type="password"
                            required={true}
                            id="password"
                            className={cn("mt-2 w-full sm:w-[73%]", {
                                "focus-visible:ring-red-600":
                                    !validPwd && new_password.length > 0,
                            })}
                            name="password"
                            placeholder="**************"
                            onChange={(e) => setNewPWD(e.target.value)}
                            value={new_password}
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p
                            id="pwdnote"
                            className={
                                pwdFocus && !validPwd
                                    ? "relative text-xs w-full sm:w-[73%] items-center flex gap-2 bg-green-100 p-2 rounded-md mb-2"
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
                    </div>

                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="w-full sm:w-[73%] text-white mt-2"
                            disabled={loader || !validPwd}>
                            {loader ? (
                                <Loader className="animate-spin" />
                            ) : (
                                "Reset Password"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
