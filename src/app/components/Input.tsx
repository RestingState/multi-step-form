import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default function Input({
  labelText,
  ...props
}: { labelText: string } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div className='flex flex-col'>
      <label
        className='text-xs font-medium text-primary-marine-blue'
        htmlFor={props.name}
      >
        {labelText}
      </label>
      <input
        className='rounded border border-neutral-light-gray px-3 py-2'
        {...props}
      />
    </div>
  );
}
