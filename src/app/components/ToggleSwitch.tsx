export default function ToggleSwitch({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <label className='relative inline-flex cursor-pointer items-center'>
      <input
        type='checkbox'
        checked={enabled}
        onChange={onChange}
        className='peer sr-only'
      />
      <div className="h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-neutral-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
    </label>
  );
}
