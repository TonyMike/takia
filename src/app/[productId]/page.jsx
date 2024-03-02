
// ! add a profile page to view the profile of a particular user with the list of all products ever created
const Product = () => {
  return (
    <div className="space-y-14">
      <div className="space-y-5">
        <div>
          <p>Home/Gaming/Ps4 </p>
        </div>
        <div className="grid grid-cols-1 md:gap-x-4 md:grid-cols-8 ">
          <div className=" bg-yellow-400 h-28 md:col-span-5 "></div>
          <div className=" bg-blue-400 grow md:col-span-3 h-28">
            <div>
              <h2>14 PRO max</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-500 h-80 w-full"></div>

    </div>

  );
}

export default Product;
