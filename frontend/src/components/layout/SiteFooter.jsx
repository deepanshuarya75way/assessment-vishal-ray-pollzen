import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold">PollZen</h4>
            <p className="text-sm text-muted-foreground">Realtime polling and audience engagement for teams, events, and classrooms.</p>
          </div>

          <div>
            <h5 className="mb-2 font-medium">Product</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Features</li>
              <li>Integrations</li>
              <li>Realtime Analytics</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-medium">Company</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-medium">Resources</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Docs</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <span>© {new Date().getFullYear()} PollZen. All rights reserved.</span>
            <div className="flex gap-4">
              <Link to="#">Terms</Link>
              <Link to="#">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
