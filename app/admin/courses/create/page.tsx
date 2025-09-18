import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchema";

const CoursesCreate = () => {

const form = useForm<CourseSchemaType>({
  resolver: zodResolver(courseSchema),
  defaultValues: {
    title: "",
    description: "",
    smallDescription: "",
    fileKey: "",
    price: 0,
    duration: 0,
    level: "Beginner",
    category: "",
    slug: "",
    status: "Draft",
  },
});


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
