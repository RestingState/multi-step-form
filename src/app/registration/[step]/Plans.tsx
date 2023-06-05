'use client';

import iconArcade from '@/app/assets/images/icon-arcade.svg';
import iconAdvanced from '@/app/assets/images/icon-advanced.svg';
import iconPro from '@/app/assets/images/icon-pro.svg';
import Image from 'next/image';
import { useState } from 'react';
import ToggleSwitch from '@/app/components/ToggleSwitch';

const plans = [
  { src: iconArcade, name: 'arcade', pricePerMonth: 9, pricePerYear: 90 },
  { src: iconAdvanced, name: 'advanced', pricePerMonth: 12, pricePerYear: 120 },
  { src: iconPro, name: 'pro', pricePerMonth: 15, pricePerYear: 150 },
] as const;
const planNames = plans.map(({ name }) => name);
type Plan = (typeof planNames)[number];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('arcade');
  const [billingType, setBillingType] = useState<'montly' | 'yearly'>('montly');

  const handleSelectPlan = (name: Plan) => {
    setSelectedPlan(name);
  };

  const handleBillingTypeChange = () => {
    if (billingType === 'montly') setBillingType('yearly');
    else setBillingType('montly');
  };

  return (
    <>
      <div className='lg:h-56'>
        <div className='flex flex-col gap-3 lg:w-[30rem] lg:flex-row'>
          {plans.map(({ src, name, pricePerMonth, pricePerYear }) => (
            <div
              key={name}
              onClick={() => handleSelectPlan(name)}
              className={`flex cursor-pointer gap-4 rounded-md border border-neutral-light-gray p-4 lg:flex-1 lg:flex-col lg:gap-12 ${
                selectedPlan === name &&
                'border-primary-purplish-blue bg-neutral-magnolia'
              }`}
            >
              <Image src={src} alt='' />
              <div>
                <p className='font-bold capitalize text-primary-marine-blue'>
                  {name}
                </p>
                {billingType === 'montly' && <p>{`$${pricePerMonth}/mo`}</p>}
                {billingType === 'yearly' && (
                  <>
                    <p>{`$${pricePerYear}/yr`}</p>
                    <p className='text-sm font-medium text-primary-marine-blue'>
                      2 months free
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 rounded-md bg-neutral-magnolia py-4'>
        <p
          className={`${
            billingType === 'montly' && 'font-medium text-primary-marine-blue'
          }`}
        >
          Montly
        </p>
        <ToggleSwitch
          enabled={billingType === 'yearly'}
          onChange={handleBillingTypeChange}
        />
        <p
          className={`${
            billingType === 'yearly' && 'font-medium text-primary-marine-blue'
          }`}
        >
          Yearly
        </p>
      </div>
    </>
  );
}
