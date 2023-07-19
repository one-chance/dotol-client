import { FlexView } from '@components/common';
import '@toast-ui/editor/dist/toastui-editor.css';
// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Viewer } from '@toast-ui/react-editor';

type PostContentProps = {
  content: string;
};

export default ({ content }: PostContentProps) => (
  <FlexView css={{ minHeight: `400px`, padding: `10px` }}>
    <Viewer initialValue={content} />
  </FlexView>
);
