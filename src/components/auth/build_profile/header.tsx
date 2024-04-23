import Image from "next/image";

import { steps } from "@/config/step";
import { StepIndicator } from "./step-indicator";

const Header = () => {
  return (
    <section className="relative  bg-slate-300">
      <Image
        src="/bg-form.svg"
        alt="Sidebar Image"
        fill
        priority
        className="relative  rounded-md object-cover"
      />

      <div className="absolute top-10 flex w-full justify-center gap-10 md:ml-10 md:flex-col md:justify-normal">
        {steps.map((step) => (
          <div key={step.id} className="md:flex md:items-center">
            <StepIndicator id={step.id} />

            <div className="ml-5 hidden md:flex md:flex-col md:gap-1">
              <span className="font-bold text-white">{step.step}</span>
              <span className="text-white opacity-90">{step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
