import Link from "next/link";

import { courses } from "@/config/contents";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export const Badge = ({ results }) => {
  return (
    <>
      <h2 className="text-foreground font-bold text-lg">Your Badge</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-7">
        {courses.map((course) => {
          const result = results.find((r) => r.category === course.key);
          return (
            <Card
              key={course.key}
              className="dark:bg-gray-900 dark:border-primary flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold line-clamp-1">
                  Course: {course.label}
                </CardTitle>
              </CardHeader>
              {result.no_of_trails > 0 ? (
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        result.best_score / result.no_of_questions < 0.5
                          ? "/bronze_badge.svg"
                          : result.best_score / result.no_of_questions < 0.8
                          ? "/silver_badge.svg"
                          : "/golden_badge.svg"
                      }
                      alt="Badge"
                      width={40}
                      height={40}
                    />

                    <span>
                      {result.best_score / result.no_of_questions < 0.5
                        ? "Bronze badge"
                        : result.best_score / result.no_of_questions < 0.8
                        ? "Silver badge"
                        : "Golden badge"}
                    </span>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="">
                  <i>Student hasn&#39;t taken the quiz yet.</i>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
};
