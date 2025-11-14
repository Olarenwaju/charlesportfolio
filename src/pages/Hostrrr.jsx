/* eslint-disable react/no-unescaped-entities */

import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";

//////////////////////////////////////////////////////////////////////
import hostrrrhero from "../assets/img/hostrrr/hostrrr-hero.png";
import hostrrrimg1 from "../assets/img/hostrrr/hostrrr-img1.png";
import hostrrrimg2 from "../assets/img/hostrrr/hostrrr-img2.png";
import hostrrrimg3 from "../assets/img/hostrrr/hostrrr-img3.png";
import hostrrrimg4 from "../assets/img/hostrrr/hostrrr-img4.png";
import hostrrrimg5 from "../assets/img/hostrrr/hostrrr-img5.png";
import hostrrrimg6 from "../assets/img/hostrrr/hostrrr-img6.png";
import hostrrrimg7 from "../assets/img/hostrrr/hostrrr-img7.png";
import hostrrrimg8 from "../assets/img/hostrrr/hostrrr-img8.png";
import hostrrrimg9 from "../assets/img/hostrrr/hostrrr-img9.png";
import hostrrrimg10 from "../assets/img/hostrrr/hostrrr-img10.png";
import WorksCarousel from "../components/WorksCarousel";
import Newfooter from "../components/Newfooter";

