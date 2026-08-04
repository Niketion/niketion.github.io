import { useEffect, useState, type ReactNode } from "react";

type Lang = "it" | "en";

const content = {
  it: {
    intro:
      "Software Engineer e Full-Stack Developer con base a Pescara. Lavoro tra backend, frontend, dati, infrastruttura e processi di produzione. Costruisco sistemi affidabili usando .NET, Java Spring, Angular e SQL, e mi occupo dell'intero ciclo di vita di una funzionalità, dall'implementazione alla verifica post-rilascio.",
    sections: {
      esperienza: "Esperienza",
      progetto: "Focus",
      progetti: "Altri progetti",
      contributore: "Contributore",
      stack: "Stack",
      formazione: "Formazione",
      principi: "Principi",
      contatti: "Contatti",
    },
    experience: [
      {
        period: "2025 - Pres.",
        company: "BV Tech",
        role: "Full-Stack Developer",
        location: "Chieti",
        text: "Sviluppo e manutenzione di applicazioni enterprise per un cliente istituzionale. Backend in C# / .NET / Entity Framework, frontend e workflow applicativi, SQL Server. Autenticazione con Keycloak, gestione documentale con MinIO, messaging via Kafka, osservabilità con Grafana e Prometheus. Docker, Kubernetes e OKD per i processi di deployment.",
      },
      {
        period: "2024 - 2025",
        company: "DigitalSoft",
        role: "Full-Stack Developer",
        location: "Pescara",
        text: "Sviluppo di applicazioni web e mobile con .NET, Java Spring, Angular, TypeScript e Ionic. Lavoro sul progetto Giobby e sulla suite industriale D-ONE - MES, pianificazione industriale e integrazioni SAP. Connettori Python e assistenti basati su OpenAI nei workflow applicativi.",
      },
      {
        period: "2021 - 2022",
        company: "Unieuro",
        role: "Front & Back Office",
        location: "Pisa",
        text: "Assistenza clienti, gestione delle garanzie e risoluzione di problematiche tecniche relative a computer, stampanti e dispositivi mobili.",
      },
      {
        period: "2019",
        company: "AR Developer (Intern)",
        role: "Stage",
        location: "Napoli",
        text: "Sviluppo di prototipi di realtà aumentata con Unity e C#.",
      },
    ],
    focus: {
      title: "Flowdepth",
      sub: "Fork personale di FlowSurface / Crypto order-flow terminal",
      text: "Terminale desktop open source, sviluppato in Rust, per osservare i mercati crypto attraverso l’order flow. Riunisce grafici footprint, heatmap L2 e Time & Sales con bolle di volume adattive, rilevamento di possibili iceberg su Binance e analisi delle opzioni come GEX. Include cache persistente dei dati e meccanismi di riconnessione e recupero storico per sessioni di analisi più affidabili.",
      stack:
        "Rust / iced / WebSocket / REST APIs / Binance / Deribit / Order flow / L2 heatmaps",
      cta: "Vedi il progetto",
    },
    projects: [
      {
        title: "MedCareHub",
        sub: "Full-Stack Healthcare Platform",
        text: "Piattaforma full-stack per la gestione dei processi di una clinica: disponibilità dei medici, prenotazioni dei pazienti, documenti clinici, ruoli applicativi e dashboard operative. Include autenticazione OIDC/JWT, protezione dalle doppie prenotazioni, audit logging, KPI dashboard e test backend e frontend.",
        stack:
          "ASP.NET Core .NET 8 · Angular · Entity Framework Core · PostgreSQL · Keycloak · MinIO · Docker Compose · Jest",
      },
      {
        title: "Ordy",
        sub: "Intelligent Photo Gallery Scanner",
        text: "App mobile React Native che analizza la galleria fotografica per individuare duplicati, immagini simili e immagini monocromatiche. Gestione della memoria, caricamento progressivo, elaborazione parallela e perceptual hashing.",
        stack: "React Native · Expo · TypeScript · Image processing",
      },
      {
        title: "Weather Profile Picture Updater",
        sub: "Automation",
        text: "Automazione Python che aggiorna l'immagine profilo Telegram in base alle condizioni meteorologiche della città selezionata.",
        stack: "Python · Telethon · Open-Meteo API · YAML",
      },
      {
        title: "TownyWar",
        sub: "Minecraft plugin",
        text: "Plugin Java per la gestione di guerre tramite Towny API.",
        stack: "Java",
      },
      {
        title: "Server Layer",
        sub: "Vue / Nuxt",
        text: "Layer dedicato alla visualizzazione e gestione di liste server.",
        stack: "Vue · Nuxt",
      },
    ],
    contributions: [
      {
        title: "FlowSurface",
        sub: "Native crypto charting platform",
        text: "Piattaforma desktop open source in Rust per l’analisi dei mercati crypto e dell’order flow, alla base del fork personale Flowdepth.",
        href: "https://github.com/flowsurface-rs/flowsurface",
      },
      {
        title: "SlopCop",
        sub: "AI text detection",
        text: "Strumento che rileva testi generati dall’AI, interamente eseguito nel browser.",
        href: "https://github.com/Niketion/slop-cop",
      },
    ],
    stack: {
      Linguaggi: "C#, Java, Python, TypeScript, JavaScript, SQL, HTML, CSS",
      Backend: ".NET, ASP.NET Core, Entity Framework, Java Spring, Hibernate, REST APIs",
      "Frontend & Mobile": "Angular, Ionic, React Native, Expo, Vue.js, Flutter",
      Database: "SQL Server, PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, H2",
      "Infrastruttura & Integrazioni":
        "Kafka, Keycloak, MinIO, OpenSearch, REST integrations, distributed systems",
      DevOps: "Git, Azure DevOps, TFS, CI/CD, Docker, Kubernetes, OKD",
      Osservabilità: "Grafana, Prometheus, Serilog, application logging, troubleshooting",
      "AI & Automazione":
        "OpenAI integrations, Python automation, AI-assisted development workflows",
    },
    education: [
      {
        period: "2024 - 2026",
        title: "Università Pegaso",
        text: "Bachelor in Informatica per le Aziende Digitali (L-31), in fase di completamento.",
      },
      {
        period: "2021 - 2023",
        title: "Università di Pisa",
        text: "Prima parte del percorso universitario in Informatica.",
      },
      {
        period: "2016 - 2021",
        title: "Istituto A. Volta, Pescara",
        text: "Diploma tecnico in Informatica · 96/100.",
      },
    ],
    principles: [
      {
        t: "Ownership",
        d: "Seguire una funzionalità dall'implementazione alla verifica post-rilascio.",
      },
      {
        t: "Production mindset",
        d: "Progettare considerando affidabilità, dati, sicurezza, logging e comportamento reale del sistema.",
      },
      {
        t: "Practical problem solving",
        d: "Analizzare il problema, individuare la causa e costruire una soluzione concreta e mantenibile.",
      },
      {
        t: "Continuous learning",
        d: "Sperimentare nuove tecnologie, automazione e strumenti AI senza perdere attenzione per semplicità e qualità.",
      },
    ],
    footer: "Pescara, Italia",
  },
  en: {
    intro:
      "Software Engineer and Full-Stack Developer based in Pescara. I work across backend, frontend, data, infrastructure and production support. I build reliable systems with .NET, Java Spring, Angular and SQL, and follow a feature through its entire lifecycle - from implementation to post-release verification.",
    sections: {
      esperienza: "Experience",
      progetto: "Focus",
      progetti: "Other work",
      contributore: "Contributor",
      stack: "Stack",
      formazione: "Education",
      principi: "Principles",
      contatti: "Contact",
    },
    experience: [
      {
        period: "2025 - Now",
        company: "BV Tech",
        role: "Full-Stack Developer",
        location: "Chieti",
        text: "Building and maintaining enterprise applications for an institutional client. Backend in C# / .NET / Entity Framework, frontend and application workflows, SQL Server. Authentication with Keycloak, document handling with MinIO, messaging via Kafka, observability with Grafana and Prometheus. Docker, Kubernetes and OKD for deployments.",
      },
      {
        period: "2024 - 2025",
        company: "DigitalSoft",
        role: "Full-Stack Developer",
        location: "Pescara",
        text: "Web and mobile applications with .NET, Java Spring, Angular, TypeScript and Ionic. Work on the Giobby project and the D-ONE industrial suite - MES, industrial planning and SAP integrations. Python connectors and OpenAI-based assistants in application workflows.",
      },
      {
        period: "2021 - 2022",
        company: "Unieuro",
        role: "Back & Front Office",
        location: "Pisa",
        text: "Customer support, warranty handling and technical troubleshooting on computers, printers and mobile devices.",
      },
      {
        period: "2019",
        company: "AR Developer (Intern)",
        role: "Stage",
        location: "Naples",
        text: "Augmented reality prototypes built with Unity and C#.",
      },
    ],
    focus: {
      title: "Flowdepth",
      sub: "Personal FlowSurface fork / Crypto order-flow terminal",
      text: "An open-source native desktop terminal, built in Rust, for observing crypto markets through order flow. It combines footprint charts, L2 heatmaps and Time & Sales with adaptive volume bubbles, possible Binance iceberg detection and options analytics such as GEX. Persistent market-data caching plus reconnect and historical-recovery mechanisms make longer analysis sessions more reliable.",
      stack:
        "Rust / iced / WebSocket / REST APIs / Binance / Deribit / Order flow / L2 heatmaps",
      cta: "View the project",
    },
    projects: [
      {
        title: "MedCareHub",
        sub: "Full-Stack Healthcare Platform",
        text: "Full-stack platform for clinic operations: doctor availability, patient bookings, clinical documents, application roles and operational dashboards. It includes OIDC/JWT authentication, double-booking protection, audit logging, a KPI dashboard, and backend and frontend tests.",
        stack:
          "ASP.NET Core .NET 8 · Angular · Entity Framework Core · PostgreSQL · Keycloak · MinIO · Docker Compose · Jest",
      },
      {
        title: "Ordy",
        sub: "Intelligent Photo Gallery Scanner",
        text: "React Native mobile app that scans the photo gallery for duplicates, similar images and monochrome shots. Memory management, progressive loading, parallel processing and perceptual hashing.",
        stack: "React Native · Expo · TypeScript · Image processing",
      },
      {
        title: "Weather Profile Picture Updater",
        sub: "Automation",
        text: "Python automation that updates a Telegram profile picture based on the weather conditions of a chosen city.",
        stack: "Python · Telethon · Open-Meteo API · YAML",
      },
      {
        title: "TownyWar",
        sub: "Minecraft plugin",
        text: "Java plugin for managing wars through the Towny API.",
        stack: "Java",
      },
      {
        title: "Server Layer",
        sub: "Vue / Nuxt",
        text: "Layer dedicated to displaying and managing server lists.",
        stack: "Vue · Nuxt",
      },
    ],
    contributions: [
      {
        title: "FlowSurface",
        sub: "Native crypto charting platform",
        text: "Open-source Rust desktop platform for crypto-market and order-flow analysis, which provides the foundation for the personal Flowdepth fork.",
        href: "https://github.com/flowsurface-rs/flowsurface",
      },
      {
        title: "SlopCop",
        sub: "AI text detection",
        text: "A tool that detects AI-generated text, running entirely in the browser.",
        href: "https://github.com/Niketion/slop-cop",
      },
    ],
    stack: {
      Languages: "C#, Java, Python, TypeScript, JavaScript, SQL, HTML, CSS",
      Backend: ".NET, ASP.NET Core, Entity Framework, Java Spring, Hibernate, REST APIs",
      "Frontend & Mobile": "Angular, Ionic, React Native, Expo, Vue.js, Flutter",
      Databases: "SQL Server, PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, H2",
      "Infrastructure & Integrations":
        "Kafka, Keycloak, MinIO, OpenSearch, REST integrations, distributed systems",
      DevOps: "Git, Azure DevOps, TFS, CI/CD, Docker, Kubernetes, OKD",
      Observability: "Grafana, Prometheus, Serilog, application logging, troubleshooting",
      "AI & Automation":
        "OpenAI integrations, Python automation, AI-assisted development workflows",
    },
    education: [
      {
        period: "2024 - 2026",
        title: "Università Pegaso",
        text: "Bachelor in Computer Science for Digital Enterprises (L-31), in progress.",
      },
      {
        period: "2021 - 2023",
        title: "University of Pisa",
        text: "First part of the Computer Science degree.",
      },
      {
        period: "2016 - 2021",
        title: "Istituto A. Volta, Pescara",
        text: "Technical IT Diploma · 96/100.",
      },
    ],
    principles: [
      {
        t: "Ownership",
        d: "Follow a feature from implementation through post-release verification.",
      },
      {
        t: "Production mindset",
        d: "Design for reliability, data, security, logging and real-world behaviour.",
      },
      {
        t: "Practical problem solving",
        d: "Analyse the problem, find the cause, build a concrete and maintainable solution.",
      },
      {
        t: "Continuous learning",
        d: "Experiment with new tech, automation and AI tools without losing focus on simplicity and quality.",
      },
    ],
    footer: "Pescara, Italy",
  },
} as const;

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[72px_1fr] md:grid-cols-[110px_1fr] gap-x-6 items-baseline">
      <span className="text-xs text-muted-foreground tabular-nums uppercase tracking-wider">
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("it");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const c = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const stored =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem("theme") as "dark" | "light" | null)) ||
      null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be unavailable in privacy-restricted browsers.
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-20 md:py-28 selection:bg-foreground selection:text-background">
      {/* Header */}
      <header className="mb-20 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-sm font-semibold tracking-tight">Nicolas Giuliani</h1>
          <p className="text-[11px] leading-none text-muted-foreground mt-1.5">
            <a href="mailto:nicolas.giuliani@hotmail.com" className="hover:text-foreground transition-colors">
              nicolas.giuliani@hotmail.com
            </a>
          </p>
          <p className="text-sm leading-relaxed text-pretty max-w-[52ch] text-foreground/85 mt-3">
            {c.intro}
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs tabular-nums shrink-0 pt-1">
          <button
            onClick={() => setLang("it")}
            className={
              lang === "it"
                ? "font-semibold"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
            aria-pressed={lang === "it"}
          >
            IT
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => setLang("en")}
            className={
              lang === "en"
                ? "font-semibold"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <span className="text-muted-foreground mx-1">·</span>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
        </div>
      </header>

      {/* Esperienza */}
      <section className="mb-20">
        <div className="space-y-10">
          <h2 className="sr-only">{c.sections.esperienza}</h2>
          {c.experience.map((e) => (
            <Row key={e.company + e.period} label={e.period}>
              <h3 className="text-sm font-semibold">
                {e.company}
                {e.role && <span className="text-muted-foreground font-normal"> - {e.role}</span>}
                {e.location && (
                  <span className="text-muted-foreground font-normal">, {e.location}</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground mt-1.5 max-w-[52ch] text-pretty leading-relaxed">
                {e.text}
              </p>
            </Row>
          ))}
        </div>
      </section>

      {/* Focus - Flowdepth */}
      <section className="mb-20">
        <Row label={c.sections.progetto}>
          <h3 className="text-sm font-semibold">
            {c.focus.title}
            <span className="text-muted-foreground font-normal"> - {c.focus.sub}</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 max-w-[52ch] text-pretty leading-relaxed">
            {c.focus.text}
          </p>
          <p className="text-xs text-muted-foreground/80 mt-3 font-mono max-w-[52ch]">
            {c.focus.stack}
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/Niketion/flowdepth"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm font-medium inline-block"
            >
              {c.focus.cta}
            </a>
          </div>
        </Row>
      </section>

      {/* Altri progetti */}
      <section className="mb-20">
        <Row label={c.sections.progetti}>
          <div className="space-y-6">
            {c.projects.map((p) => (
              <div key={p.title}>
                <h3 className="text-sm font-semibold">
                  {p.title}
                  <span className="text-muted-foreground font-normal"> - {p.sub}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 max-w-[52ch] text-pretty leading-relaxed">
                  {p.text}
                </p>
                <p className="text-xs text-muted-foreground/80 mt-1.5 font-mono">{p.stack}</p>
              </div>
            ))}
          </div>
        </Row>
      </section>

      {/* Contributore */}
      <section className="mb-20">
        <Row label={c.sections.contributore}>
          <div className="space-y-6">
            {c.contributions.map((project) => (
              <div key={project.title}>
                <h3 className="text-sm font-semibold">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    {project.title}
                  </a>
                  <span className="text-muted-foreground font-normal"> - {project.sub}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 max-w-[52ch] text-pretty leading-relaxed">
                  {project.text}
                </p>
              </div>
            ))}
          </div>
        </Row>
      </section>

      {/* Stack */}
      <section className="mb-20">
        <Row label={c.sections.stack}>
          <dl className="space-y-3">
            {Object.entries(c.stack).map(([k, v]) => (
              <div key={k} className="text-sm">
                <dt className="font-semibold inline">{k}. </dt>
                <dd className="inline text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Row>
      </section>

      {/* Formazione */}
      <section className="mb-20">
        <div className="space-y-6">
          <h2 className="sr-only">{c.sections.formazione}</h2>
          {c.education.map((e) => (
            <Row key={e.title} label={e.period}>
              <h3 className="text-sm font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 max-w-[52ch] text-pretty leading-relaxed">
                {e.text}
              </p>
            </Row>
          ))}
        </div>
      </section>

      {/* Principi */}
      <section className="mb-20">
        <Row label={c.sections.principi}>
          <ol className="space-y-3">
            {c.principles.map((p, i) => (
              <li key={p.t} className="text-sm">
                <span className="text-muted-foreground tabular-nums mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{p.t}.</span>{" "}
                <span className="text-muted-foreground">{p.d}</span>
              </li>
            ))}
          </ol>
        </Row>
      </section>

      {/* Contatti */}
      <section>
        <Row label={c.sections.contatti}>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://github.com/Niketion"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicolasgiuliani/"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm font-medium"
            >
              LinkedIn
            </a>
            <a href="mailto:nicolas.giuliani@hotmail.com" className="link-underline text-sm font-medium">
              Email
            </a>
          </div>
        </Row>
      </section>

      <footer className="mt-28 pt-6 border-t border-foreground/10">
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Nicolas Giuliani · {c.footer}
        </p>
      </footer>
    </main>
  );
}
