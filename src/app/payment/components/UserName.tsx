import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const UserName = () => {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div className="flex flex-col gap-4 ">
        <Label htmlFor="firstName">First Name</Label>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} id="firstName" placeholder="John" />
              {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-4 ">
        <Label htmlFor="lastName">Last Name</Label>
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                {...field}
                value={field.value || ""}
                id="lastName"
                placeholder="Doe"
              />
              {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};
