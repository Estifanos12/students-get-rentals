"use client";

import React, { useEffect, useState } from "react";

import { Tooltip } from "@/components/common/tooltip";
import "./styles.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import {
  FaBold,
  FaCode,
  FaFileCode,
  FaItalic,
  FaLink,
  FaParagraph,
  FaQuoteLeft,
  FaRedo,
  FaRemoveFormat,
  FaStrikethrough,
  FaUndo,
  FaUnlink,
} from "react-icons/fa";

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import {
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdHorizontalRule,
} from "react-icons/md";
import { ImPageBreak } from "react-icons/im";
import { FaImage } from "react-icons/fa6";
import { HoverCard } from "@/components/common/hover_card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditorButton = ({
  onClick,
  disabled,
  className,
  children,
  text,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <Tooltip text={text}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className} m-1.5 border border-gray-300 rounded p-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-transparent disabled:cursor-not-allowed`}
      >
        {children}
      </button>
    </Tooltip>
  );
};

const ImageUploadButton = ({
  text,
  handleImageUpload,
  children,
}: {
  text: string;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}) => {
  return (
    <Tooltip text={text}>
      <button className="m-1.5 border border-gray-300 rounded p-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-transparent">
        <label id="upload-image">
          {children}
          <input
            type="file"
            hidden
            onChange={(e) => handleImageUpload(e)}
            accept="image/png, image/jpeg, image/jpg"
          />
        </label>
      </button>
    </Tooltip>
  );
};

const MenuBar = ({ editor }) => {
  const [image, setImage] = useState<string | null>(null);
  if (!editor) {
    return null;
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        setImage(reader.result as string);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const link = window.prompt("Enter Url", previousUrl);

    if (link === null) return;

    if (link === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: link })
      .run();
  };

  if (image) {
    editor.chain().focus().setImage({ src: image }).run();
    setImage(null);
  }

  return (
    <div className="mb-3">
      <EditorButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        text="Bold"
      >
        <FaBold size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        text="Italic"
      >
        <FaItalic size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
        text="Strike-through"
      >
        <FaStrikethrough size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
        text="Code"
      >
        <FaCode size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        text="Remove format"
      >
        <FaRemoveFormat size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
        text="Paragraph"
      >
        <FaParagraph />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        text="Heading 1"
      >
        <LuHeading1 size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        text="Heading 2"
      >
        <LuHeading2 size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        text="Heading 3"
      >
        <LuHeading3 size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
        text="Heading 4"
      >
        <LuHeading4 size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
        text="Heading 5"
      >
        <LuHeading5 size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
        text="Heading 6"
      >
        <LuHeading6 size={17} />
      </EditorButton>

      <EditorButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
        text="Bullet list"
      >
        <MdFormatListBulleted size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
        text="Ordered list"
      >
        <MdFormatListNumbered size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
        text="Code block"
      >
        <FaFileCode size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
        text="Blockquote"
      >
        <FaQuoteLeft size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        text="Horizontal Rule"
      >
        <MdHorizontalRule size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().setHardBreak().run()}
        text="Hard Break"
      >
        <ImPageBreak size={17} />
      </EditorButton>
      <EditorButton
        text="Add Link"
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <FaLink size={17} />
      </EditorButton>
      <EditorButton
        text="Unlink"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <FaUnlink size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        text="Undo"
      >
        <FaUndo size={17} />
      </EditorButton>
      <EditorButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        text="Redo"
      >
        <FaRedo size={17} />
      </EditorButton>
      <ImageUploadButton
        text="Upload Image"
        handleImageUpload={handleImageUpload}
      >
        <FaImage size={17} />
      </ImageUploadButton>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Image.configure({
    allowBase64: true,
    HTMLAttributes: {
      width: 300,
      height: 300,
    },
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
    HTMLAttributes: {
      rel: "noopener noreferrer",
      target: null,
    },
  }),
];

const content = `
<h2>
 <strong> Hi there, Start editing this <a href='#'>content</a></strong>
</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis tortor in lorem aliquam maximus. Vestibulum posuere consectetur interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam imperdiet nec magna quis scelerisque. Cras risus purus, feugiat sed enim nec, consectetur venenatis nibh. Curabitur feugiat tincidunt vestibulum. Nunc nec venenatis arcu, quis auctor nisl. Pellentesque pharetra diam sem, sed suscipit orci fringilla et. Nunc turpis massa, molestie a felis et, sodales volutpat ipsum. Donec iaculis fringilla interdum. Fusce ultricies lacinia justo, quis convallis quam condimentum ac. Vestibulum sollicitudin magna at dolor volutpat, eu tristique tortor lobortis. Proin aliquam ipsum ut diam pretium lacinia. Aenean eros sem, rhoncus vel dui vitae, aliquam feugiat sem.
</p>
<p>
Proin tincidunt elit id sem placerat, at tincidunt tellus auctor. Aliquam porta odio ut est luctus, eu tempus dui vehicula. Vestibulum aliquam viverra purus, non hendrerit est auctor in. Aliquam sit amet sagittis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis quis tincidunt sem. Ut venenatis pellentesque lectus, scelerisque tristique libero. Sed convallis fermentum lacus at maximus. Nullam sem ligula, scelerisque ut porttitor vitae, rutrum ullamcorper lectus. Nullam nec velit tincidunt, commodo nulla eu, vestibulum dui. Aliquam vulputate sem enim, at auctor turpis tempus a. Sed maximus sollicitudin nunc, sit amet viverra orci auctor ut. Vestibulum dignissim dui nec massa ultrices luctus. Vivamus ac lacus fringilla, vulputate purus nec, eleifend quam.
</p>
<p>
Duis eu venenatis orci. Curabitur rutrum ullamcorper convallis. Vivamus elementum iaculis felis quis eleifend. Nunc neque mi, tristique in nisi sit amet, dignissim laoreet felis. Praesent lacus diam, congue quis ante et, molestie dapibus nulla. Maecenas varius tempor nibh at tristique. Fusce ac ex eu justo vulputate ullamcorper.
</p>
`;

export const TextEditor = ({ editable, bio, setBio }) => {
  const editor = useEditor({
    extensions: extensions,
    content: bio || content,
    onUpdate: ({ editor }) => {
      setBio(editor.getHTML());
    },
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  useEffect(() => {
    if (!editor) {
      return undefined;
    }
    editor.setEditable(editable);
  }, [editor, editable]);

  console.log(bio);
  return (
    <>
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </>
  );
};
