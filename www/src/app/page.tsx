import CodeSection from "@/components/CodeSection";
import Demo from "@/components/Demo";
import { redis } from "@/lib/redis";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import localFont from "next/font/local";

const fontScary = localFont({ src: "../assets/Scary.ttf" });

export default async function Home() {
  const requests = await redis.get("served-requests");
  return (
    <div className="bg-blue-50 grainy-light">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start">
              <h1
                className={cn(
                  "relative tracking-tight sm:text-left mt-10 font-bold leading-[4rem]! text-gray-900 text-5xl md:text-7xl"
                )}
              >
                <span className="whitespace-nowrap">SpeechGuard API</span>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap">
                Detecting toxic content has always been{" "}
                <span
                  className={cn(
                    "font-scary font-bold text-red-500",
                    fontScary.className
                  )}
                >
                  slow
                </span>{" "}
                and{" "}
                <span
                  className={cn(
                    "font-scary font-bold text-red-500",
                    fontScary.className
                  )}
                >
                  expensive
                </span>
                . Not anymore. Introducing a fast and free profanity filter for
                your web apps.
              </p>

              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Much
                    faster and cheaper to run than AI
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Pretty
                    accurate
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://mynaui.com/avatars/avatar-07.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://mynaui.com/avatars/avatar-08.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://mynaui.com/avatars/avatar-09.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://mynaui.com/avatars/avatar-10.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://mynaui.com/avatars/avatar-11.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                  </div>
                  <p className="">
                    <span className="font-semibold">
                      {(Math.ceil(Number(requests) / 10) * 10).toLocaleString()}
                    </span>{" "}
                    API requests served{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20">
            <img
              alt="try-it"
              aria-hidden="true"
              src="/try-it.png"
              className="absolute w-40 left-2/3 -top-2 select-none hidden sm:block"
            />
            <Demo />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>

      <section id="demo" className="bg-blue-50 grainy-dark">
        <div className="mx-auto max-w-6xl gap-6 pb-24 pt-10 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40">
          <h2 className="mx-auto text-balance text-5xl sm:text-6xl text-center font-bold leading-[4.25rem] tracking-tight max-w-2xl text-slate-900">
            There's a <span className="px-2 bg-red-500 text-white">better</span>{" "}
            way
          </h2>

          <p className="text-center mx-auto mt-12 text-lg max-w-xl text-balance">
            Let <b>SpeechGuardAPI</b> do the dirty work of keeping your user
            input clean.
          </p>
          <div
            id="api"
            className="w-full flex flex-col items-center mt-12 px-4"
          >
            <p className="font-bold text-xl my-4">Make an API request</p>
            <div className="relative max-w-[50rem] w-full text-left p-5 bg-[#1e1e1e] rounded-xl shadow-sm">
              <CodeSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
