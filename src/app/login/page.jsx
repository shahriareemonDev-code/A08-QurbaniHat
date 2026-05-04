"use client";

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

export default function Basic() {
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
        email: data.email,
        password: data.password,
        callbackURL: '/'
      });

      toast.success("Login successful ");

    } catch (error) {
      
      toast.error(error?.message || "Login failed ");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <h1 className="font-semibold text-4xl text-center mt-10 text-green-500 ">Register <span className="text-orange-500">Now</span></h1>
        <div className="flex justify-center p-20">
        
      <Form
        className="flex w-100 card p-10 flex-col shadow-2xl gap-4"
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
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex justify-center gap-2">
          <Button type="submit" disabled={loading}>
            <Check />
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </Form>
     </div>
    </div>
  );
}