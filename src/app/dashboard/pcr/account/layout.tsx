import React from "react";
import { Metadata } from "next";
import { PcrHeader } from "@/components/dashboard/pcr/pcr.header";

export const metadata: Metadata = {
  title: "Personal Credit Repair lol",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}
