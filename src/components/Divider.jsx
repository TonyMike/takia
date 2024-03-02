const Divider = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-700 rounded-full h-[1px] w-full" />
      <p className="mx-3 text-sm font-medium">Or</p>
      <div className="bg-gray-700 rounded-full w-full h-[1px]" />
    </div>
  );
}

export default Divider;