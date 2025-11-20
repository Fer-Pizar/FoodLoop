import { useEffect, useState } from "react";
import type { Notificacion } from "../src/api/types";
import { getMyNotifications } from "../src/api/notificaciones";

export function useNotificaciones() {
  const [items, setItems] = useState<Notificacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const notifs = await getMyNotifications();
      setItems(notifs);
    } catch (err) {
      console.error("Error loading notifications", err);
      setError("Error loading notifications");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { items, loading, error, reload: load };
}
