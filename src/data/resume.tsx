import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kai Breese",
  initials: "KB",
  url: "https://ninjakaib.github.io",
  location: "San Diego, CA",
  locationLink: "https://www.google.com/maps/place/sandiego",
  description:
    "Studying data science at UCSD. Passionate about building cool stuff with AI.",
  summary:
    "Recently graduated from UCSD, I work at Xifin and like to ride motorcycles. Currently designing the next generation of AI hardware for energy efficient transformer inference.",
  avatarUrl: "/kai-selfie.jpeg",
  skills: [
    "Python",
    "SQL",
    "Docker",
    "AWS",
    "Typescript",
    "Svelte",
    "FastAPI",
    "pandas",
    "NumPy",
    "PyTorch",
    "transformers",
    "C/C++",
    "ChatGPT",
    "Excel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kai.breeze@me.com",
    tel: "+19257865550",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ninjakaib",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kaibreese",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "UC San Diego",
      href: "https://buildspace.so",
      degree: "Bachelor of Science in Data Science",
      logoUrl: "/ucsd-seal.png",
      // logoUrl: "/ucsd.ico",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "XiFin Inc.",
      href: "https:/www.xifin.com",
      badges: [],
      location: "San Diego, CA",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/xifin.png",
      start: "June 2024",
      end: "Present",
      description:
        "Deploying machine learning models to production endpoints. Building agentic LLM applications to automatically handle insurance claims, document processing, and more.",
    },
    {
      company: "Clayton Health LLC",
      badges: [],
      href: "https://shopdaveclaytonmd.com",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/drdave.png",
      start: "March 2024",
      end: "July 2024",
      description:
        "Build a custom e-commerce website for a health startup using the LiquidJS framework that led to over $100k in sales in the first 6 months.",
    },
    {
      company: "TheCoderSchool",
      href: "https://thecoderschool.com/",
      badges: [],
      location: "San Diego, CA",
      title: "Computer Science Tutor",
      logoUrl: "/coderschool.jpeg",
      start: "2022",
      end: "2023",
      description:
        "Teaching the next generation of software engineers through hands-on coding projects and real-world applications. Helping students learn Python, JavaScript, and web development.",
    },
    {
      company: "Verizon",
      href: "https://verizon.com",
      badges: [],
      location: "San Diego, CA",
      title: "Sales Consultant",
      logoUrl: "/verizon.jpg",
      start: "October 2023",
      end: "April 2024",
      description:
        "Sold Verizon products as a top 5 sales consultant in the San Diego region. Built meaningful and lasting relationships with valuable business customers.",
    },
    {
      company: "In-N-Out",
      href: "https://innout.com/",
      badges: [],
      location: "Pleasant Hill, CA",
      title: "Associate",
      logoUrl: "/ino.png",
      start: "September 2019",
      end: "October 2021",
      description:
        "Flippin burgers and tossing fries at the best burger joint in California to pay for my education. Learned the value of hard work and teamwork in a fast-paced environment.",
    },
  ],
  
  projects: [
    {
      title: "Energy-Efficient AI Chip Design",
      href: "https://ninjakaib.github.io/hardware-accelerators/",
      dates: "Sep 2024 - Mar 2025",
      active: true,
      description:
        "I made a chip",
      technologies: [
        "Python",
        "PyRTL",
        "Verilog",
        "Yosys",
        "OpenROAD",
      ],
      links: [
        {
          type: "Website",
          href: "https://ninjakaib.github.io/hardware-accelerators/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ninjakaib/hardware-accelerators/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lmul-chip.png",
      video: "",
    },
    {
      title: "Alternative Credit Risk Modeling",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Won 1st place in machine learning competition to predict loan default rates from historical bank transaction data.",
      technologies: [
        "Python",
        "pandas",
        "NumPy",
        "sklearn",
        "PyTorch",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "AI Healthcare Coach",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Visualizing Huffman Compression",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Created an interactive visualization of the Huffman compression algorithm to help users understand how it works.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Expedition Hacks 2020",
      dates: "2020",
      location: "Virtual",
      description:
        "Won 1st place with an AI facial recognition app powered by AWS.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
