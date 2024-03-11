import { uploadImage } from "../../lib/actions";

const Upload = () => {
  //
  return (
    <form action={uploadImage}>
      
      <button className="bg-black text-white py-1 px-3">upload</button>
    </form>
  );
}

export default Upload;