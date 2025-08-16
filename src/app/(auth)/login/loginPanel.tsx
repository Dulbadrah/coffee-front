"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { UserContext } from "@/providers/UserProvider";

const loginSchema = object({
  email: string().email().required("Email ee bichne uu!"),
  password: string().required("Password oo buglunu uu!"),
});

const LoginForm = () => {
  const router = useRouter();
  const { login } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;

      try {
        const data = await login(email, password);

        if (data?.isCreatedProfile) {
          router.push("/home");
        } else {
          router.push("/create-profile");
        }
      } catch (e) {
        console.error("Login error:", e);
      }
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="w-1/2 flex flex-col justify-between p-8 bg-white">
      <Link href="/signup/">
        <div className="text-right mb-4">
          <button className="text-black rounded-md w-[73px] h-[40px] bg-gray-100 hover:underline text-sm">
            Sign up
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Welcome back</h2>

          {/* Email input */}
          <div className="mb-4">
            <p className="text-[14px] mb-1">Email</p>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter your email"
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

          {/* Password input */}
          <div className="mb-4">
            <p className="text-[14px] mb-1">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter your password"
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

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded flex justify-center gap-2 items-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
