"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const signUpEmailSchema = object({
  email: string().email().required("Email ee bichne uu!"),
  password: string().required("Password oo buglunu uu!"),
});

type SignUpEmailPasswordProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  userName: string;
};

const SignUpEmailPassword = ({ userName }: SignUpEmailPasswordProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpEmailSchema,
    onSubmit: async (values) => {
      setLoading(true);
      await signUp(userName, values.email, values.password);
      router.push("/login");
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="w-1/2 flex flex-col justify-between p-8 bg-white">
      <div className="text-right mb-4">
        <button className="text-black rounded-md w-[73px] h-[40px] bg-gray-100 hover:underline text-sm">
          Log in
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-1">Welcome, {userName}</h2>
          <p className="text-[14px] text-gray-500 mb-4">
            Connect email and set a password
          </p>

          {/* Email */}
          <div className="mb-4">
            <p className="text-[14px] mb-1">Email</p>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter your email here"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {errors.email && touched.email && (
              <div className="flex items-center gap-1 mt-1">
                <Image
                  src="/img/XVector.png"
                  alt="error icon"
                  width={12}
                  height={12}
                />
                <p className="text-[13px] text-red-500">{errors.email}</p>
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <p className="text-[14px] mb-1">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter password here"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {errors.password && touched.password && (
              <div className="flex items-center gap-1 mt-1">
                <Image
                  src="/img/XVector.png"
                  alt="error icon"
                  width={12}
                  height={12}
                />
                <p className="text-[13px] text-red-500">{errors.password}</p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded flex justify-center gap-2 items-center"
            disabled={loading}
          >
            Sign up
            {loading && <LoaderCircle size={18} className="animate-spin" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpEmailPassword;

const signUp = async (username: string, email: string, password: string) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-up`, {
      username,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
};
