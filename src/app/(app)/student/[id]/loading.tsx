import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={"/loading.svg"}
        alt="Loading"
        width={80}
        height={80}
        className="animate-spin"
      />
    </div>
  );
}
