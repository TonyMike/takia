"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from 'react-dom';
import { ToastContainer, toast } from "react-toastify";
import { handlePostAds } from "../lib/actions";
import { categoriesOptions, conditionOptions } from "../lib/data";
import { useStateStore } from "../lib/store";
import Input from "./Input";
import PriceInput from "./PriceInput";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";

interface FilePreview {
  file: File;
  preview: string;
}

const initialState = {
  message: '',
  productId: '',
}
const PostAdForm = () => {
  const [state, formAction] = useFormState(handlePostAds, initialState)
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const selected = useStateStore(state => state.selected)
  const updateSelectedState = useStateStore((state) => state.updateSelectedState)
  const updateSchools = useStateStore((state) => state.updateSchools)
  const allStates = useStateStore(state => state.allStates)
  const schools = useStateStore((state) => state.schools)
  useEffect(() => {
    if (state.message) {
      if (state.message.includes('successfully')) {
        toast.success(state.message)
        router.push(`/product/${state.productId}`)
        formRef.current.reset();
      } else {
        toast.error(state.message)
      }
    }
  }, [state.message]);

  useEffect(() => {
    updateSchools()
  }, [selected, updateSchools])

  const [selectedFiles, setSelectedFiles] = useState<FilePreview[]>([]);

  const handleChange = (e) => {
    updateSelectedState(e.target.value);
  }

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const previewFiles = Array.from(files).map(file => {
      return {
        file,
        preview: URL.createObjectURL(file)
      }
    });

    // Check for duplicate file names
    previewFiles.forEach(previewFile => {
      const exists = selectedFiles.some(f => f.file.name === previewFile.file.name);
      if (!exists) {
        setSelectedFiles(prev => [...prev, previewFile]);
      }
    });
  }
  const deleteImage = (fileToDelete: FilePreview) => {
    setSelectedFiles(prevFiles => {
      return prevFiles.filter(file => file !== fileToDelete);
    });

  }
  return (
    <div className="relative">

      {/* action={handlePostAds} */}
      <form ref={formRef} action={formAction} className="flex  flex-col gap-y-6 md:gap-4">
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3">
          <Select options={categoriesOptions} label={'Category'} name='category' required={true} />
          <Select options={['yes', 'no']} label={'Negotiable'} name='negotiable' required={true} />
        </div>


        <Input label={'Ad Title'} placeholder={'Ad title'} name={'title'} />

        <TextArea label={'Ad Description'} placeholder={'Describe your ad in a few sentences'} name={'description'} />

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3">
          <PriceInput />
          <Select label={'Condition'} name={'condition'} options={conditionOptions} />
        </div>

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3">
          <Select label={'State'} name={'state'} required={true} options={allStates} handleChange={handleChange} />
          <Select label={'School'} name={'school'} required={true} options={schools} />
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-3 flex-wrap ">
            {
              selectedFiles.map((file, index) => {
                return <div onClick={() => deleteImage(file)} className=" relative gap-4  bg-red-100 size-16" key={index} >
                  <Image alt="image preview" className="object-cover" src={file.preview} fill />
                </div>
              })}

          </div>

          {
            selectedFiles.length > 0 && (<p className="text-xs text-gray-500 mb-1">Click on any image you would like to remove</p>
            )

          }
          <>
            <label className="block">
              <span className="sr-only">Choose product pictures</span>
              <input type="file" name="files" required multiple min={3} onChange={handleFiles} accept="image/jpg,image/png" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold

              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100

              "/>
            </label>
          </>

          <span className="text-xs text-gray-400 block pl-3 mt-2">
            <span className="text-red-500 mr-1 ">*</span>
            Add at least 3 photos. Use a real image of your product, not catalogs
          </span>
          <span className="text-xs text-gray-400 block pl-3 mt-1 ">
            <span className="text-red-500 mr-1 ">*</span>
            Supported formats are *.jpg and *.png
          </span>
        </div>
        <SubmitButton />


      </form>
      {/* { } */}
      <ToastContainer />
    </div>
  );
}

export default PostAdForm;