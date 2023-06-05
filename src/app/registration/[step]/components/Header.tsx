function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className='pb-4 lg:pb-6'>
      <h1 className='pb-2 text-2xl font-bold text-primary-marine-blue lg:text-4xl'>
        {title}
      </h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
