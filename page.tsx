"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Calendar, GraduationCap, HandCoins, CheckCircle2, Store, MapPin, Mail, ExternalLink } from "lucide-react";

// Single-file React site — Chico Digital Transformation Lab (ENTIRE SITE)
// Model: 2 cycles/year • up to 12 projects/year • price not to exceed $2,000
// Funds: Build a BSIS Endowment and fund College of Business scholarships
// Packages: POS package + Social Marketing Exposure

const Button = ({ as: As = "button", className = "", children, ...props }: any) => (
  <As className={`inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition ${className}`} {...props}>
    {children}
  </As>
);

const OutlineButton = ({ as: As = "button", className = "", children, ...props }: any) => (
  <As className={`inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition ${className}`} {...props}>
    {children}
  </As>
);

const Card = ({ className = "", children }: any) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children }: any) => <div className="p-5 border-b border-slate-100">{children}</div>;
const CardTitle = ({ children }: any) => <h3 className="text-base font-semibold tracking-tight">{children}</h3>;
const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-5 text-sm text-slate-600 ${className}`}>{children}</div>
);

const Stat = ({ value, label }: any) => (
  <div className="text-center">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-slate-500 text-xs">{label}</div>
  </div>
);

const Section = ({ id, eyebrow, title, subtitle, children }: any) => (
  <section id={id} className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10 md:mb-14">
        {eyebrow && (
          <div className="text-xs inline-block bg-slate-100 rounded-full px-3 py-1 mb-3">{eyebrow}</div>
        )}
        {title && <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>}
        {subtitle && <p className="text-slate-600 mt-3 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default function Page() {
  const [toast, setToast] = useState("");

  // Basic SEO metadata (already handled by layout metadata, but keep the effect harmless)
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = "Chico Digital Transformation Lab — Student‑powered digital transformation";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Rocket className="w-5 h-5" />
            <span>Chico Digital Transformation Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#services">Services</a>
            <a className="text-slate-600 hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="text-slate-600 hover:text-slate-900" href="#about">About</a>
            <a className="text-slate-600 hover:text-slate-900" href="#scholarship">Scholarship</a>
            <a className="text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button as="a" href="#contact">Apply Now</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Student‑powered digital transformation for local businesses
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              We connect small businesses with Chico State–trained teams to deliver real projects while building a
              <span className="font-medium"> BSIS Endowment</span> and ongoing scholarships in the College of Business.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button as="a" href="#contact" className="h-11 px-6">Apply for a Project</Button>
              <OutlineButton as="a" href="#services" className="h-11 px-4">
                Explore services <ExternalLink className="w-4 h-4 ml-2" />
              </OutlineButton>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="2" label="cycles / year" />
              <Stat value="12" label="projects / year" />
              <Stat value="$2,000" label="max per project" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>How it works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 mt-0.5" />
                  <p>
                    Two project cycles per year (Spring & Fall) with up to <strong>6 projects per cycle</strong>.
                  </p>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="w-5 h-5 mt-0.5" />
                  <p>Student interns earn academic credit under professional supervision.</p>
                </div>
                <div className="flex gap-3">
                  <HandCoins className="w-5 h-5 mt-0.5" />
                  <p>
                    Project fees are reinvested, build a <strong>BSIS Endowment</strong>, and fund annual scholarships.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5" />
                  <p>Clear scopes, hands‑on training, and usable deliverables.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="Services"
        title="Practical solutions for small businesses"
        subtitle="We design and implement tools your team can actually use, with training and documentation."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Digital Strategy & Transformation</CardTitle></CardHeader>
            <CardContent>
              Modern workflows, light automation, and analytics that improve efficiency and reach.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Point‑of‑Sale (POS) Package</CardTitle></CardHeader>
            <CardContent>
              Selection guidance, setup, configuration, and staff training for retailers, cafés, and services.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Social Marketing Exposure</CardTitle></CardHeader>
            <CardContent>
              Brand/profile optimization, a 3‑month content plan, and engagement reports to boost visibility.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Operations & Tools</CardTitle></CardHeader>
            <CardContent>
              Inventory, scheduling, and lightweight CRM aligned to your goals and capacity.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Training & Support</CardTitle></CardHeader>
            <CardContent>
              SOPs, workshops, and handoff so your team thrives after launch.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Deliverables You Can Use</CardTitle></CardHeader>
            <CardContent>
              Roadmaps, dashboards, and playbooks prioritized by ROI and effort.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Case Studies */}
      <Section
        id="cases"
        eyebrow="Case Studies"
        title="Proof in the results"
        subtitle="A few anonymized examples from recent student‑led projects."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Independent Retailer — POS turnaround</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Challenge:</strong> Manual checkout, inventory inaccuracies.</p>
              <p className="mb-2"><strong>What we did:</strong> Deployed POS, trained staff, set up basic SKU tracking.</p>
              <p><strong>Outcome (8 weeks):</strong> 20% faster checkout, shrink reduced by ~8%.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Café — social exposure sprint</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Challenge:</strong> Low awareness, irregular posting.</p>
              <p className="mb-2"><strong>What we did:</strong> Optimized profiles, 3‑month content plan, analytics.</p>
              <p><strong>Outcome (12 weeks):</strong> +35% follower growth, +18% weekend sales (self‑reported).</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Services SMB — ops & CRM lite</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Challenge:</strong> Missed leads, double‑booking.</p>
              <p className="mb-2"><strong>What we did:</strong> Scheduling + lightweight CRM, SOP playbook.</p>
              <p><strong>Outcome (10 weeks):</strong> Lead response under 24h, no‑show rate down ~15%.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Affordable, transparent, and future‑focused"
        subtitle="Each project is scoped individually and is not to exceed $2,000. Typical duration is 8–10 weeks. All funds support creation of a BSIS Endowment and scholarships in the College of Business."
      >
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card>
            <CardHeader><CardTitle>What’s included</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Student team (2–3) with faculty/pro oversight</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Project plan, milestones, and status updates</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Final presentation & documentation</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Staff training & handoff</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Not to exceed</CardTitle></CardHeader>
            <CardContent>
              <div className="text-4xl font-semibold">$2,000</div>
              <p className="text-slate-600 text-sm mt-2">per project • 8–10 weeks</p>
              <div className="mt-6"><Button className="w-full h-11">Request a Scope</Button></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Your investment in the future</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Supports CDTL’s student‑led innovation</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Contributes to a <strong>BSIS Endowment</strong> for long‑term program sustainability</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Funds <strong>BSIS scholarships</strong> and student research annually</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/> Enables 12 high‑impact community projects per year</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-12 text-center text-slate-600 text-sm max-w-3xl mx-auto">
          Program proceeds build a permanent endowment so today’s projects create opportunity for tomorrow’s students and businesses.
        </p>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Chico‑based lab with an education + community mission"
        subtitle="Faculty‑led and student‑powered, we combine academic rigor with real‑world delivery."
      >
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card>
            <CardHeader><CardTitle>Our Mission</CardTitle></CardHeader>
            <CardContent>
              Empower small businesses through affordable digital transformation while developing the next generation of business technology leaders.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Our Impact</CardTitle></CardHeader>
            <CardContent>
              <div className="flex justify-between"><span>Projects per year</span><span>12</span></div>
              <div className="flex justify-between"><span>Cycles per year</span><span>2</span></div>
              <div className="flex justify-between"><span>Community value created</span><span>$24,000+</span></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Team */}
      <Section
        id="team"
        eyebrow="Team"
        title="Faculty‑led, student‑powered"
        subtitle="Mentored Chico State students deliver the work with guidance from faculty and community partners."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Faculty Mentors</CardTitle></CardHeader>
            <CardContent>Project oversight, QA, and professional development for student teams.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Student Interns</CardTitle></CardHeader>
            <CardContent>2–3 person teams earning academic credit execute scoped deliverables.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Community Partners</CardTitle></CardHeader>
            <CardContent>Local organizations that provide real problems and receive tangible outcomes.</CardContent>
          </Card>
        </div>
      </Section>

      {/* Scholarship */}
      <Section
        id="scholarship"
        eyebrow="Scholarship"
        title="Supporting the next generation of innovators"
        subtitle="A portion of proceeds builds the BSIS Endowment and funds scholarships recognizing excellence in applied technology and community service."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Eligibility</CardTitle></CardHeader>
            <CardContent>BSIS students who demonstrate impact through real‑world projects and community service.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Selection</CardTitle></CardHeader>
            <CardContent>Annual review by program leads in partnership with the College of Business.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Support the Fund</CardTitle></CardHeader>
            <CardContent>
              Help expand access and opportunity for students building the region’s digital future.
              <div className="mt-4"><OutlineButton as="a" href="#contact" className="w-full h-11">Sponsor a Scholarship</OutlineButton></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Partner with us"
        subtitle="Tell us about your business and goals. We’ll follow up with a simple scope and timeline."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader><CardTitle>Project Inquiry</CardTitle></CardHeader>
            <CardContent>
              <form
                className="grid sm:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setToast("Thanks! We received your inquiry and will follow up shortly.");
                  setTimeout(() => setToast(""), 3000);
                }}
              >
                <input className="border border-slate-300 rounded-xl px-3 py-2 text-sm" placeholder="Your name" required />
                <input className="border border-slate-300 rounded-xl px-3 py-2 text-sm" placeholder="Business name" required />
                <input className="border border-slate-300 rounded-xl px-3 py-2 text-sm sm:col-span-2" placeholder="Email" type="email" required />
                <textarea className="border border-slate-300 rounded-xl px-3 py-2 text-sm sm:col-span-2 min-h-[120px]" placeholder="What would you like help with?" required />
                <div className="sm:col-span-2 flex items-center justify-between">
                  <div className="text-xs text-slate-500">Typical projects run 8–10 weeks. Max fee $2,000.</div>
                  <Button type="submit" className="h-11 px-6">Submit</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Contact Details</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> Chico, California</div>
              <div className="flex gap-2 items-center"><Mail className="w-4 h-4" /> info@cdtl.org</div>
              <div className="pt-2"><OutlineButton as="a" href="#contact" className="w-full h-11">Apply Now</OutlineButton></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Privacy */}
      <Section
        id="privacy"
        eyebrow="Privacy"
        title="Privacy & data use"
        subtitle="We only use your information to respond to your inquiry and schedule a project. We do not sell or share personal data."
      >
        <div className="text-sm text-slate-600 space-y-3 max-w-3xl">
          <p><strong>What we collect:</strong> Name, email, business name, and the details you submit in the form.</p>
          <p><strong>How we use it:</strong> Communication about scoping, scheduling, and project delivery. Optional aggregated, de‑identified stats for program reporting.</p>
          <p><strong>Retention:</strong> We retain inquiry data for up to 18 months unless you request deletion at <a className="underline" href="mailto:privacy@cdtl.org">privacy@cdtl.org</a>.</p>
        </div>
      </Section>

      {/* CTA Bar */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Ready to transform your business?</h3>
            <p className="text-sm text-slate-600">Apply for the next project cycle or sponsor a scholarship to expand impact.</p>
          </div>
          <div className="flex gap-3">
            <Button as="a" href="#contact">Apply Now</Button>
            <OutlineButton as="a" href="#scholarship">Sponsor a Scholarship</OutlineButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4" />
            <span>© {new Date().getFullYear()} Chico Digital Transformation Lab</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#scholarship" className="hover:text-slate-900">Scholarship</a>
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-sm px-4 py-3 rounded-xl shadow-lg">{toast}</div>
      )}
    </div>
  );
}
