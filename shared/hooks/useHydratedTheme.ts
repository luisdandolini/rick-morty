import { useThemeStore } from "../store/useThemeStore";

export const useHydratedTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const hydrated = useThemeStore((state) => state.hydrated);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return {
    theme: hydrated ? theme : "light",
    hydrated,
    toggleTheme,
    setTheme,
  };
};
