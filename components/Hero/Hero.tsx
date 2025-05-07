import React from "react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-start items-center min-h-screen relative overflow-hidden py-16 md:py24 lg:py-32">
      <div className="z-[99] flex items-center justify-center min-h-64">
        <div
          className={cn(
            "hero-text-animation group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Name</span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="w-full max-w-4xl text-center space-y-4 hero-text-animation z-[99] ">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Where <span className="text-primary">Talent</span> Meets Opportunity,
          and Dreams Take <span className="text-primary">Flight</span>
        </h1>
        <p className="text-muted-foreground">
          Uniting creative minds and bold ideas through unforgettable college
          events and opportunities.
        </p>
      </div>
      <div className="z-[99] flex justify-center items-center flex-col sm:flex-row gap-4 my-6 w-full px-6 hero-button-animation">
        <Button className="cursor-pointer">
          <Link href={"/event-dashboard"}>View Events</Link>
        </Button>
        <Button variant={"outline"} className="cursor-pointer">
          <Link href={"/create-event"}>Host Event</Link>
        </Button>
      </div>
      <div className="hero-blocks-animation xl:block hidden absolute top-0 right-0 h-full w-full">
        <div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#48cae4] min-h-30 cursor-pointer p-4 rounded-lg absolute left-[10%] top-[20%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Hackathons</h1>
              <ul className="text-sm leading-[1]">
                <li>Compete</li>
                <li>Learn</li>
                <li>Win</li>
              </ul>
            </div>
            <Image
              src="hackathon.svg"
              alt="hackathon"
              width={100}
              height={100}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#ffc971] min-h-30 cursor-pointer p-4 rounded-lg absolute left-[2%] top-[50%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Tech Talks</h1>
              <ul className="text-sm leading-[1]">
                <li>Learn</li>
                <li>Grow</li>
              </ul>
            </div>
            <Image
              src="techTalk.svg"
              alt="hackathon"
              width={100}
              height={100}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#e0c3fc] min-h-30 cursor-pointer p-4 rounded-lg absolute left-[10%] bottom-[15%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Startups</h1>
              <ul className="text-sm leading-[1]">
                <li>Build</li>
                <li>Ship</li>
              </ul>
            </div>
            <Image
              src="startup.svg"
              alt="hackathon"
              width={100}
              height={100}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
        </div>
        <div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#48cae4] min-h-30 cursor-pointer p-4 rounded-lg absolute right-[10%] top-[20%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Competitions</h1>
              <ul className="text-sm leading-[1]">
                <li>Win</li>
                <li>Connect</li>
              </ul>
            </div>
            <Image
              src="competition.svg"
              alt="hackathon"
              width={120}
              height={120}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#ffc971] min-h-30 cursor-pointer p-4 rounded-lg absolute right-[2%] top-[50%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Mentorship Sessions</h1>
              <ul className="text-sm leading-[1]">
                <li>Learn</li>
                <li>Grow</li>
              </ul>
            </div>
            <Image
              src="mentorship.svg"
              alt="hackathon"
              width={100}
              height={100}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
          <div className="hover:translate-y-[-60%] duration-200 translate-y-[-50%] max-w-2xs w-full bg-[#e0c3fc] min-h-30 cursor-pointer p-4 rounded-lg absolute right-[10%] bottom-[15%] overflow-hidden">
            <div>
              <h1 className="text-lg font-medium">Cultural Events</h1>
              <ul className="text-sm leading-[1]">
                <li>Enjoy</li>
                <li>Meet</li>
              </ul>
            </div>
            <Image
              src="culture.svg"
              alt="hackathon"
              width={100}
              height={100}
              className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="xl:hidden w-full flex justify-center flex-wrap gap-6">
        <div className="max-w-xs w-full bg-[#48cae4] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Hackathons</h1>
            <ul className="text-sm leading-[1]">
              <li>Compete</li>
              <li>Learn</li>
              <li>Win</li>
            </ul>
          </div>
          <Image
            src="hackathon.svg"
            alt="hackathon"
            width={100}
            height={100}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
        <div className="max-w-xs w-full bg-[#ffc971] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Tech Talks</h1>
            <ul className="text-sm leading-[1]">
              <li>Learn</li>
              <li>Grow</li>
            </ul>
          </div>
          <Image
            src="techTalk.svg"
            alt="hackathon"
            width={100}
            height={100}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
        <div className="max-w-xs w-full bg-[#e0c3fc] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Startups</h1>
            <ul className="text-sm leading-[1]">
              <li>Build</li>
              <li>Ship</li>
            </ul>
          </div>
          <Image
            src="startup.svg"
            alt="hackathon"
            width={100}
            height={100}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
        <div className="max-w-xs w-full bg-[#48cae4] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Competitions</h1>
            <ul className="text-sm leading-[1]">
              <li>Win</li>
              <li>Connect</li>
            </ul>
          </div>
          <Image
            src="competition.svg"
            alt="hackathon"
            width={120}
            height={120}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
        <div className="max-w-xs w-full bg-[#ffc971] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Mentorship Sessions</h1>
            <ul className="text-sm leading-[1]">
              <li>Learn</li>
              <li>Grow</li>
            </ul>
          </div>
          <Image
            src="mentorship.svg"
            alt="hackathon"
            width={100}
            height={100}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
        <div className="max-w-xs w-full bg-[#e0c3fc] min-h-30 cursor-pointer p-4 rounded-lg overflow-hidden relative">
          <div>
            <h1 className="text-lg font-medium">Cultural Events</h1>
            <ul className="text-sm leading-[1]">
              <li>Enjoy</li>
              <li>Meet</li>
            </ul>
          </div>
          <Image
            src="culture.svg"
            alt="hackathon"
            width={100}
            height={100}
            className="absolute bottom-[20%] right-[-20%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
