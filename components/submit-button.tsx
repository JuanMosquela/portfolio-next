import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { BsFillSendFill } from "react-icons/bs";

export default function SubmitButton({ state }: { state: boolean }) {
  return (
    <Button
      type="submit"
      className={cn(
        "rounded-full w-fit px-6 py-1 flex gap-3 items-center mx-auto "
      )}
    >
      {state ? "Proccesing" : "Submit"}
      {!state && <BsFillSendFill />}
    </Button>
  );
}
