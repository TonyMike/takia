const SubmitButton = ({title}) => {
  return (
    <button className="bg-black py-2.5 font-bold rounded-full uppercase hover:opacity-85 text-white" style={{ boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white' }} >{title}</button>
  );
}

export default SubmitButton;