export const platformPillars = [
  {
    id: "brain",
    title: "BrainBrick Controller",
    shortTitle: "One Brain",
    description:
      "A programmable controller designed to sit at the centre of a modular robotics learning system.",
    icon: "cpu",
    points: [
      "Programmable control",
      "Sensor and motor connections",
      "Reusable across robot builds",
      "Designed for progressive learning",
    ],
  },
  {
    id: "bodies",
    title: "Robot Bodies",
    shortTitle: "Many Bodies",
    description:
      "Different physical robot bodies can be paired with the same core learning platform.",
    icon: "bot",
    points: [
      "Age-appropriate mechanical complexity",
      "Different movement concepts",
      "Build-and-rebuild approach",
      "Room for custom designs",
    ],
  },
  {
    id: "sensors",
    title: "Sensors & Inputs",
    shortTitle: "Sense",
    description:
      "Sensors turn a robot from a moving machine into an interactive system that can observe its environment.",
    icon: "scan",
    points: [
      "Understand inputs",
      "Connect sensing to code",
      "Experiment with conditions",
      "Build responsive behaviours",
    ],
  },
  {
    id: "code",
    title: "Code & Logic",
    shortTitle: "Think",
    description:
      "Programming connects what the learner builds with what the robot actually does.",
    icon: "code",
    points: [
      "Logic and sequencing",
      "Inputs and outputs",
      "Debugging through experiments",
      "Progress from guided to creative projects",
    ],
  },
];

export const learningLevels = [
  {
    level: "01",
    title: "Discover",
    age: "Foundation",
    description:
      "Understand the basic robot: parts, movement, simple inputs and cause-and-effect.",
    skills: ["Parts", "Movement", "Simple inputs", "Observation"],
  },
  {
    level: "02",
    title: "Build",
    age: "Developing",
    description:
      "Assemble increasingly capable robot bodies and understand how mechanical choices affect behaviour.",
    skills: ["Assembly", "Mechanisms", "Motors", "Sensors"],
  },
  {
    level: "03",
    title: "Code",
    age: "Programming",
    description:
      "Use programming logic to control movement, respond to sensors and solve defined challenges.",
    skills: ["Logic", "Control", "Conditions", "Debugging"],
  },
  {
    level: "04",
    title: "Create",
    age: "Advanced",
    description:
      "Combine mechanics, electronics and code to develop original robot ideas and challenges.",
    skills: ["Design", "Integration", "Experimentation", "Creativity"],
  },
];

export const ecosystemModules = [
  {
    title: "Controller",
    subtitle: "The Brain",
    description: "The programmable centre that connects code, inputs and outputs.",
    icon: "cpu",
  },
  {
    title: "Robot Bodies",
    subtitle: "The Form",
    description: "Mechanical platforms that give the controller different physical capabilities.",
    icon: "bot",
  },
  {
    title: "Sensors",
    subtitle: "The Senses",
    description: "Inputs that let the robot detect and react to its environment.",
    icon: "scan",
  },
  {
    title: "Software",
    subtitle: "The Logic",
    description: "The programming layer that turns ideas into robot behaviour.",
    icon: "code",
  },
  {
    title: "Challenges",
    subtitle: "The Mission",
    description: "Structured problems that turn building and coding into purposeful learning.",
    icon: "target",
  },
];

export const platformPrinciples = [
  "Build first, then understand.",
  "Make code visible through physical behaviour.",
  "Learn by testing and improving.",
  "Reuse the core platform across projects.",
  "Progress from guided builds to independent creation.",
];
