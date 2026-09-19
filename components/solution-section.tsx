import { Check } from "lucide-react";
import { Button } from "./ui/button";

const problems = [
  { src: "/images/At-Work.png", label: "At Work" },
  { src: "/images/drinving.png", label: "Driving" },
  { src: "/images/Sleeping.png", label: "Sleeping" },
  { src: "/images/Busy.png", label: "Busy" },
  { src: "/images/different-time-zone.png", label: "Different Time Zone" },
  { src: "/images/Missed-Opportunity.png", label: "Missed Opportunity" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl bg-[#f7f8fe] py-6 px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
          <div className="max-w-md shrink-0 space-y-4 lg:w-72 xl:w-60">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.14em] text-[#4F1EEA] uppercase">
              <Check className="size-3.5 stroke-3 text-[#4F1EEA]" />
              THE SOLUTION
            </span>
            <h2 className="text-2xl leading-tight font-bold text-[#1B2559] max-w-62.5">
              Trade When <br /> You Are Ready
            </h2>
            <p className="font-dm-sans text-sm leading-relaxed text-[#6B6B8C]">
              You request, our AI analyzes the market instantly and gives you
              fresh high quality signals with full analysis.
            </p>
            <Button className="bg-[#410dfc] h-11 px-5">Enquire Now</Button>
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"></div>
        </div>
      </div>
    </section>
  );
}
