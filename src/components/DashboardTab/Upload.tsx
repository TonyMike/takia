import { uploadImage } from "../../lib/actions";

const Upload = () => {
  //
  return (
    <form action={uploadImage}>
      <label className="block" >
        <span className="sr-only">Choose profile photo</span>
        <input type="file" name="file" required multiple min={3} accept="image/jpg,image/png" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold

              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100

              "/>
      </label >
      <button className="bg-black text-white py-1 px-3">upload</button>
    </form>
  );
}

export default Upload;