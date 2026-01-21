import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout showCTA={false}>
      <section className="py-20 bg-background min-h-[70vh] flex items-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-9xl md:text-[12rem] font-bold text-primary/20 mb-4">
                404
              </div>
              <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <FileQuestion className="text-primary" size={48} />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-muted-foreground mb-8">
              The page <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{location.pathname}</span> could not be found.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link to="/">
                <Button className="btn-primary">
                  <Home className="mr-2" size={18} />
                  Go to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="btn-outline"
              >
                <ArrowLeft className="mr-2" size={18} />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t border-border pt-8">
              <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Popular Pages
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/about" className="text-sm text-primary hover:underline">
                  About Us
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/programs" className="text-sm text-primary hover:underline">
                  Programs
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/donate" className="text-sm text-primary hover:underline">
                  Donate
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/volunteer" className="text-sm text-primary hover:underline">
                  Volunteer
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contact" className="text-sm text-primary hover:underline">
                  Contact
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/gallery" className="text-sm text-primary hover:underline">
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
