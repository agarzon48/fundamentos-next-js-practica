export default function User({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User - id: {id}</h1>
    </main>
  );
}
