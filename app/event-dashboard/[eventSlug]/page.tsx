import { events } from "@/app/mock-events-data/events-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";


export default async function EventDetails({
  params,
}: {
  params: { eventSlug: string };
}) {
  const event = events.find((e) => slugify(e.name) === params.eventSlug);

  if (!event) return notFound();

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-primary mb-4">{event.name}</h1>

      <div className="flex gap-8 mb-6">
        <div>
          <h3 className="text-xl font-semibold">Event Type</h3>
          <p className="text-lg">{event.eventType}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Date</h3>
          <p className="text-lg">
            {new Date(event.eventDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex gap-8 mb-6">
        <div>
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="text-lg">{event.eventLocation}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Registration Deadline</h3>
          <p className="text-lg">
            {new Date(event.registrationDeadline).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="text-lg">{event.description}</p>
      </div>

      <div className="flex gap-8 mb-6">
        <div>
          <h3 className="text-xl font-semibold">Registrations</h3>
          <p className="text-lg">{event.registrationCount} people registered</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-lg">
            <a href={`mailto:${event.contactEmail}`} className="text-blue-500">
              {event.contactEmail}
            </a>
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href={event.eventLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Visit Event Website
        </a>
      </div>
    </div>
  );
}
