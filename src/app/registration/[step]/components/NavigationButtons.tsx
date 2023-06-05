import Link from 'next/link';

function NavigationButtons(
  props:
    | {
        variant: 'first';
        nextUrl: string;
      }
    | { variant: 'middle'; prevUrl: string; nextUrl: string }
    | { variant: 'last'; prevUrl: string; confirm: () => void }
) {
  return (
    <nav
      className={`bg-ne fixed bottom-0 left-0 right-0 flex bg-neutral-white p-4 lg:px-0 ${
        props.variant === 'first' && 'justify-end'
      } ${
        (props.variant === 'middle' || props.variant === 'last') &&
        'justify-between'
      } lg:static lg:mt-auto`}
    >
      {(props.variant === 'middle' || props.variant === 'last') && (
        <Link href={props.prevUrl}>
          <button className='py-2'>Go Back</button>
        </Link>
      )}
      {(props.variant === 'first' || props.variant === 'middle') && (
        <Link href={props.nextUrl}>
          <button className='rounded bg-primary-marine-blue px-4 py-2 text-neutral-alabaster'>
            Next Step
          </button>
        </Link>
      )}
      {props.variant === 'last' && (
        <button onClick={props.confirm}>Confirm</button>
      )}
    </nav>
  );
}

export default NavigationButtons;
