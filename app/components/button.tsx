import { Button as Btn } from "@nextui-org/react";

export default function Button({
  children,
  className = "",
}: {
  children: string;
  className?: string | null;
}) {
  return (
    <Btn size="lg" className={`bg-[#1D1D1F] text-white rounded-md ${className}`}>
      {children}
    </Btn>
  );
}
