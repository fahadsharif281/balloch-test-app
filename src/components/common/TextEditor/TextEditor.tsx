import React from "react";
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, AutoLink, Alignment, AlignmentEditing, WordCount, FontBackgroundColor, Indent, IndentBlock, RemoveFormat, Style } from 'ckeditor5';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

export default function TextEditor({ initialValue, ...props }: any) {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          initialData: initialValue,
          plugins: [Essentials, Bold, Italic, Paragraph, AutoLink, Alignment, FontBackgroundColor, Indent, IndentBlock, RemoveFormat,],
          toolbar: {
            items: [
              'undo', 'redo', '|', 'bold', 'italic', '|', 'FontBackgroundColor',
              "+", "backcolor", "|", "Alignment", "aligncenter", "+",
              "alignright", "alignjustify", "|", "bullist", "numlist", "outdent", "indent", "|", "+",
              "RemoveFormat", "|", "help",
              "|", "WordCount"
            ],
          },
        }}
        onReady={(editor: any) => {
          editor?.editing?.view?.change((writer: any) => {
            writer.setStyle(
              "height",
              "500px",
              editor.editing.view.document.getRoot()
            );
          });

        }}
        {...props}
      />
    </>
  );
}
