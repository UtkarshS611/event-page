// components/ContactForm.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  setEventName,
  setCollegeName,
  setDescription,
  resetForm,
} from "@/app/redux/eventSlice";
import { useState } from "react";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const EventForm = () => {
  const dispatch = useDispatch();
  const { eventName, collegeName, description } = useSelector(
    (state: RootState) => state.contact
  );

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [ampm, setAmPm] = useState("AM");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("First Name:", eventName);
    console.log("Last Name:", collegeName);
    console.log("Date:", date ? format(date, "PPP") : "Not selected");
    console.log("Time:", time + " " + ampm);
    console.log("Message:", description);

    dispatch(resetForm());
    setDate(undefined);
    setTime("");
    setAmPm("AM");

    if (eventName && collegeName && description) {
      const counter = Number(localStorage.getItem("event_counter")) || 0;
      const nextCounter = counter + 1;

      // Save to localStorage
      const eventData = { eventName, collegeName, description };
      localStorage.setItem(`event_${nextCounter}`, JSON.stringify(eventData));

      // Update the event_counter
      localStorage.setItem("event_counter", String(nextCounter));

      // Optional: Reset the form (Redux state)
      dispatch(resetForm());
    } else {
      alert("Please fill out all fields before submitting.");
    }

    dispatch(resetForm());
  };

  return (
    <section className="py-32 mx-auto w-full">
      <div className="font-medium text-3xl flex justify-center">
        <h1 className="font-Accent text-4xl lg:text-5xl xl:text-7xl">
          Submit a new event
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto flex flex-col gap-4 pt-16 pb-2 px-6"
      >
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Event name</Label>
            <Input
              type="text"
              value={eventName}
              onChange={(e) => dispatch(setEventName(e.target.value))}
              placeholder="XYZ Hackathon"
            />
          </div>
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">College name</Label>
            <Input
              type="text"
              value={collegeName}
              onChange={(e) => dispatch(setCollegeName(e.target.value))}
              placeholder="IIIT Delhi"
            />
          </div>
        </div>
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Time</Label>
            <div className="flex gap-3">
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="10"
              />
              <Select value={ampm} onValueChange={setAmPm}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="AM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
              className="resize-none"
              placeholder="Join us for the city's biggest and most exiting hackathon"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default EventForm;
