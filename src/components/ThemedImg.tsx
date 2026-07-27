import { useTheme } from "../theme";
import { asset } from "../assets";

/** Renders the dark- or light-board asset depending on the active theme.
 *  Assets are named `<name>-dark.png` / `<name>-light.png` in /assets. */
export default function ThemedImg({
  name,
  alt,
  className,
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  const { theme } = useTheme();
  return <img src={asset(`${name}-${theme}`)} alt={alt} className={className} draggable={false} decoding="async" />;
}
