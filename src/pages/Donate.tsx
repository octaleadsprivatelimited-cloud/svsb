import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, CreditCard, Building, Wallet, ArrowRight, CheckCircle } from "lucide-react";
import upiQrCode from "@/assets/upi-qr-code.png";

const donationOptions = [
  { amount: "₹500", description: "Provides school supplies for 1 child for a year" },
  { amount: "₹1,000", description: "Funds 1 medical check-up camp for 10 villagers" },
  { amount: "₹2,500", description: "Sponsors skill training for 1 woman" },
  { amount: "₹5,000", description: "Supports education of 1 child for 6 months" },
  { amount: "₹10,000", description: "Funds a community health awareness program" },
  { amount: "Custom", description: "Every contribution makes a difference" },
];

const impactAreas = [
  "Education for underprivileged children",
  "Healthcare & medical camps in villages",
  "Women empowerment & skill training",
  "Youth development programs",
  "Sustainable rural development",
  "Emergency relief & disaster response",
];

const Donate = () => {
  return (
    <Layout>
      <PageHero
        title="Donate Now"
        subtitle="Your generosity can transform lives in rural communities"
        breadcrumbs={[{ label: "Donate" }]}
      />

      {/* Main Donation Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Why Donate */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Make a Difference
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your Support Changes Lives
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every donation to Swamivivekananda Seva Brundam directly impacts the lives 
                of thousands of people in rural India. Your contribution helps us provide 
                quality education, healthcare, and opportunities for sustainable livelihoods 
                to those who need it most.
              </p>
              
              <div className="mb-8">
                <h3 className="font-heading text-xl font-bold mb-4">Your Donation Supports:</h3>
                <ul className="space-y-3">
                  {impactAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-sharp p-6 bg-cream">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tax Benefits:</strong> All donations are eligible for tax exemption 
                  under Section 80G of the Income Tax Act.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>100% Transparency:</strong> We provide detailed reports on how your 
                  donation is utilized.
                </p>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div className="card-sharp p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Choose Your Contribution</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {donationOptions.map((option, index) => (
                  <button
                    key={index}
                    className="card-sharp p-4 text-center hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="font-heading text-2xl font-bold text-primary mb-1">
                      {option.amount}
                    </div>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </button>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">PAN Card Number (for 80G receipt)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none"
                    placeholder="Enter PAN number (optional)"
                  />
                </div>
              </div>

              <Button className="btn-primary w-full">
                <Heart className="mr-2" size={18} />
                Proceed to Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Donate */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Payment Methods"
            title="Other Ways to Contribute"
            subtitle="Choose a payment method that works best for you"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-sharp p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CreditCard className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Bank Transfer</h3>
              <div className="text-left text-sm text-muted-foreground space-y-2">
                <p><strong>Account Name:</strong> Yuva Swamy Vivekananda Seva Brundam</p>
                <p><strong>Account No:</strong> 194310100085345</p>
                <p><strong>IFSC:</strong> UBIN0819433</p>
                <p><strong>Bank:</strong> Union Bank Of India</p>
                <p><strong>Branch:</strong> Union Bank Of India, Kalwakurthy, Nagarkurnool Dist, Telangana</p>
              </div>
            </div>
            
            <div className="card-sharp p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Wallet className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">UPI Payment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Scan QR code or use UPI ID
              </p>
              <img 
                src={upiQrCode} 
                alt="UPI QR Code - Swamivivekananda Seva Brundam" 
                className="w-48 h-48 mx-auto mb-4 object-contain"
              />
              <p className="text-sm font-medium break-all">swamivivekanandasevabrundam@ybl</p>
            </div>
            
            <div className="card-sharp p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Building className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">CSR Partnership</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Partner with us for your CSR initiatives
              </p>
              <Link to="/csr-partnerships">
                <Button className="btn-outline">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
            Need Assistance with Your Donation?
          </h3>
          <p className="text-secondary-foreground/80 mb-6">
            Contact us at <a href="mailto:info@ysvsb.org" className="text-primary hover:underline">info@ysvsb.org</a> or 
            call <a href="tel:+917013570447" className="text-primary hover:underline">+91 70135 70447</a>
          </p>
          <Link to="/contact">
            <Button className="btn-primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
