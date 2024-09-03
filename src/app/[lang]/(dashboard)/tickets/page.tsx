import { TicketsTable } from "./components/TicketsTable";

const getTickets = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data;
};

export default async function Tickets() {
  const tickets = await getTickets();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tickets</h1>
      <TicketsTable tickets={tickets} />
    </main>
  );
}
