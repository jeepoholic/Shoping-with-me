import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Description", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blogs", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronde Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Frontend Developer & Designer – Jon Technologies, Dubai, UAE (Sept. 2024 - Present)",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed and refined user interfaces using React.js, Next.js, and
          Tailwind CSS, improving UI consistency and responsiveness by 80%.
        </li>
        <li>
          Implemented reusable UI components, ensuring a 90% satisfaction rate.
        </li>
        <li>
          Optimized frontend performance, reducing load times by 85% through
          efficient component structuring.
        </li>
        <li>
          Designed intuitive and visually appealing interfaces, achieving a 95%
          usability rating.
        </li>
        <li>
          Collaborated with designers to translate Figma & Adobe XD mockups into
          pixel-perfect UI.
        </li>
      </ul>
    ),
  },
  {
    icon: <Fingerprint />,
    text: "Frontend Developer & UI/UX Designer – RYMAK Global FZE, Dubai, UAE (July 2023 - Aug. 2024)",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Created interactive landing pages with React & JavaScript, increasing
          user engagement by 90%.
        </li>
        <li>
          Applied UI/UX principles for effective interface design, enhancing
          usability by 85%.
        </li>
        <li>
          Designed graphics and typography, boosting visual engagement by 70%.
        </li>
        <li>Ensured 100% adherence to design standards across projects.</li>
      </ul>
    ),
  },
  {
    icon: <ShieldHalf />,
    text: " UI/UX Designer – Bright Enterprises, Bhopal, India (Apr. 2021 - May 2023)",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Organized elements to establish clear visual hierarchy, improving
          navigation by 80%.
        </li>
        <li>
          Ensured precise alignment of elements, achieving 90% design accuracy.
        </li>
        <li>Delivered high-quality designs with a 95% project success rate.</li>
      </ul>
    ),
  },
  {
    icon: <BatteryCharging />,
    text: "Senior UI/UX Designer – Directorate of Public Instruction (DPI), Bhopal, India (Apr. 2020 - July 2020)",
    description: (
      <ul>
        <li className="list-disc pl-5">
          <li>
            Designed digitized tutorials for the MP government’s education
            department during the pandemic, telecast daily on state-owned
            channels.
          </li>
          <li> Video Editor Intern – Bansal News, Bhopal, India (Jan. 2020)</li>
          <li>
            Edited short videos and motion graphics using Adobe Premiere Pro &
            After Effects.
          </li>
          <li>
            Collaborated with the team to create high-quality content and
            developed expertise in video editing.
          </li>
        </li>
      </ul>
    ),
  },
  // {
  //   icon: <PlugZap />,
  //   text: "Collaboration Tools",
  //   description:
  //     "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  // },
  // {
  //   icon: <GlobeLock />,
  //   text: "Analytics Dashboard",
  //   description:
  //     "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  // },
];

export const checklistItems = [
  {
    title: "Blaze Corp - Intl Accounts and Auditing Website",
    description:
      "Developed with HTML, CSS and Designed on Figma, and JavaScript for an audit firm.",
    url: "https://www.behance.net/gallery/191315967/Blaze-Corp-Intl-Accounts-and-Auditing-Website",
  },
  {
    title: "Spice Cart – E-commerce Website for Spices",
    description:
      "Created a responsive spice shop interface focusing on cultural design, filters, and smooth navigation.",
    url: "https://rymakglobal.com/",
  },
  {
    title:
      "AI Assistance FlightBook – Elevating Air Travel Experience reduce time",
    description:
      "Track the performance of your VR Mobile UI designed on Figma with a focus on seamless booking flow, intuitive navigation, and a user-first layout tailored for on-the-go travelers. and gain insights into user behavior.",
    url: "https://www.behance.net/gallery/171721589/Flight-Book-Elevating-Air-Travel-Experience",
  },
  {
    title: "Share work Green Tea – Packaging & Cover Design Collection minutes",
    description:
      "Track the performance of Crafted a series of elegant and refreshing green tea packaging designs, blending product-focused aesthetics with clean graphic elements to elevate shelf appeal and brand identity. VR apps and gain insights into user behavior.",
      url:"https://www.behance.net/gallery/155231153/Green-Tea-Cover-Designs"
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
