const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t bg-gradient-subtle">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Natali Boeva. Built with passion and curiosity.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed & developed with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;