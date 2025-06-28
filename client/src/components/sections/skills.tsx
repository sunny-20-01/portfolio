import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart3, Calculator, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C/C++", "SQL", "Power BI"]
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib"]
    },
    {
      title: "Finance Tools",
      icon: Calculator,
      skills: ["Excel", "Bloomberg", "Financial Modeling", "Portfolio Management"]
    },
    {
      title: "Languages",
      icon: Globe,
      skills: ["English (Fluent)", "Hindi (Native)", "French (Beginner)"]
    }
  ];

  const certifications = [
    {
      title: "Bloomberg Finance Fundamentals",
      issuer: "Bloomberg, 2024",
      icon: BarChart3,
      iconBg: "bg-blue-600"
    },
    {
      title: "Bloomberg Market Concepts",
      issuer: "Bloomberg, 2024",
      icon: BarChart3,
      iconBg: "bg-blue-600"
    },
    {
      title: "Financial Modelling",
      issuer: "CFA Institute, 2024",
      icon: Calculator,
      iconBg: "bg-blue-600"
    },
    {
      title: "Corporate Finance",
      issuer: "University of Pennsylvania, 2023",
      icon: BarChart3,
      iconBg: "bg-green-600"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan, 2023",
      icon: Code,
      iconBg: "bg-yellow-600"
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI, 2019",
      icon: BarChart3,
      iconBg: "bg-red-600"
    },
    {
      title: "GCP Essentials",
      issuer: "Google Cloud, 2019",
      icon: Code,
      iconBg: "bg-purple-600"
    },
    {
      title: "Introduction to Ethical Hacking",
      issuer: "Great Learning, 2022",
      icon: Code,
      iconBg: "bg-gray-600"
    },
    {
      title: "Microsoft AI Classroom Series",
      issuer: "Microsoft, 2021",
      icon: BarChart3,
      iconBg: "bg-green-600"
    }
  ];

  const skillColors = [
    "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "bg-green-100 text-green-700 hover:bg-green-200",
    "bg-purple-100 text-purple-700 hover:bg-purple-200",
    "bg-orange-100 text-orange-700 hover:bg-orange-200"
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Skills & Certifications</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Comprehensive technical expertise backed by industry-recognized certifications from leading institutions.
          </p>
        </motion.div>
        
        {/* Technical Skills */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-neutral-900 mb-6 text-center"
          >
            Technical Skills
          </motion.h3>
          <div className="grid md:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <category.icon className="h-5 w-5 text-neutral-700 mr-2" />
                  <h4 className="font-semibold text-neutral-700">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`block px-3 py-2 text-sm font-medium ${skillColors[index]}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-neutral-900 mb-6 text-center"
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-neutral-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 ${cert.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                        <cert.icon className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-sm">{cert.title}</h4>
                        <p className="text-xs text-neutral-500">{cert.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
