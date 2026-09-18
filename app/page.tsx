import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import ProblemSection from "@/components/problem-section";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import SolutionSection from "@/components/solution-section";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-10">
        <div className="flex items-center">
          <div className="w-1/3 space-y-8">
            <div className="space-y-2">
              <span className="text-xs text-[#3346C8] font-medium bg-[#E8EDFF] px-2 py-1 rounded inline-block">
                AI TRADING INFRASTRUCTURE
              </span>
              <h1 className="text-4xl font-bold text-[#2D3958] leading-tight">
                Launch Your Own{" "}
                <span className="bg-linear-to-r from-[#134eec] to-[#6225f0] bg-clip-text text-transparent">
                  {" "}
                  <br />
                  AI Trading Signal Bot
                </span>{" "}
                <br />
                on Telegram
              </h1>
            </div>
            <p className=" text-[#8888b6] max-w-sm w-full font-dm-sans text-sm">
              Empower your community with smart trading signals, built for
              performance, trust, and long-term growth.
            </p>
            <ul className="flex gap-2 text-sm">
              <li className="flex items-center gap-1">
                <CircleCheck className="w-4 h-4 text-[#5926E0]" /> Signals On
                Demand
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="w-4 h-4 text-[#5926E0]" /> 1-Year
                Credits
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="w-4 h-4 text-[#5926E0]" /> White Label
                Bot
              </li>
            </ul>
            <div className="flex gap-4">
              <Button
                variant="default"
                size="lg"
                className="h-11 px-5 bg-[#5926E0]">
                Get Free Demo
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-5">
                Become an Agent
              </Button>
            </div>
          </div>
          <div className="w-2/3 flex justify-end items-end">
            <Image
              src="/images/Group_7.png"
              alt="420-Active-Agents"
              width={650}
              height={500}
            />
          </div>
          {/* <div className="w-2/3 flex items-center">
            <div>
              <Image
                src="/images/420-Active-Agents.jpg"
                alt="420-Active-Agents"
                width={150}
                height={200}
              />
            </div>{" "}
            <div className="relative">
              <Image
                src="/images/Phone-Screen.png"
                alt="Hero Image"
                width={600}
                height={500}
              />
            </div>
            <div className="">
              <Image
                src="/images/Character.png"
                alt="Hero Image"
                width={350}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/images/image-right.png"
                alt="image-right"
                width={150}
                height={200}
              />
            </div>{" "}
          </div> */}
        </div>
        <div className="flex items-center justify-between rounded-2xl p-4 shadow-xl bg-white max-w-6xl mx-auto">
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/500-Active-Agents.png"
                alt="Group_8"
                width={50}
                height={50}
              />
            </div>
            <div>
              <NumberTicker
                value={500}
                className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
              />{" "}
              +<p className="text-xs">Active Agents</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/10K-Active-Users.png"
                alt="Group_8"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span>
                <NumberTicker
                  value={10}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />{" "}
                K+
              </span>

              <p className="text-xs">Active Users</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/1M-Signal-Generated.png"
                alt="Group_8"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span>
                <NumberTicker
                  value={1}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />{" "}
                M+
              </span>
              <p className="text-xs">Signals Generated</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/50-Countries.png"
                alt="Group_8"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span>
                <NumberTicker
                  value={50}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />{" "}
                +
              </span>
              <p className="text-xs">Countries</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/100_-Secure-Payment.png"
                alt="100_-Secure-Payment"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span>
                <NumberTicker
                  value={100}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />{" "}
                %
              </span>
              <p className="text-xs">Secure Payments</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <div>
              <Image
                src="/images/24-7-AI-Support.png"
                alt="24-7-AI-Support"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span>
                <NumberTicker
                  value={24}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />{" "}
                /
                <NumberTicker
                  value={7}
                  className="text-lg font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />
              </span>
              <p className="text-xs">AI Support</p>
            </div>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <ProblemSection />
      {/* Solution Section */}
      <SolutionSection />
    </main>
  );
}
