import Link from "next/link";

const TkLink = ({href, title, mode}) => {
  return (
    <Link href={href} className={`inline-flex items-center justify-center font-medium relative rounded-full text-base leading-normal px-4 py-3.5 h-12 space-x-2 ${mode === 'light' ? ' bg-gray-200 text-black hover:bg-gray-300' : 'bg-black text-white hover:opacity-80'} `}>{title}</Link>
  );
}

export default TkLink;