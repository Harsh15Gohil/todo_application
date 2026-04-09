import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function AuthShell({
  title,
  subtitle,
  promptText,
  promptLink,
  promptLabel,
  theme,
  toggleTheme,
  children,
}) {
  return (
    <main className="auth-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="auth-card">
        <div className="auth-card-header">
          <span className="badge">Smart Task & Notes</span>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        {children}
        <p className="auth-switch">
          {promptText} <Link to={promptLink}>{promptLabel}</Link>
        </p>
      </section>
    </main>
  );
}

export default AuthShell;
