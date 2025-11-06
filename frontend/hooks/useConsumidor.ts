import { useEffect, useState, useCallback } from "react";
import * as ImagePicker from "expo-image-picker";
import { getMe, updateMe, uploadAvatar, deleteAvatar, avatarUrl, ConsumidorMe } from "../src/api/consumidor";

export function useConsumidor() {
  const [me, setMe] = useState<ConsumidorMe | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMe();
      setMe(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const saveProfile = useCallback(async (patch: { nombre?: string; email?: string }) => {
    setSaving(true);
    setError(null);
    try {
      const updated = await updateMe(patch);
      setMe(updated);
      return updated;
    } catch (e: any) {
      setError(e?.message ?? "Failed to save");
      throw e;
    } finally {
      setSaving(false);
    }
  }, []);

  const pickFromGallery = useCallback(async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) throw new Error("Permission denied");
    const r = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.9 });
    if (r.canceled || !r.assets?.[0]?.uri) return null;
    const updated = await uploadAvatar(r.assets[0].uri, r.assets[0].fileName || "avatar.jpg");
    setMe(updated);
    return updated;
  }, []);

  const takePhoto = useCallback(async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) throw new Error("Permission denied");
    const r = await ImagePicker.launchCameraAsync({ quality: 0.9 });
    if (r.canceled || !r.assets?.[0]?.uri) return null;
    const updated = await uploadAvatar(r.assets[0].uri, r.assets[0].fileName || "avatar.jpg");
    setMe(updated);
    return updated;
  }, []);

  const removeAvatar = useCallback(async () => {
    await deleteAvatar();
    setMe((m) => (m ? { ...m, foto_perfil: null } : m));
  }, []);

  return {
    me, loading, saving, error,
    refresh, saveProfile,
    takePhoto, pickFromGallery, removeAvatar,
    avatarUrl,
  };
}
