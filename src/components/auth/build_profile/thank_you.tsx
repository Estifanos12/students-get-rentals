import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ThankYouCard = () => {
  return (
    <Card className="dark:bg-gray-800 text-center flex flex-col w-full h-full items-center justify-center">
      <CardHeader className="mt-12 space-y-3">
        <CardTitle>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/icon-thank-you.svg"
              alt="Thank you"
              height={50}
              width={50}
            />
            <h1 className="text-foreground font-bold uppercase text-lg ">
              Thank you!
            </h1>
          </div>
        </CardTitle>
        <CardDescription className="text-foreground font-medium text-base">
          Thanks for filling your profile, proceed to the login page
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="/login">
          <Button>Go to login</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ThankYouCard;
