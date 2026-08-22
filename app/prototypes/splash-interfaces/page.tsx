import { notFound } from "next/navigation";
import SplashInterfacePrototype from "./splash-interface-prototype";

export default function SplashInterfacesPrototypePage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <SplashInterfacePrototype />;
}
