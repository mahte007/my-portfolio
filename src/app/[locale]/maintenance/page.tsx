import type { Metadata } from "next";
import MaintenancePage from "@/components/maintenancePage/maintenancePage";

export const metadata: Metadata = {
  title: "Under Maintenance | Máté Horváth",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Maintenance() {
  return <MaintenancePage />;
}
