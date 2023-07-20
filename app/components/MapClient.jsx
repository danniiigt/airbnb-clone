import { useEffect, useState } from "react";

export const MapClient = () => {
  const [Client, setClient] = useState();

  useEffect(() => {
    (async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import("./Map")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  if (typeof global.window === "undefined" || !Client) {
    return null;
  }

  return Client ? <Client /> : null;
};
