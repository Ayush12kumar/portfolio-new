import React, { useMemo, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const projectCards = [
    {
      number: "01 — DESIGN + DEV",
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      link: "https://portfolio-new-1bb5.vercel.app/",
      points: [
        "Designed and built a fully responsive portfolio improving user engagement by 20% through clean UI and intuitive navigation.",
        "Achieved 90+ Lighthouse scores by optimizing performance, accessibility, and best practices end-to-end."
      ],
      metrics: ["↑ 20% Engagement", "90+ Lighthouse"]
    },
    {
      number: "02 — FULL STACK",
      title: "Notes Manager App",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "#",
      points: [
        "Built a full-stack notes management app with authentication, CRUD operations, and responsive UI.",
        "Improved usability with clean navigation, protected routes, and fast note management workflows."
      ],
      metrics: ["Auth + CRUD", "Responsive UI"]
    },
    {
      number: "03 — AI + BACKEND",
      title: "Medical assistant",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
      link: "https://medical-assistant-peach.vercel.app/",
      points: [
        "Developed a real-time crypto crash game with WebSockets, live rounds, and provably fair logic.",
        "Focused on transparent gameplay, performance optimization, and secure round handling."
      ],
      metrics: ["Real-time", "WebSockets"]
    }
  ];

  const contactHref = useMemo(() => {
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name || ""}\nEmail: ${formData.email || ""}\n\n${formData.message || ""}`
    );
    return `mailto:jha859970@gmail.com?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = contactHref;
  };

  return (
    <>
      <style>{`
        :root {
          --bg: #080c12;
          --bg2: #0d1320;
          --surface: #111827;
          --accent: #4FFFA4;
          --accent2: #38BDF8;
          --accent3: #F472B6;
          --text: #e8edf5;
          --muted: #6b7b94;
          --border: rgba(255,255,255,0.07);
          --card: rgba(255,255,255,0.03);
        }

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          overflow-x: hidden;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 999;
          opacity: 0.4;
        }
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(79,255,164,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,255,164,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }
        a { color: inherit; }
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: rgba(8,12,18,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--accent);
          letter-spacing: -0.02em;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--muted);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: var(--accent); }
        .nav-cta {
          padding: 9px 22px;
          border: 1px solid var(--accent);
          border-radius: 4px;
          color: var(--accent) !important;
          font-size: 0.8rem !important;
          transition: background 0.3s, color 0.3s !important;
        }
        .nav-cta:hover { background: var(--accent) !important; color: var(--bg) !important; }
        .menu-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text);
          width: 44px;
          height: 44px;
          border-radius: 8px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: calc(100% + 10px);
          left: 24px;
          right: 24px;
          background: rgba(13,19,32,0.98);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px;
          backdrop-filter: blur(18px);
        }
        .mobile-menu.open { display: block; }
        .mobile-menu a {
          display: block;
          text-decoration: none;
          color: var(--text);
          padding: 12px 8px;
          border-bottom: 1px solid var(--border);
          font-size: 0.92rem;
        }
        .mobile-menu a:last-child { border-bottom: none; }
        #hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 60px 80px;
          overflow: hidden;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .orb1 { width: 600px; height: 600px; background: rgba(79,255,164,0.07); top: -100px; right: -100px; }
        .orb2 { width: 400px; height: 400px; background: rgba(56,189,248,0.06); bottom: -50px; left: 200px; }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(79,255,164,0.3);
          border-radius: 100px;
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.06em;
          margin-bottom: 32px;
          width: fit-content;
          animation: fadeUp 0.8s ease both;
        }
        .hero-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.1rem, 8vw, 7rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          color: var(--text);
          animation: fadeUp 0.8s 0.1s ease both;
          word-break: break-word;
        }
        .hero-name span { color: var(--accent); }
        .hero-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.1rem, 3vw, 2rem);
          font-weight: 600;
          color: var(--muted);
          margin-top: 12px;
          letter-spacing: -0.01em;
          animation: fadeUp 0.8s 0.2s ease both;
        }
        .hero-desc {
          max-width: 600px;
          color: var(--muted);
          font-size: 1rem;
          font-weight: 300;
          margin-top: 24px;
          line-height: 1.8;
          animation: fadeUp 0.8s 0.3s ease both;
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          margin-top: 52px;
          animation: fadeUp 0.8s 0.4s ease both;
          flex-wrap: wrap;
        }
        .stat-item { display: flex; flex-direction: column; gap: 4px; min-width: 120px; }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .stat-num span { color: var(--accent); }
        .stat-label { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 44px;
          animation: fadeUp 0.8s 0.5s ease both;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--accent);
          color: var(--bg);
          border: none;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(79,255,164,0.3); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
        .hero-links {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          animation: fadeUp 0.8s 0.6s ease both;
          flex-wrap: wrap;
        }
        .hero-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-word;
        }
        .hero-link:hover { color: var(--accent); }
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 60px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: fadeUp 0.8s 0.8s ease both;
        }
        .scroll-line { width: 40px; height: 1px; background: var(--muted); }
        section {
          position: relative;
          z-index: 1;
          padding: 100px 60px;
        }
        .section-label {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent);
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 60px;
          word-break: break-word;
        }
        #about { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-text p {
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }
        .about-highlight {
          color: var(--text) !important;
          font-weight: 500 !important;
        }
        .info-list { display: flex; flex-direction: column; gap: 16px; }
        .info-item {
          display: flex;
          gap: 16px;
          padding: 16px 20px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 8px;
          align-items: center;
        }
        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(79,255,164,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .info-content { display: flex; flex-direction: column; min-width: 0; }
        .info-key { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .info-val { font-size: 0.9rem; color: var(--text); font-weight: 500; word-break: break-word; }
        #skills { background: var(--bg); }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .skill-card {
          padding: 28px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          opacity: 0;
          transform: translateY(24px);
          animation: revealUp 0.8s ease forwards;
        }
        .skill-card:hover { border-color: rgba(79,255,164,0.3); transform: translateY(-6px); box-shadow: 0 14px 34px rgba(0,0,0,0.18); }
        .skill-card-icon {
          font-size: 1.5rem;
          margin-bottom: 16px;
          display: block;
        }
        .skill-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text);
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--muted);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
          word-break: break-word;
        }
        .skill-tag.green { color: var(--accent); border-color: rgba(79,255,164,0.2); background: rgba(79,255,164,0.05); }
        .skill-tag.blue { color: var(--accent2); border-color: rgba(56,189,248,0.2); background: rgba(56,189,248,0.05); }
        .skill-tag.pink { color: var(--accent3); border-color: rgba(244,114,182,0.2); background: rgba(244,114,182,0.05); }
        #projects { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .project-card {
          padding: 0;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color 0.35s, transform 0.35s, box-shadow 0.35s;
          position: relative;
          overflow: hidden;
          min-width: 0;
          opacity: 0;
          transform: translateY(30px);
          animation: revealUp 0.8s ease forwards;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
        }
        .project-card:hover {
          border-color: rgba(79,255,164,0.25);
          transform: translateY(-8px);
          box-shadow: 0 18px 50px rgba(0,0,0,0.22);
        }
        .project-card:hover::before { opacity: 1; }
        .project-image-wrap {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .project-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-num {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .project-points { list-style: none; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .project-points li {
          font-size: 0.87rem;
          color: var(--muted);
          line-height: 1.6;
          padding-left: 16px;
          position: relative;
        }
        .project-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.75rem;
        }
        .project-metrics {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .metric-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          background: rgba(79,255,164,0.08);
          border: 1px solid rgba(79,255,164,0.2);
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent2);
          text-decoration: none;
          transition: color 0.25s, transform 0.25s;
        }
        .project-link:hover {
          color: var(--accent);
          transform: translateX(4px);
        }
        #experience { background: var(--bg); }
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
        }
        .exp-sidebar { display: flex; flex-direction: column; gap: 24px; }
        .exp-year {
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: -0.05em;
          line-height: 1;
          opacity: 0.2;
        }
        .exp-card {
          padding: 40px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .exp-role {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .exp-badge {
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(79,255,164,0.1);
          border: 1px solid rgba(79,255,164,0.25);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
        }
        .exp-company { font-size: 1rem; color: var(--accent2); font-weight: 500; margin-bottom: 6px; }
        .exp-meta { font-size: 0.8rem; color: var(--muted); margin-bottom: 28px; }
        .exp-points { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .exp-points li {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.7;
          padding-left: 20px;
          position: relative;
        }
        .exp-points li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.75rem;
          top: 4px;
        }
        #education { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .edu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .edu-card {
          padding: 32px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          opacity: 0;
          transform: translateY(24px);
          animation: revealUp 0.8s ease forwards;
        }
        .edu-card:hover { border-color: rgba(56,189,248,0.3); transform: translateY(-6px); box-shadow: 0 14px 34px rgba(0,0,0,0.18); }
        .edu-icon { font-size: 1.6rem; margin-bottom: 20px; display: block; }
        .edu-degree {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.3;
          margin-bottom: 8px;
        }
        .edu-school { font-size: 0.85rem; color: var(--accent2); font-weight: 500; margin-bottom: 4px; }
        .edu-year { font-size: 0.78rem; color: var(--muted); margin-bottom: 16px; }
        .edu-score {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.2);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent2);
        }
        #certifications { background: var(--bg); }
        .cert-list { display: flex; flex-direction: column; gap: 16px; }
        .cert-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 28px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: border-color 0.3s;
        }
        .cert-item:hover { border-color: rgba(244,114,182,0.3); }
        .cert-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(244,114,182,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .cert-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text);
          flex: 1;
        }
        .cert-badge {
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(244,114,182,0.08);
          border: 1px solid rgba(244,114,182,0.2);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent3);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        #contact {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .contact-inner { max-width: 840px; margin: 0 auto; }
        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .contact-title span { color: var(--accent); }
        .contact-sub {
          color: var(--muted);
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 44px;
          line-height: 1.8;
        }
        .contact-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s;
          word-break: break-word;
        }
        .contact-link:hover { border-color: var(--accent); color: var(--accent); background: rgba(79,255,164,0.05); }
        .contact-form {
          display: grid;
          gap: 18px;
          margin-top: 18px;
          text-align: left;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field label {
          font-size: 0.82rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .field input, .field textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 10px;
          padding: 14px 14px;
          font: inherit;
          outline: none;
        }
        .field textarea {
          min-height: 150px;
          resize: vertical;
        }
        .field input:focus, .field textarea:focus {
          border-color: rgba(79,255,164,0.45);
          box-shadow: 0 0 0 3px rgba(79,255,164,0.08);
        }
        footer {
          position: relative;
          z-index: 1;
          padding: 28px 60px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .footer-copy, .footer-made { font-size: 0.8rem; color: var(--muted); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--muted); border-radius: 10px; }

        @media (max-width: 1100px) {
          .skills-grid, .projects-grid, .edu-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid, .exp-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 900px) {
          nav { padding: 18px 24px; }
          .nav-links { display: none; }
          .menu-btn { display: inline-flex; }
          section, #hero, footer { padding-left: 24px; padding-right: 24px; }
          .hero-stats { gap: 28px; }
          .hero-scroll { display: none; }
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .skills-grid, .projects-grid, .edu-grid { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-actions a, .hero-actions button { width: 100%; }
          .contact-links { flex-direction: column; }
          .cert-item {
            flex-direction: column;
            align-items: flex-start;
          }
          footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 520px) {
          #hero { padding-top: 120px; padding-bottom: 70px; }
          .hero-name { font-size: 2.7rem; }
          .hero-role { font-size: 1rem; }
          .hero-desc { font-size: 0.94rem; }
          .project-card, .skill-card, .edu-card, .exp-card, .contact-form { padding: 22px; }
          .info-item, .cert-item { padding: 16px; }
        }
        
          .hero-right {
            flex: 1;
            display: flex;
            justify-content: center;
            margin-top: 0px; /* fine tune this */
          }
            .hero-container {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
            gap: 80px;
          }
          .hero-left {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
        .hero-left {
          flex: 1;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* key */
        }
          .profile-wrapper {
          margin-top: 0 !important; /* force fix */
        }

        /* 🔥 IMAGE STYLE */
        .profile-wrapper {
          position: relative;
          border-radius: 20px;
          padding: 10px;
          background: linear-gradient(135deg, #4FFFA4, #38BDF8);
          box-shadow: 
            0 20px 60px rgba(0,0,0,0.5),
            0 0 60px rgba(79,255,164,0.2);
          transition: 0.4s ease;
        }

        .profile-wrapper:hover {
          transform: scale(1.03);
          box-shadow: 
            0 30px 80px rgba(0,0,0,0.7),
            0 0 80px rgba(79,255,164,0.4);
        }

        .profile-img {
          width: 320px;
          height: 420px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
        }

        /* Glow effect */
        .profile-wrapper::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 25px;
          background: radial-gradient(circle, rgba(79,255,164,0.3), transparent);
          z-index: -1;
        }
          @media (max-width: 900px) {
            .hero-container {
              flex-direction: column;
              text-align: center;
            }

            .profile-img {
              width: 250px;
              height: 320px;
            }
          }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />

      <nav>
        <a href="#hero" className="nav-logo">AK.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
        <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? "×" : "☰"}
        </button>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>

        <div className="hero-tag">
          <span className="hero-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-name">Ayush<br /><span>Kumar</span></h1>
        <p className="hero-role">UI/UX Designer & Frontend Developer</p>
        <p className="hero-desc">
          Building digital experiences that feel intuitive, look stunning, and perform exceptionally.
          Specializing in user-centered design, React.js, and performance-first frontend development.
        </p>
       

        

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">30<span>%</span></span>
            <span className="stat-label">UX Efficiency Improved</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">25<span>%+</span></span>
            <span className="stat-label">Performance Score Boost</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">90<span>+</span></span>
            <span className="stat-label">Lighthouse Score</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
            <span>↓</span>
          </a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>

        <div className="hero-links">
          <a href="https://www.linkedin.com/in/ayush-kumar-a82876282/" className="hero-link" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
          <a href="https://github.com/Ayush12kumar" className="hero-link" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 6.96A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
          <a href="mailto:jha859970@gmail.com" className="hero-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,12 2,6"></polyline></svg>
            jha859970@gmail.com
          </a>
          <a href="tel:+917766890121" className="hero-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"></path></svg>
            +91-7766890121
          </a>
        </div>

        <div className="hero-scroll">
          <span className="scroll-line"></span>
          Scroll to explore
        </div>
      </section>

      <section id="about">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">Designing with purpose,<br />building with precision.</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <span className="about-highlight">UI/UX Designer and Frontend Developer</span> based in Delhi, India, with a passion for creating digital products that are as functional as they are beautiful. Currently pursuing B.Tech in Computer Science (AI & ML) at NIET, Greater Noida.
            </p>
            <p>
              My design philosophy centers on <span className="about-highlight">User-Centered Design</span> — understanding real user needs and translating them into intuitive interfaces. I bridge the gap between design and development, ensuring every pixel serves a purpose.
            </p>
            <p>
              I've improved user experience efficiency by <span className="about-highlight">30%</span> through thoughtful UI design and structured user flows, and boosted website performance scores by over <span className="about-highlight">25%</span> using responsive design and optimization techniques.
            </p>
          </div>

          <div className="info-list">
            <div className="info-item"><div className="info-icon"></div><div className="info-content"><span className="info-key">Location</span><span className="info-val">Delhi, India</span></div></div>
            <div className="info-item"><div className="info-icon"></div><div className="info-content"><span className="info-key">Education</span><span className="info-val">B.Tech CS (AI & ML) — NIET</span></div></div>
            <div className="info-item"><div className="info-icon"></div><div className="info-content"><span className="info-key">Email</span><span className="info-val">jha859970@gmail.com</span></div></div>
            <div className="info-item"><div className="info-icon"></div><div className="info-content"><span className="info-key">Phone</span><span className="info-val">+91-7766890121</span></div></div>
            <div className="info-item"><div className="info-icon"></div><div className="info-content"><span className="info-key">Status</span><span className="info-val">Open to Opportunities</span></div></div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-label">Expertise</div>
        <h2 className="section-title">Skills & Tools</h2>

        <div className="skills-grid">
          <div className="skill-card"><span className="skill-card-icon">🎨</span><div className="skill-card-title">UI/UX Design</div><div className="skill-tags"><span className="skill-tag green">User-Centered Design</span><span className="skill-tag green">Design Thinking</span><span className="skill-tag green">Wireframing</span><span className="skill-tag green">Prototyping</span><span className="skill-tag green">User Flows</span><span className="skill-tag green">Journey Mapping</span><span className="skill-tag green">Information Architecture</span><span className="skill-tag green">Interaction Design</span><span className="skill-tag green">Visual Design</span><span className="skill-tag green">Responsive Design</span><span className="skill-tag green">Design Systems</span><span className="skill-tag green">WCAG Accessibility</span><span className="skill-tag green">Usability Testing</span><span className="skill-tag green">A/B Testing</span><span className="skill-tag green">User Research</span></div></div>
          <div className="skill-card"><span className="skill-card-icon">🛠️</span><div className="skill-card-title">Design Tools</div><div className="skill-tags"><span className="skill-tag pink">Figma</span><span className="skill-tag pink">Auto Layout</span><span className="skill-tag pink">Components</span><span className="skill-tag pink">Adobe XD</span><span className="skill-tag pink">Canva</span><span className="skill-tag pink">Framer</span></div></div>
          <div className="skill-card"><span className="skill-card-icon">⚛️</span><div className="skill-card-title">Frontend Development</div><div className="skill-tags"><span className="skill-tag blue">React.js</span><span className="skill-tag blue">JavaScript</span><span className="skill-tag blue">HTML</span><span className="skill-tag blue">CSS</span><span className="skill-tag blue">Tailwind CSS</span><span className="skill-tag blue">Responsive Grid</span></div></div>
          <div className="skill-card"><span className="skill-card-icon">💻</span><div className="skill-card-title">Programming</div><div className="skill-tags"><span className="skill-tag">Python</span><span className="skill-tag">Java</span><span className="skill-tag">SQL</span></div></div>
          <div className="skill-card"><span className="skill-card-icon">🔧</span><div className="skill-card-title">Tools & DevOps</div><div className="skill-tags"><span className="skill-tag">Git</span><span className="skill-tag">GitHub</span><span className="skill-tag">Postman</span><span className="skill-tag">VS Code</span><span className="skill-tag">Vercel</span><span className="skill-tag">Lighthouse</span></div></div>
          <div className="skill-card"><span className="skill-card-icon">🤖</span><div className="skill-card-title">AI & Computer Vision</div><div className="skill-tags"><span className="skill-tag">YOLOv5</span><span className="skill-tag">OpenCV</span><span className="skill-tag">Deep Learning</span><span className="skill-tag">NLP</span><span className="skill-tag">Data Science</span></div></div>
        </div>
      </section>

      <section id="projects">
        <div className="section-label">Work</div>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectCards.map((project, index) => (
            <div className="project-card" key={project.title} style={{ animationDelay: `${0.12 * (index + 1)}s` }}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-num">{project.number}</div>
                <div className="project-title">{project.title}</div>
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <span className="metric-badge" key={metric}>{metric}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Professional Journey</h2>
        <div className="exp-grid">
          <div className="exp-sidebar">
            <div className="exp-year blue">2024</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
              Hands-on industry experience delivering real-world frontend solutions with measurable impact.
            </p>
          </div>
          <div className="exp-card">
            <div className="exp-header"><div className="exp-role">Web Development Intern</div><span className="exp-badge">Remote</span></div>
            <div className="exp-company">CodSoft</div>
            <div className="exp-meta">September 2024 — October 2024</div>
            <ul className="exp-points">
              <li>Boosted frontend performance by <strong style={{ color: 'var(--accent)' }}>20%</strong> through optimized UI components and efficient code structure.</li>
              <li>Upgraded usability and reduced UI inconsistencies by <strong style={{ color: 'var(--accent)' }}>30%</strong> using structured design systems and standardized patterns.</li>
              <li>Collaborated cross-functionally with teams to deliver user-friendly and fully responsive web interfaces on time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-grid">
          <div className="edu-card"><span className="edu-icon">🎓</span><div className="edu-degree">B.Tech in Computer Science (AI & ML)</div><div className="edu-school">Noida Institute of Engineering & Technology</div><div className="edu-year">2022 – 2026 · Greater Noida, India</div><span className="edu-score">CGPA: 6.92</span></div>
          <div className="edu-card"><span className="edu-icon">📚</span><div className="edu-degree">Class XII — Senior Secondary</div><div className="edu-school">Higher Secondary School</div><div className="edu-year">2021</div><span className="edu-score">80.6%</span></div>
          <div className="edu-card"><span className="edu-icon">📖</span><div className="edu-degree">Class X — Secondary</div><div className="edu-school">Secondary School</div><div className="edu-year">2019</div><span className="edu-score">79.2%</span></div>
        </div>
      </section>

      <section id="certifications">
        <div className="section-label">Certifications</div>
        <h2 className="section-title">Credentials</h2>
        <div className="cert-list">
          <div className="cert-item"><div className="cert-icon">🐍</div><span className="cert-name">Python for Data Science</span><span className="cert-badge">Certified</span></div>
          <div className="cert-item"><div className="cert-icon">⚛️</div><span className="cert-name">ReactJS</span><span className="cert-badge">Certified</span></div>
          <div className="cert-item"><div className="cert-icon">🧠</div><span className="cert-name">Deep Learning</span><span className="cert-badge">Certified</span></div>
          <div className="cert-item"><div className="cert-icon">🌐</div><span className="cert-name">JavaScript Essentials</span><span className="cert-badge">Certified</span></div>
          <div className="cert-item"><div className="cert-icon">💬</div><span className="cert-name">NLP using Python</span><span className="cert-badge">Certified</span></div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="contact-title">Let's build something<br /><span>remarkable</span></h2>
          <p className="contact-sub">
            I'm open to internships, full-time roles, and freelance collaborations. Whether you have a project in mind or just want to connect — my inbox is always open.
          </p>

          <div className="contact-links">
            <a href="mailto:jha859970@gmail.com" className="contact-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,12 2,6"></polyline></svg>jha859970@gmail.com</a>
            <a href="tel:+917766890121" className="contact-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"></path></svg>+91-7766890121</a>
            <a href="https://www.linkedin.com/in/ayush-kumar-a82876282/" target="_blank" rel="noreferrer" className="contact-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>LinkedIn</a>
            <a href="https://github.com/Ayush12kumar" target="_blank" rel="noreferrer" className="contact-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 6.96A3.37 3.37 0 0 0 9 18.13V22"></path></svg>GitHub</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project / job / collaboration" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2025 Ayush Kumar. All rights reserved.</span>
        <span className="footer-made">Delhi, India 🇮🇳</span>
      </footer>
    </>
  );
}
