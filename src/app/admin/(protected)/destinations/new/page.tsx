import { DestinationForm } from "@/components/admin/DestinationForm";

export default function NewDestinationPage() {
  return <div className="grid gap-6"><div><p className="eyebrow">Destinations</p><h1 className="mt-2 text-3xl font-black text-navyInk">New Destination</h1></div><DestinationForm /></div>;
}
