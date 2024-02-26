import Link from "next/link";

const SellNow = () => {
  return (
    <Link href={'/dashboard'} className="bg-orange-400 shadow-md px-4 py-2 rounded-md text-white text-sm font-medium ">Sell Now</Link>
  );
}

export default SellNow;