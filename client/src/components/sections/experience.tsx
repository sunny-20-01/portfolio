import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Finance & Operations Intern",
      company: "The Originals Boutique Hotel Porte de Dieppe",
      period: "May – Aug 2024",
      location: "Dieppe, France",
      achievements: [
        "Managed daily financial reporting and analyzed revenue trends",
        "Optimized budget allocations and implemented cost-control measures",
        "Processed over €250K monthly in Accounts Payable/Receivable",
        "Coordinated payroll and inventory tracking systems"
      ],
      color: "blue"
    },
    {
      title: "Research Intern",
      company: "Meander Spectra Private Limited",
      period: "Feb – Apr 2023",
      location: "Karnataka, India",
      achievements: [
        "Built custom emotion recognition dataset for Indian-accented speech",
        "Developed Python model using 5+ hours of real-time video data",
        "Combined CNN classifiers with statistical feature engineering",
        "Achieved 98% accuracy in risky driving behavior detection"
      ],
      color: "green"
    },
    {
      title: "Digital Media Marketing Intern",
      company: "Hamari Pahchan",
      period: "Jun – Jul 2020",
      location: "Delhi, India",
      achievements: [
        "Led digital marketing for SUKHAD initiative during COVID-19",
        "Supported distribution of 50,000+ sanitary pads",
        "Improved menstrual hygiene for underserved communities"
      ],
      color: "orange"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Professional Experience</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Diverse experience spanning finance, research, and digital marketing across multiple industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                          <p className="text-neutral-500 text-sm">{exp.location}</p>
                        </div>
                        <p className="text-neutral-500 font-medium mt-2 sm:mt-0">{exp.period}</p>
                      </div>
                      <ul className="space-y-2 text-neutral-600">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <CheckCircle className={`mt-1 mr-3 flex-shrink-0 h-4 w-4 ${
                              exp.color === "blue" ? "text-blue-600" :
                              exp.color === "green" ? "text-green-600" : "text-orange-600"
                            }`} />
                            <span dangerouslySetInnerHTML={{ 
                              __html: achievement.replace(/€250K|98%|50,000\+/g, '<strong>$&</strong>') 
                            }} />
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
