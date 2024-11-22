import { Input as Inp } from "@nextui-org/input";

export default function Input({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) {
  return (
    <Inp
      isClearable
      className="rounded-md border border-[#D2D5DA]"
      placeholder={placeholder}
      type={type}
      size="lg"
    />
  );
}
