"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDebounce } from "use-debounce";



const Search = () => {
  const router = useRouter()
  const [text, setText] = useState('')
  const [query] = useDebounce(text, 500);
  
  useEffect(() => {
    const handleSearch = (e) => {

      if (query.trim()) {
        if (e.keyCode === 13) {
          router.push(`/products/search?query=${query}`)
        }
      }
    };

    const handleKeyPress = (e) => handleSearch(e);

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keypdown', handleKeyPress);
    };
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/products/search?query=${query}`)
    }
    return false
  }


  return (
    <div className="flex   items-center gap-x-3  overflow-hidden  focus:ring-0 focus-within:bg-primary focus-within:border-selected  border-2  text-base w-full max-w-lg h-12 rounded-full bg-tertiary placeholder:text-content-tertiary
    border-gray-200 px-5 py-2 pr-10 ">

      <GoSearch className="text-gray-700 p-1 cursor-pointer  font-bold" size={30} onClick={handleSearch} />

      <input value={text} type="text" placeholder="What are you looking to buy?" className="max-w-lg h-12 placeholder:text-content-tertiary flex flex-grow w-full focus:ring-0 border-0 rounded-lg bg-transparent  outline-none text-base px-3 py-2.5" onChange={(e) => { setText(e.target.value) }} />
    </div>
  );
}

export default Search;

// psg - text - input overflow - hidden flex items - center focus: ring - 0 focus - within: bg - primary focus - within: border - selected text - content - primary border - 2 border - opaque text - base w - full max - w - lg h - 12 rounded - full bg - tertiary placeholder: text - content - tertiary