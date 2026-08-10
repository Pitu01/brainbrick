import { ArrowRight, Bot, Code2, Cpu, GraduationCap, Lightbulb, MessageCircle, Puzzle, Sparkles, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Badge from "../components/common/Badge";

const steps = [
  [Puzzle,"01","Build","Start with hands-on construction and understand every part by putting the robot together."],
  [Code2,"02","Code","Turn ideas into movement and behaviour through programming and logical problem solving."],
  [Zap,"03","Experiment","Change, test, observe and improve. Every experiment becomes part of the learning journey."],
  [Sparkles,"04","Create","Move beyond instructions and design your own robotic ideas."],
];

const features = [
  [Cpu,"One Brain, Many Builds","A programmable BrainBrick controller can become the foundation for multiple robot projects."],
  [Wrench,"Modular Learning","Learn progressively by changing bodies, sensors, mechanisms and challenges."],
  [GraduationCap,"Learn by Doing","Build, code and experiment through practical learning activities."],
  [Lightbulb,"Room for Creativity","Move from guided projects toward independent creation."],
];

const paths = [
  ["STARTER","Starter Robots","Begin with compact, hands-on robot builds designed to make robotics approachable.",Bot,"/products"],
  ["CORE PLATFORM","BrainBrick","Explore the programmable controller and the modular robotics ecosystem around it.",Cpu,"/brainbrick"],
  ["HANDS-ON","Workshops","Build and experiment through practical robotics sessions and guided activities.",GraduationCap,"/workshops"],
];

export default function Home() {
  return <main>
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.30),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(124,58,237,.28),transparent_32%)]" />
      <Container className="relative z-10">
        <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-3xl">
            <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">ROBOTICS • STEM • HANDS-ON LEARNING</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Build.<span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Code.</span><span className="block">Create.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">BrainBrick is a hands-on robotics learning platform where learners build robots, understand how they work, write code, experiment and create.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button to="/products">Explore Robotics <ArrowRight className="h-5 w-5" /></Button><Button to="/workshops" variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">Join a Workshop</Button></div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7 text-white"><div><b className="text-2xl">Build</b><small className="block text-xs text-slate-400">Hands-on</small></div><div><b className="text-2xl">Code</b><small className="block text-xs text-slate-400">Logic-driven</small></div><div><b className="text-2xl">Create</b><small className="block text-xs text-slate-400">Open-ended</small></div></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl"><div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl"><div className="absolute inset-8 rounded-[2rem] border border-dashed border-white/10" /><div className="absolute left-1/2 top-1/2 flex w-[72%] -translate-x-1/2 -translate-y-1/2 flex-col items-center"><div className="flex h-48 w-56 items-center justify-center rounded-[2rem] border border-blue-300/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20"><Bot className="h-28 w-28 text-blue-300" strokeWidth={1.2}/></div><p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Robot visual placeholder</p></div></div></div>
        </div>
      </Container>
    </section>

    <section className="brain-section bg-white"><Container><SectionTitle eyebrow="THE BRAINBRICK APPROACH" title="Robotics should be experienced, not just explained." description="BrainBrick connects physical building with coding and experimentation so learners understand technology by making it work."/><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map(([Icon,n,title,text])=><Card key={n} className="p-7"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6"/></div><span className="text-sm font-black text-gray-200">{n}</span></div><h3 className="mt-7 text-xl font-extrabold text-gray-900">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-500">{text}</p></Card>)}</div></Container></section>

    <section className="brain-section bg-slate-50"><Container><div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><Badge variant="purple">BRAINBRICK PLATFORM</Badge><h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">One core.<span className="block brain-gradient-text">Many possibilities.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-gray-600">BrainBrick is being developed as a modular robotics ecosystem: a common programmable brain can support different bodies, sensors, mechanisms and learning challenges.</p><div className="mt-8"><Button to="/brainbrick">Discover BrainBrick <ArrowRight className="h-5 w-5"/></Button></div></div><div className="grid gap-5 sm:grid-cols-2">{features.map(([Icon,title,text])=><Card key={title} className="p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-purple-600"><Icon className="h-5 w-5"/></div><h3 className="mt-5 font-extrabold text-gray-900">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{text}</p></Card>)}</div></div></Container></section>

    <section className="brain-section bg-white"><Container><SectionTitle eyebrow="EXPLORE BRAINBRICK" title="Start where your curiosity takes you." description="Explore products, understand the BrainBrick platform or experience robotics through workshops."/><div className="mt-14 grid gap-6 lg:grid-cols-3">{paths.map(([badge,title,text,Icon,href])=><Link key={title} to={href} className="group"><Card className="h-full overflow-hidden"><div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"/><div className="p-8"><Badge>{badge}</Badge><div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"><Icon className="h-7 w-7"/></div><h3 className="mt-6 text-2xl font-extrabold text-gray-900">{title}</h3><p className="mt-3 leading-7 text-gray-500">{text}</p><div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Explore <ArrowRight className="h-4 w-4"/></div></div></Card></Link>)}</div></Container></section>

    <section className="brain-section bg-gradient-to-br from-blue-600 to-purple-700"><Container><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl sm:p-12 lg:p-16"><div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><Badge variant="blue" className="bg-white/10 text-blue-100 ring-1 ring-white/10">HANDS-ON WORKSHOPS</Badge><h2 className="mt-5 max-w-3xl text-3xl font-black sm:text-5xl">Give robotics a place to come alive.</h2><p className="mt-5 max-w-2xl leading-8 text-blue-100">Discover practical workshop formats for building, coding and experimenting with robots in a guided environment.</p></div><Button to="/workshops" variant="secondary" className="border-white/30 bg-white text-blue-700 hover:bg-blue-50">View Workshops <ArrowRight className="h-5 w-5"/></Button></div></div></Container></section>

    <section className="bg-white py-16"><Container><div className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-10 lg:flex-row lg:items-center"><div><p className="text-sm font-bold uppercase tracking-wider text-blue-600">Talk to BrainBrick</p><h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">Have a robotics idea?</h2><p className="mt-2 max-w-2xl text-gray-500">Connect with us to discuss products, workshops or the BrainBrick platform.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button to="/contact" variant="secondary">Contact Us</Button><a href="https://wa.me/919665083964?text=Hello%20BrainBrick,%20I%20would%20like%20to%20discuss%20robotics." target="_blank" rel="noopener noreferrer" className="brain-btn-primary"><MessageCircle className="h-5 w-5"/>WhatsApp</a></div></div></Container></section>
  </main>;
}
