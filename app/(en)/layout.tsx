import SiteDocument from "@/components/SiteDocument";

export { rootMetadata as metadata } from "@/components/SiteDocument";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
