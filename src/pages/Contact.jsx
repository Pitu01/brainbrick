import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import { contactChannels, enquiryTopics } from "../data/aboutData";

function Contact() {
  const [topic, setTopic] = useState(enquiryTopics[0]);
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(124,58,237,.25),transparent_34%)]" />
        <Container className="relative z-10">
          <div className="py-20 sm:py-24">
            <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
              CONTACT BRAINBRICK
            </Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl">
              Let's talk
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                robotics.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              For product enquiries, workshops, partnerships or questions
              about the BrainBrick platform, get in touch.
            </p>
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionTitle
                eyebrow="Get In Touch"
                title="Choose the easiest way to reach us."
                description="Use WhatsApp for a quick conversation or email for a more detailed enquiry."
                align="left"
              />

              <div className="mt-10 space-y-4">
                {contactChannels.map((channel) => {
                  const Icon =
                    channel.title === "WhatsApp"
                      ? MessageCircle
                      : channel.title === "Email"
                        ? Mail
                        : MapPin;

                  return (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={channel.title === "Location" ? "_blank" : undefined}
                      rel={channel.title === "Location" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <Card className="p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                              {channel.title}
                            </p>
                            <p className="mt-1 font-black text-gray-900">
                              {channel.value}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {channel.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">Send an enquiry</h2>
                  <p className="text-sm text-gray-500">We'll use this form to prepare your enquiry.</p>
                </div>
              </div>

              {sent ? (
                <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6">
                  <h3 className="font-black text-green-800">Enquiry prepared</h3>
                  <p className="mt-2 text-sm leading-6 text-green-700">
                    This demo form is ready for connection to BrainBrick's
                    actual enquiry system. For now, please use WhatsApp or
                    email for direct contact.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/919665083964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brain-btn-primary"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </a>
                    <a href="mailto:ppbiswas100@gmail.com" className="brain-btn-secondary">
                      <Mail className="h-5 w-5" />
                      Email
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-bold text-gray-700">Name</span>
                      <input required name="name" className="brain-input mt-2" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-bold text-gray-700">Phone / WhatsApp</span>
                      <input required name="phone" className="brain-input mt-2" placeholder="+91 ..." />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-bold text-gray-700">Email</span>
                    <input type="email" name="email" className="brain-input mt-2" placeholder="you@example.com" />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-gray-700">What are you interested in?</span>
                    <select
                      value={topic}
                      onChange={(event) => setTopic(event.target.value)}
                      className="brain-input mt-2"
                    >
                      {enquiryTopics.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-gray-700">Message</span>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      className="brain-input mt-2"
                      placeholder="Tell us what you would like to discuss..."
                    />
                  </label>

                  <Button type="submit" className="w-full justify-center">
                    Prepare Enquiry
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                  <p className="text-xs leading-5 text-gray-400">
                    The website currently uses a front-end enquiry form.
                    Direct email/form-backend integration can be added in a
                    later deployment module.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-blue-600">BrainBrick Pune</p>
              <h2 className="mt-2 text-2xl font-black text-gray-900">
                Life Republic, Pune-411057
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Life+Republic%2C+Pune+411057"
              target="_blank"
              rel="noopener noreferrer"
              className="brain-btn-secondary"
            >
              <MapPin className="h-5 w-5" />
              Open Location
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;
