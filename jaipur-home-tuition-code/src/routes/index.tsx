import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Home Tuition in Jaipur — Verified Tutors for Class 1–12, PCM & Competitive Exams" },
      { name: "description", content: "Looking for the best home tuition in Jaipur? Get experienced, background-verified home tutors for Science, Maths, PCM, CBSE, RBSE & competitive exams. Book a free demo today." },
      { property: "og:title", content: "Best Home Tuition in Jaipur — Jaipur Home Tuition" },
      { property: "og:description", content: "Experienced home tutors at your doorstep across Jaipur. 1-on-1 classes, verified teachers, weekly progress reports. Free demo available." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/919982699530";
const PHONE = "+91 9982699530";

/* TODO: replace with real social links when client provides them */
const SOCIAL = {
  youtube: "#",
  instagram: "#",
  facebook: "#",
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Subjects />
        <Packages />
        <WhyUs />
        <Testimonials />
        <Enquiry />
        <TutorJoin />
        <About />
        <Social />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ============================ HEADER ============================ */
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-border">
      <div className="container-x flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl grid place-items-center text-primary-foreground font-bold text-sm shadow-md"
               style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-deep))" }}>
            JHT
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-base">Jaipur Home Tuition</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Padhai · Sanskar · Result</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
          <a href="#subjects" className="hover:text-primary">Subjects</a>
          <a href="#packages" className="hover:text-primary">Pricing</a>
          <a href="#why" className="hover:text-primary">Why Us</a>
          <a href="#enquiry" className="hover:text-primary">Enquiry</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md"
           style={{ background: "#22c35e" }}>
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x pt-12 pb-20 md:pt-20 md:pb-28 text-center">
        {/* Shloka — spiritual anchor */}
        <div className="mx-auto max-w-2xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-saffron-deep font-semibold mb-3">
            <span>॥</span> Shrimad Bhagavad Gita <span>॥</span>
          </div>
          <p className="font-sanskrit text-xl md:text-2xl leading-relaxed text-ink">
            विद्या ददाति विनयं, विनयाद् याति पात्रताम्।<br />
            पात्रत्वात् धनमाप्नोति, धनात् धर्मं ततः सुखम्॥
          </p>
          <p className="mt-3 text-sm text-muted-foreground italic">
            "Knowledge gives humility; from humility comes worthiness, and from that, true prosperity & happiness."
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
          Trusted by 200+ Jaipur families
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
          The Best <span className="text-primary">Home Tuition</span><br className="hidden sm:block" />
          {" "}in Jaipur
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Experienced, verified home tutors for Class 1–12 — Science, Maths, PCM &
          competitive exams. <span className="text-foreground font-medium">Ghar pe aao, result laao.</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener"
             className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white shadow-lg"
             style={{ background: "#22c35e" }}>
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp {PHONE}
          </a>
          <a href="#enquiry" className="btn-primary hover:btn-primary-hover">Book a Free Demo Class</a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>✓ No registration fee</span>
          <span>✓ Free tutor replacement</span>
          <span>✓ Pay only after demo</span>
        </div>
      </div>

      {/* curved divider */}
      <svg className="block w-full -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,80 L1440,0 L1440,80 Z" fill="var(--saffron)" />
      </svg>
    </section>
  );
}

