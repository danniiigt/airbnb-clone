import { Container } from "./components/Container";
import { ListingSkeleton } from "./components/listing/ListingSkeleton";

const Loading = () => {
  return (
    <Container>
      <div className="pt-[83px]">
        <ListingSkeleton />
      </div>
    </Container>
  );
};

export default Loading;
