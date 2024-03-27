import {
  FaBrush,
  FaHammer,
  FaPersonBooth,
  FaPhone,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";
import { LuMicrowave } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { FaP, FaPeopleGroup } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";

import { HeroHeader, ContentSection, Contact, FAQ } from "@/types/contents";

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */
export const heroHeader: HeroHeader = {
  header: `Students Get Rentals`,
  subheader: `Platform for students to get rentals`,
  image: `/student-jumping.png`,
  description:
    "We help you get your rental! Go through our short online training system, get our badges, and sign up for the roommateTools.shop software , and it will put you head and sholders above the others looking to rent the house!",
};

export const requirements: ContentSection = {
  header: `Requirements`,
  subheader: `Requirements Homeowners and property managers will love include:`,
  content: [
    {
      text: `Basic house cleaning system`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/basic-house-cleaning.webp",
      link: "/courses/basic-housing-cleaning",
    },
    {
      text: `Basic house maintenance knowlege`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/home-repair.jpg",
      link: "/courses/basic-house-maintainance",
    },
    {
      text: `Neighbour management`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/neighbor-management.webp",
      link: "/courses/neighbor-managment",
    },
  ],
};

export const cta = {
  header: `Start your journey with us`,
  description: `Explore our courses and services to get started`,
  button: {
    text: `Explore Courses`,
    link: `/courses`,
  },
};

export const services: ContentSection = {
  header: `Services`,
  subheader: `We provide the following services:`,
  // image: `/features-img.webp`,
  content: [
    {
      text: `Furnished Room Options`,
      icon: HiHomeModern,
      link: "/services/furnished-room-options",
    },
    {
      text: `Study and Collaboration Spaces`,
      icon: FaHammer,
      link: "/services/study-and-collaboration-spaces",
    },
    {
      text: `Monthly Cleaning Services`,
      icon: FaPersonBooth,
      link: "/services/monthly-cleaning-services",
    },
    {
      text: `24/7 Maintenance and Support`,
      icon: LuMicrowave,
      link: "/services/maintenance-and-support",
    },
    {
      text: `Utility and Internet Inclusion`,
      icon: ImConnection,
      link: "/services/utility-and-internet-inclusion",
    },
    {
      text: `Community Events and Workshops`,
      icon: FaPeopleGroup,
      link: "/services/community-events-and-workshops",
    },
  ],
};

export const contact: Contact = {
  header: "Contact Us",
  subheader: "We are here to help you",
  description:
    "If you have any questions, please feel free to contact us. We will get back to you as soon as possible.",
  call: {
    title: "Call or Email",
    phone_number: "091213141516",
    email: "info@studentgetsrental.ca",
    icon: FaPhone,
  },
  business_hour: {
    title: "Business hours",
    date: "Mon - Fri: 12:00 AM - 12:00 PM \n Sat - Sun: 12:00 AM - 12:00 PM",
    icon: FaClock,
  },

  address: {
    title: "Address",
    street: "2401-244 King St W,",
    country: "Toronto, ON M5J 0A6, Canada",
    icon: FaLocationArrow,
  },

  socials: [
    {
      name: "Google Maps",
      link: "https://maps.google.com/",
      iconUrl: "/google_maps.svg",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/",
      iconUrl: "/facebook.svg",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/",
      iconUrl: "/instagram.svg",
    },
    {
      name: "Youtube",
      link: "https://youtube.com/",
      iconUrl: "/youtube.svg",
    },
  ],
};

export const faq: FAQ = {
  header: "FAQ",
  subheader: "Frequently Asked Questions",
  faq: [
    {
      question: "Who are we?",
      answer:
        "We are a group of students who are passionate about helping other students to get their rental. We provide a platform for students to get rentals.",
    },
    {
      question: "What services do we provide ?",
      answer:
        "We provide the following services: Basic house cleaning, Basic house maintainance, Neighbour management, Appliances, and Easy Customizability.",
    },
    {
      question: "What courses do we offer?",
      answer:
        "We offer the following courses: Basic house cleaning, Basic house maintainance, and Neighbour management. You can find more information about our courses page.",
    },
  ],
};

export const offer = {
  header: "What we change for you?",
  subheader: "We have changed the way students get rentals",
  heroContent: {
    text: "The Future is Now",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia laboriosam error consequuntur fugit, doloribus rerum, iure nesciunt amet quidem veniam cupiditate hic fugiat dolore aperiam quisquam libero earum quibusdam?",
  },
  content: [
    {
      text: `Lorem Ipsum`,
      icon: FaPeopleGroup,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.",
    },
    {
      text: `Lorem Ipsum`,
      icon: FaPeopleGroup,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.",
    },
    {
      text: `Lorem Ipsum`,
      icon: FaPeopleGroup,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.",
    },
    {
      text: `Lorem Ipsum`,
      icon: FaPeopleGroup,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.",
    },
  ],
};
