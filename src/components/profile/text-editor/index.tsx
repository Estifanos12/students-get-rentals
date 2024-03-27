"use client";

import { useEffect } from "react";

import { Tooltip } from "@/components/common/tooltip";
import "./styles.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import {
  EditorContent,
  EditorProvider,
  useCurrentEditor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  FaBold,
  FaCode,
  FaFileCode,
  FaItalic,
  FaParagraph,
  FaQuoteLeft,
  FaRedo,
  FaRemoveFormat,
  FaStrikethrough,
  FaUndo,
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
        className={`${className} m-1.5 border border-gray-300 rounded p-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-transparent`}
      >
        {children}
      </button>
    </Tooltip>
  );
};

const MenuBar = ({ editor }) => {
  // const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
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
];

const content = `
<h2>
 <strong> Hi there, Start editing this content</strong>
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

  return (
    <>
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </>
  );
};
