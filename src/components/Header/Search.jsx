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
          setText('')
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
      setText('')
    }
    return false
  }


  return (
    <div className="flex   items-center  overflow-hidden  focus:ring-0 focus-within:border-takia-orange/95   border  text-base w-full max-w-lg h-12 rounded-full 
    border-gray-200  py-2 pr-10 ">

      <button onClick={handleSearch}
      >
        <GoSearch className="text-gray-700 p-1 cursor-pointer inline-block mx-3 font-bold" size={30} />
      </button>

      <input value={text}  type="text" placeholder="What are you looking to buy?" className="max-w-lg h-12 placeholder:text-content-tertiary flex flex-grow w-full  focus:ring-0 border-0 rounded-lg bg-transparent  outline-none text-base  py-2.5" onChange={(e) => { setText(e.target.value) }} />
    </div>
  );
}

export default Search;

// psg - text - input overflow - hidden flex items - center focus: ring - 0 focus - within: bg - primary focus - within: border - selected text - content - primary border - 2 border - opaque text - base w - full max - w - lg h - 12 rounded - full bg - tertiary placeholder: text - content - tertiary