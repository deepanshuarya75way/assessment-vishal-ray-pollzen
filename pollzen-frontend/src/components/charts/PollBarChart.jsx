import {
     ResponsiveContainer,
     BarChart,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
} from "recharts";

export default function PollBarChart({
     data,
}) {
     return (
          <div className="h-80">
               <ResponsiveContainer
                    width="100%"
                    height="100%"
               >
                    <BarChart data={data}>
                         <XAxis
                              dataKey="optionText"
                         />

                         <YAxis />

                         <Tooltip />

                         <Bar
                              dataKey="count"
                              radius={[6, 6, 0, 0]}
                              fill="#6366F1"
                         />
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
}