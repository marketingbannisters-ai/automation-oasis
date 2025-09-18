import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Mail, Share2, Palette, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Email Genius", href: "/email-genius", icon: Mail },
  { name: "SocialPostr", href: "/socialpostr", icon: Share2 },
  { name: "Designer", href: "/designer", icon: Palette },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-primary text-white p-2 rounded-lg shadow-lg hover:bg-brand-primary/90 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link
              to="/"
              className="text-brand-primary text-xl font-bold hover:text-brand-blue1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Automation Hub
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors group",
                    "focus-visible:outline-2 focus-visible:outline-brand-blue1 focus-visible:outline-offset-2",
                    isActive
                      ? "bg-brand-primary text-white"
                      : "text-muted-foreground hover:text-brand-primary hover:bg-brand-primary/5"
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive 
                      ? "text-white" 
                      : "text-muted-foreground group-hover:text-brand-primary"
                  )} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2024 Automation Hub
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};