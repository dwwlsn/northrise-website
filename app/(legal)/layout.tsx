import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-inner">{children}</div>
      </main>
      <Footer />
    </>
  );
}
