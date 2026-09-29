import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-3">{course.description}</p>
      <p className="mt-3">{course.credits} credits</p>
      <div className="mt-4">
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}
