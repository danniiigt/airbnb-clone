import { Container } from "./components/Container";
import { ListingSkeleton } from "./components/listing/ListingSkeleton";

const Loading = () => {
  return (
    <Container>
      <ListingSkeleton />
    </Container>
  );
};

export default Loading;
