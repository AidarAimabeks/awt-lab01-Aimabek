import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Course Catalog</h1>
      <p className="mt-3">
        Welcome! Browse the courses of the Advanced Web Technologies program.
      </p>
      <Link href="/courses" className="mt-4 inline-block underline">
        Go to the course list
      </Link>
    </main>
  );
}
