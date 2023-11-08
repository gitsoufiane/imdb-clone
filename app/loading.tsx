import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/spinner.svg" width={96} height={96} alt="spinner" />
    </div>
  );
}
