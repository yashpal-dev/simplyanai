import Link from "next/link";
import { Heart, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-mono text-sm font-bold">
                    S
                  </span>
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Simplyanai
                </h3>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered tools designed to enhance your productivity and
              streamline your workflow.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/upload"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Chatwithdoc
                </Link>
              </li>
              <li>
                <Link
                  href="/buggy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Buggy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Designed with{" "}
              <Heart className="w-4 h-4 inline text-red-500 mx-1" /> by{" "}
              <span className="text-foreground font-medium">Simplyanai</span>
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Simplyanai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
