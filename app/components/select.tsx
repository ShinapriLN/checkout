"use client";

import { Select, SelectItem } from "@nextui-org/react";

export default function Option() {
  return (
    <Select
      size="lg"
      className="rounded-md border border-[#D2D5DA]"
      defaultSelectedKeys={["finland"]}
    >
      <SelectItem key="finland">Finland</SelectItem>
      <SelectItem key="japan">Japan</SelectItem>
      <SelectItem key="germany">Germany</SelectItem>
    </Select>
  );
}
