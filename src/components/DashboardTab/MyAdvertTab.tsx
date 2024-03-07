import Card from './Card';
import CategoryDropDown from './CategoryDropdown';
const MyAdverTab = () => {

  return (
    <div className="bg-white rounded-xl shadow-takia p-4 md:p-8">

      <div className="border-b border-gray-200 pb-2">
        <h2 className=" font-semibold  ">All Adverts</h2>
      </div>
      <div className='mt-5  space-y-4'>
        <CategoryDropDown />
        <div className='flex flex-wrap gap-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default MyAdverTab;