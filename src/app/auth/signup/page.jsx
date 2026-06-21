"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker");
   
    const router = useRouter();
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get("redirect") || '/';

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);
    

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            const { data, error: authError } = await signUp.email({
                email,
                password,
                name,
                role,
                
            });

            if (authError) {
                setError(authError.message || "Something went wrong during signup.");
            } else {
                setSuccess("Account created successfully! Welcome.");

                setName("");
                setEmail("");
                setPassword("");
                router.push(redirectTo)
            }
        } catch (err) {
            setError("An unexpected network error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-4
            bg-linear-to-br from-black via-[#050816] to-[#0b1220]"
        >
            {/* Hero-style glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%)]" />

            {/* Content wrapper */}
            <div className="relative z-10 w-full max-w-md">

                <Card className="w-full p-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl">

                    {/* Header */}
                    <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-white/10 mb-6 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight text-white">
                            Create an account
                        </h1>
                        <p className="text-sm text-white/60">
                            Fill in the fields below to get started
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="flex flex-col gap-5">

                        {/* Name */}
                        <TextField isRequired className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium text-white/70">Name</Label>

                            <InputGroup className="flex items-center gap-2 border border-white/10 rounded-xl px-3 bg-white/5 focus-within:border-cyan-400 transition">
                                <Person className="text-white/50" size={16} />

                                <Input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent py-2 text-sm outline-none text-white placeholder:text-white/40"
                                />
                            </InputGroup>
                        </TextField>

                        {/* Email */}
                        <TextField isRequired className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium text-white/70">Email</Label>

                            <InputGroup className="flex items-center gap-2 border border-white/10 rounded-xl px-3 bg-white/5 focus-within:border-cyan-400 transition">
                                <At className="text-white/50" size={16} />

                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent py-2 text-sm outline-none text-white placeholder:text-white/40"
                                />
                            </InputGroup>
                        </TextField>

                        {/* Password */}
                        <TextField isRequired className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium text-white/70">Password</Label>

                            <InputGroup className="flex items-center gap-2 border border-white/10 rounded-xl px-3 bg-white/5 focus-within:border-cyan-400 transition">
                                <ShieldKeyhole className="text-white/50" size={16} />

                                <Input
                                    type={isVisible ? "text" : "password"}
                                    placeholder="Choose a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent py-2 text-sm outline-none text-white placeholder:text-white/40"
                                />

                                <button
                                    type="button"
                                    onClick={toggleVisibility}
                                    className="text-white/50 hover:text-white transition"
                                >
                                    {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                                </button>
                            </InputGroup>
                        </TextField>

                        {/* role selection */}
                        <div className="flex flex-col gap-4">
                            <Label>Your Role</Label>
                            <RadioGroup defaultValue="seeker" name="role" onChange={(value => setRole(value))} orientation="horizontal">
                                <Radio  value="seeker">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Job Seeker</Label>
                                       
                                    </Radio.Content>
                                </Radio>
                                <Radio value="recruiter">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Recruiter</Label>
                                    </Radio.Content>
                                </Radio>
                               
                            </RadioGroup>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="p-3 text-xs rounded-xl bg-red-500/10 text-red-300 border border-red-500/20">
                                {error}
                            </div>
                        )}

                        {/* Success */}
                        {success && (
                            <div className="p-3 text-xs rounded-xl bg-green-500/10 text-green-300 border border-green-500/20">
                                {success}
                            </div>
                        )}

                        {/* Submit */}
                        <Button
                            type="submit"
                            color="primary"
                            className="w-full font-semibold rounded-xl h-12"
                            isLoading={isLoading}
                            isDisabled={isLoading}
                        >
                            Sign Up
                        </Button>

                        {/* Footer */}
                        <div className="text-center pt-4 border-t border-white/10 text-sm text-white/60">
                            Already have an account?{" "}
                            <Link
                                href={`/auth/signin?redirect=${redirectTo}`}
                                className="text-cyan-400 font-medium"
                            >
                                Sign in
                            </Link>
                        </div>

                    </form>
                </Card>
            </div>
        </div>
    );
}