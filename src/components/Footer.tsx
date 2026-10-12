function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-[calc(100%-2*var(--page-padding))] max-w-content flex-col gap-3 py-5 text-sm leading-body text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 Alexander Johansson</p>

        <p>Designat, byggt och debuggat. Pixel-perfect? Nästan.</p>
      </div>
    </footer>
  );
}

export default Footer;
