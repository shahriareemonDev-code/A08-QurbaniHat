"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      await authClient.signIn.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photoUrl,
      });

      toast.success("Registration successful ");

      router.push("/");
    } catch (error) {
      toast.error(error?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/"
      });
    } catch (error) {
      toast.error(error?.message || "Google Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-green-500">
          Create an <span className="text-orange-500">Account</span>
        </h1>

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email </Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField name="photoUrl" type="url">
          <Label>Photo URL</Label>
          <Input placeholder="https://example.com/photo.jpg" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password" minLength={8}>
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            At least 8 characters, include uppercase & number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex justify-center">
          <Button type="submit" disabled={loading}>
            <Check />
            {loading ? "Registering..." : "Register"}
          </Button>
        </div>

        <p className="text-center text-gray-500">OR</p>

        <div className="flex justify-center">
          <Button
            type="button"
            onClick={handleGoogleRegister}
            className="gap-2 border border-gray-300 hover:bg-gray-100"
          >
            <Image src="/google.png" alt="google" width={20} height={20} />
            Continue with Google
          </Button>
        </div>
      </Form>
    </div>
  );
}
