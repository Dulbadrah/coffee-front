'use client'
import React from "react";
import { useFormik } from 'formik';
import { object, string } from 'yup';

const loginSchema = object({
  email: string().email().required('Email ee bichne uu!'),
  password: string().required('Password oo buglunu uu!')
});

const SignUpEmailPassword = ({setCurrentStep}:any) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ``,
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    
  });


  const { errors } = formik


  return (
    <div className="w-1/2 flex flex-col justify-between p-8 bg-white">
      <div className="text-right mb-4">
        <button className="text-black rounded-md w-[73px] h-[40px] bg-gray-100 hover:underline text-sm">Log in</button>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-1">Welcome, baconpancakes1</h2>
          <p className="text-[14px] text-gray-500 mb-4">Connect email and set a password</p>
          <div>
            <p className="text-[14px]">Email</p>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter username here"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            {errors.email && <div className="flex items-center gap-1"> <img className="h-[11.67px] w-[11.67px]" src="/img/XVector.png" alt="" />  <p className="text-[13px] text-red-500">{errors.email}</p></div>}
          </div>
          <div>
            <p className="text-[14px]">Password</p>
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              placeholder="Enter password here"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
                     {errors.password && <div className="flex gap-2 items-center"> <img className="h-[11.67px] w-[11.67px]" src="/img/XVector.png" alt="" /> <p className="text-[13px] text-red-500">{errors.password}</p></div>}
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

export default SignUpEmailPassword;