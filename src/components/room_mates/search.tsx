"use client";

import { Button } from "../ui/button";

export const Search = () => {
  return (
    <form className="w-full md:w-[400px] ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-foreground sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-muted-foreground"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-foreground border focus:outline-primary rounded-lg dark:bg-gray-800"
          placeholder="Search."
          required
        />
        <Button className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 0">
          Search
        </Button>
      </div>
    </form>
  );
};
