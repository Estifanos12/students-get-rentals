"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

import { useBeforeUnload } from "@/hooks/useBeforeUnload";
import { Countdown } from "./countdown";
import { QuizContent } from "./quiz-content";
import { Button } from "../ui/button";
import { handleSubmit } from "@/lib/sendAnswer";
import { toast } from "../ui/use-toast";
import { transitionVariants } from "@/lib/animationVariants";
import { SubmitAnswerDialog } from "./submitAnswerDialog";

import type { Quiz as QuizType } from "@/types";
import { ShowQuizResult } from "./showQuizResult";

type QuizProps = {
  quiz: QuizType[];
};

export const Quiz = ({ quiz }: QuizProps) => {
  const params = useParams<{ category: string }>();
  const isMounted = useRef<boolean>(false);
  const [[page, direction], setDirection] = useState<[number, number]>([0, 0]);
  const [answers, setAnswers] = useState<string[]>(() =>
    Array(quiz.length).fill("")
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [openResult, setOpenResult] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/quiz");
    },
  });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useBeforeUnload(function () {
    return true;
  }, "You're leaving the page, you sure about that?");

  const handleSubmission = useCallback(async () => {
    try {
      setLoading(true);
      const response = await handleSubmit(
        answers,
        session?.user?.email,
        params?.category
      );
      if (response.message === "Success") {
        toast({
          title: "Successfully submitted your answers!",
        });

        setOpenResult(true);
        setResult(response.result as number);

        return;
      }
      if (response.message === "Error") {
        toast({
          title: "Error",
          variant: "destructive",
        });
        return;
      }
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setSubmitModal(false);
    }
  }, [answers, session]);

  const paginate = (newDirection: number) => {
    setDirection([page + newDirection, newDirection]);
  };

  if (!isMounted.current) return null;

  if (session === undefined) {
    return (
      <div className="flex justify-center items-center">
        <Image
          src={"/loading.svg"}
          alt="Loading"
          width={80}
          height={80}
          className="animate-spin"
        />
      </div>
    );
  }

  return (
    <section className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 text-center lg:mb-20 overflow-hidden">
      {quiz.length ? (
        <>
          <Countdown />
          <div className="flex flex-col lg:flex-row gap-7 items-center lg:items-stretch">
            <div className="flex-[5] flex flex-col gap-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  custom={direction}
                  variants={transitionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <QuizContent
                    question={quiz[currentQuestionIndex].question}
                    options={quiz[currentQuestionIndex].options}
                    currentQuestionIndex={currentQuestionIndex}
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-between items-center">
                <Button
                  onClick={() => {
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex((prev) => prev - 1);
                      paginate(-1);
                    }
                  }}
                  disabled={currentQuestionIndex === 0}
                  className={"disabled:cursor-not-allowed "}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    if (currentQuestionIndex < quiz.length - 1) {
                      setCurrentQuestionIndex((prev) => prev + 1);
                      paginate(1);
                    }
                  }}
                  disabled={currentQuestionIndex === quiz.length - 1}
                  className={"disabled:cursor-not-allowed "}
                >
                  Next
                </Button>
              </div>
            </div>

            <div className="flex-[1]  flex flex-col outline outline-1 gap-5 outline-transparent lg:outline-slate-300 lg:p-5 lg:rounded-lg">
              <h2 className="text-foreground font-bold my-2">Questions</h2>

              <div className="flex flex-wrap gap-2 h-max  ">
                {answers.map((answer, index) => (
                  <Button
                    key={answer + index}
                    className={classNames(
                      "outline outline-1 outline-primary text-foreground hover:bg-primary hover:text-white w-[40px]",
                      {
                        "bg-transparent ": answer === "",
                        "text-white": answer !== "",
                      }
                    )}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>

              <SubmitAnswerDialog
                modal={submitModal}
                showModal={setSubmitModal}
                loading={loading}
                onAccept={handleSubmission}
                className="mt-auto self-end"
              />
            </div>
          </div>
        </>
      ) : null}

      <ShowQuizResult
        setOpen={setOpenResult}
        result={result}
        open={openResult}
        quiz={quiz}
      />
    </section>
  );
};
