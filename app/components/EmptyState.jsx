import { Heading } from "./Heading";
import { Button } from "./Button";
import Link from "next/link";

export const EmptyState = ({
  title = "No hay resultados",
  subtitle = "Prueba a cambiar o eliminar los filtros para ver más resultados.",
  customButton,
  showReset = true,
}) => {
  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Link href="/">
            <Button outline label="Remove all filters">
              Borrar filtros
            </Button>
          </Link>
        )}

        {customButton && customButton}
      </div>
    </div>
  );
};
