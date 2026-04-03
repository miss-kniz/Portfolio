import { FileJs, GitBranch, Laptop, Lightning } from "phosphor-react";
import {
  BootstrapIcon,
  CppIcon,
  NextIcon,
  NodeJsIcon,
  PG_ADMIN,
  PrismaORM,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSS,
  TypeScriptIcon,
} from "./skills-icons/skills-icons";

// ── Categories ───────────────────────────────────────────
export type Category = "all" | "frontend" | "backend" | "tools" | "language";
export type Ring = "inner" | "mid" | "outer";

// ── Skill Interface ───────────────────────────────────────
export interface Skill {
  id: string;
  label: string;
  name: string;
  tags: string[];
  cat: Omit<Category, "all">[]; // <-- multi-category support
  ring: Ring;
  angle: number;
  Icon: React.ElementType;
  color?: string;
}

// ── Base Skills ───────────────────────────────────────────
const BASE_SKILLS: Omit<Skill, "angle">[] = [
  {
    id: "ts",
    label: "TS",
    name: "TypeScript",
    tags: ["ES6+", "TypeScript"],
    cat: ["tools", "language"],
    ring: "inner",
    Icon: TypeScriptIcon,
  },
  {
    id: "js",
    label: "JS",
    name: "JavaScript",
    tags: ["ES6+", "JavaScript"],
    cat: ["frontend", "language"],
    ring: "inner",
    Icon: FileJs,
    color: "#F5F75B",
  },
  {
    id: "react",
    label: "React",
    name: "React",
    tags: ["Hooks", "Components", "JSX"],
    cat: ["frontend"],
    ring: "inner",
    Icon: ReactIcon,
  },
  {
    id: "next",
    label: "Next.js",
    name: "Next.js",
    tags: ["SSR", "App Router", "RSC"],
    cat: ["frontend"],
    ring: "inner",
    Icon: NextIcon,
  },
  {
    id: "node",
    label: "Node.js",
    name: "Node.js & Express",
    tags: ["REST", "JWT", "Middleware"],
    cat: ["backend"],
    ring: "inner",
    Icon: NodeJsIcon,
  },
  {
    id: "tailwind",
    label: "Tailwind",
    name: "TailwindCSS",
    tags: ["Utility-First", "Responsive"],
    cat: ["frontend"],
    ring: "mid",
    Icon: TailwindCSS,
  },
  {
    id: "redux",
    label: "Redux",
    name: "Redux Toolkit",
    tags: ["RTK Query", "State Mgmt"],
    cat: ["frontend"],
    ring: "mid",
    Icon: ReduxIcon,
  },
  {
    id: "pg",
    label: "Postgres",
    name: "PostgreSQL & Prisma",
    tags: ["SQL", "Prisma ORM"],
    cat: ["backend"],
    ring: "mid",
    Icon: PG_ADMIN,
  },
  {
    id: "git",
    label: "Git",
    name: "Git & GitHub",
    tags: ["Version Control", "CI/CD"],
    cat: ["tools"],
    ring: "mid",
    Icon: GitBranch,
    color: "#D74A34",
  },
  {
    id: "python",
    label: "Python",
    name: "Python",
    tags: ["Learning", "Scripts"],
    cat: ["backend", "language"], // <-- Python is both backend & language
    ring: "mid",
    Icon: PythonIcon,
  },
  {
    id: "boot",
    label: "Bootstrap",
    name: "Bootstrap",
    tags: ["Grid", "Components"],
    cat: ["frontend"],
    ring: "outer",
    Icon: BootstrapIcon,
  },
  {
    id: "prisma",
    label: "Prisma",
    name: "Prisma ORM",
    tags: ["Type-Safe", "Migrations"],
    cat: ["backend"],
    ring: "outer",
    Icon: PrismaORM,
  },
  {
    id: "cpp",
    label: "C++",
    name: "C++",
    tags: ["Systems", "OOP"],
    cat: ["language"],
    ring: "outer",
    Icon: CppIcon,
  },
];

// ── Skill Description ────────────────────────────────────
export const skillPara =
  "Technologies and tools I use to build modern, scalable web applications.";

// ── Function to assign dynamic angles ────────────────────
export const SKILLS: Skill[] = (() => {
  const rings: Record<Ring, Skill[]> = { inner: [], mid: [], outer: [] };

  BASE_SKILLS.forEach((skill) => {
    rings[skill.ring].push({ ...skill, angle: 0 }); // placeholder
  });

  Object.keys(rings).forEach((ringKey) => {
    const ring = ringKey as Ring;
    const items = rings[ring];
    const angleStep = 360 / items.length;
    items.forEach((skill, idx) => {
      skill.angle = idx * angleStep;
    });
  });

  return [...rings.inner, ...rings.mid, ...rings.outer];
})();

// ── Categories for center display and buttons ───────────
export const CATEGORIES: Record<
  Category,
  { icon: React.ElementType; label: string; sub: string }
> = {
  all: {
    icon: Laptop,
    label: "Full Stack",
    sub: "All Technologies",
  },
  frontend: {
    icon: ReactIcon,
    label: "Frontend",
    sub: "React · Next.js · Tailwind",
  },
  backend: {
    icon: NodeJsIcon,
    label: "Backend",
    sub: "Node · Express · Postgres",
  },
  tools: {
    icon: Lightning,
    label: "Tools",
    sub: "Git · TS · Python · C++",
  },
  language: {
    icon: PythonIcon,
    label: "Languages",
    sub: "Python · JavaScript · C++",
  },
};
