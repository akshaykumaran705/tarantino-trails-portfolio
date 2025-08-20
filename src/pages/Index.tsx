import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import SkillsShowcase from "@/components/SkillsShowcase";
import ProjectFlipCard from "@/components/ProjectFlipCard";

const Index = () => {
  const experiences = [
    {
      company: "Springer Capital",
      role: "Software Engineer Intern",
      period: "Jun 2025 – Present",
      bullets: [
        "Engineered and tested data extraction microservices using the Flask framework, integrating asynchronous processing for reliable operations and achieving over 90% code coverage with pytest, implementing comprehensive Jira Board data extraction with pause/resume capabilities and multi-tenant support",
        "Designed a layered microservice architecture with custom exception handling and integrated third-party APIs, enhancing secure data extraction and real-time job lifecycle management through Jira REST API v3 integration, implementing custom HMAC authentication and comprehensive error handling for enterprise-grade reliability",
        "Deployed production-ready Docker containers orchestrated with CI/CD pipelines, configuring PostgreSQL databases with Redis caching, implementing health checks and automated testing through Docker Compose with separate development and production configurations, ensuring scalable and maintainable deployment",
        "Implemented comprehensive logging and monitoring infrastructure using Loki, Promtail, and Grafana, creating structured JSON logging with custom formatters, real-time dashboard monitoring, and automated testing scripts, achieving full observability and operational excellence across the Jira Board extraction pipeline",
      ],
      tools: [
        "Flask", "Flask-RESTX", "pytest", "Docker", "Docker Compose", "PostgreSQL", "Redis", 
        "Loki", "Promtail", "Grafana", "Jira REST API v3", "HMAC authentication", "JSON logging", 
        "CI/CD pipelines", "asynchronous processing", "multi-tenant architecture"
      ],
    },
    {
      company: "NCR Corporation",
      role: "Business Analyst Summer Intern",
      period: "May 2023 – Jul 2023",
      bullets: [
        "Developed Python-based data analysis workflows using pandas, numpy, and scikit-learn for business intelligence",
        "Created interactive dashboards using Tableau and Power BI to visualize key performance indicators",
        "Implemented statistical analysis and predictive modeling for market trend forecasting and strategic planning",
        "Collaborated with stakeholders to gather requirements and translate business needs into technical solutions",
        "Automated data collection and reporting processes using Python scripts and SQL queries",
        "Presented findings to senior management and provided data-driven recommendations for business optimization",
      ],
      tools: [
        "Python", "pandas", "numpy", "scikit-learn", "Tableau", "Power BI", "SQL", 
        "Statistical Analysis", "Predictive Modeling", "Data Visualization", "Business Intelligence"
      ],
    },
  ];

  const projects = [
    {
      title: "Retail-Sync: Secure Multi-Tenant Retail Database",
      summary:
        "Designed and implemented a BCNF-normalized PostgreSQL database with Row-Level Security (RLS) and Role-Based Access Control (RBAC) for multi-tenant retail operations. Built a full-stack retail management application using React 18, TypeScript, Flask, and PostgreSQL. Implemented real-time inventory tracking and role-based user interfaces. Configured Apache Kafka and Debezium to stream real-time changes from PostgreSQL to MongoDB. Deployed the application to AWS using Lambda, API Gateway, S3, CloudFront, and RDS.",
      tools: ["React", "TypeScript", "Flask", "Python", "PostgreSQL", "MongoDB", "Apache Kafka", "Debezium", "AWS Lambda", "API Gateway", "S3", "CloudFront", "RDS", "Docker", "Git"],
    },
    {
      title: "Personalized Activity-Based Treatment Recommender",
      summary:
        "Architected an end-to-end pipeline to stream, process, and store real-time sensor data from an Apple Watch using FastAPI and the InfluxDB time-series database. Developed a custom signal processing workflow to extract features from raw sensor data. Trained and validated an XGBoost model on the personalized dataset for live activity classification. Implemented a Retrieval-Augmented Generation (RAG) system using a Large Language Model to generate dynamic, context-aware wellness recommendations.",
      tools: ["Python", "FastAPI", "InfluxDB", "XGBoost", "Pandas", "LlamaIndex", "React", "Tailwind CSS", "Docker"],
    },
    {
      title: "Smart Taxi System using AI",
      summary:
        "Created an AI-powered smart taxi system utilizing a 4D NumPy array to optimize travel time based on city, time, and day. Implemented data processing and machine learning models using TensorFlow and Keras. Developed visualizations using Matplotlib for route prediction and efficiency analysis. Achieved significant improvements in travel time optimization through AI-driven route planning.",
      tools: ["Python", "NumPy", "Pandas", "TensorFlow", "Keras", "Matplotlib"],
    },
  ];

  const skills = {
    "Tools": [
      "Tableau",
      "Canva",
      "Microsoft Excel",
      "Microsoft Word",
    ],
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
      "TailwindCSS",
      "React.js",
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
      "SKLearn",
      "Spark",
      "MLlib",
      "Large Language Models",
      "RAG Models",
    ],
    "Methodologies": [
      "Agile Practices",
      "DevOps Practices",
    ],
    "Backend Technologies": [
      "Postgres",
      "RESTful APIs",
      "Asynchronous Processing",
      "FastAPI",
      "Timeseries Database",
      "Influx",
      "Llama Index",
    ],
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
              <a 
                key={href} 
                href={href as string} 
                className="story-link transition-colors duration-200 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = (href as string).substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
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
                Akshay Kumaran Venkatesan
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-xl animate-fade-in">
                Data Analyst & Software Engineer based in Boston, turning data into sharp insights and delightful automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects"><Button variant="hero" size="lg" className="hover-scale">See Projects</Button></a>
                <a href="#contact"><Button variant="outlineContrast" size="lg" className="hover-scale">Get in Touch</Button></a>
                <a href="/resume-placeholder.svg" download>
                  <Button variant="secondary" size="lg"><Download className="mr-2"/>Resume</Button>
                </a>
              </div>
            </div>
            <div className="relative p-6">
              <div className="rounded-lg border-2 border-foreground bg-card shadow-[8px_8px_0_0_hsl(var(--foreground))] p-6 md:p-10 animate-scale-in">
                <p className="text-md md:text-lg">
                  "Passionate about turning complex data into actionable insights and building systems that make a difference."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wider">Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((exp) => (
              <Card key={exp.company} className="bg-card border-2 border-foreground">
                <CardHeader className="pb-4">
                  <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span className="tracking-wide text-lg">{exp.role} — {exp.company}</span>
                    <span className="text-sm text-foreground/70 font-medium">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-3 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-sm leading-relaxed">{b}</li>
                    ))}
                  </ul>
                  {exp.tools && (
                    <div className="mt-4">
                      <p className="text-xs text-foreground/70 mb-2 font-medium">Technologies:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs px-2 py-1">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="font-display text-3xl md:text-4xl mb-8 tracking-wider">Projects</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectFlipCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 md:py-32 relative bg-card/40">
          <div className="container">
            <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-wider text-center">Skills</h2>
            <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed text-lg">From raw data to deployable systems — a comprehensive toolkit for modern software development.</p>
            <SkillsShowcase skills={skills} />
          </div>
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
                <p className="text-sm text-foreground/70 mt-2">Relevant Coursework: Advanced Data Mining, Machine Learning, Big Data Analytics, Statistical Methods</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Vellore Institute of Technology — B.Tech, Computer Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sep 2020 – May 2024 • GPA: 3.06</p>
                <p className="text-sm text-foreground/70 mt-2">Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Technologies</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="rounded-lg border-2 border-foreground p-8 md:p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider">Let's build something amazing together</h2>
            <p className="mt-3 text-foreground/80">Open to internships and opportunities in data analysis, software engineering, and backend development.</p>
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
