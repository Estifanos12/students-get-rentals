"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";

import "../text-editor/styles.scss";

export const Bio = ({ bio }) => {
  const editor = useEditor({
    content: bio,
    editable: false,
    extensions: [StarterKit],
  });

  if (!editor) {
    return (
      <Image
        src={"/loading.svg"}
        alt="Loading"
        width={50}
        height={50}
        className="animate-spin"
      />
    );
  }

  return (
    <>
      <div className="flex flex-col ">
        <h2 className="text-foreground font-bold text-lg">Bio</h2>

        <div className="my-7 flex flex-col justify-center items-center gap-3">
          {bio ? (
            <div>
              <EditorContent editor={editor} />
            </div>
          ) : (
            <p className="text-foreground ">Student hasn&#39;t added bio yet</p>
          )}
        </div>
      </div>
    </>
  );
};
