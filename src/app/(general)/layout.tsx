"use client";
import { ChildrenProps } from "@/types/ChildrenProps";
import { Header } from "@/ui-core";

export default function GeneralLayout({ children }: ChildrenProps) {
  return (
    <>
      <section>
        <Header />
        {children}
      </section>
    </>
  );
}
