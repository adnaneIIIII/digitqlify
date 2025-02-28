import React from "react";
import Wrapper from "./_components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserIcon } from "lucide-react";
import SectionBadge from "./_components/section-badge";
import Container from "./_components/container";
import { devices, perks, reviews } from "./_components/constants";
import { AppleCardsCarouselDemo } from "./_components/applecarousel/AppleCardsCarouselDemo";
import { FocusCards } from "./_components/focus-cards";
import Marquee from "./_components/marquee";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { LampContainer } from "./_components/lamp";

export default function page() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const therdRow = devices.slice(0, devices.length / 2);
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh] opacity-5" />
        <div className="flex flex-col items-center justify-center py-20 h-full">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
              <Image
                src="/sparkles-dark.svg"
                alt="✨"
                width={24}
                height={24}
                className="w-4 h-4"
              />
              Introducing HoloIPTV
              {/* <ChevronRight className="w-4 h-4" /> */}
            </span>
          </button>
          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
              PREMIUM TV CHANNELS MOVIES AND MORE
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Enjoy premium sports & pay per view events Watch the latest Movies
              release
            </p>
            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <Link
                href="#"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                  ✨ {"  "} Keep the family entertained with cartoons and kids
                  show
                </p>
                <Button
                  size="sm"
                  className="rounded-full hidden lg:flex border border-foreground/20">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* what we offer*/}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Service" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Unlimited Entertainment at Your Fingertips
            </h2>
            <p className="text-muted-foreground mt-6">
              Discover the ultimate streaming experience
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* movies and siers slider */}
      <Wrapper className="flex w-full flex-col items-center justify-center py-12 relative">
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <AppleCardsCarouselDemo />
        </div>
      </Wrapper>
      {/* movies and siers */}
      <Wrapper className="flex w-full flex-col items-center justify-center py-12 relative">
        <FocusCards cards={cards} />
      </Wrapper>
      {/* services */}
      <Wrapper className="flex flex-col items-center justify-center mt-8 py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Devices" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Our Service is Available on All Devices
            </h2>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none">
                {therdRow.map((device) => (
                  <figure
                    key={device.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-center">
                        <figcaption className="text-sm font-medium">
                          <img
                            src={device.name}
                            width={223}
                            height={123}
                            alt=""
                            className=""
                          />
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* testimonials */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What people are saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how Astra empowers businesses of all sizes. Here&apos;s what
              real people are saying on Twitter
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}>
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none">
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}>
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* newsletter */}
      <Wrapper className="flex flex-col items-center justify-center pb-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                All The TV You Love
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Make the Switch From Cable.get Access to 15,000+ Top Paid & Free
                Channels
              </p>
              <Button className="mt-6" asChild>
                <Link href="/sign-in">
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about Entertainment
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      <section className="py-[90px]">
        <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
          <div>
            <div>
              <Image
                src={"/icons/wiholo.png"}
                alt="logo"
                width={170}
                height={120}
              />
            </div>
          </div>
          <div>
            <p className="text-[#9098A0] mb-[12px]">Company</p>
            <div className="flex flex-col gap-3">
              {data.company.map((item, index) => (
                <p key={index} className="text-[#555E67] hover:cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#9098A0] mb-[12px]">Support</p>
            <div className="flex flex-col gap-3">
              {data.support.map((item, index) => (
                <p key={index} className="text-[#555E67] hover:cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-[300px]">
            <p className="font-medium text-[#9098A0] mb-4">Ready to build?</p>
            <div className="flex flex-col gap-[12px] justify-start">
              <Button>Start for free</Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

const data = {
  company: ["About", "Privacy Policy", "Terms & Conditions", "Refund Policy"],
  support: ["Contact Us", "contact@holoiptv.com", "+17822221472"],
};

const cards = [
  {
    title: "Forest Adventure",
    src: "/assets/r.jpg",
  },
  {
    title: "Valley of life",
    src: "/assets/q.jpg",
  },
  {
    title: "Sala behta hi jayega",
    src: "/assets/z.jpg",
  },
  {
    title: "Camping is for pros",
    src: "/assets/t.jpg",
  },
  {
    title: "The road not taken",
    src: "/assets/d.jpg",
  },
  {
    title: "The First Rule",
    src: "/assets/s.jpg",
  },
];
