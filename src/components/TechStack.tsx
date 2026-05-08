import "./styles/TechStack.css";

const techItems = [
  { name: "React", icon: "/images/react2.webp" },
  { name: "Next.js", icon: "/images/next2.webp" },
  { name: "Node.js", icon: "/images/node2.webp" },
  { name: "Express", icon: "/images/express.webp" },
  { name: "MongoDB", icon: "/images/mongo.webp" },
  { name: "MySQL", icon: "/images/mysql.webp" },
  { name: "TypeScript", icon: "/images/typescript.webp" },
  { name: "JavaScript", icon: "/images/javascript.webp" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <div className="tech-grid">
        {techItems.map((item, index) => (
          <div
            className="tech-card"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tech-card-inner">
              <div className="tech-card-glow"></div>
              <img src={item.icon} alt={item.name} className="tech-icon" />
              <span className="tech-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
