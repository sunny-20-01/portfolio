import { ArrowUp, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Sunny. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/sunny-2a522b147"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:sunny@skema.edu" className="hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <button onClick={scrollToTop} className="hover:text-white transition-colors">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
