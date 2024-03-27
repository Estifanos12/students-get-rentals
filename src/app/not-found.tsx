import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-10'>
      <Image src='/404.svg' alt='404' width={300} height={300} />
      <h1 className='text-foreground text-lg font-bold'>
        Sorry, We cannot find the page you are looking for
      </h1>
      <Link href='/'>
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
