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

          {/* WhatsApp order + socials */}
          <div className="mt-12 animate-fade-in-up animation-delay-400">
            <h3 className="font-display text-xl mb-2">Order T‑shirt via WhatsApp</h3>
            <p className="text-muted-foreground mb-4">To order a t‑shirt, send us a message on WhatsApp and we'll confirm availability and size.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/212624738422?text=Hello%2C%20I%20want%20to%20order%20a%20t-shirt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 btn-primary rounded-lg"
              >
                Order on WhatsApp
              </a>

              <a
                href="https://www.instagram.com/clubkacoffbasket"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 border border-foreground/20 rounded-lg hover:border-primary transition-colors text-foreground"
              >
                Follow on Instagram
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Club phone & address will be updated soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
