"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
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

export default function Basic() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    console.log("google btn clicked");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
      });
    } catch (error) {
      toast.error(error?.message || "Google Login failed");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: '/'
      });

      if (error) {
         toast.error(error.message || "Login failed");
      } else {
         toast.success("Login successful");
      }

    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-4xl text-center mt-10 text-green-500 ">
        Login <span className="text-orange-500">Now</span>
      </h1>
      <div className="flex justify-center p-20">
        <Form
          className="flex w-full max-w-md card p-10 flex-col shadow-2xl gap-4 bg-white rounded-xl"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters
            </Description>
            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2 mt-4">
            <Button type="submit" disabled={loading} className="w-full bg-green-500 text-white">
              {loading ? "Loading..." : (
                <>
                  <Check /> Login
                </>
              )}
            </Button>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <Button
              type="button"
              onClick={handleGoogleLogin} 
              className="gap-2 border border-gray-300 hover:bg-gray-100 w-full"
            >
              <Image src="/google.png" alt="google" width={20} height={20} />
              Continue with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}