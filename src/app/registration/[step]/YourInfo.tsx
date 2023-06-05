import Input from '@/app/components/Input';
import Header from './components/Header';
import NavigationButtons from './components/NavigationButtons';

function YourInfo({ nextUrl }: { nextUrl: string }) {
  return (
    <>
      <Header
        title='Personal info'
        description='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-3 lg:gap-6'>
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
      <NavigationButtons variant='first' nextUrl={nextUrl} />
    </>
  );
}

export default YourInfo;
