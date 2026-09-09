import { Card, CardContent } from "@/components/ui/card";

import PollPieChart from "./PollPieChart";
import PollBarChart from "./PollBarChart";

export default function QuestionAnalyticsCard({ question}) {
     return (
          <Card>
               <CardContent className="p-6 space-y-8">
                    <div>
                         <h2 className="text-xl font-semibold text-card-foreground">{question.questionText}</h2>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-2">
                         <PollPieChart data={question.options} />

                         <PollBarChart data={question.options} />
                    </div>

                    <div className="space-y-4">
                         {question.options.map((option) => (
                              <div key={option.optionId} className="space-y-2">
                                   <div className="flex items-center justify-between text-sm">
                                        <span className="text-card-foreground">{option.optionText}</span>

                                        <span className="text-muted-foreground">{option.percentage}%</span>
                                   </div>

                                   <div className="h-2 overflow-hidden rounded-full bg-muted">
                                        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${option.percentage}%` }} />
                                   </div>
                              </div>
                         ))}
                    </div>
               </CardContent>
          </Card>
     );
}