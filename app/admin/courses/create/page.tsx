"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeftIcon, SparkleIcon } from "lucide-react";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateSlug } from "@/lib/helper";
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

  function onSubmit(values: CourseSchemaType) {
    console.log(values);
  }

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

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {" "}
        <Card className="w-full">
          <CardHeader>
            <h2 className="text-lg font-bold">Basic information</h2>
            <CardDescription>
              This information will be displayed publicly so be careful what you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Course Title" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the main title of the course.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* SLUG */}

                <div className="flex gap-4 md:items-center items-end md:flex-row flex-col">
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem className="w-full relative">
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="Slug" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the unique identifier for the course.
                        </FormDescription>
                       <FormMessage className="absolute text-red-500 text-sm mt-1 top-[100%]" />
                      </FormItem>
                    )}
                  />

                  <Button type="button" className="md:w-fit cursor-pointer mb-1" onClick={() => generateSlug(form)}>
                    Generate Slug <SparkleIcon className="ml-1" size={16} />
                  </Button>
                </div>
                <Button type="submit">Create Course</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CoursesCreate;
