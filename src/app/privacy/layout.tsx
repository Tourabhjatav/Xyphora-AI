import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy & DPDP Act Compliance",
  description: "Xyphora AI Privacy Policy & Digital Personal Data Protection Act (DPDP Act 2023) Notice, Data Fiduciary disclosures, and Data Principal rights.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
