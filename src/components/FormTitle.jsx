const FormTitle = ({ title }) => {
  return (
    <div className="relative inline-block">
      <h2 className="text-2xl  font-bold text-center px-2 z-[10000] ">{title} </h2>
      <div className="h-2.5 absolute bottom-0.5 w-full left-0 z-0 opacity-50 bg-takia-orange" />
    </div>

  );
}

export default FormTitle;