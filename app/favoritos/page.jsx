import Link from "next/link";
import getCurrentUser from "../actions/getCurrentUser";
import { getFavoriteListings } from "../actions/getFavoriteListings";
import { Button } from "../components/Button";
import { Favoritos } from "../components/favoritos/Favoritos";
import { EmptyState } from "../components/EmptyState";

const FavoritosPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const listings = await getFavoriteListings();

  const customButton = (
    <Button>
      <Link href={"/"}>Explorar estancias</Link>
    </Button>
  );

  if (listings?.length <= 0) {
    return (
      <EmptyState
        title="No tienes estancias guardadas como favoritas"
        subtitle="¿Todavía no te ha gustado ninguna estancia? Echa un vistazo a las nuevas disponibles."
        customButton={customButton}
      />
    );
  }

  return <Favoritos listings={listings} currentUser={user} />;
};

export default FavoritosPage;
