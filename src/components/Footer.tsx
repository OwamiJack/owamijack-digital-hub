const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Owami Jack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
