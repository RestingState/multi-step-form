import { notFound } from 'next/navigation';
import { steps } from './constants';
import Sidebar from './Sidebar';
import YourInfo from './YourInfo';
import SelectPlan from './SelectPlan';

export function generateStaticParams() {
  return steps.map(({ path }) => ({
    step: path,
  }));
}

export default function Page({ params }: { params: { step: string } }) {
  const stepIndex = steps.findIndex(({ path }) => path === params.step);

  if (stepIndex === -1) {
    notFound();
  }

  const step = steps[stepIndex];
  const prevStep = steps[stepIndex - 1];
  const nextStep = steps[stepIndex + 1];

  return (
    <main className='min-h-screen bg-neutral-magnolia lg:flex lg:items-center lg:justify-center'>
      <div className='rounded bg-neutral-white lg:flex lg:gap-20 lg:rounded-xl lg:p-4 lg:shadow-lg'>
        <Sidebar step={step} />
        <section className='absolute left-2 right-2 top-24 mx-4 rounded-lg bg-neutral-white px-6 py-8 shadow-lg shadow-neutral-cool-gray/20 lg:static lg:flex lg:flex-col lg:pb-0 lg:shadow-none'>
          {step.path === 'your-info' && (
            <YourInfo nextUrl={`/registration/${nextStep.path}`} />
          )}
          {step.path === 'select-plan' && (
            <SelectPlan
              prevUrl={`/registration/${prevStep.path}`}
              nextUrl={`/registration/${nextStep.path}`}
            />
          )}
          {step.path === 'add-ons' && <form>Adds on</form>}
          {step.path === 'summary' && <form>summary</form>}
        </section>
      </div>
    </main>
  );
}
