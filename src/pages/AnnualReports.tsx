import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, ArrowRight } from "lucide-react";

const reports = [
  { year: "2023-24", title: "Annual Report 2023-24", size: "2.5 MB" },
  { year: "2022-23", title: "Annual Report 2022-23", size: "2.3 MB" },
  { year: "2021-22", title: "Annual Report 2021-22", size: "2.1 MB" },
  { year: "2020-21", title: "Annual Report 2020-21", size: "1.9 MB" },
];

const AnnualReports = () => {
  return (
    <Layout>
      <PageHero
        title="Annual Reports"
        subtitle="Transparency in our operations and impact"
        breadcrumbs={[{ label: "Resources" }, { label: "Annual Reports" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center mb-12">
              We believe in complete transparency. Our annual reports provide detailed 
              information about our programs, finances, and impact.
            </p>
            
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="card-sharp p-6 flex items-center justify-between hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <FileText className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">PDF • {report.size}</p>
                    </div>
                  </div>
                  <Button className="btn-outline">
                    <Download size={18} className="mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnnualReports;
