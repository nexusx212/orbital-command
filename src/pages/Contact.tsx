import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { industries } from "@/data/site";
import { Globe, Linkedin, Loader2, Mail, MapPin } from "lucide-react";

const initialState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  message: "",
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([formData]);
      if (error) throw error;

      toast({
        title: "Message sent successfully",
        description: "Our team will get back to you shortly.",
      });
      setFormData(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build Africa's digital infrastructure together</>}
        description="Talk to us about enterprise deployments, government partnerships, investment or media enquiries."
      />

      <section className="py-24">
        <div className="container grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Company</Label>
                    <Input id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Your organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+234 000 000 0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Nigeria" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                    >
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.name} value={industry.name}>
                            {industry.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your organization and what you'd like to build."
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full font-semibold">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "info@nexusxind.com", href: "mailto:info@nexusxind.com" },
                { icon: Globe, title: "Website", value: "www.nexusxind.com", href: "https://www.nexusxind.com" },
                { icon: Linkedin, title: "LinkedIn", value: "Connect with us", href: "https://linkedin.com" },
                { icon: MapPin, title: "Headquarters", value: "Lagos, Nigeria" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title="Nexus X Industries headquarters location in Lagos, Nigeria"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.20%2C6.35%2C3.60%2C6.70&layer=mapnik&marker=6.5244%2C3.3792"
                  className="h-72 w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
