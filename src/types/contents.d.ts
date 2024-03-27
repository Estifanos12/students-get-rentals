import { IconType } from 'react-icons/lib';

export type HeroHeader = {
  header: string;
  subheader: string;
  image: string;
  description: string;
};

export type Content = {
  text: string;
  subtext?: string;
  description?: string;
  image?: string;
  link?: string;
  icon?: IconType;
};

export type ContentSection = {
  header: string;
  subheader: string;
  image?: string;
  content: Array<Content>;
};

export type Contact = {
  header: string;
  subheader: string;
  description: string;
  call: {
    title: string;
    phone_number: string;
    email: string;
    icon: IconType;
  };
  business_hour: {
    title: string;
    date: string;
    icon: IconType;
  };
  address: {
    title: string;
    street: string;
    country: string;
    icon: IconType;
  };
  socials: Array<{
    name: string;
    link: string;
    iconUrl: string;
  }>;
};

export type FAQ = {
  header: string;
  subheader: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};
