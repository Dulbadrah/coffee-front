import { CreateProfile } from "@/app/(main)/create-profile/components/CreateProfile";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Page</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <CreateProfile />
        </DialogContent>
      </form>
    </Dialog>
  );
}
