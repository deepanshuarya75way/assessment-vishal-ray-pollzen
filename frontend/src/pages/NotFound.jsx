import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold">404 — Not Found</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for does not exist.</p>
        <div className="mt-6">
          <Link to="/">Return to home</Link>
        </div>
      </div>
    </div>
  );
}
