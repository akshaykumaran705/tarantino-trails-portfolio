import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import SkillsShowcase from "@/components/SkillsShowcase";

const Index = () => {
  const experiences = [
    {
      company: "Springer Capital",
      role: "Software Engineer Intern",
      period: "Jun 2025 – Present",
      bullets: [
        "Built microservices with Flask and integrated third‑party APIs for scalable async processing.",
        "Designed layered architecture with exception handling and real‑time progress tracking.",
        "Containerized services with Docker and documented REST APIs for health monitoring and reporting.",
      ],
    },
    {
      company: "NCR Corporation",
      role: "Business Analyst Summer Intern",
      period: "May 2023 – Jul 2023",
      bullets: [
        "Created Python‑based workflow model for data‑driven decisioning and forecasting.",
        "Collected and analyzed market trends; collaborated with cross‑functional stakeholders.",
        "Applied data science principles for reporting and strategic planning.",
      ],
    },
  ];

  const projects = [
    {
      title: "Personalized Activity‑Based Treatment Recommender",
      summary:
        "Modeled UCI HAR dataset; achieved ~99.15% accuracy mapping predictions to treatment recommendations.",
      tools: ["Python", "Scikit‑learn", "XGBoost", "Pandas", "Matplotlib"],
    },
    {
      title: "Smart Taxi System using AI",
      summary:
        "Built 4D NumPy‑based AI to optimize travel time by city/time/day; ML models and visualizations.",
      tools: ["Python", "NumPy", "Pandas", "TensorFlow", "Keras", "Matplotlib"],
    },
    {
      title: "Retail‑Sync: Secure Multi‑Tenant Retail Database",
      summary:
        "BCNF PostgreSQL schema; RLS & RBAC; Debezium/Kafka change data capture; analytics on MongoDB.",
      tools: ["PostgreSQL", "MongoDB", "Kafka", "Debezium", "Python", "SQL"],
    },
  ];

  const skills = {
    Tools: ["Tableau", "Canva", "Microsoft Excel", "Microsoft Word", "Power BI"],
    "Programming Languages": [
      "Java",
      "C++",
      "Python",
      "R",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Kafka",
      "MongoDB",
      "Flask",
      "Scala",
    ],
    "Data Science & ML": [
      "Data Science",
      "Machine Learning",
      "Statistical Analysis",
      "AI",
      "Data Engineering",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "scikit‑learn",
      "Spark",
      "MLlib",
      "Data Reporting",
      "Data Mining",
      "API Experience",
    ],
    Methodologies: ["Agile", "DevOps", "Change Management"],
  } as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl tracking-wider story-link">Akshay Kumaran Venkatesan</a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {[
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href as string} className="story-link">
                {label as string}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a href="mailto:akskum7050@gmail.com">
              <Button variant="outlineContrast" size="sm"><Mail className="mr-2"/>Email</Button>
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="container">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-wide animate-enter">
                Data Analyst & Software Engineer
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-xl animate-fade-in">
                Boston‑based analyst and engineer turning data into sharp insights and delightful automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects"><Button variant="hero" size="lg" className="hover-scale">See Projects</Button></a>
                <a href="#contact"><Button variant="outlineContrast" size="lg" className="hover-scale">Get in Touch</Button></a>
                <a href="/lovable-uploads/2a7d51f3-a512-4f82-bcb7-15f3f13ec710.png" download>
                  <Button variant="secondary" size="lg"><Download className="mr-2"/>Resume</Button>
                </a>
              </div>
            </div>
            <div className="relative p-6">
              <div className="rounded-lg border-2 border-foreground bg-card shadow-[8px_8px_0_0_hsl(var(--foreground))] p-6 md:p-10 animate-scale-in">
                <p className="text-md md:text-lg">
                  "I blend analytics, engineering, and a touch of cinematic flair to build reliable, scalable, and human‑friendly systems."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wider">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <Card key={exp.company} className="bg-card border-2 border-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="tracking-wide">{exp.role} — {exp.company}</span>
                    <span className="text-sm text-foreground/70">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wider">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="transition-transform hover:-translate-y-1 hover:shadow-lg border-2 border-foreground">
                <CardHeader>
                  <CardTitle className="tracking-wide">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/85">{p.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 md:py-28 relative bg-card/40">
          <h2 className="font-display text-3xl md:text-4xl mb-3 tracking-wider text-center">Skills</h2>
          <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">From raw data to deployable systems — a cinematic blend of tools that ship.</p>
          <SkillsShowcase skills={skills} />
        </section>

        {/* Education */}
        <section id="education" className="py-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wider">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Boston University — MS, Applied Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sep 2024 – Jun 2026 • GPA: 3.69 • Boston</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Vellore Institute of Technology — B.Tech, CSE</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sep 2020 – May 2024</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="rounded-lg border-2 border-foreground p-8 md:p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider">Let’s build something bold</h2>
            <p className="mt-3 text-foreground/80">Open to internships and opportunities in data, platforms, and backend engineering.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:akskum7050@gmail.com"><Button variant="hero"><Mail className="mr-2"/>Email</Button></a>
              <a href="tel:+18573106296"><Button variant="outlineContrast"><Phone className="mr-2"/>Call</Button></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Button variant="secondary"><ExternalLink className="mr-2"/>LinkedIn</Button>
              </a>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2"><MapPin size={16}/>Boston, MA</span>
              <span className="flex items-center gap-2"><Mail size={16}/>akskum7050@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={16}/>(857) 310‑6296</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container py-6 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Akshay Kumaran Venkatesan</p>
          <a href="#home" className="story-link">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
