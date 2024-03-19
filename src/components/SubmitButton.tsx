'use client'

import { Spinner } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ text }: { text?: string }) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className="bg-black flex justify-center items-center py-2.5 font-bold rounded-full px-12 text-sm md:text-base uppercase hover:opacity-85 text-white" style={{ boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white' }} >
      {pending ? (<div className='flex gap-x-2  items-center'><span className='text-sm capitalize'>Please wait... </span><Spinner size='sm' color="white" /></div>)
        : text ? text : 'submit'}
    </button>
  );
}

export default SubmitButton;