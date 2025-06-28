import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Activities() {
  const activities = [
    {
      title: "Secretary, Sensor Council - IEEE",
      period: "May 2020 – May 2023",
      achievements: [
        'Supervised "World of Sensors" two-day event with BMSE College',
        'Organized "Smart Sensors for Healthcare Applications" conference',
        "Achieved 200+ attendees for each major event"
      ],
      icon: Users,
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Volunteer, Touch N Glow (NGO)",
      period: "Jan – Feb 2021, Bihar",
      achievements: [
        "Taught technology and mathematics to 15 students",
        "Distributed sustenance to 40 individuals in need",
        "Collaborated with 4-member team for community impact"
      ],
      icon: Heart,
      gradient: "from-green-50 to-green-100", 
      border: "border-green-200",
      iconBg: "bg-green-600",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Leadership & Impact</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Demonstrating leadership through professional organizations and community service initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${activity.gradient} border ${activity.border}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${activity.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                      <activity.icon className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{activity.title}</h3>
                      <p className={`font-medium ${activity.iconColor}`}>{activity.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-neutral-700">
                    {activity.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <Star className={`mt-1 mr-3 flex-shrink-0 h-4 w-4 ${activity.iconColor}`} />
                        <span dangerouslySetInnerHTML={{ 
                          __html: achievement.replace(/200\+|15 students|40 individuals/g, '<strong>$&</strong>') 
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
