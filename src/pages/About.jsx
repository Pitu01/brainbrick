import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Cpu,
  Lightbulb,
  MapPin,
  MessageCircle,
  Puzzle,
  Sparkles,
  Target,
} from "lucide-react";

import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import { aboutJourney, aboutValues } from "../data/aboutData";

const valueIcons = [Bot, Puzzle, Lightbulb, Target];

function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(124,58,237,.25),transparent_34%)]" />
        <Container className="relative z-10">
          <div className="grid min-h-[600px] items-center gap-12 py-20 lg:grid-cols-[1fr_.9fr]">
            <div>
              <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                ABOUT BRAINBRICK
              </Badge>
              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                Making robotics
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  something you do.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                BrainBrick is being developed as a hands-on robotics learning
                platform that connects building, programming, experimentation
                and creativity.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/brainbrick">
                  Explore the Platform
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button to="/contact" variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  Contact BrainBrick
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl">
                <div className="absolute inset-10 rounded-[2rem] border border-dashed border-white/10" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="flex h-44 w-52 items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Bot className="h-28 w-28 text-blue-300" strokeWidth={1.1} />
                  </div>
                  <div className="mt-5 h-5 w-64 rounded-full bg-blue-400/20 blur-md" />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    BrainBrick visual placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <SectionTitle
            eyebrow="Our Thinking"
            title="Robotics is a way to learn by making."
            description="BrainBrick brings physical construction and programming together so that ideas become visible, testable and improvable."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card key={value.title} className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-gray-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{value.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="brain-section bg-slate-50">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <Badge variant="purple">THE BRAINBRICK IDEA</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Build once.
                <span className="block brain-gradient-text">Keep learning.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                The platform is designed around a reusable learning core. A
                learner can move from a simple build toward more capable
                robots without losing the concepts already learned.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Build physical understanding",
                  "Connect code to behaviour",
                  "Experiment and debug",
                  "Move toward independent creation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl sm:p-10">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-blue-300" />
                <span className="text-sm font-black uppercase tracking-wider text-blue-300">
                  Learning System
                </span>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [Puzzle, "Build"],
                  [Code2, "Code"],
                  [Sparkles, "Experiment"],
                  [Target, "Create"],
                ].map(([Icon, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-6 w-6 text-blue-300" />
                    <div className="mt-4 font-black">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <SectionTitle
            eyebrow="The Journey"
            title="Where we want the platform to lead."
            description="BrainBrick is being shaped as a progressive system rather than a single robot or one-time activity."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {aboutJourney.map((step) => (
              <Card key={step.number} className="p-8">
                <div className="text-5xl font-black text-gray-200">{step.number}</div>
                <h3 className="mt-5 text-2xl font-black text-gray-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-500">{step.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="brain-section bg-gradient-to-br from-blue-600 to-purple-700">
        <Container>
          <div className="text-center text-white">
            <Badge variant="blue" className="bg-white/10 text-blue-100 ring-1 ring-white/10">
              BUILD • CODE • CREATE
            </Badge>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Curious about what BrainBrick is becoming?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Explore the platform, products and workshops, or get in touch
              directly with BrainBrick in Pune.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/products" variant="secondary">
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button to="/workshops" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Workshops
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;
