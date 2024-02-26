import Link from "next/link";

const TkLink = ({href, title, mode}) => {
  return (
    <Link href={href} className={`inline-flex  text-sm items-center justify-center font-semibold shadow-md relative rounded-full  leading-normal px-4 py-2.5 space-x-2 ${mode === 'light' ? ' bg-gray-200 text-black hover:bg-gray-300' : 'bg-black text-white hover:opacity-80'} `}>{title}</Link>
  );
}

export default TkLink;