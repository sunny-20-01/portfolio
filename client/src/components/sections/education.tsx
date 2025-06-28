import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institution: "SKEMA Business School",
      degree: "M.Sc. in Corporate Finance & Master in Management (GRANDE ÉCOLE)",
      location: "Paris, France",
      period: "Sep. 2023 – Apr. 2025",
      coursework: [
        "Corporate Valuation",
        "Treasury Management", 
        "Financial Analysis",
        "Private Equity",
        "Portfolio Management",
        "Python"
      ],
      color: "blue"
    },
    {
      institution: "Ramaiah Institute of Technology, VTU University",
      degree: "Bachelor of Engineering in Electronic and Telecommunication",
      location: "Karnataka, India", 
      period: "Aug. 2019 – Jun. 2023",
      coursework: [
        "IoT",
        "Python",
        "C/C++",
        "Data Structures",
        "Microcontrollers",
        "Communication Systems"
      ],
      color: "green"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Education</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Building a strong foundation in both finance and technology through rigorous academic programs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-neutral-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{edu.institution}</h3>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                      <p className="text-neutral-500">{edu.location}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-neutral-600 font-medium">{edu.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="secondary"
                        className={`${
                          edu.color === "blue"
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                            : "bg-green-100 text-green-700 hover:bg-green-200"
                        }`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
