import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

export const SignIn = () => {
  const pathname = usePathname();
  return (
    <Link href={`/login?callbackUrl=${pathname}`}>
      <Button>Sign In</Button>
    </Link>
  );
};
