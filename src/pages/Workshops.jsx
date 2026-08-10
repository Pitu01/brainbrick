import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Lightbulb,
  MoveRight,
  RotateCcw,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import {
  workshopAudiences,
  workshopBenefits,
  workshopFormats,
  workshopJourney,
} from "../data/workshopData";

const formatIcons = [Bot, Wrench, Sparkles];

function WorkshopVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,.22),transparent_28%),radial-gradient(circle_at_75%_75%,rgba(139,92,246,.22),transparent_30%)]" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-40 w-48 items-center justify-center rounded-[2rem] border border-blue-400/30 bg-white/[0.05] shadow-[0_0_70px_rgba(59,130,246,.15)]">
            <Bot className="h-24 w-24 text-blue-300" strokeWidth={1.15} />
          </div>
          <div className="mt-5 h-4 w-56 rounded-full bg-blue-400/20 blur-md" />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Workshop photo placeholder
          </p>
        </div>

        <div className="absolute left-6 top-7 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
          Build
        </div>
        <div className="absolute right-6 top-16 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
          Code
        </div>
        <div className="absolute bottom-16 left-6 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
          Test
        </div>
        <div className="absolute bottom-7 right-6 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
          Create
        </div>
      </div>
    </div>
  );
}

function Workshops() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(124,58,237,.25),transparent_34%)]" />
        <Container className="relative z-10">
          <div className="grid min-h-[610px] items-center gap-12 py-20 lg:grid-cols-[1fr_.9fr]">
            <div>
              <Badge
                variant="blue"
                className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20"
              >
                BRAINBRICK WORKSHOPS
              </Badge>

              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                Don't just watch robotics.
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Build it.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                BrainBrick workshops are designed around a simple learning
                cycle: understand, build, code, test, improve and share.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact">
                  Enquire About a Workshop
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  to="/products"
                  variant="secondary"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Explore Robot Platforms
                </Button>
              </div>
            </div>

            <WorkshopVisual />
          </div>
        </Container>
      </section>

      {/* WORKSHOP FORMATS */}
      <section className="brain-section bg-white">
        <Container>
          <SectionTitle
            eyebrow="Workshop Formats"
            title="A learning path that can grow with the learner."
            description="Different workshop formats can introduce robotics, deepen practical skills or provide room for independent creation."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {workshopFormats.map((format, index) => {
              const Icon = formatIcons[index];
              return (
                <Card key={format.id} className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600" />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <Icon className="h-7 w-7" />
                      </div>
                      <Badge>{format.label}</Badge>
                    </div>

                    <h2 className="mt-7 text-2xl font-black text-gray-900">
                      {format.title}
                    </h2>

                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                      {format.duration}
                    </p>

                    <p className="mt-5 leading-7 text-gray-500">
                      {format.description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {format.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* JOURNEY */}
      <section className="brain-section bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="The Workshop Journey"
            title="Learning happens in the loop."
            description="A workshop is not just a demonstration. Learners repeatedly move between building, thinking, testing and improving."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workshopJourney.map((step) => (
              <Card key={step.number} className="p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-black text-white">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-black text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY HANDS-ON */}
      <section className="brain-section bg-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <Badge variant="purple">WHY HANDS-ON?</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Make the learning visible.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                When a learner changes a line of code and the robot changes its
                behaviour, an abstract programming idea becomes something they
                can see, test and improve.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  [Code2, "Code → Behaviour"],
                  [Wrench, "Build → Mechanism"],
                  [RotateCcw, "Test → Feedback"],
                  [Lightbulb, "Improve → Insight"],
                ].map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4"
                  >
                    <Icon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-bold text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl sm:p-10">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-blue-300" />
                <span className="text-sm font-black uppercase tracking-wider text-blue-300">
                  BrainBrick Learning Loop
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Build", "Make something physical."],
                  ["Code", "Tell it what to do."],
                  ["Observe", "See what actually happens."],
                  ["Debug", "Find the mismatch."],
                  ["Improve", "Change the build or code."],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xs font-black text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-bold">{title}</div>
                      <div className="mt-1 text-sm text-slate-400">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="brain-section bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="Workshop Experience"
            title="Built around doing, not passive watching."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workshopBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-extrabold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* AUDIENCE */}
      <section className="brain-section bg-white">
        <Container>
          <div className="rounded-[2rem] border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-7 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
              <div>
                <Badge variant="blue">POSSIBLE FORMATS</Badge>
                <h2 className="mt-5 text-3xl font-black text-gray-900 sm:text-4xl">
                  Flexible enough for different settings.
                </h2>
                <p className="mt-5 leading-8 text-gray-600">
                  BrainBrick workshop formats can be adapted to the available
                  space, group size, equipment and learning objective.
                </p>
              </div>

              <div className="grid gap-3">
                {workshopAudiences.map((audience) => (
                  <div
                    key={audience}
                    className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
                  >
                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-sm font-bold text-gray-700">
                      {audience}
                    </span>
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
              WORKSHOP ENQUIRY
            </Badge>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Want to bring BrainBrick to your community?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Contact BrainBrick to discuss a practical robotics workshop,
              demonstration session or learning format.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="secondary">
                Contact BrainBrick
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href="https://wa.me/919665083964?text=Hello%20BrainBrick,%20I%20would%20like%20to%20know%20about%20robotics%20workshops."
                target="_blank"
                rel="noopener noreferrer"
                className="brain-btn-primary bg-white text-blue-700 hover:bg-blue-50"
              >
                WhatsApp Enquiry
                <MoveRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Workshops;
