"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#agents", label: "For Agents" },
  { href: "#pricing", label: "Pricing" },
];

const tradersmindLinks = [
  { href: "#about", label: "About Us" },
  { href: "#blog", label: "Blog" },
  { href: "#careers", label: "Careers" },
];

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/images/Traders-mind-logo.png"
        alt="TradersMind"
        width={180}
        height={56}
        className="h-11 w-auto sm:h-12"
        priority
      />
    </Link>
  );
}

function NavLinks() {
  return (
    <>
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[15px] font-medium text-[#1F2A44] transition-colors hover:text-[#5926E0]">
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 ">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(47,36,108,0.06)] ring-1 ring-white/60 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLinks />
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-[15px] font-medium text-[#1F2A44] outline-none hover:text-[#5926E0]">
              Tradersmind
              <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-40">
              {tradersmindLinks.map(link => (
                <DropdownMenuItem
                  key={link.href}
                  className="cursor-pointer"
                  nativeButton={false}
                  render={<Link href={link.href} />}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#contact"
            className="text-[15px] font-medium text-[#1F2A44] transition-colors hover:text-[#5926E0]">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="hidden h-10 items-center justify-center rounded-lg border border-[#1F2A44] bg-white px-5 text-[15px] font-medium text-[#1F2A44] transition-colors hover:bg-[#F4F2FB] sm:inline-flex">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="hidden h-10 items-center justify-center rounded-lg bg-[#5926E0] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#4b1fc4] sm:inline-flex">
            Sign Up
          </Link>

          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#1F2A44]/15 text-[#1F2A44] lg:hidden"
              aria-label="Open menu">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#F4F2FB]">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Logo />
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4 px-4">
                {navLinks.map(link => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-[#1F2A44]"
                      />
                    }>
                    {link.label}
                  </SheetClose>
                ))}
                {tradersmindLinks.map(link => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-[#1F2A44]"
                      />
                    }>
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="#contact"
                      className="text-[15px] font-medium text-[#1F2A44]"
                    />
                  }>
                  Contact Us
                </SheetClose>
                <div className="mt-4 flex flex-col gap-2 sm:hidden">
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href="/sign-in"
                        className="inline-flex h-10 items-center justify-center rounded-lg border border-[#1F2A44]/80 text-[15px] font-medium text-[#1F2A44]"
                      />
                    }>
                    Sign In
                  </SheetClose>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href="/sign-up"
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-[#5926E0] text-[15px] font-medium text-white"
                      />
                    }>
                    Sign Up
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
