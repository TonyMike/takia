
import FormTitle from "../../../components/FormTitle";
import Input from "../../../components/Input";
import PriceInput from "../../../components/PriceInput";
import Select from "../../../components/Select";
import SubmnitButton from "../../../components/SubmitButton";
import TextArea from "../../../components/TextArea";
const PostAd = () => {
  return (
    <div className="flex justify-center gap-y-5  flex-col-reverse md:flex-row-reverse gap-x-5 item-center">
      <div>
        <h3 className="font-bold text-xl">Sell now for free</h3>
        <p>
          Join the fun by posting a free classified today completely on us!
        </p>
      </div>
      <div style={{ boxShadow: 'inset 8px 8px 20px #e0e0e0,inset -8px -8px 20px #f6f6f6' }} className="flex rounded-md bg-[#f5f5f5] shadow-sm  flex-col py-8 md:py-10 gap-y-6 sm:w-[500px] xl:w-[650px]  px-6 md:px-10 ">
        <div>
          <FormTitle title={'Post free advert'} />
        </div>
        <form className="flex  flex-col gap-y-6 md:gap-8">
          <Select label={'Category'} name={'category'} placeholder={'Select a category...'} />
          <Input label={'Ad Title'} placeholder={'Ad title'} name={'ad-title'} />
          <TextArea label={'Ad Description'} placeholder={'Describe your ad in a few sentences'} name={'ad-description'} />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
            <PriceInput />

            <Select label={'Condition'} name={'condition'} placeholder={'Select a condition...'} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
            <Select label={'Location'} name={'location'} placeholder={'Select a state'} />
            <Select label={'School'} name={'school'} placeholder={'Select a school'} />
          </div>
          <div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input type="file" name="files" required multiple min={3} accept="image/jpg,image/png" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold

              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100

              "/>
            </label>
            <span className="text-xs text-gray-400 block pl-3 mt-2">
              <span className="text-red-500 mr-1 ">*</span>
              Add at least 3 photos. Use a real image of your product, not catalogs
            </span>
            <span className="text-xs text-gray-400 block pl-3 mt-1 ">
              <span className="text-red-500 mr-1 ">*</span>
              Supported formats are *.jpg and *.png
            </span>
          </div>
          <SubmnitButton />

        </form>
      </div>
    </div>
  );
}
// file:bg-violet-50 file:text-violet-700
// hover:file:bg-violet-100

export default PostAd;