const Hostrrr = () => {
  return (
    <>
      <section className="max-w-[1300px] w-full mx-auto pt-20 sm:pt-24 md:pt-[150px] px-4 sm:px-5 font-dmsans relative">
        <img
          className="absolute -top-2/4 -left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-50 sm:opacity-75 pointer-events-none hidden sm:block"
          src={greenblur}
          alt="img"
        />
        <div className="fixed z-50">
          <Backbutton />
        </div>
        <img
          src={hostrrrhero}
          className="w-full mx-auto pb-6 sm:pb-8 md:pb-10"
          alt="abt"
        />
        <p className="text-xl sm:text-2xl md:text-[30px] lg:text-[40px] xl:text-[55px] font-semibold pb-8 sm:pb-12 md:pb-16 leading-tight">
          Hostrrr: An e-commerce platform for ordering fully customizable poly
          mailers
        </p>

        <div className="max-w-[900px] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-x-4 py-6 sm:py-8 md:py-10 text-xs sm:text-sm md:text-base lg:text-lg">
          <div className="text-center">
            <h1 className="font-semibold pb-1">My Role</h1>
            <p className="text-[#cccccca9]">Product Designer</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Timeline</h1>
            <p className="text-[#cccccca9]">4 - 5 weeks</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Location</h1>
            <p className="text-[#cccccca9]">Remote</p>
          </div>

          <div className="text-center">
            <h1 className="font-semibold pb-1">Tools</h1>
            <p className="text-[#cccccca9]">Figma, figjam</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] px-4 sm:px-5 font-dmsans">
        <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-28">
          <p className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 leading-tight">
            Overview
          </p>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal">
            Hostrrr is a social event-hosting platform (mobile app) that makes
            it easy for anyone to create, join, and enjoy meaningful gatherings,
            whether it&apos;s a private dinner, game night, or networking event.
            The app helps users plan events effortlessly, manage food
            arrangements, verify guests for safety, and connect attendees before
            the big day.
          </p>
        </div>

        <img
          src={hostrrrimg1}
          className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
          alt="hostrrrimg1"
        />

        <div className="pt-12 sm:pt-16 md:pt-20">
          <p className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-5 leading-tight">
            My Role
          </p>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            I was responsible for auditing the existing UI, identifying UX
            flaws, redesigning core experiences ( for both hosts and guests ),
            and establishing a consistent visual and interaction language across
            the app
          </p>

          <p className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-5 leading-tight">
            The Problem
          </p>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            When I joined the project, Hostrrr already had some existing
            designs, but they were inconsistent, visually outdated, and lacked
            UX depth. Font sizes were too small, there was no design system, and
            the experience felt fragmented. My job was to take over the design,
            fix the UX, build a scalable system, and introduce new features that
            elevated the overall experience for both hosts and guests. The
            previous design had good ideas but poor execution:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
            <li>Inconsistent font sizes and spacing</li>
            <li>No design system or reusable component structure</li>
            <li>Weak visual hierarchy</li>
            <li>UX flows that were confusing and unstructured</li>
            <li>
              Missing product features crucial for trust and community
              engagement
            </li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            These issues made the app feel unpolished and hard to use,
            especially for first-time hosts or guests trying to navigate event
            setup or registration
          </p>
        </div>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-5 font-dmsans pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]">
        <div>
          <p className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-5 leading-tight">
            The Goal
          </p>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            To redesign Hostrrr into a modern, social, and user-friendly
            platform by:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
            <li>Inconsistent font sizes and spacing</li>
            <li>No design system or reusable component structure</li>
            <li>Weak visual hierarchy</li>
            <li>UX flows that were confusing and unstructured</li>
            <li>
              Missing product features crucial for trust and community
              engagement
            </li>
          </ul>

          <img
            src={hostrrrimg2}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg2"
          />

          <h2 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-5 leading-tight">
            UI Design Improvements
          </h2>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6">
            The new interface feels warmer, cleaner, and social by design.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
            <li>Clear typography hierarchy with readable sizes</li>
            <li>Thoughtful empty states, and error states.</li>
            <li>Weak visual hierarchy</li>
            <li>UX flows that were confusing and unstructured</li>
            <li>
              Missing product features crucial for trust and community
              engagement
            </li>
          </ul>

          <h2 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 pb-4 sm:pb-5 leading-tight">
            New Features Introduced
          </h2>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-6">
            To make Hostrrr feel more social, secure, and dynamic, I added
            several new features and flows:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">Verification Flow:</li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20">
            Before users can host or join an event, they must complete identity
            verification; small gatherings (≤5 guests) require ID + selfie,
            while larger ones require address verification in addition to ID
            verification. This increased trust and reduced safety concerns.
          </p>

          <img
            src={hostrrrimg3}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg3"
          />

          <ul className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">In-App Wallet</li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20">
            Enables secure transactions within the platform for event payments,
            ticketing, or food contributions.
          </p>

          <img
            src={hostrrrimg4}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg4"
          />

          <ul className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">Messaging Feature:</li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-12 sm:pb-16 md:pb-20">
            Allows direct host-to-guest communication and pre-event chat rooms
            for guests to connect, share ideas, or plan collaboratively
          </p>

          <img
            src={hostrrrimg5}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg5"
          />

          <ul className="list-disc pl-5 sm:pl-6 pt-12 sm:pt-16 md:pt-20 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">Support & FAQ Page:</li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5">
            Simplified support access and guided users through common issues
            without needing external help
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">
              Settings & Account Page:
            </li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5">
            Gave users control over profile info, privacy, and event
            preferences.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">
              Scan Barcode (Check-In):
            </li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-4 sm:pb-5">
            Guests scan a host-provided QR code upon arrival — confirming
            attendance and enhancing event safety.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pt-4 sm:pt-6 pb-2 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal">
            <li className="text-white font-semibold">Share Event Feature:</li>
          </ul>

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pb-6 sm:pb-8 md:pb-10">
            Both hosts and attendees can share events outside the app to invite
            friends or contacts to join.
          </p>

          <img
            src={hostrrrimg6}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg6"
          />

          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal py-4 sm:py-5">
            A major UX improvement was refining how food is managed at events.
            Hosts can now choose one of four structured food setups:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 pb-4 sm:pb-6 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
            <li>Host&apos;s Treat: The host provides food for everyone.</li>
            <li>Ordering Food: Guests order and pay for their own meals.</li>
            <li>
              Potluck: Guests bring dishes to share (they can select categories
              like Starters, Main Meals, Desserts, or Drinks).
            </li>
            <li>
              Assigned Dish: The host assigns specific food or recipes to
              guests.
            </li>
          </ul>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pt-2 sm:pt-3 pb-6 sm:pb-8 md:pb-10">
            Each option includes tailored microcopy that keeps things clear and
            social.
          </p>

          <img
            src={hostrrrimg7}
            className="mx-auto w-full h-auto pb-6 sm:pb-8 md:pb-10"
            alt="hostrrrimg6"
          />

          <h2 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 leading-tight">
            Results
          </h2>

          <ul className="list-disc pl-5 sm:pl-6 pb-6 sm:pb-8 md:pb-10 text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#CCCCCC] font-normal space-y-2">
            <li>Improved user flow and readability across the app</li>
            <li>Introduced a sense of community and trust</li>
            <li>
              Reduced user confusion by 60% (based on prototype testing
              feedback)
            </li>
            <li>Built a scalable design system for future feature rollouts</li>
            <li>Clearer, more engaging onboarding experience</li>
          </ul>

          <h2 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-5 leading-tight">
            I feel like a proud Dad!
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[24px] xl:text-[30px] leading-relaxed sm:leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[50px] text-[#CCCCCC] font-normal pt-2 sm:pt-3 pb-6 sm:pb-8 md:pb-10">
            Taking over Hostrrr was both a redesign and reimagination project. I
            didn’t just make it look better, I made it work better. Rebuilding
            from messy foundations required strategic UX thinking and structure.
            Introducing features like verification, QR check-in, and messaging
            helped transform Hostrrr into a more trusted, human, and connected
            event experience. It reinforced my belief that great design isn’t
            just what users see, it’s what helps them feel safe, informed, and
            connected.
          </p>
        </div>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-5 font-dmsans">
        <p className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 leading-tight">
          Feed Your Eyes
        </p>
        <img
          src={hostrrrimg8}
          className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
          alt="abt"
        />
        <img
          src={hostrrrimg9}
          className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
          alt="abt"
        />
        <img
          src={hostrrrimg10}
          className="w-full mx-auto pb-4 sm:pb-6 md:pb-8 lg:pb-10"
          alt="abt"
        />

        <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-12 lg:p-16 rounded-box">
          <p className="pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base">
            A link to the live version:
          </p>
          <a
            href=""
            className="text-[#ffa500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline break-words"
            target="_blank"
          >
            Hostrrr
          </a>
        </div>
      </section>

      <section className="max-w-[1300px] w-full mx-auto pt-[100px] px-5 font-dmsans">
        <div className="text-[40px] sm:text-[70px] pb-5">
          <h1 className="pb-1 sm:pb-5">Some of my other stuff</h1>
        </div>
        <WorksCarousel />
      </section>

      <Newfooter />
    </>
  );
};

export default Hostrrr;
