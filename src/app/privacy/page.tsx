"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Mail, 
  Info, 
  UserCheck, 
  Scale, 
  AlertTriangle 
} from "lucide-react"
import { contactEmail, siteUrl } from "@/lib/site"

const siteHost = new URL(siteUrl).host

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Privacy Policy &amp; Data Notice
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act, India) &amp; Global Privacy Standards.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <span>● DPDP Act 2023 Compliant</span>
            <span>•</span>
            <span>Last Updated: September 2026</span>
          </div>
        </motion.div>

        <div className="space-y-12 leading-relaxed">
          {/* Section 1: Data Fiduciary & Scope */}
          <section className="bg-card/40 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">1. Data Fiduciary &amp; Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong>Xyphora AI</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) acts as the <strong>Data Fiduciary</strong> in respect of the digital personal data collected through our website (<a href={siteUrl} className="text-primary hover:underline">{siteHost}</a>), our interactive AI consultation chatbot, and associated web engineering consultation services.
            </p>
            <p className="text-muted-foreground">
              We are committed to safeguarding your digital personal data in strict conformity with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the Information Technology Act, 2000, and applicable data security regulations.
            </p>
          </section>

          {/* Section 2: Notice & Personal Data Collected */}
          <section className="bg-card/40 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">2. Personal Data We Collect &amp; Specific Purposes</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In accordance with Section 5 of the DPDP Act 2023, we inform you of the itemized categories of digital personal data collected and the specific purpose for each:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/60 border border-border/80">
                <h3 className="font-semibold text-foreground text-sm mb-1">A. Contact &amp; Business Inquiry Data</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong>Data Collected:</strong> Full Name, Business Email Address, Phone Number (optional), Company/Organization Name, and Project Specifications.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  <strong>Purpose:</strong> Evaluating project requirements, providing custom architectural blueprints, scheduling engineering consultations, and responding to business inquiries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border/80">
                <h3 className="font-semibold text-foreground text-sm mb-1">B. Interactive AI Consultation Data</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong>Data Collected:</strong> Chat inquiries, technical requirements, and service category selections.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  <strong>Purpose:</strong> Providing immediate automated scoping assistance, answers to technical questions, and connecting you with our human engineering team upon your request.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border/80">
                <h3 className="font-semibold text-foreground text-sm mb-1">C. Technical &amp; Operational Security Data</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong>Data Collected:</strong> Masked IP address, request timestamps, user-agent, and rate-limiting metadata.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  <strong>Purpose:</strong> Enforcing rate-limiting, preventing Distributed Denial of Service (DDoS) and bot attacks, verifying Cloudflare Turnstile human challenges, and securing the platform.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Lawful Basis & Consent */}
          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">3. Lawful Basis &amp; Consent Mechanism (Section 6)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Personal data is collected exclusively upon your <strong>free, specific, informed, unconditional, and unambiguous consent</strong> with a clear affirmative action (such as checking the consent agreement box prior to submitting our contact form or AI assistant inquiry).
            </p>
            <div className="p-4 rounded-xl bg-background/80 border border-primary/30">
              <h4 className="font-semibold text-sm text-foreground mb-1">Right to Withdraw Consent</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Under Section 6(4) of the DPDP Act, you have the right to withdraw your consent at any time as easily as you gave it. Withdrawing consent does not affect the lawfulness of processing based on consent prior to its withdrawal. To withdraw your consent, email our Grievance Officer at <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a> with &quot;Withdrawal of Consent&quot; in the subject line.
              </p>
            </div>
          </section>

          {/* Section 4: Data Principal Rights */}
          <section className="bg-card/40 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">4. Rights of the Data Principal (Sections 11–14)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Under the DPDP Act 2023, you enjoy comprehensive, enforceable statutory rights regarding your digital personal data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background/60 border border-border/70">
                <h3 className="font-semibold text-sm text-foreground mb-1">Right to Access Information</h3>
                <p className="text-xs text-muted-foreground">
                  Request a summary of your personal data being processed and the identities of any Data Processors with whom it has been shared.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/60 border border-border/70">
                <h3 className="font-semibold text-sm text-foreground mb-1">Right to Correction &amp; Erasure</h3>
                <p className="text-xs text-muted-foreground">
                  Request correction of misleading data, completion of incomplete data, updating of existing data, and erasure of personal data no longer necessary for the original purpose.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/60 border border-border/70">
                <h3 className="font-semibold text-sm text-foreground mb-1">Right of Grievance Redressal</h3>
                <p className="text-xs text-muted-foreground">
                  Access readily available grievance redressal mechanisms with our Grievance Officer regarding any act or omission of the Data Fiduciary.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/60 border border-border/70">
                <h3 className="font-semibold text-sm text-foreground mb-1">Right to Nominate</h3>
                <p className="text-xs text-muted-foreground">
                  Nominate any individual who, in the event of death or incapacity, shall exercise your rights as a Data Principal in accordance with DPDP rules.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Security & Retention */}
          <section className="bg-card/40 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">5. Data Retention &amp; Security Safeguards (Section 8)</h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-sm">
              <p>
                <strong>Security Measures:</strong> We implement rigorous technical and organizational safeguards against personal data breaches, including HTTPS / TLS 1.3 encryption in transit, strict Content Security Policy (CSP), origin validation, body size caps, distributed rate limiting, and zero third-party tracking scripts.
              </p>
              <p>
                <strong>Storage Limitation:</strong> In compliance with Section 8(7) of the DPDP Act, personal data collected for client inquiries is retained only as long as necessary to complete commercial consultations or comply with legal requirements, after which it is securely expunged or anonymized.
              </p>
              <p>
                <strong>No Sale of Data:</strong> We never sell, rent, or trade your personal data to data brokers or advertising networks.
              </p>
            </div>
          </section>

          {/* Section 6: Children & Vulnerable Individuals */}
          <section className="bg-card/40 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0 text-foreground">6. Processing of Children&apos;s Personal Data (Section 9)</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Our website and software engineering services are strictly commercial and professional in nature, targeted at business organizations and individuals aged 18 and above. We do not knowingly process personal data of children (individuals under 18 years) or undertake tracking, behavioral monitoring, or targeted advertising directed at children. If we discover that personal data of a minor has been collected without verifiable parental consent, we will delete such data immediately.
            </p>
          </section>

          {/* Section 7: Grievance Redressal Officer */}
          <section className="bg-card/60 p-8 rounded-2xl border border-primary/30 shadow-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">7. Grievance Redressal Officer</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
              In accordance with Section 8(9) of the DPDP Act 2023, if you have any questions, requests to exercise your Data Principal rights, or grievances regarding our data practices, please contact our designated Grievance Officer:
            </p>
            
            <div className="inline-block text-left p-5 rounded-xl bg-background/90 border border-border shadow-sm text-sm space-y-2">
              <p><strong className="text-foreground">Designation:</strong> Data Protection &amp; Grievance Officer</p>
              <p><strong className="text-foreground">Organization:</strong> Xyphora AI</p>
              <p>
                <strong className="text-foreground">Official Email:</strong>{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary font-semibold hover:underline">
                  {contactEmail}
                </a>
              </p>
              <p><strong className="text-foreground">Response SLA:</strong> Within 30 days of receipt</p>
            </div>

            <p className="text-xs text-muted-foreground mt-6 max-w-lg mx-auto">
              If your grievance is not resolved to your satisfaction through our internal redressal mechanism within the statutory timeline, you have the right to lodge a complaint with the <strong>Data Protection Board of India (DPBI)</strong> in the manner prescribed under the DPDP Act.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

