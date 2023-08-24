import { UpcomingBirthdayCard } from "./UpcomingBirthdayCard";

export function UpcomingBirthdaySection() {
  return (
    <div>
      <div className="mb-4">
        <p className="font-semibold text-fs-1">Upcoming Birthdays</p>
      </div>
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
      <UpcomingBirthdayCard />
    </div>
  )
}
