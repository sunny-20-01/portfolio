import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Research() {
  const researchProjects = [
    {
      title: "Risk-Constrained Retirement Portfolio Optimization",
      institution: "SKEMA Business School",
      period: "Feb – Apr 2025",
      icon: TrendingUp,
      highlights: [
        "Built customized investment portfolio for French retiree with €250K mandate",
        "Developed automated Python pipeline for 10+ years of European equity data",
        "Applied mean-variance and minimum-variance optimization",
        "Generated Efficient Frontier plots and Sharpe ratio analysis"
      ],
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-600"
    },
    {
      title: "Private Equity Deal Valuation",
      institution: "SKEMA Business School", 
      period: "Nov – Dec 2024",
      icon: Building,
      highlights: [
        "Conducted full-cycle valuation of mid-market European industrial firm",
        "Modeled 3 revenue scenarios with WACC sensitivity analysis",
        "Fair value range assessment: €41M – €48M",
        "Benchmarked 6 peers across EV/EBITDA and P/E metrics"
      ],
      gradient: "from-green-50 to-green-100",
      border: "border-green-200",
      iconBg: "bg-green-600"
    }
  ];

  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Research Experience</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Advanced research in quantitative finance, portfolio optimization, and private equity valuation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${project.gradient} border ${project.border}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                      <project.icon className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
                      <p className={`font-medium ${
                        index === 0 ? "text-blue-600" : "text-green-600"
                      }`}>
                        {project.institution} | {project.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-neutral-700">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <ArrowRight className={`mt-1 mr-3 flex-shrink-0 h-4 w-4 ${
                          index === 0 ? "text-blue-600" : "text-green-600"
                        }`} />
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlight.replace(/€250K|€41M – €48M/g, '<strong>$&</strong>') 
                        }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
