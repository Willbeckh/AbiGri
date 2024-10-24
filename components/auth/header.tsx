import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1
        className={cn("text-3xl font-semibold text-gray-900 ", font.className)}
      >
        Join AbiGri
      </h1>
      <div className="w-1/2 h-1 bg-green-500 rounded-full mb-2"></div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
