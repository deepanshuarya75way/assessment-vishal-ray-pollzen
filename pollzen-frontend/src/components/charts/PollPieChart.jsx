import {
     PieChart,
     Pie,
     Cell,
     ResponsiveContainer,
     Tooltip,
} from "recharts";

const COLORS = [
     "#6366F1",
     "#8B5CF6",
     "#06B6D4",
     "#10B981",
     "#F59E0B",
];

export default function PollPieChart({
     data,
}) {
     return (
          <div className="h-80">
               <ResponsiveContainer
                    width="100%"
                    height="100%"
               >
                    <PieChart>
                         <Pie
                              data={data}
                              dataKey="count"
                              nameKey="optionText"
                              cx="50%"
                              cy="50%"
                              outerRadius={100}
                              label
                         >
                              {data.map(
                                   (entry, index) => (
                                        <Cell
                                             key={index}
                                             fill={
                                                  COLORS[
                                                  index %
                                                  COLORS.length
                                                  ]
                                             }
                                        />
                                   )
                              )}
                         </Pie>

                         <Tooltip />
                    </PieChart>
               </ResponsiveContainer>
          </div>
     );
}