import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Label } from "@/components/ui/label";

export const SetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="border p-6 rounded-lg space-y-4">
      <h2 className="font-semibold text-lg">Set a new password</h2>
      <div className="space-y-2">
        <Label> New password </Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Confirm password</Label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Button className="w-full">Save changes</Button>
    </div>
  );
};
