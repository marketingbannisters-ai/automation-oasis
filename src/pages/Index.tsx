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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue1/5 via-transparent to-brand-gold1/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue1 rounded-2xl mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why AI-BAG Exists</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Bannister Automotive Group, we believe that technology should make life easier, not busier. 
              That's why we created AI-BAG, a collection of practical AI tools crafted by our very own employees.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-foreground font-semibold">
                These automations tackle the little tasks that eat up minutes in your day:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-blue1 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Drafting Emails</h3>
                <p className="text-muted-foreground leading-relaxed">
                  So you can spend more time on the sales floor connecting with customers.
                </p>
              </div>
              
              <div className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-gold1 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tracking Milestones</h3>
                <p className="text-muted-foreground leading-relaxed">
                  So you can celebrate your colleagues instead of crunching numbers.
                </p>
              </div>
              
              <div className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-gold2 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Streamlining Workflows</h3>
                <p className="text-muted-foreground leading-relaxed">
                  So your energy stays where it matters most - with people.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-primary/10 to-brand-blue1/10 rounded-2xl p-8 border border-brand-blue1/20">
                <p className="text-xl text-foreground leading-relaxed font-medium">
                  When the small stuff is handled, you show up to every conversation more 
                  <span className="text-brand-blue1 font-semibold"> present</span>, more 
                  <span className="text-brand-gold1 font-semibold"> engaged</span>, and more 
                  <span className="text-brand-gold2 font-semibold"> people-first</span>.
                </p>
              </div>
            </div>
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