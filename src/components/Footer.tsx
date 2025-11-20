export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Abraão Levi Vitoriano. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