/* ============================ TRUST ============================ */
function TrustStrip() {
  const items = [
    { n: "4+", t: "Years Teaching Experience" },
    { n: "#4", t: "Rank · SBI SO Rajasthan" },
    { n: "200+", t: "Happy Jaipur Families" },
    { n: "100%", t: "Jaipur Coverage" },
  ];
  return (
    <section className="bg-saffron text-primary-foreground">
      <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((i) => (
          <div key={i.t}>
            <div className="font-display text-3xl md:text-4xl font-bold">{i.n}</div>
            <div className="text-xs md:text-sm opacity-90 mt-1">{i.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ SUBJECTS ============================ */
function Subjects() {
  const subjects = [
    { icon: "⚛️", name: "Physics", desc: "Class 9–12, JEE foundation" },
    { icon: "🧪", name: "Chemistry", desc: "Concepts + numericals" },
    { icon: "🧬", name: "Biology", desc: "NEET & boards focus" },
    { icon: "📐", name: "Mathematics", desc: "Class 1–12, all boards" },
    { icon: "🔬", name: "Science (1–10)", desc: "CBSE · RBSE · ICSE" },
    { icon: "📚", name: "PCM (11–12)", desc: "Boards + entrance prep" },
    { icon: "🏦", name: "SBI SO Coaching", desc: "Mentored by AIR 4 rank holder" },
    { icon: "📝", name: "SSC Coaching", desc: "Pre + mains preparation" },
  ];
  return (
    <section id="subjects" className="py-20 md:py-28">
      <div className="container-x">
        <SectionLabel>What We Teach</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 max-w-2xl">
          Subjects taught by Jaipur's <span className="text-primary">finest home tutors</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Every subject, every board, every class — handled by experienced subject experts.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((s) => (
            <div key={s.name} className="group p-5 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold text-foreground">{s.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ PACKAGES ============================ */
function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-center">
          Simple, transparent <span className="text-primary">packages</span>
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
          No hidden charges. No registration fee. Pay only after your free demo class.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Popular */}
          <div className="relative p-8 rounded-3xl bg-card border-2 border-primary shadow-xl">
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-bold text-primary-foreground"
                 style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-deep))" }}>
              Most Popular
            </div>
            <div className="font-display text-2xl font-semibold">Home Tuition</div>
            <div className="text-sm text-muted-foreground mt-1">One-on-one at your doorstep</div>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold text-primary">₹4,000</span>
              <span className="text-muted-foreground">+ /month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {["1-on-1 personalised class", "Tutor comes to your home", "Across all of Jaipur", "Flexible timing — your schedule", "Direct WhatsApp support", "Weekly progress reports"].map((f) => (
                <li key={f} className="flex gap-2"><Check /> {f}</li>
              ))}
            </ul>
            <a href="#enquiry" className="btn-primary hover:btn-primary-hover w-full mt-7">Book Free Demo</a>
          </div>

          {/* Group */}
          <div className="p-8 rounded-3xl bg-card border border-border">
            <div className="font-display text-2xl font-semibold">Group Batch</div>
            <div className="text-sm text-muted-foreground mt-1">Small offline batches</div>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold">₹800</span>
              <span className="text-muted-foreground">–1,500 /month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {["Small batch (max 8 students)", "Offline classroom setup", "Subject-wise focused batches", "Affordable monthly fees", "Regular tests & doubt sessions", "Centrally located in Jaipur"].map((f) => (
                <li key={f} className="flex gap-2"><Check /> {f}</li>
              ))}
            </ul>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-ghost w-full mt-7">Enquire on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ WHY US ============================ */
function WhyUs() {
  const items = [
    { icon: "🏠", title: "Classes at Your Home", desc: "Safe, comfortable 1-on-1 teaching at your doorstep — no travel, no distractions." },
    { icon: "👨‍🏫", title: "Hand-Picked, Verified Tutors", desc: "Only qualified, background-verified teachers — subject experts with proven results." },
    { icon: "📈", title: "Result-Focused Plan", desc: "Personalised study plan, weekly tests, doubt-clearing sessions & regular progress updates." },
    { icon: "💬", title: "Direct Parent Updates", desc: "Honest WhatsApp updates every week so you always know how your child is progressing." },
    { icon: "🔄", title: "Free Tutor Replacement", desc: "Tutor pasand nahi aaya? We replace instantly — no extra fees, no questions asked." },
    { icon: "💰", title: "Transparent Fees", desc: "No hidden charges, no registration fee — pay only after a free demo class." },
  ];
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-x">
        <SectionLabel>Why Parents Choose Us</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 max-w-3xl">
          Aapke bachche ki padhai, <span className="text-primary">humari zimmedari</span>.
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          A complete home-tuition experience — built around your child, trusted by Jaipur parents.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center text-2xl mb-4">{i.icon}</div>
              <h3 className="font-display text-xl font-semibold">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ TESTIMONIALS ============================ */
function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "My son Hemang improved from average marks to top 5 in class within 4 months. The tutor explains Physics & Maths so patiently — Hemang ab khud se padhne lagta hai.",
      name: "Surendra Shekhawat",
      role: "Advocate · Parent of Hemang (Class 10)",
      initials: "SS",
    },
    {
      stars: 5,
      quote: "Beti ki Chemistry bahut weak thi. Sirf 3 months mein concepts clear ho gaye aur 12th board mein 92 number aaye. Highly recommended for PCM students.",
      name: "Anita Sharma",
      role: "Parent of Riya (Class 12 PCM)",
      initials: "AS",
    },
    {
      stars: 5,
      quote: "Punctual, professional and very polite tutor. Weekly progress reports on WhatsApp give us complete peace of mind. Worth every rupee.",
      name: "Rajesh Agarwal",
      role: "Businessman · Parent of Aarav (Class 8)",
      initials: "RA",
    },
    {
      stars: 5,
      quote: "My daughter was scared of Maths. Now she actually enjoys solving problems. The way doubts are cleared is just amazing — bahut dhanyavaad team ko.",
      name: "Dr. Meena Joshi",
      role: "Parent of Khushi (Class 9)",
      initials: "DM",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <SectionLabel>Parents Speak</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 max-w-3xl">
          Real reviews from <span className="text-primary">Jaipur ke parents</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="p-7 rounded-2xl bg-card border border-border">
              <div className="text-gold text-lg">{"★".repeat(r.stars)}</div>
              <blockquote className="mt-3 text-foreground leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full grid place-items-center font-bold text-sm text-primary-foreground"
                     style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-deep))" }}>
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ ENQUIRY ============================ */
function Enquiry() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi! I want home tuition.\n\nParent: ${f.get("parent")}\nClass: ${f.get("class")}\nSubject: ${f.get("subject")}\nArea: ${f.get("area")}\nMobile: ${f.get("mobile")}\nNote: ${f.get("message") || "-"}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };
  const input = "w-full px-4 py-3 rounded-xl bg-cream border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm";
  return (
    <section id="enquiry" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Book a Free Demo</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">
            Need a tutor for your child? <span className="text-primary">Let's talk.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill the form — we'll send your enquiry straight to our WhatsApp and reply
            within an hour with a matching tutor in your area of Jaipur.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <Info icon="📞" label="Call / WhatsApp" value={PHONE} />
            <Info icon="📧" label="Email" value="parveensony2001@gmail.com" />
            <Info icon="📍" label="Address" value="H-75, Balaji Vihar, Hathoj Baag, Jaipur" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-7 md:p-8 rounded-3xl bg-card border border-border shadow-xl">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Parent Name *"><input name="parent" required className={input} placeholder="Aapka naam" /></Field>
            <Field label="Mobile Number *"><input name="mobile" required type="tel" pattern="[0-9]{10}" className={input} placeholder="10-digit mobile" /></Field>
            <Field label="Child's Class *">
              <select name="class" required defaultValue="" className={input}>
                <option value="" disabled>Select class</option>
                <option>Class 1–5</option><option>Class 6–8</option>
                <option>Class 9–10</option><option>Class 11–12 PCM</option>
                <option>Competitive Exam</option>
              </select>
            </Field>
            <Field label="Subject Needed *"><input name="subject" required className={input} placeholder="e.g. Maths, Physics" /></Field>
            <div className="sm:col-span-2"><Field label="Area in Jaipur *"><input name="area" required className={input} placeholder="e.g. Vaishali Nagar, Mansarovar" /></Field></div>
            <div className="sm:col-span-2"><Field label="Message (optional)"><textarea name="message" rows={3} className={input} placeholder="Anything we should know?" /></Field></div>
          </div>
          <button type="submit" className="btn-primary hover:btn-primary-hover w-full mt-5">
            <WhatsAppIcon className="w-5 h-5" /> Send Enquiry via WhatsApp
          </button>
          {sent && <p className="mt-3 text-xs text-center text-muted-foreground">Opening WhatsApp… please send the prefilled message.</p>}
        </form>
      </div>
    </section>
  );
}

/* ============================ TUTOR JOIN ============================ */
function TutorJoin() {
  const perks = ["Earn ₹400–₹800 per hour", "Students near your location", "Flexible morning / evening slots", "On-time monthly payment", "Female & male tutors welcome", "Part-time or full-time"];
  return (
    <section className="py-20 md:py-28 relative overflow-hidden"
             style={{ background: "linear-gradient(135deg, var(--ink), oklch(0.18 0.04 35))" }}>
      <div className="container-x relative text-primary-foreground">
        <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">For Teachers</div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 max-w-3xl">
          Are you a tutor in Jaipur? <span className="text-gold">Join our team.</span>
        </h2>
        <p className="mt-4 text-white/75 max-w-2xl">
          Hum experienced & passionate home tutors hire kar rahe hain — Science, Maths, PCM,
          Commerce, English aur competitive exams ke liye.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-sm">
              <span className="text-gold">✓</span> {p}
            </li>
          ))}
        </ul>
        <a href={`${WHATSAPP}?text=Hi%2C%20I%20want%20to%20join%20Jaipur%20Home%20Tuition%20as%20a%20tutor.`}
           target="_blank" rel="noopener"
           className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full font-semibold text-ink"
           style={{ background: "var(--gold)" }}>
          <WhatsAppIcon className="w-5 h-5" /> Apply as Tutor on WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ============================ ABOUT ============================ */
function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <SectionLabel>About Us</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">
          About <span className="text-primary">Jaipur Home Tuition</span>
        </h2>
        <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Jaipur Home Tuition is a dedicated home-tutoring service providing the
            <strong> best home tutors in Jaipur</strong> — across Vaishali Nagar, Mansarovar,
            Malviya Nagar, Jagatpura, Vidhyadhar Nagar, C-Scheme, Sanganer and surrounding
            areas. We send only those tutors whose subject knowledge is strong and who can
            work patiently with children.
          </p>
          <p>
            From Class 1 to Class 12 — including CBSE, RBSE & ICSE — we cover Science, Maths,
            PCM, Biology, English and competitive exam preparation. Every student gets a
            dedicated tutor, a customised study plan and regular tests, so parents always have
            a clear picture of their child's progress.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================ SOCIAL ============================ */
function Social() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="rounded-3xl p-10 md:p-14 text-center"
             style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--saffron) 12%, var(--cream)), color-mix(in oklab, var(--gold) 15%, var(--cream)))" }}>
          <SectionLabel>Connect With Us</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            Follow Jaipur Home Tuition
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Free study tips, board-exam strategy & student success stories — straight to your feed.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <SocialBtn href={SOCIAL.youtube} label="YouTube" color="#ff0033">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
            </SocialBtn>
            <SocialBtn href={SOCIAL.instagram} label="Instagram" color="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9a3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4S.9 3.4.6 4.2C.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c0 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3 0 2.1-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c0-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>
            </SocialBtn>
            <SocialBtn href={SOCIAL.facebook} label="Facebook" color="#1877f2">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3v-2.6c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>
            </SocialBtn>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Social links will be added once you share them — links abhi placeholder hain.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialBtn({ href, label, color, children }: { href: string; label: string; color: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener" aria-label={label}
       className="w-14 h-14 rounded-2xl grid place-items-center text-white shadow-lg hover:scale-110 transition-transform"
       style={{ background: color }}>
      {children}
    </a>
  );
}

