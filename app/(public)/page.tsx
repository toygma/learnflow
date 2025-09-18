import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const data: featureProps[] = [
  {
    title: "Comprehensive Courses",
    description: "Learn a wide range of topics thoroughly",
    icon: "📚", 
  },
  {
    title: "Interactive Learning",
    description: "Engage with exercises and quizzes",
    icon: "🖊️",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your growth and achievements",
    icon: "📈",
  },
  {
    title: "Community Support",
    description: "Get help and share knowledge with others",
    icon: "🤝", 
  },
];

const Home = () => {

  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center gap-5">
          <Badge className="flex flex-col items-center" variant={"outline"}>
            The Future of Online Education
          </Badge>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 text-center">
            Elevate your Learning Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl text-center">
            Discover a new way to learn with our modern, interactive learning
            management system. Access high-quality resources, engage with expert
            instructors, and connect with a community of learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href={"/courses"}>
              <Button variant={"outline"}>Explore Courses</Button>
            </Link>
            <Link href={"/login"}>
              <Button variant={"default"}>Sign In</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-32">
        {data?.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="text-4xl mb-4">{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Home;
