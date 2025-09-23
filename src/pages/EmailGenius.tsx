import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Settings, AlertCircle, HelpCircle, Mail, Code, Users, Clock, DollarSign, Target, Timer } from "lucide-react";
import avatarAutomation from "@/assets/avatar-automation.jpg";

const EmailGenius = () => {
  const [sidebarActive, setSidebarActive] = useState("install");

  const quickLinks = [
    { id: "install", label: "Install", icon: Download },
    { id: "permissions", label: "Permissions", icon: Settings },
    { id: "troubleshooting", label: "Troubleshooting", icon: AlertCircle },
    { id: "why-use", label: "Why Use This", icon: Target },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Email Genius</h1>
          <div className="flex items-center justify-center space-x-3 text-muted-foreground mb-4">
            <span>Created by</span>
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={avatarAutomation} alt="Automation Team" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <Badge variant="secondary" className="bg-brand-gold1/10 text-brand-gold1">
                Automation Team
              </Badge>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An intelligent Outlook add-in that enhances your email workflow with AI-powered features and automation capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue1 rounded-lg flex items-center justify-center">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">1. Get the Manifest</h3>
                      <p className="text-sm text-muted-foreground">Download the Email Genius manifest file</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Download the manifest.xml file to begin the installation process. This file contains all the necessary configuration for the Email Genius add-in.
                    </p>
                    <div className="bg-muted rounded-lg p-4">
                      <code className="text-sm text-brand-navy">
                        https://automation-hub.com/downloads/email-genius-manifest.xml
                      </code>
                    </div>
                    <Button variant="brand" className="w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Download Manifest
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue2 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">2. Install in Outlook</h3>
                      <p className="text-sm text-muted-foreground">Add the manifest to your Outlook installation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Follow these steps to install Email Genius in your Outlook application:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Open Microsoft Outlook</li>
                      <li>Navigate to <strong>Insert → Get Add-ins</strong></li>
                      <li>Click on <strong>My add-ins</strong> in the left sidebar</li>
                      <li>Select <strong>Add a custom add-in → Add from file</strong></li>
                      <li>Browse and select the downloaded manifest.xml file</li>
                      <li>Click <strong>Install</strong> when prompted</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-gold1 rounded-lg flex items-center justify-center">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">3. Trust Prompts</h3>
                      <p className="text-sm text-muted-foreground">Approve necessary permissions</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      When installing, Outlook will display security prompts. Click <strong>"Yes"</strong> or <strong>"Allow"</strong> for:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Reading and writing email content</li>
                      <li>Accessing external web services</li>
                      <li>Storing user preferences</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-gold2 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">4. Connect Webhook</h3>
                      <p className="text-sm text-muted-foreground">Configure n8n integration</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      To enable full functionality, connect your n8n webhook URL:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Open Email Genius task pane in Outlook</li>
                      <li>Navigate to Settings</li>
                      <li>Paste your n8n webhook URL</li>
                      <li>Click Save Configuration</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Troubleshooting Section */}
            <div className="mt-12 bg-card rounded-2xl shadow-soft border border-border p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertCircle className="mr-3 h-6 w-6 text-brand-gold2" />
                Troubleshooting
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Manifest validation errors</h3>
                  <p className="text-muted-foreground">Confirm GUID, icons, and version numbers are correct in the manifest.xml file.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ribbon button not visible</h3>
                  <p className="text-muted-foreground">Check that Outlook surface (read/compose) matches the manifest configuration and add-in is properly sideloaded.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Network requests blocked</h3>
                  <p className="text-muted-foreground">Verify that the n8n webhook URL is reachable from your network and firewall settings allow connections.</p>
                </div>
              </div>
            </div>

            {/* Why to use this tool Section */}
            <div id="why-use" className="mt-12 bg-card rounded-2xl shadow-soft border border-border p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-brand-blue1" />
                Why to use this tool?
              </h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  At Bannister, the numbers tell a compelling story about email efficiency:
                </p>
                
                {/* Statistics Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-brand-blue1/10 to-brand-blue2/10 rounded-xl p-4 border border-brand-blue1/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="h-8 w-8 text-brand-blue1" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">1000+</div>
                        <div className="text-sm text-muted-foreground">Employees</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-brand-gold1/10 to-brand-gold2/10 rounded-xl p-4 border border-brand-gold1/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="h-8 w-8 text-brand-gold1" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">10</div>
                        <div className="text-sm text-muted-foreground">Emails per day</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-brand-navy/10 to-brand-blue1/10 rounded-xl p-4 border border-brand-navy/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-8 w-8 text-brand-navy" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">3</div>
                        <div className="text-sm text-muted-foreground">Minutes per email</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-4 border border-red-500/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Timer className="h-8 w-8 text-red-500" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">30</div>
                        <div className="text-sm text-muted-foreground">Minutes per person/day</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* The Math Breakdown */}
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Impact:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Total time per month (1000 employees):</span>
                      <span className="font-bold text-foreground text-lg">132,000 Hours</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Equivalent to hiring:</span>
                      <span className="font-bold text-brand-blue1 text-lg">62 Full-time Employees</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">Annual cost impact:</span>
                      <span className="font-bold text-red-500 text-lg">Significant Overhead</span>
                    </div>
                  </div>
                </div>
                
                {/* Goal Statement */}
                <div className="bg-gradient-to-r from-brand-blue1/5 to-brand-blue2/5 rounded-xl p-6 border border-brand-blue1/20">
                  <div className="flex items-start space-x-4">
                    <Target className="h-8 w-8 text-brand-blue1 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Goal</h3>
                      <p className="text-muted-foreground text-lg">
                        <strong>Bring down the amount spent on emails as much as possible.</strong> Every minute saved on email processing translates to more time for productive work and significant cost savings across the organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl shadow-soft border border-border p-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-brand-blue1 hover:bg-brand-blue1/5 rounded-lg transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailGenius;