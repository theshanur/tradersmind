import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const problems = [
  { src: "/images/At-Work.png", label: "At Work" },
  { src: "/images/drinving.png", label: "Driving" },
  { src: "/images/Sleeping.png", label: "Sleeping" },
  { src: "/images/Busy.png", label: "Busy" },
  { src: "/images/different-time-zone.png", label: "Different Time Zone" },
  { src: "/images/Missed-Opportunity.png", label: "Missed Opportunity" },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl bg-linear-to-r from-[#FFF3F5] to-transparent py-6 px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
          <div className="max-w-md shrink-0 space-y-4 lg:w-72 xl:w-60">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.14em] text-[#F13B6A] uppercase">
              <X className="size-3.5 stroke-3" />
              The Problem
            </span>
            <h2 className="text-2xl leading-tight font-bold text-[#1B2559] max-w-62.5">
              Why Most Traders Miss Good Signals
            </h2>
            <p className="font-dm-sans text-xs leading-relaxed text-[#6B6B8C]">
              Most signal providers send signals at random times. If you are
              busy, sleeping, working or driving — you might miss the best
              opportunities.
            </p>
            <Link
              href="#demo"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#F13B6A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#dc2f5c]">
              Try Demo Now
            </Link>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {problems.map(item => (
              <div
                key={item.label}
                className="flex group flex-col items-center rounded-2xl bg-white px-3 py-6 text-center shadow-[0_10px_30px_rgba(80,30,50,0.06)]">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={110}
                  height={88}
                  className="h-20 group-hover:scale-110 transition-all duration-500 ease-in-out w-auto object-contain sm:h-28"
                />
                <p className="mt-4 text-sm leading-snug font-semibold text-[#1B2559]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
