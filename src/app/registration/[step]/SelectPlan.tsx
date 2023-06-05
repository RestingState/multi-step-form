import Header from './components/Header';
import NavigationButtons from './components/NavigationButtons';
import Plans from './Plans';

function SelectPlan({
  prevUrl,
  nextUrl,
}: {
  prevUrl: string;
  nextUrl: string;
}) {
  return (
    <>
      <Header
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
      <Plans />
      <NavigationButtons variant='middle' prevUrl={prevUrl} nextUrl={nextUrl} />
    </>
  );
}

export default SelectPlan;
