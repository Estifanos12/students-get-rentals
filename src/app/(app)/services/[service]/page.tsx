import { notFound } from 'next/navigation';

import { Service } from '@/components/services/services';
import { services } from '@/config/services';

type ServiceProps = {
  params: {
    service: string;
  };
  searchParams: {
    params: string;
  };
};

export default function Services({ params: { service } }: ServiceProps) {
  const currentService = services.find((s) => s.id === service);

  if (!currentService) notFound();

  return <Service service={currentService} />;
}
