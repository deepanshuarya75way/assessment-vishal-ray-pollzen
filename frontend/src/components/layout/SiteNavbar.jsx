import { Link } from "react-router-dom";
import { Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
          <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
            <Vote size={18} />
          </div>
          PollZen
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
          <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">Docs</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" className="text-muted-foreground">Login</Button>
          </Link>

          <Link to="/register">
            <Button className="bg-indigo-600 hover:bg-indigo-500">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