/* ============================ FINAL CTA ============================ */
function FinalCta() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="rounded-3xl p-10 md:p-16 text-center text-primary-foreground shadow-2xl"
             style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-deep))" }}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Aaj hi book karo — <span className="italic">Free Demo Class</span>
          </h2>
          <p className="mt-3 opacity-90 max-w-xl mx-auto">
            Ek call par Jaipur ka best home tutor aapke ghar — zero registration fee.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener"
             className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-full font-bold text-saffron bg-cream shadow-xl hover:scale-105 transition">
            <WhatsAppIcon className="w-5 h-5" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream pt-14 pb-8">
      <div className="container-x grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl grid place-items-center text-primary-foreground font-bold text-sm shadow-md"
                 style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-deep))" }}>JHT</div>
            <div className="font-display font-semibold">Jaipur Home Tuition</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            The best home tuition service in Jaipur — verified tutors, transparent fees,
            and a result-focused approach for every child.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#subjects" className="hover:text-primary">Subjects</a></li>
            <li><a href="#packages" className="hover:text-primary">Pricing</a></li>
            <li><a href="#why" className="hover:text-primary">Why Us</a></li>
            <li><a href="#enquiry" className="hover:text-primary">Book Free Demo</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={WHATSAPP} className="hover:text-primary">📞 {PHONE}</a></li>
            <li><a href="mailto:parveensony2001@gmail.com" className="hover:text-primary">📧 parveensony2001@gmail.com</a></li>
            <li>📍 H-75, Balaji Vihar, Hathoj Baag, Jaipur, Rajasthan</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Jaipur Home Tuition. All rights reserved.</div>
        <div className="italic font-display">सा विद्या या विमुक्तये</div>
      </div>
    </footer>
  );
}

/* ============================ ATOMS ============================ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-saffron-deep">
      <span className="w-6 h-px bg-saffron-deep" />{children}
    </div>
  );
}
function Check() {
  return (
    <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center text-primary-foreground text-[11px] font-bold flex-shrink-0"
          style={{ background: "var(--saffron)" }}>✓</span>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-foreground/70 mb-1.5">{label}</div>
      {children}
    </label>
  );
}
function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.62-6.003C.122 5.302 5.435 0 11.96 0c3.18 0 6.167 1.235 8.413 3.488A11.82 11.82 0 0 1 23.89 11.89c-.003 6.535-5.317 11.836-11.851 11.836a11.9 11.9 0 0 1-5.674-1.448L.057 24zm6.598-3.807a9.84 9.84 0 0 0 5.013 1.378h.004c5.43 0 9.85-4.418 9.852-9.85a9.81 9.81 0 0 0-2.886-6.97 9.83 9.83 0 0 0-6.966-2.893c-5.435 0-9.853 4.418-9.855 9.85a9.82 9.82 0 0 0 1.507 5.243l.235.375-1 3.648 3.74-.781zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z"/>
    </svg>
  );
}
