import { Step, steps } from './constants';

function Sidebar({ step }: { step: Step }) {
  return (
    <nav className='bg-mobile-sidebar-stepper bg-cover bg-no-repeat lg:h-[80vh] lg:w-80 lg:rounded-xl lg:bg-desktop-sidebar-stepper'>
      <ol className='flex justify-center gap-4 pb-20 pt-8 lg:flex-col lg:px-7'>
        {steps.map(({ title }, idx) => {
          const index = idx + 1;
          return (
            <li key={idx} className='lg:flex lg:items-center lg:gap-4'>
              <div
                className={`h-9 w-9 rounded-full border-2 p-1 text-center font-bold text-neutral-white ${
                  step.title === title
                    ? 'border-primary-light-blue bg-primary-light-blue text-primary-marine-blue'
                    : 'bg-transparent'
                }`}
              >
                {index}
              </div>
              <div className='hidden uppercase lg:block'>
                <p className='text-sm'>Step {index}</p>
                <p className='font-medium text-neutral-magnolia'>{title}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Sidebar;
