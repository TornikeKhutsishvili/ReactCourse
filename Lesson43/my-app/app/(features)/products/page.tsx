import FlexibleNavbar from "../../shared/components/FlexibleNavbar";

export default function ProductsPage() {
  return (
    <div>
      <FlexibleNavbar
        title="TKShop"
        direction="horizontal"
        backgroundColor="#111827"
        textColor="#ffffff"
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "About", href: "/about" },
          { label: "Products", href: "/products" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main style={{ padding: "2rem" }}>
        <h1>Products Page</h1>
      </main>
    </div>
  );
}
