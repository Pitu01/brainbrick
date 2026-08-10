import { Bot, Cpu, Eye, Gauge, Layers3, Radio, RotateCw, Sparkles } from "lucide-react";

export const products = [
  {
    slug: "starter-line-follower",
    name: "Starter Line Follower",
    category: "Starter Robots",
    level: "Foundation",
    tagline: "A compact first step into autonomous robotics.",
    description: "A placeholder product concept for learning sensors, motors, control logic and basic autonomous movement.",
    icon: Bot,
    accent: "blue",
    status: "Coming Soon",
    features: ["Line sensing", "Motor control", "Basic programming", "Hands-on assembly"],
  },
  {
    slug: "brainbrick-controller",
    name: "BrainBrick Controller",
    category: "Core Platform",
    level: "Platform",
    tagline: "The programmable core of the BrainBrick ecosystem.",
    description: "A placeholder platform concept for a reusable programmable controller supporting different robot bodies, sensors and projects.",
    icon: Cpu,
    accent: "purple",
    status: "Platform Preview",
    features: ["Programmable core", "Modular projects", "Sensor integration", "Expandable learning"],
  },
  {
    slug: "smart-sensor-bot",
    name: "Smart Sensor Bot",
    category: "Exploration Robots",
    level: "Intermediate",
    tagline: "Explore robotics through sensing and decision making.",
    description: "A placeholder product concept for projects that combine multiple inputs with programmed decisions and movement.",
    icon: Eye,
    accent: "orange",
    status: "Coming Soon",
    features: ["Multiple sensors", "Decision logic", "Motion experiments", "Challenge-based learning"],
  },
  {
    slug: "robotics-mechanics-kit",
    name: "Robotics Mechanics Kit",
    category: "DIY Components",
    level: "Builder",
    tagline: "Build mechanisms, linkages and moving structures.",
    description: "A placeholder kit concept for understanding mechanical construction alongside electronics and programming.",
    icon: RotateCw,
    accent: "green",
    status: "Concept",
    features: ["Mechanical builds", "Modular parts", "Motion mechanisms", "Design experiments"],
  },
  {
    slug: "sensor-expansion-pack",
    name: "Sensor Expansion Pack",
    category: "Expansion",
    level: "Extension",
    tagline: "Add new inputs and challenges to your robot.",
    description: "A placeholder expansion concept for extending BrainBrick projects with additional sensing and experimentation options.",
    icon: Radio,
    accent: "blue",
    status: "Concept",
    features: ["Sensor expansion", "New experiments", "Modular integration", "Project extensions"],
  },
  {
    slug: "robot-challenge-kit",
    name: "Robot Challenge Kit",
    category: "Learning Challenges",
    level: "Advanced",
    tagline: "Turn a robot into a problem-solving challenge.",
    description: "A placeholder challenge concept for structured activities involving navigation, control, speed, accuracy and creative solutions.",
    icon: Gauge,
    accent: "purple",
    status: "Concept",
    features: ["Timed challenges", "Navigation", "Control tuning", "Creative problem solving"],
  },
];

export const categories = ["All", "Starter Robots", "Core Platform", "Exploration Robots", "DIY Components", "Expansion", "Learning Challenges"];

export const productHighlights = [
  { icon: Layers3, title: "Modular", text: "Build a learning path from a common robotics foundation." },
  { icon: Sparkles, title: "Hands-on", text: "Learn by assembling, coding, testing and improving." },
  { icon: Cpu, title: "Programmable", text: "Connect physical construction with software thinking." },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
