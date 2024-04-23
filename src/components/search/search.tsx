import React, { useCallback, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { run } from "@/actions/auto_complete";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

export const Search = () => {
  const [search, setSearch] = useState<any[] | undefined>(undefined);

  const searchRef = useRef<HTMLInputElement>();
  const debounce = useRef();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (searchRef.current?.value === "") {
        setSearch(undefined);

        return;
      }

      const code = e.keyCode || e.which;
      if (code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
        return;
      }

      if ((searchRef.current?.value.length as number) < 3) return;

      clearTimeout(debounce.current);
      debounce.current = setTimeout(async () => {
        const result = await run(searchRef.current?.value);
        setSearch(result);
      }, 350);
    },
    []
  );

  return (
    <Dialog>
      <DialogTrigger className="dark:hover:bg-gray-800">
        <FaSearch size={20} className="" />
      </DialogTrigger>
      <DialogContent>
        <form className="flex items-center gap-2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              required
              autoComplete="off"
              ref={searchRef}
              onKeyUp={handleChange}
            />
          </div>
          <Button className="h-full" onClick={handleSearch}>
            <svg
              className="w-4 h-4"
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
            <span className="sr-only">Search</span>
          </Button>
        </form>

        <div className="mt-4">
          {search === undefined ? (
            <p className="text-foreground">
              Type at least 3 characters to start searching ...
            </p>
          ) : search.length === 0 ? (
            <p className="text-foreground">No result found</p>
          ) : (
            <div className="space-y-4">
              {search.map((result) => (
                <>
                  <Link
                    key={result.fullname}
                    href={`/student/${result._id}`}
                    className="flex items-center gap-2 text-foreground hover:bg-gray-300 focus:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 p-2 rounded-md"
                    target="_blank"
                  >
                    <Avatar>
                      <AvatarFallback className="">
                        {result.fullname.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <p>{result.fullname}</p>
                  </Link>
                </>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
