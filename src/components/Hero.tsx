import heroImage from "@/assets/hero-basketball.jpg";
import kacLogo from "@/assets/kac-logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Basketball court with player" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-card/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="glow-line w-24 mb-6 animate-fade-in-up" />
          
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-4 animate-fade-in-up animation-delay-100 text-foreground">
            DOMINATE<br />
            <span className="text-gradient">THE COURT</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up animation-delay-200">
            Premium basketball gear for champions. From pro-level jerseys to court-ready shoes. Elevate your game with KAC.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <a href="#products" className="btn-primary rounded-lg inline-block">
              Shop Now
            </a>
            <a href="#products" className="px-8 py-4 border-2 border-foreground/20 rounded-lg font-semibold uppercase tracking-wider hover:border-primary hover:bg-primary/10 transition-colors inline-block text-foreground">
              View Collection
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 animate-fade-in-up animation-delay-400">
            <div>
              <p className="font-display text-4xl text-primary">500+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Products</p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">10K+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Customers</p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">5★</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
