import { useState } from "react";

export function useStorageListener(sincronize) {
  const [storageChanged, setStorageChanged] = useState(false);

  window.addEventListener("storage", (e) => {
    if (e.key === "TODOS_V1") {
      setStorageChanged(true);
    }
  });

  const toggleShow = () => {
    setStorageChanged(false);
    sincronize();
  };

  return {
    show: storageChanged,
    toggleShow,
  };
}
