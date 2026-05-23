import { Code2, Users, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Code2,
      label: "GitHub",
      href: "https://github.com/Geethika2506",
      visible: true,
    },
    {
      icon: Users,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/geethikareddykonda/",
      visible: true,
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gkonda.ieu2023@student.ie.edu",
      visible: true,
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+34635280385",
      visible: true,
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Geethika</h3>
            <p className="text-gray-400 leading-relaxed">
              AI & Full-Stack Developer passionate about building intelligent solutions and scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                <a 
                  href="mailto:gkonda.ieu2023@student.ie.edu"
                  className="hover:text-white transition-colors break-all"
                >
                  gkonda.ieu2023@student.ie.edu
                </a>
              </p>
              <p className="text-gray-400">
                <a 
                  href="tel:+34635280385"
                  className="hover:text-white transition-colors"
                >
                  +34 635 280 385
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Geethika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
