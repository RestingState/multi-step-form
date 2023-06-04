import Input from '@/app/components/Input';
import { notFound } from 'next/navigation';

const steps = [
  { path: 'your-info', title: 'your info' },
  { path: 'select-plan', title: 'select plan' },
  { path: 'add-ons', title: 'add-ons' },
  { path: 'summary', title: 'summary' },
] as const;
type Step = (typeof steps)[number];

export function generateStaticParams() {
  return steps.map(({ path }) => ({
    step: path,
  }));
}

export default function Page({ params }: { params: { step: string } }) {
  const step = steps.find(({ path }) => path === params.step);

  if (!step) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-neutral-magnolia'>
      <div className='bg-neutral-white'>
        <Sidebar step={step} />
        <section className='absolute top-24 mx-4 rounded-lg bg-neutral-white px-6 py-8 shadow-lg shadow-neutral-cool-gray/20'>
          {step.path === 'your-info' && <YourInfo />}
          {step.path === 'select-plan' && <form>Select plan</form>}
          {step.path === 'add-ons' && <form>Adds on</form>}
          {step.path === 'summary' && <form>summary</form>}
        </section>
      </div>
    </main>
  );
}

function Sidebar({ step }: { step: Step }) {
  return (
    <nav className='bg-mobile-sidebar-stepper bg-no-repeat'>
      <ol className='flex justify-center gap-4 pb-20 pt-8'>
        {steps.map(({ title }, idx) => {
          const index = idx + 1;
          return (
            <li key={idx}>
              <div
                className={`h-9 w-9 rounded-full border-2 p-1 text-center font-bold text-neutral-white ${
                  step.title === title
                    ? 'border-primary-light-blue bg-primary-light-blue text-primary-marine-blue'
                    : 'bg-transparent'
                }`}
              >
                {index}
              </div>
              <div className='hidden'>
                <p>Step {index}</p>
                <p>{title}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function YourInfo() {
  return (
    <>
      <Header
        title='Personal info'
        description='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-3'>
        <Input
          id='name'
          name='name'
          labelText='Name'
          placeholder='e.g. Stephen King'
          required
          type='text'
        />
        <Input
          id='email'
          name='email'
          labelText='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          required
          type='email'
        />
        <Input
          id='phone'
          name='phone'
          labelText='Phone Number'
          placeholder='e.g. +1 234 567 890'
          required
          type='text'
        />
      </div>
      <NavigationButtons variant='first' />
    </>
  );
}

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className='pb-4'>
      <h1 className='pb-2 text-2xl font-bold text-primary-marine-blue'>
        {title}
      </h1>
      <p>{description}</p>
    </header>
  );
}

function NavigationButtons({
  variant,
}: {
  variant: 'first' | 'middle' | 'last';
}) {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 flex bg-neutral-white p-4 ${
        variant === 'first' && 'justify-end'
      }`}
    >
      {(variant === 'middle' || variant === 'last') && <button>Go Back</button>}
      {(variant === 'first' || variant === 'middle') && (
        <button className='rounded bg-primary-marine-blue px-4 py-2 text-neutral-alabaster'>
          Next Step
        </button>
      )}
      {variant === 'last' && <button>Confirm</button>}
    </nav>
  );
}