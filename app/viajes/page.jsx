import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import { EmptyState } from "../components/EmptyState";
import { Button } from "../components/Button";
import Link from "next/link";
import { Trips } from "../components/trips/Trips";

const TripsPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const reservations = await getReservations({
    // userId: user?.id,
  });

  const customButton = (
    <Button>
      <Link href={"/"}>Explorar estancias</Link>
    </Button>
  );

  if (reservations?.length === 0) {
    return (
      <EmptyState
        title="No hay viajes pendientes"
        subtitle="Parece que no tienes viajes pendientes. ¿Por qué no exploras estancias?"
        customButton={customButton}
      />
    );
  }

  return <Trips reservations={reservations} currentUser={user} />;
};

export default TripsPage;
