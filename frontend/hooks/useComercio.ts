// frontend/src/hooks/useComercio.ts
import { useEffect, useState } from "react";
import { negocioApi } from "../src/api/negocio";
import type { Comercio } from "../src/api/types";

export function useComercioMe() {
  const [data, setData] = useState<Comercio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stop = false;
    setLoading(true);
    negocioApi.getMe()
      .then((d) => !stop && setData(d))
      .catch((e) => !stop && setError(e.message))
      .finally(() => !stop && setLoading(false));
    return () => { stop = true; };
  }, []);

  const update = async (dto: Partial<Comercio>) => {
    const updated = await negocioApi.updateMe({
      nombreNegocio: dto.nombreNegocio,
      telefono: dto.telefono,
      direccion: dto.direccion,
    });
    setData(updated);
  };

  return { data, loading, error, update };
}

