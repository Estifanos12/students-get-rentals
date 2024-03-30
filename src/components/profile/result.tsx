import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tooltip } from "../common/tooltip";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { courses } from "@/config/contents";

export const Result = ({ result }) => {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <h1 className="text-lg md:text-xl font-bold mb-4">Your Results</h1>
        <div className="flex flex-col gap-3">
          {result.results.length === 0 &&
            courses.map((course) => {
              return (
                <Card
                  key={course.key}
                  className="dark:bg-gray-900 dark:border-primary"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">
                      Course: {course.label}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex justify-between items-center">
                    <div className="flex items-center justify-between w-full">
                      <i>
                        <strong>*NB.</strong>You didn&#39;t take a quiz
                      </i>

                      <Link
                        href={course.link}
                        className="text-primary flex items-center gap-1 mt-2 hover:underline"
                        target="_blank"
                      >
                        <span>Take quiz</span>
                        <FaExternalLinkAlt className="inline" size={13} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          {result.results.length > 0 &&
            courses.map((course) => {
              const course_result = result.results.find(
                (r) => r.category === course.key
              );
              return (
                <Card
                  key={course.key}
                  className="dark:bg-gray-900 dark:border-primary"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">
                      Course: {course.label}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex justify-between items-center">
                    {course_result ? (
                      <div>
                        <p>
                          Average score:{" "}
                          {course_result.average_score.toFixed(2)}
                        </p>
                        <p>Number of attempts: {course_result.no_of_trails}</p>
                      </div>
                    ) : null}

                    {!course_result && (
                      <div className="flex items-center justify-between w-full">
                        <i>
                          <strong>*NB.</strong>You didn&#39;t take a quiz
                        </i>

                        <Link
                          href={course.link}
                          className="text-primary flex items-center gap-1 mt-2 hover:underline"
                          target="_blank"
                        >
                          <span>Take quiz</span>
                          <FaExternalLinkAlt className="inline" size={13} />
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
};
