import { Container } from "../components/Container";

export const metadata = {
  title: "Mis favoritos - Airbnb",
};

export default async function Layout({ children }) {
  return (
    <Container>
      <div className="pb-3 pt-[83px]">{children}</div>
    </Container>
  );
}
