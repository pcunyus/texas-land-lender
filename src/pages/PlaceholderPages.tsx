import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PlaceholderPage = ({ title, description }: { title: string; description: string }) => {
  return (
    <SiteLayout>
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">{title}</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{description}</p>
        </div>
      </section>
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8">Full content coming soon.</p>
          <Link to="/"><Button variant="outline">← Back to Home</Button></Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export const WhyFscapPage = () => <PlaceholderPage title="Why Choose FSCAP" description="Speed, expertise, and transparency — here's why Texas land buyers and brokers trust FSCAP." />;
export const ResourcesPage = () => <PlaceholderPage title="Resources" description="Expert insights, guides, and tools for Texas land buyers." />;
export const AboutPage = () => <PlaceholderPage title="About FSCAP" description="Financing Texas rural properties since 1993. Our story, our team, our mission." />;
export const ContactPage = () => <PlaceholderPage title="Contact Us" description="Ready to talk? Reach out to a Texas land lending expert today." />;
export const ApplyPage = () => <PlaceholderPage title="Apply Now" description="Get pre-approved in 48 hours. Start your application below." />;
