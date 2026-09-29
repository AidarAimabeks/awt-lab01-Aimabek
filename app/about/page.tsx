export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3">
        This catalog is the semester project for the course &ldquo;Advanced Web
        Technologies&rdquo;. It is built with Next.js (App Router), TypeScript
        and Tailwind CSS.
      </p>
      <p className="mt-3">
        Data comes from mock functions that simulate a backend; a real API
        arrives later with FastAPI.
      </p>
    </main>
  );
}
