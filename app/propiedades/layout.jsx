import { Container } from "../components/Container";

export const metadata = {
  title: "Mis propiedades - Airbnb",
};

export default async function Layout({ children }) {
  return (
    <Container>
      <div className="py-3">{children}</div>
    </Container>
  );
}
