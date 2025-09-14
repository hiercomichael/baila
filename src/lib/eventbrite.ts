export async function getEvents() {
  const token = process.env.EVENTBRITE_TOKEN;
  const res = await fetch(
    "https://www.eventbriteapi.com/v3/events/search/?q=music",
    { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
  );
  const data = await res.json();
  return data.events || [];
}