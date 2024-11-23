import Icon1 from '@/static-files/header(1).svg';
import Icon2 from '@/static-files/header(2).svg';
import Icon3 from '@/static-files/header(3).svg';
import Icon4 from '@/static-files/header(4).svg';

import Service1 from '@/static-files/service1.svg';
import Service2 from '@/static-files/service2.svg';
import Service3 from '@/static-files/service3.svg';

import ChooseImg1 from "@/static-files/choose1.svg";
import ChooseImg2 from "@/static-files/choose2.svg";
import ChooseImg3 from "@/static-files/choose3.svg";
import Tickmark1 from '@/static-files/checkmark-circle-01.svg'
import Tickmark2 from '@/static-files/checkmark-circle-01 (1).svg'
import Tickmark3 from '@/static-files/checkmark-circle-01 (2).svg'

export const INFO_DATA = [
  {
    id: 1,
    name: "One-time passcode",
    value: "kas4536-26",
    icon: Icon1,
    className: "-right-[70px] md:-right-[100px] -top-[80]"
  },
  {
    id: 2,
    name: "Phone Number",
    value: "+91 1234567890",
    icon: Icon2,
    className: "-left-[70px] md:-left-[100px] -top-[80]"
  },
  {
    id: 3,
    name: "Credit Card",
    value: "1234-5647-2947-9747",
    icon: Icon3,
    className: "-left-[70px] md:-left-[100px] -bottom-[80]"

  },
  {
    id: 4,
    name: "Email Address",
    value: "abc@gmail.com",
    icon: Icon4,
    className: " -right-[70px] md:-right-[100px] -bottom-[80]"
  },
];


export const SERVICES_DATA = [
  {
    id: 1,
    icon: Service1,
    title: "Personal Information Removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 2,
    icon: Service2,
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 3,
    icon: Service3,
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
];


export const REVIEW_DATA = [
  {
    name: "David J. Karem",
    role: "Businessman",
    timeAgo: "1 day ago",
    review:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email addresses. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers, and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
  },
  {
    name: "Sophia Martinez",
    role: "Marketing Expert",
    timeAgo: "2 days ago",
    review:
      "Temp Mail has been a lifesaver for signing up on websites that I don’t trust with my personal email. It’s quick, easy to use, and ensures that my inbox stays clean and secure.",
  },
  {
    name: "Liam O'Connor",
    role: "Software Developer",
    timeAgo: "3 days ago",
    review:
      "As someone who frequently tests online services, Temp Mail is indispensable. It gives me the freedom to try out tools without worrying about spam or unwanted emails. Highly recommend it!",
  },
  {
    name: "Emily Zhang",
    role: "Freelancer",
    timeAgo: "4 days ago",
    review:
      "I love how Temp Mail protects my privacy. The interface is user-friendly, and I never have to worry about my data being exposed. A must-have for anyone dealing with sensitive tasks online!",
  },
];

export const CHOOSE_DATA = [
  {
    id: 1,
    title: "Protect Personal information",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg1,
    color: "#1E21E9",
    tick: Tickmark1
  },
  {
    id: 2,
    title: "Detailed Reporting",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg2,
    color: "#7950FF",
    tick: Tickmark2
  },
  {
    id: 3,
    title: "Secure All Data",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg3,
    color: "#098709",
    tick: Tickmark3
  },
];
