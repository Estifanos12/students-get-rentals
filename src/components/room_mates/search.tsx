"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { FormEvent, useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const preferenceType = searchParams?.get("preference") || "";
  const [searchLoading, setSearchLoading] = useState(false);

  const [searchRes, setSearchRes] = useState<any[] | undefined>(undefined);
  const [searchVal, setSearchVal] = useState(searchParams?.get("search") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      if (name === "search" && value === "") params.delete(name);

      if (params.get("page")) params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search =
      (new FormData(e.target as HTMLFormElement).get("search") as
        | string
        | null) || "";
    const query = createQueryString("search", search);
    router.push(`${pathname}?${query}`);
  };
  const onSearchChange = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchVal(value);
    handleChange(value);
  };

  const handleChange = useDebouncedCallback(async (search: string) => {
    if (search === "") {
      setSearchRes(undefined);
      return;
    }
    const preferenceTypeQuery =
      preferenceType === "SINGLE" ? "SINGLE,GROUP" : "SINGLE";
    try {
      setSearchLoading(true);
      const res = await fetch(
        `/api/auto-complete?query=${search}&preferenceType=${preferenceTypeQuery}&limit=3`
      );
      if (!res.ok) {
        setSearchRes([]);
      } else {
        const data = await res.json();
        setSearchRes(data);
      }
    } catch (error) {
      console.error(error);
      setSearchRes([]);
    } finally {
      setSearchLoading(false);
    }
  }, 350);

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-[400px]">
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
          name="search"
          className="peer block w-full p-4 ps-10 text-sm text-foreground border dark:border-none dark:bg-gray-800 focus:outline-primary rounded-lg "
          placeholder="Search."
          value={searchVal}
          onChange={onSearchChange}
        />
        <Button className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 0">
          Search
        </Button>
        <div className="absolute mt-4 peer-focus:block active:block hidden w-full z-10">
          {searchRes === undefined ? null : searchRes.length === 0 ? (
            <div className="p-3 w-full bg-primary rounded-lg ">
              <p className="text-white">No result found</p>
            </div>
          ) : searchLoading ? (
            <div className="p-3 w-full bg-primary rounded-lg ">
              <p className="text-white">Searching ...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {searchRes.map((result) => (
                <>
                  <Button
                    key={result.fullname}
                    className="flex w-full justify-start gap-2 text-white hover:bg-gray-300 focus:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 py-7 rounded-md"
                    onClick={(e) => {
                      console.log("CLicked");
                      setSearchVal(result.fullname);
                    }}
                  >
                    <Avatar>
                      <AvatarImage
                        src={result.profile_picture}
                        alt={result.fullname}
                      />
                      <AvatarFallback className="text-primary dark:text-white">
                        {result.fullname.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <p>{result.fullname}</p>
                  </Button>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
