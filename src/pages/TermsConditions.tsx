import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";

const TermsConditions = () => {
  return (
    <Layout showCTA={false}>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card-sharp p-8 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this website, you accept and agree to be bound by the 
                  terms and provisions of this agreement.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Donations</h2>
                <p className="text-muted-foreground">
                  All donations made to Swami Vivekananda Seva Brundam are voluntary and 
                  non-refundable. Donations are used for charitable purposes as described 
                  on our website and in our communications.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Use of Website</h2>
                <p className="text-muted-foreground">
                  You agree to use this website only for lawful purposes and in a way that does 
                  not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment 
                  of the website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, and images, is 
                  the property of SVSB and is protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be posted 
                  on this page with an updated revision date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
