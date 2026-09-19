import { Check, CircleCheck, LayoutGrid, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const problems = [
  { src: "/images/At-Work.png", label: "At Work" },
  { src: "/images/drinving.png", label: "Driving" },
  { src: "/images/Sleeping.png", label: "Sleeping" },
  { src: "/images/Busy.png", label: "Busy" },
  { src: "/images/different-time-zone.png", label: "Different Time Zone" },
  { src: "/images/Missed-Opportunity.png", label: "Missed Opportunity" },
];

export default function LiveBotSection() {
  return (
    <section id="solution" className="mx-auto max-w-7xl px-4 py-10">
      <div className="bg-[#000F31] rounded-2xl p-6 grid grid-cols-12 items-center">
        <div className="space-y-4 col-span-4">
          <span className="text-white px-2.5 py-1.5 rounded text-xs font-medium bg-[#231881] inline-flex items-center gap-1">
            <LayoutGrid className="size-4" /> LIVE BOT EXPERIENCE
          </span>
          <h1 className="text-4xl font-bold text-white max-w-md leading-tight ">
            Experience Smarter Trading with <br />{" "}
            <span className="bg-linear-to-b from-[#134eec] to-[#6225f0] bg-clip-text text-transparent">
              TradersMind AI
            </span>
          </h1>
          <p className="text-[#B8C2D9] max-w-sm w-full font-dm-sans text-sm">
            Get real-time market insights, AI-powered analysis, and actionable
            trade ideas—right when you need them. Built for traders who want an
            edge.
          </p>
          <div className="grid grid-cols-3 gap-2.5 text-white">
            <div className="border border-white/10 rounded-lg px-1 py-2 flex items-center gap-1">
              <Image
                src="/images/Accuracy-Rate.png"
                alt="accuracy"
                width={30}
                height={30}
              />{" "}
              <div>
                <h4 className="text-green-400 font-medium">98.7 %</h4>
                <p className="text-xs text-[#FFFFFFC2]">
                  Accuracy has reached Upto
                </p>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg px-1 py-2 flex items-center gap-1">
              <Image
                src="/images/AI-Monitoring.png"
                alt="accuracy"
                width={30}
                height={30}
              />{" "}
              <div>
                <h4 className="text-green-400 font-medium">24/7</h4>
                <p className="text-xs text-[#FFFFFFC2]">AI Monitoring</p>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg px-1 py-2 flex items-center gap-1">
              <Image
                src="/images/Active-Traders.png"
                alt="accuracy"
                width={30}
                height={30}
              />{" "}
              <div>
                <h4 className="text-green-400 font-medium">10K+</h4>
                <p className="text-xs text-[#FFFFFFC2]">Active Traders</p>
              </div>
            </div>
          </div>

          <Button className="bg-[#410dfc] h-11 px-5 gap-2">
            Start Free Trial <MoveRight className="size-6" />
          </Button>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/Every-Smarter-Trading-with-TradersMind-AI-1.png"
            alt="Every-Smarter-Trading-with-TradersMind-AI-1"
            width={500}
            height={500}
          />
        </div>
        <div className="text-white space-y-4 col-span-3">
          <h2 className="text-3xl font-medium ">What You Get​</h2>
          <ul className="divide-y divide-white/10">
            {[
              {
                label: "Fresh analysis when you request",
              },
              {
                label: "Current market conditions",
              },
              {
                label: "Support & Resistance levels",
              },
              {
                label: "News & Economic warnings",
              },
              {
                label: "Risk management",
              },
              {
                label: "AI exploration for every trade",
              },
            ].map(item => (
              <li className="flex items-center gap-2 py-3">
                <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <Check className="size-5" strokeWidth={2.5} />
                </div>{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
