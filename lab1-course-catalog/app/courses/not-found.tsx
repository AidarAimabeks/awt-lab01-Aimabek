import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">Course not found</h1>
      <Link href="/courses" className="mt-3 inline-block underline">
        Back to courses
      </Link>
    </main>
  );
}
