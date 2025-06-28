import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/api/download-cv", { method: "GET" });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Sunny_CV.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Failed to download CV:", error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sunny@skema.edu",
      href: "mailto:sunny@skema.edu"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "(+33) 07 45 46 99 87",
      href: "tel:+33745469987"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sunny-2a522b147"
    }
  ];

  const availability = [
    { label: "Full-time Internships", status: "Available", available: true },
    { label: "Research Projects", status: "Open", available: true },
    { label: "Start Date", status: "July 2025", available: false },
    { label: "Location", status: "Paris, France & Remote", available: false }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Ready to bring finance expertise and technical innovation to your team. Let's discuss how I can contribute to your organization's success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <contact.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <a
                      href={contact.href}
                      target={contact.icon === Linkedin ? "_blank" : undefined}
                      rel={contact.icon === Linkedin ? "noopener noreferrer" : undefined}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Available for Opportunities</h3>
                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-white/20 last:border-b-0">
                      <span className="font-medium">{item.label}</span>
                      <span className={`flex items-center ${
                        item.available ? "text-green-300" : "text-blue-100"
                      }`}>
                        {item.available && <CheckCircle className="mr-2 h-4 w-4" />}
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleDownloadCV}
                  className="w-full mt-6 bg-white text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Full CV
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
