import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="rounded-lg border p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span>{credits} credits</span>
          <span>❤ {likes}</span>
        </div>
      </div>
    </Link>
  );
}
