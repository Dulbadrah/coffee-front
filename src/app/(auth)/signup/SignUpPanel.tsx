'use client'

import { useFormik } from 'formik';
import { object, string } from 'yup';
import Link from "next/link";

const SignupSchema = object({
  username: string().required('Username ee bichne uu!'),
});
type SignUpFormType = {
  setCurrentStep: any;
  userName: string;
  onChangeUsername: (_name: string)=> void

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

  const { errors } = formik



  return (
    <div className="w-1/2 flex flex-col justify-between p-8 bg-white">
      <Link href={"/login/"}>
        <div className="text-right mb-4">
          <button className="text-black rounded-md w-[73px] h-[40px] bg-gray-100 hover:underline text-sm">Log in</button>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Great Your Account</h2>
            <p className="text-[14px] text-gray-500">Choose a username for your page</p>
          </div>
          <div>
            <p className="text-[14px] font-medium">Username</p>
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              name="username"
              placeholder="Enter username here"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
            />
            {errors.username && <div className="flex items-center gap-1"> <img className="h-[11.67px] w-[11.67px]" src="/img/XVector.png" alt="" />  <p className="text-[13px] text-red-500">{errors.username}</p></div>}
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

