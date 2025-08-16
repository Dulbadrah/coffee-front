'use client'

import { useFormik } from 'formik';
import { object, string } from 'yup';
import Link from "next/link";
import Image from "next/image";
import React from "react";

const SignupSchema = object({
  username: string().required('Username ee bichne uu!'),
});

type SignUpFormType = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  userName: string;
  onChangeUsername: (_name: string) => void
}

export const SignUpForm = ({ onChangeUsername, setCurrentStep }: SignUpFormType) => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      onChangeUsername(values.username)
      setCurrentStep(1);
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="w-1/2 flex flex-col justify-between p-8 bg-white">
      <Link href="/login/">
        <div className="text-right mb-4">
          <button className="text-black rounded-md w-[73px] h-[40px] bg-gray-100 hover:underline text-sm">
            Log in
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Great Your Account</h2>
            <p className="text-[14px] text-gray-500">Choose a username for your page</p>
          </div>

          <div className="mb-6">
            <p className="text-[14px] font-medium mb-1">Username</p>
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              name="username"
              placeholder="Enter username here"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {errors.username && touched.username && (
              <div className="flex items-center gap-1 mt-1">
                <Image
                  src="/img/XVector.png"
                  alt="error icon"
                  width={12}
                  height={12}
                />
                <p className="text-[13px] text-red-500">{errors.username}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
