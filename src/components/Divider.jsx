const Divider = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-700 rounded-full h-0.5 w-full" />
      <p className="mx-3 text-sm font-medium">Or</p>
      <div className="bg-gray-700 rounded-full w-full h-0.5" />
    </div>
  );
}

export default Divider;