// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to personalize your portfolio
// All sections are typed for safety and autocomplete

export interface SocialLink {
  platform: string;
  url?: string;
  icon: string;
  username: string;
}

export interface ExperienceItem {
  role: string;
  company?: string; // Optional: can be omitted if freelancing
  description?: string; // Optional: brief description of responsibilities
  period?: string; // Optional: e.g., "2022 - Present"
}

export interface EducationItem {
  degree: string;
  institution: string;
  description?: string; // Optional: additional details
  period?: string; // Optional: e.g., "2018 - 2022"
}

export interface AboutData {
  // Personal Info
  name: string;
  title: string;

  // Hero Section
  hero: {
    greeting: string;
    headline: string;
    shortBio: string;
    ctaText: string;
    ctaLink: string;
  };

  // About Me Section
  aboutMe: {
    heading: { normalText: string; highlightedText: string };
    paragraphs: string[];
    skills: string[];
    interests: string[];
    highlightedAboutRole: string[];
    aboutCTA: "View my Journey";

    // Personal story config (optional for template users)
    personalStory?: {
      id: number; // for badge or ordering
      title: string; // blog title
      description: string; // short preview
      imageUrl: string; // small image for card
      link: string; // blog URL
    };
  };

  // Experience Section (Career)
  experience: ExperienceItem[];

  // Education Section (Academic)
  education?: EducationItem[]; // Optional: can be omitted

  // Personal
  hobbies: string[];

  // Social Links
  socialLinks: SocialLink[];

  // Contact Info
  contact: {
    email: string;
    phone?: string; // Optional: can be omitted for privacy
    location: string;
    preferredMethod: "email" | "phone" | "linkedin" | "whatsapp";
  };
}

// ========================================
// YOUR PORTFOLIO DATA
// ========================================
// 👇 Edit everything below this line 👇

const aboutData: AboutData = {
  // ---------- Basic Info ----------
  name: "Mehak Fatima Naqvi",
  title: "Full Stack Developer",

  // ---------- Hero Section ----------
  hero: {
    greeting: "Hi, I'm",
    headline: "Building digital experiences that matter",
    shortBio:
      "A passionate developer creating amazing web applications with React and modern technologies.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },

  // ---------- About Me Section ----------
  aboutMe: {
    heading: {
      normalText: "From dusty PC",
      highlightedText: "to strong {Developer}",
    },
    paragraphs: [
      "I'm Mehak, a Frontend Engineer who genuinely enjoys the puzzle of building things that work beautifully. Two years in, and I still get excited when a performance fix shreds load time or a UI finally clicks into place.",
      "When I'm not coding, you'll find me watching K-dramas, exploring nature, or doing what I love most, sitting on the rooftop at evening with a cup of milk tea, watching the world slow down. That quiet is where my best ideas come from.",
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
    interests: ["Open Source", "Tech Writing", "UI/UX Design"],
    highlightedAboutRole: [
      "Full-Stack Ninja",
      "Scalable Web Solutions Expert",
      "React & Next.js Pro",
      "Web Performance Optimizer",
      "UX Expert",
      "Digital Problem Solver",
    ],
    aboutCTA: "View my Journey",

    personalStory: {
      id: 1,
      title: "From Intermediate Student to First Tech Job",
      description:
        "A 4-minute read about resilience, loans, factory work, and breaking into tech.",
      imageUrl: "/photo-gallery/journey.png", // or any image you want
      link: "https://medium.com/@mehak313naqvi/from-intermediate-student-to-first-tech-job-the-journey-which-still-hasnt-ended-e77a47b28748",
    },
  },

  // ---------- Work Experience ----------
  experience: [
    {
      role: "Full Stack Developer",
      company: "ThinkBuilt Solutions",
      description:
        "Building scalable SaaS platforms using Next.js, TypeScript, Node.js, Prisma, and PostgreSQL with real time features and optimized dashboards.",
      period: "Aug 2025 - Present",
    },
    {
      role: "Frontend Developer",
      company: "ThinkBuilt Solutions",
      description:
        "Developed modular frontend architecture and optimized state driven features using React and RTK Query.",
      period: "Mar 2025 - Aug 2025",
    },
    {
      role: "Frontend Developer",
      company: "Prep Plate (SaaS Product)",
      description:
        "Built responsive meal planning SaaS interfaces using React and modern state management.",
      period: "Dec 2024 - Mar 2025",
    },
    {
      role: "JavaScript Instructor",
      company: "Self Employed",
      description:
        "Taught core JavaScript concepts and guided students in building practical projects.",
      period: "Jan 2025 - Mar 2025",
    },
    {
      role: "Frontend Intern",
      company: "CodeAlpha",
      description:
        "Improved UI responsiveness and usability across multiple client projects.",
      period: "Oct 2024 - Nov 2024",
    },
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "BSCS",
      institution: "Virtual University",
      description: "Software engineering and computer architectures.",
      period: "2023 - 2027", // Optional
    },
  ],

  // ---------- Personal Interests/Hobbies ----------
  hobbies: [
    "Sketching",
    "UX research",
    "Experimenting with new AI Tools",
    "Learning new tech",
  ],

  // ---------- Social Media Links ----------
  // these are remix icons classes
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/miss-kniz",
      icon: "ri-linkedin-fill",
      username: "@mehak-fatima-naqvi",
    },
    {
      platform: "GitHub",
      url: "https://github.com/miss-kniz",
      icon: "ri-github-fill",
      username: "@miss-kniz",
    },
    {
      platform: "Twitter",
      icon: "ri-twitter-x-fill",
      username: "@yourUsername",
    },
    {
      platform: "Instagram",
      icon: "ri-instagram-fill",
      username: "@yourUsername",
    },
  ],

  // ---------- Contact Information ----------
  contact: {
    email: "mehak313naqvi@gmail.com",
    location: "Remote — UK Hours",
    preferredMethod: "linkedin", // Options: 'email' | 'phone' | 'linkedin' | 'whatsapp'
  },
};

export default aboutData;
