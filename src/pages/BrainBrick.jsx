import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Cpu,
  Scan,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import {
  ecosystemModules,
  learningLevels,
  platformPillars,
  platformPrinciples,
} from "../data/platformData";

const iconMap = {
  cpu: Cpu,
  bot: Bot,
  scan: Scan,
  code: Code2,
  target: Target,
};

function PlatformVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-gray-200 bg-slate-950 shadow-2xl">
        <div className="absolute inset-10 rounded-[2rem] border border-dashed border-white/10" />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative flex h-44 w-52 items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-[0_0_80px_rgba(59,130,246,.18)]">
            <Cpu className="h-24 w-24 text-blue-300" strokeWidth={1.2} />
            <span className="absolute -right-3 -top-3 rounded-full bg-blue-500 px-3 py-1 text-[10px] font-black tracking-wider text-white">
              BRAIN
            </span>
          </div>
          <div className="mt-5 h-5 w-64 rounded-full bg-blue-400/20 blur-md" />
          <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Controller visual placeholder
          </p>
        </div>

        {[
          ["Sensors", "left-7 top-12"],
          ["Code", "right-7 top-28"],
          ["Motors", "left-7 bottom-24"],
          ["Robot Body", "right-7 bottom-12"],
        ].map(([label, position]) => (
          <div
            key={label}
            className={`absolute ${position} rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function BrainBrick() {
  return (
    <main>
      {/* PLATFORM HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,.25),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(124,58,237,.25),transparent_35%)]" />
        <Container className="relative z-10">
          <div className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1fr_.9fr]">
            <div>
              <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                THE BRAINBRICK PLATFORM
              </Badge>

              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                One brain.
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Many robots.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                BrainBrick is conceived as a modular robotics learning
                platform: a programmable core can connect with different
                robot bodies, sensors, code and challenges.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/products">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  to="/workshops"
                  variant="secondary"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  See Learning Path
                </Button>
              </div>
            </div>

            <PlatformVisual />
          </div>
        </Container>
      </section>

      {/* CORE IDEA */}
      <section className="brain-section bg-white">
        <Container>
          <SectionTitle
            eyebrow="Core Architecture"
            title="The platform connects the parts of robotics."
            description="Instead of treating every robot as a separate product, BrainBrick is designed around a reusable learning architecture."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {platformPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon];
              return (
                <Card key={pillar.id} className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <Badge variant="gray">{pillar.shortTitle}</Badge>
                  </div>

                  <h2 className="mt-7 text-2xl font-black text-gray-900">
                    {pillar.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-500">
                    {pillar.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-gray-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ECOSYSTEM */}
      <section className="brain-section bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="The Ecosystem"
            title="A robot is more than its controller."
            description="BrainBrick brings together the physical build, electronics, programming and challenge into one learning system."
          />

          <div className="relative mt-16">
            <div className="hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:absolute lg:left-12 lg:right-12 lg:top-12 lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {ecosystemModules.map((module) => {
                const Icon = iconMap[module.icon];
                return (
                  <Card key={module.title} className="relative p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-100">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 text-xs font-black uppercase tracking-wider text-blue-600">
                      {module.subtitle}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {module.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* LEARNING PROGRESSION */}
      <section className="brain-section bg-white">
        <Container>
          <SectionTitle
            eyebrow="Learning Progression"
            title="Grow from following to creating."
            description="The same platform can support increasingly sophisticated learning experiences as skills develop."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {learningLevels.map((level, index) => (
              <Card key={level.level} className="relative overflow-hidden p-7">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[3rem] bg-gradient-to-br from-blue-50 to-purple-50" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-gray-200">
                      {level.level}
                    </span>
                    {index < learningLevels.length - 1 && (
                      <ArrowRight className="hidden h-5 w-5 text-gray-300 lg:block" />
                    )}
                  </div>

                  <Badge className="mt-5">{level.age}</Badge>
                  <h3 className="mt-5 text-2xl font-black text-gray-900">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {level.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {level.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="brain-section bg-slate-950">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Badge variant="purple" className="bg-purple-500/10 text-purple-300 ring-1 ring-purple-400/20">
                PLATFORM PRINCIPLES
              </Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Designed for curiosity.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                The platform should make it easy to start, rewarding to
                experiment and possible to keep progressing.
              </p>
            </div>

            <div className="grid gap-3">
              {platformPrinciples.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-black text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-slate-200">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ARCHITECTURE VISUAL */}
      <section className="brain-section bg-white">
        <Container>
          <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-7 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <Badge variant="orange">MODULAR BY DESIGN</Badge>
                <h2 className="mt-5 text-3xl font-black text-gray-900 sm:text-4xl">
                  Change the body.
                  <span className="block brain-gradient-text">
                    Keep learning.
                  </span>
                </h2>
                <p className="mt-5 leading-8 text-gray-600">
                  The long-term vision is a platform where the learner does
                  not need to start from zero every time a new robot is
                  introduced. The core concepts can carry forward from one
                  build to another.
                </p>
                <div className="mt-7">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Explore the product ecosystem
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Brain", icon: Cpu },
                  { title: "Body A", icon: Bot },
                  { title: "Body B", icon: Wrench },
                  { title: "Sensors", icon: Scan },
                  { title: "Code", icon: Code2 },
                  { title: "Challenge", icon: Target },
                ].map(({ title, icon: Icon }, index) => (
                  <div
                    key={title}
                    className={`rounded-2xl border bg-white p-5 shadow-sm ${
                      index === 0
                        ? "border-blue-200 ring-2 ring-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <Icon className="h-6 w-6 text-blue-600" />
                    <p className="mt-4 text-sm font-bold text-gray-800">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="brain-section bg-gradient-to-br from-blue-600 to-purple-700">
        <Container>
          <div className="text-center text-white">
            <Badge
              variant="blue"
              className="bg-white/10 text-blue-100 ring-1 ring-white/10"
            >
              NEXT STEP
            </Badge>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Ready to explore the BrainBrick ecosystem?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              See the current product concepts or discover how the platform
              can become a foundation for hands-on robotics learning.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/products" variant="secondary">
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Contact BrainBrick
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default BrainBrick;
