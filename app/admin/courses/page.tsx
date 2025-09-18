import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Your Courses</h1>
        <Link className={buttonVariants()} href="/admin/courses/create">
          Create Course
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold">All Courses</h1>
      </div>
    </>
  );
};

export default CoursesPage;
