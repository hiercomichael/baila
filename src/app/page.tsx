import Carousel from "../components/Carousel";
import { getEvents } from "../lib/eventbrite";
import Link from "next/link";

export default async function HomePage() {
  const events = await getEvents();

  return (
    <div className="container">
      <section>
        <h1>Upcoming Events</h1>
        <Carousel events={events} />
      </section>

      <section>
        <h1>Shop</h1>
        <Link href="/store">Visit our store →</Link>
      </section>
    </div>
  );
}