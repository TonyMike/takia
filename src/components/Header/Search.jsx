import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="flex   items-center gap-x-3  overflow-hidden  focus:ring-0 focus-within:bg-primary focus-within:border-selected  border-2  text-base w-full max-w-lg h-12 rounded-full bg-tertiary placeholder:text-content-tertiary
    border-gray-200 px-5 py-2 pr-10 ">
      <GoSearch />
      <input type="text" placeholder="What are you looking to buy?" className="max-w-lg h-12 placeholder:text-content-tertiary flex flex-grow w-full focus:ring-0 border-0 rounded-lg bg-transparent  outline-none text-base px-3 py-2.5" />
    </div>
  );
}

export default Search;

// psg - text - input overflow - hidden flex items - center focus: ring - 0 focus - within: bg - primary focus - within: border - selected text - content - primary border - 2 border - opaque text - base w - full max - w - lg h - 12 rounded - full bg - tertiary placeholder: text - content - tertiary