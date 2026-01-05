import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";

interface ArticleProps {
  title: string;
  source: string;
  date: string;
  description: string;
  content?: string;
}

const Article = ({ title, source, date, description, content }: ArticleProps) => {
  return (
    <Layout>
      <PageHero
        title={title}
        subtitle={source}
        breadcrumbs={[
          { label: "Resources", path: "/media-press" },
          { label: "Media & Press", path: "/media-press" },
          { label: "Article" }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link to="/media-press">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2" size={18} />
                Back to Media & Press
              </Button>
            </Link>

            <article className="card-sharp p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Newspaper className="text-primary" size={18} />
                  <span className="text-sm font-semibold">{source}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="text-primary" size={18} />
                  <span className="text-sm">{date}</span>
                </div>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {description}
                </p>
                
                {content && (
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    {content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;

