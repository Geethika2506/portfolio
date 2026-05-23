import { Code2, Users, Mail } from "lucide-react";

export default function Header() {
  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  const socialLinks = [
    {
      icon: Code2,
      href: "https://github.com/Geethika2506",
      label: "GitHub",
    },
    {
      icon: Users,
      href: "https://www.linkedin.com/in/geethikareddykonda/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:gkonda.ieu2023@student.ie.edu",
      label: "Email",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Geethika
        </a>

        {/* Nav Links + Social (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <nav className="flex gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 pl-8 border-l border-white/10">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex gap-4">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
