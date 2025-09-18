import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CoursesCreate = () => {
  return (
    <>
      <div className="mb-8 flex items-center gap-4">
        <Link
          href={"/admin/courses"}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <ArrowLeftIcon className="size-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Course</h1>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold">Basic information</h2>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default CoursesCreate;
