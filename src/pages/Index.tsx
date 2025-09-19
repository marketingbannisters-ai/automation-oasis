import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Users, Mail, FileText, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Automations for{" "}
            <span className="text-brand-blue1">Everyone</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our mission is to continuously improve automation at the company and make it accessible to all teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/reports">
                Browse Reports
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="brand-secondary" size="xl">
              <a href="#contribute">
                Contribute an Automation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI-BAG Exists Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why AI-BAG Exists</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Bannister Automotive Group, we believe that technology should make life easier, not busier. 
              That's why we created AI-BAG, a collection of practical AI tools crafted by our very own employees.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These automations tackle the little tasks that eat up minutes in your day:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-blue1 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Drafting emails</strong> so you can spend more time on the sales floor.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-blue1 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Tracking milestones</strong> so you can celebrate your colleagues instead of crunching numbers.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-blue1 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Streamlining workflows</strong> so your energy stays where it matters most.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mt-8 leading-relaxed font-medium">
              When the small stuff is handled, you show up to every conversation more present, more engaged, and more people-first.
            </p>
          </div>
        </div>
      </section>

      {/* The Ripple Effect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">The Ripple Effect</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every minute saved per employee adds up. One minute reclaimed each day equals about <strong>$100,000 in yearly savings</strong> across the company. 
              Now imagine the power of five minutes, thirty minutes, or even an hour.
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <p className="text-xl text-foreground leading-relaxed">
                But here's the bigger picture: it's not just about saving money. It's about saving <strong>focus, energy, and presence</strong>, 
                so our team and our customers feel the difference every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-gold1 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Elevate efficiency by sharing proven automations and clear instructions. We believe that great automations should be accessible, documented, and easily discoverable by everyone on the team.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-gold2 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A collaborative hub where every teammate can discover, learn, and extend automations. Together, we'll build a culture of continuous improvement and shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section id="contribute" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Contribute</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your automations with the team in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-brand-blue1 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Prepare Description</h3>
              <p className="text-muted-foreground">
                Write a clear, concise description of what your automation does and the problem it solves.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-brand-blue2 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Add Instructions</h3>
              <p className="text-muted-foreground">
                Provide step-by-step setup instructions that anyone on the team can follow.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-brand-gold1 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Provide Contact</h3>
              <p className="text-muted-foreground">
                Include your name and contact information so others can reach out with questions.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-brand-gold2 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Submit</h3>
              <p className="text-muted-foreground">
                Send your automation via our form or create a pull request in our repository.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 space-x-4">
            <Button variant="brand" size="lg">
              Submit Automation
            </Button>
            <Button variant="brand-secondary" size="lg">
              View Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                  alt="Team Lead"
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground">Automation Team</h3>
                  <p className="text-muted-foreground">Project Maintainers</p>
                </div>
              </div>
              <Button asChild variant="brand">
                <a href="mailto:automation@company.com">
                  <Mail className="mr-2 h-4 w-4" />
                  automation@company.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;