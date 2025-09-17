export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600">
        This page is under construction. A simple contact form will go here.
      </p>

      <div className="mt-8 rounded-lg border p-4 bg-gray-50">
        <p className="text-sm text-gray-700">
          For now, email us:{" "}
          <a className="text-blue-600 underline" href="mailto:hello@blackwaterrigs.com">
            hello@blackwaterrigs.com
          </a>
        </p>
      </div>
    </main>
  );
}
