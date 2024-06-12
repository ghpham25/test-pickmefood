import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Dialog className="flex items-center w-1/2">
        <DialogTrigger>Add an item</DialogTrigger>
        <DialogContent className="p-2 w-1/4">
          <DialogDescription className="flex flex-col">
            <Link
              href="/manual"
              className="text-lg text-center hover:bg-slate-100 p-2 rounded-lg text-black text-bold"
            >
              Manual Add
            </Link>
            <Separator className="p-0" />
            <Link
              href="/multipage-dialogue"
              className="text-lg text-center p-2 hover:bg-slate-100 text-black text-bold"
            >
              Scan Item
            </Link>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
