import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { getMyPolls } from "@/services/poll.service";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnalyticsOverview() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getMyPolls();
        setPolls(res.data || []);
      } catch (err) {
        console.error(err);
        toast.error(err?.response?.data?.message || "Failed to load polls");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <div className="text-muted-foreground">Loading polls...</div>;

  if (!polls || polls.length === 0)
    return <div className="text-muted-foreground">No polls found. Create one to view analytics.</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {polls.map((p) => (
          <Card key={p._id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium text-card-foreground">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.totalResponses || 0} responses</div>
              </div>

              <div className="flex gap-2">
                <Link to={`/app/analytics/${p._id}`}>
                  <Button variant="secondary">Open Analytics</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
