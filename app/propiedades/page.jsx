import getCurrentUser from "../actions/getCurrentUser";
import { redirect } from "next/navigation";
import { getUserListings } from "../actions/getListings";
import { EmptyState } from "../components/EmptyState";
import { RentModalButton } from "../components/RentModalButton";
import { Propiedades } from "../components/propiedades/Propiedades";

const page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const listings = await getUserListings(user.id);

  if (listings?.length === 0) {
    return (
      <EmptyState
        title="No tienes propiedades en Airbnb"
        subtitle="¿Nuevo en Airbnb? Empieza a ganar dinero con tu espacio!"
        customButton={<RentModalButton />}
      />
    );
  }

  return <Propiedades listings={listings} currentUser={user} />;
};

export default page;
