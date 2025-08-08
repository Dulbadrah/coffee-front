"use client";

import { useContext, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CoverImageUploaderProfile from "@/utils/imageCloudinaryProfiile";
import { useRouter } from "next/navigation";
import { UserContext } from "@/providers/UserProvider";

export function CreateProfile() {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState("");
  const { user } = useContext(UserContext);
  console.log(user);
  const handleCoverSaveProfile = (imageUrl: string) => {
    setCoverImage(imageUrl);
    console.log("Cover image saved:", imageUrl);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    about: Yup.string()
      .min(3, "About must be at least 3 characters")
      .required("Required"),
    url: Yup.string().url("Invalid URL").min(3).required("Required"),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/create-profile/${user?.id}`,
        {
          name: values.name,
          about: values.about,
          socialMediaURL: values.url,
          backgroundImage: "",
          avatarImage: coverImage,
          successMessage: "",
        }
      );

      if (response.status === 200) {
        console.log("Profile created successfully:", response.data);
        router.push("/payment");
      } else {
        console.error("Failed to create profile:", response.status);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Profile</DialogTitle>
          <DialogDescription>
            Fill out your profile details and click save to create it.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <CoverImageUploaderProfile onSave={handleCoverSaveProfile} />
        </div>

        <Formik
          initialValues={{ name: "", about: "", url: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-4 py-4">
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="grid gap-1">
                <Label htmlFor="about">About</Label>
                <Field
                  as={Textarea}
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Write something about yourself"
                />
                <ErrorMessage
                  name="about"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="grid gap-1">
                <Label htmlFor="url">Social Media URL</Label>
                <Field
                  as={Input}
                  id="url"
                  name="url"
                  type="url"
                  placeholder="https://yourprofile.com"
                />
                <ErrorMessage
                  name="url"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              <DialogFooter className="mt-2">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => console.log("Cancelled")}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting || !handleSubmit}>
                  {isSubmitting ? "Saving..." : "Save Profile"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
function setSearchValue(arg0: string) {
  throw new Error("Function not implemented.");
}
