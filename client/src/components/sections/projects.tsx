import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Sun, Radio, Car, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Algorithmic Trading Strategy",
      description: "Developed momentum-based trading strategy using Python with RSI and Moving Averages, optimized through historical backtesting for maximum risk-adjusted returns.",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      tags: ["Python", "Trading", "Backtesting"],
      period: "Apr 2024"
    },
    {
      title: "IoT-Based Security System",
      description: "Led team of 4 to develop comprehensive security system using PIR Sensor, HX711, and Python that emails lab attendant with person's photo, weight, and entry/exit times using Raspberry Pi.",
      icon: Shield,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      tags: ["IoT", "Security", "Raspberry Pi", "Python"],
      period: "Ramaiah Institute of Technology"
    },
    {
      title: "Heliostat Mirror Positioning",
      description: "Spearheaded team of 4 to create heliostat power plant mirror that moves with the sun for efficient electricity generation. Built virtual prototype using Raspberry Pi 4, achieving 30-40% efficiency.",
      icon: Sun,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      tags: ["Solar", "Raspberry Pi", "Servo Motors"],
      period: "Sep 2021 – Jan 2022"
    },
    {
      title: "RF Transceiver for Gait Analysis",
      description: "Radio frequency communication system for analyzing human gait patterns and movement detection with advanced signal processing capabilities.",
      icon: Radio,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      tags: ["RF", "Signal Processing", "Healthcare"]
    },
    {
      title: "Arduino Bluetooth Car & Object Avoider",
      description: "Bluetooth-controlled vehicle with intelligent object avoidance capabilities using ultrasonic sensors and Arduino microcontroller.",
      icon: Car,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      tags: ["Arduino", "Bluetooth", "Robotics"]
    },
    {
      title: "Library Management System",
      description: "Complete library management solution built in C++ with comprehensive inventory tracking and user management features.",
      icon: Database,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      tags: ["C++", "Database", "Management"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Academic Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Innovative engineering and finance projects demonstrating technical expertise and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-neutral-200 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <project.icon className={`${project.iconColor} h-6 w-6`} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{project.title}</h3>
                  {project.period && (
                    <p className="text-neutral-500 text-xs font-medium mb-2">{project.period}</p>
                  )}
                  <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className={`text-xs ${project.iconBg} ${project.iconColor} hover:opacity-80`}
                      >
                        {tag}
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
