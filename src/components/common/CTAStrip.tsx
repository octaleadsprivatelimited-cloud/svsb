import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Phone } from "lucide-react";

export const CTAStrip = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Join Us in Making a Difference
            </h3>
            <p className="text-primary-foreground/80">
              Your support can transform lives in rural communities across India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-6 text-sm uppercase tracking-wider font-semibold">
                <Heart className="mr-2" size={18} />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button className="btn-outline-light">
                <Users className="mr-2" size={18} />
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-outline-light">
                <Phone className="mr-2" size={18} />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
