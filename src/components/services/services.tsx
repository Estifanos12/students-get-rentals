'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import getScrollAnimation from '@/lib/getScrollAnimation';
import ScrollAnimationWrapper from '../common/scroll-animation-wrapper';
import { services } from '@/config/services';
import { Button } from '../ui/button';

type ServiceProps = {
  service: {
    id: string;
    title: string;
    sub_header: string;
    description: string;
    image: string;
  };
};
export const Service = ({ service }: ServiceProps) => {
  const scrollVariants = useMemo(() => getScrollAnimation(), []);

  console.log('service', service);
  return (
    <ScrollAnimationWrapper className='h-full flex-1'>
      <motion.section className='px-3 lg:max-w-7xl mx-auto space-y-8 text-center py-12 lg:py-20'>
        <div className='flex flex-col md:flex-row gap-14'>
          <div className='flex-1 flex justify-center items-center'>
            <Image
              src={service.image}
              alt={service.title}
              width={350}
              height={350}
            />
          </div>

          <div className='flex-1 h-full flex  flex-col gap-5'>
            <h1 className='text-lg md:text-xl font-bold mt-4 text-start'>
              {service.title}
            </h1>
            <p className=' text-foreground text-start'>
              <i>{service.sub_header}</i>
            </p>
          </div>
        </div>

        <div className='py-16 max-w-6xl mx-auto flex flex-col gap-5'>
          <h2 className='text-start font-bold text-lg md:text-xl'>
            About this Services
          </h2>
          <p className='text-foreground text-start  whitespace-pre-line'>
            {service.description}
          </p>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  );
};
