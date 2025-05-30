import {
  FaBrush,
  FaHammer,
  FaPersonBooth,
  FaPhone,
  FaClock,
  FaLocationArrow,
  FaMoneyBill,
  FaGlobe,
} from "react-icons/fa";

import { MdEco } from "react-icons/md";
import { LuMicrowave } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";

import { HeroHeader, ContentSection, Contact, FAQ } from "@/types/contents";
import { IconType } from "react-icons/lib";
import { signOut } from "next-auth/react";

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */
export const heroHeader: HeroHeader = {
  header: `Students Get Rentals`,
  subheader: `Platform for students to get rentals`,
  image: `/hero.png`,
  description:
    "We help you get your rental! Go through our short online training system, get our badges, and sign up for the roommateTools.shop software , and it will put you head and sholders above the others looking to rent the house!",
};

export const nav_requirements: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: `Basic house cleaning system`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/basic-housing-cleaning",
  },
  {
    title: `Basic house maintenance knowlege`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/basic-house-maintainance",
  },
  {
    title: `Neighbour management`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/neighbor-managment",
  },
  {
    title: `Appliances`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/appliances",
  },
  {
    title: `Pest Control`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/pest-control",
  },
  {
    title: `Credit Score and References`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "/courses/credit-score",
  },
];

export const mobile_nav_links: {
  title: string;
  href?: string;
  onClick?: () => void;
  content?: {
    title: string;
    href: string;
    icon?: IconType;
  }[];
}[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Requirements",
    content: [
      {
        title: `Basic house cleaning system`,
        href: "/courses/basic-housing-cleaning",
      },
      {
        title: `Basic house maintenance knowlege`,
        href: "/courses/basic-house-maintainance",
      },
      {
        title: `Neighbour management`,
        href: "/courses/neighbor-managment",
      },
      {
        title: `Appliances`,
        href: "/courses/appliances",
      },
      {
        title: `Pest Control`,
        href: "/courses/pest-control",
      },
      {
        title: `Credit Score and References`,
        href: "/courses/credit-score",
      },
    ],
  },
  // {
  //   title: "Services",
  //   content: [
  //     {
  //       title: `Furnished Room Options`,
  //       icon: HiHomeModern,
  //       href: "/services/furnished-room-options",
  //     },
  //     {
  //       title: `Study and Collaboration Spaces`,
  //       icon: FaHammer,
  //       href: "/services/study-and-collaboration-spaces",
  //     },
  //     {
  //       title: `Monthly Cleaning Services`,
  //       icon: FaPersonBooth,
  //       href: "/services/monthly-cleaning-services",
  //     },
  //     {
  //       title: `24/7 Maintenance and Support`,
  //       icon: LuMicrowave,
  //       href: "/services/maintenance-and-support",
  //     },
  //     {
  //       title: `Utility and Internet Inclusion`,
  //       icon: ImConnection,
  //       href: "/services/utility-and-internet-inclusion",
  //     },
  //     {
  //       title: `Community Events and Workshops`,
  //       icon: FaPeopleGroup,
  //       href: "/services/community-events-and-workshops",
  //     },
  //   ],
  // },
  // {
  //   title: "Contact Us",
  //   href: "/#contacts",
  // },
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Logout",
    onClick: signOut,
  },
  {
    title: "Sign In",
    href: "/login",
  },
];
export const nav_services: {
  title: string;
  href: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: `Furnished Room Options`,
    icon: HiHomeModern,
    href: "/services/furnished-room-options",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: `Study and Collaboration Spaces`,
    icon: FaHammer,
    href: "/services/study-and-collaboration-spaces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: `Monthly Cleaning Services`,
    icon: FaPersonBooth,
    href: "/services/monthly-cleaning-services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: `24/7 Maintenance and Support`,
    icon: LuMicrowave,
    href: "/services/maintenance-and-support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: `Utility and Internet Inclusion`,
    icon: ImConnection,
    href: "/services/utility-and-internet-inclusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: `Community Events and Workshops`,
    icon: FaPeopleGroup,
    href: "/services/community-events-and-workshops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const requirements: ContentSection = {
  header: `Requirements`,
  subheader: `Requirements Homeowners and property managers will love include:`,
  content: [
    {
      text: `Basic house cleaning system`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/basic_cleaning.jpg",
      link: "/courses/basic-housing-cleaning",
    },
    {
      text: `Basic house maintenance knowlege`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/maintainance.jpg",
      link: "/courses/basic-house-maintainance",
    },
    {
      text: `Neighbour management`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/neighbor.jpg",
      link: "/courses/neighbor-managment",
    },
    {
      text: `Appliances`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/basic_appliance.jpg",
      link: "/courses/appliances",
    },
    {
      text: `Pest Control`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/pest_control.jpg",
      link: "/courses/pest-control",
    },
    {
      text: `Credit Score and References`,
      subtext: `Lorem ipsum dolor sit amet, consectetur,`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/credit.jpg",
      link: "/courses/credit-score",
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
      text: `Enhanced Accessibility and Affordability`,
      icon: FaMoneyBill,
      description:
        "Rental services have made it easier for students to find accommodations that fit their budget and preferences. By offering a wide range of options—from shared apartments to single rooms—these platforms ensure that students can secure housing that doesn't break the bank, thereby reducing the financial burden of higher education.",
    },
    {
      text: `Increased Mobility and International Opportunities`,
      icon: FaGlobe,
      description:
        "For students studying abroad or participating in exchange programs, these rental services have simplified the process of finding accommodations in foreign countries. By offering rooms in multiple cities and countries, these platforms facilitate mobility and open up new educational and cultural experiences for students.",
    },
    {
      text: `Sustainability and Eco-friendly Living Options`,
      icon: MdEco,
      description:
        "Acknowledging the growing concern for environmental sustainability among students, some rental services now feature eco-friendly living options. These include accommodations with green technologies, energy-efficient systems, and communal living arrangements that reduce carbon footprints, aligning with the values of environmentally conscious students.",
    },
    {
      text: `Lorem Ipsum`,
      icon: FaPeopleGroup,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.",
    },
  ],
};

export const courses = [
  {
    key: "appliances",
    label: "Appliances",
    link: "/courses/appliances/take-quiz",
  },
  {
    key: "how-to-clean",
    label: "Basic House Cleaning System",
    link: "/courses/basic-housing-cleaning/take-quiz",
  },
  {
    key: "house_maintainance",
    label: "Basic House maintenance and knowledge",
    link: "/courses/basic-house-maintainance/take-quiz",
  },
  {
    key: "neighbor_management",
    label: "Neighbor Management",
    link: "/courses/neighbor-managment/take-quiz",
  },
  {
    key: "pest_control",
    label: "Pest Control",
    link: "/courses/pest-control/take-quiz",
  },
  {
    key: "credit_scores_and_references",
    label: "Credit Scores and References",
    link: "/courses/credit-score/take-quiz",
  },
];
