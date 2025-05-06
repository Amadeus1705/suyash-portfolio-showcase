
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "Suyashsharma9999@gmail.com",
      href: "mailto:Suyashsharma9999@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-9131405545",
      href: "tel:+919131405545"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/Suyash726",
      href: "https://github.com/Suyash726"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-theme-blue flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-theme-gray">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-theme-dark-blue font-medium hover:text-theme-blue transition-colors"
                      target={item.label === "GitHub" ? "_blank" : undefined}
                      rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-theme-gray mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="border-theme-gray/30 focus-visible:ring-theme-blue" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-theme-gray mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="border-theme-gray/30 focus-visible:ring-theme-blue" 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-theme-gray mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      className="border-theme-gray/30 focus-visible:ring-theme-blue" 
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-theme-gray mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5}
                      className="border-theme-gray/30 focus-visible:ring-theme-blue" 
                    />
                  </div>
                  <Button className="w-full bg-theme-blue hover:bg-theme-dark-blue">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
