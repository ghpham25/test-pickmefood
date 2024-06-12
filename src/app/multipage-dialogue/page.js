"use client";
import * as React from "react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const MultiPageDialog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Scan Item</DialogTitle>
            </DialogHeader>
            <DialogDescription className="flex flex-col">
              <p>This is all the content of the already made scan page</p>
            </DialogDescription>
            <div className="flex flex-col ">
              <Button
                className="self-end relative top-24"
                onClick={() => goToPage(2)}
              >
                Go to confirmation
              </Button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Confirming items</DialogTitle>
            </DialogHeader>
            <DialogDescription className="flex flex-col">
              <p>
                This is all the content of the already made confirmation page
              </p>
            </DialogDescription>
            <div className="flex justify-between relative top-24">
              <Button className=" " onClick={() => goToPage(1)}>
                Back
              </Button>
              <Button className=" " onClick={() => alert("Item Confirmed!")}>
                Add Confirmed Item
              </Button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open>
      <DialogContent className="p-4 w-full h-1/2">
        {renderPageContent()}
      </DialogContent>
    </Dialog>
  );
};

export default MultiPageDialog;
