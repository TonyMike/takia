
const TakiaBreadCrumb = () => {
  return (
    <div className="flex  text-sm [&>*]:cursor-pointer capitalize text-gray-600 space-x-2">
      <p>Home </p>
      <p>{'>'}</p>
      <p>electronics </p>
      <p>{'>'}</p>
      <p className="text-black overflow-hidden line-clamp-1 text-ellipsis">Iphone 14 pro max</p>
    </div>
  );
}

export default TakiaBreadCrumb;