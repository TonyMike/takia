const SubmitButton = ({ text }: { text?: string }) => {
  return (
    <button className="bg-black py-2.5 font-bold rounded-full px-12 text-sm md:text-base uppercase hover:opacity-85 text-white" style={{ boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white' }} >{text ? text : 'Submit'}</button>
  );
}

export default SubmitButton;