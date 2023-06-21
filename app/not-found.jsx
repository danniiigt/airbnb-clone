import { Button } from "./components/Button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-[80vh] overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <h1>Página no encontrada</h1>
      <Link className="w-48 mt-4" href="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
