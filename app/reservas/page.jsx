import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import { Button } from "../components/Button";
import Link from "next/link";
import { EmptyState } from "../components/EmptyState";
import { Reservas } from "../components/reservas/Reservas";

const ReservasPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const reservations = await getReservations({
    authorId: user.id,
  });

  const customButton = (
    <Button>
      <Link href={"/"}>Volver al inicio</Link>
    </Button>
  );

  if (reservations?.length <= 0) {
    return (
      <EmptyState
        title="No tienes reservas pendientes"
        subtitle="¡Vaya! Todas tus estancias estan desocupadas en este momento."
        customButton={customButton}
      />
    );
  }

  return <Reservas reservations={reservations} currentUser={user} />;
};

export default ReservasPage;
