import { Container } from "../components/Container";

export const metadata = {
  title: "Mis favoritos - Airbnb",
};

export default async function Layout({ children }) {
  return (
    <Container>
      <div className="py-3">{children}</div>
    </Container>
  );
}