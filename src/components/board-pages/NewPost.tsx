import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import { useRef, useState } from 'react';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { Board } from '@interfaces/board';
import ObjectId from 'bson-objectid';
import { useNavigate } from 'react-router-dom';

import {
  createPost,
  requestPreSignedPostUrl,
  uploadPreSignedPostUrl,
} from '@apis/index';
import { Button, FlexView, Input, Text } from '@components/common';
import { Toast } from '@components/toast';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

type NewPostProps = {
  board: Board;
};

const postId = new ObjectId().toHexString();

const toolbarItems = [
  [`heading`, `bold`, `italic`, `strike`],
  [`hr`],
  [`ul`, `ol`, `task`],
  [`table`, `link`, `image`],
];

export default ({ board }: NewPostProps) => {
  const navigate = useNavigate();
  const isMobile = useResponsive(800);
  const contentRef = useRef<Editor>(null);

  const [title, setTitle] = useState(``);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setTitle(e.target.value);
  };

  const uploadImage = async (blob: Blob) => {
    const key = `image/${board}/${postId}/${new Date().getTime()}.${
      blob.type.split(`/`)[1]
    }`;

    const res = await requestPreSignedPostUrl(board, key);
    if (res.statusCode === 200) {
      const upload = await uploadPreSignedPostUrl(
        res.data.url,
        res.data.fields,
        blob,
      );

      if (upload.ok) {
        return `https://asset.dotols.com/${key}`;
      }
    }
  };

  const convertImage = async (blob: Blob, callback: CallableFunction) => {
    if (blob.size > 1024 * 1024 * 10) {
      openToast(`이미지는 10MB 이하만 가능합니다.`);
      return;
    }

    const url = await uploadImage(blob);
    const regex = /\/(\d+)\.png$/;

    callback(url, url?.match(regex)?.[1] || `image`);
  };

  const uploadPost = () => {
    createPost(
      board,
      postId,
      title,
      contentRef.current?.getInstance().getHTML() || ``,
    ).then(res => {
      if (res.statusCode === 200) {
        navigate(`/freeboard?page=1`);
      }
    });
  };

  return (
    <FlexView gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold>
        게시물 작성
      </Text>

      <FlexView gap={10}>
        <Input
          aria-label="제목"
          height={40}
          placeholder="제목을 입력하세요."
          value={title || ``}
          onChange={inputTitle}
        />

        <Editor
          ref={contentRef}
          height={isMobile ? `400px` : `600px`}
          hooks={{
            addImageBlobHook: convertImage,
          }}
          initialEditType="wysiwyg"
          initialValue=""
          language="ko-KR"
          placeholder="내용을 입력하세요."
          plugins={[colorSyntax]}
          toolbarItems={toolbarItems}
          hideModeSwitch
        />
      </FlexView>

      <FlexView
        content={isMobile ? `center` : `end`}
        gap={8}
        items="center"
        row
      >
        <Button
          aria-label="취소"
          border={Colors.red}
          css={{ width: `160px`, height: `40px` }}
          radius={4}
          onClick={() => navigate(-1)}
        >
          <Text color="red">취소</Text>
        </Button>
        <Button
          aria-label="등록"
          border={Colors.primary}
          css={{ width: `160px`, height: `40px` }}
          radius={4}
          onClick={uploadPost}
        >
          <Text color="blue">등록</Text>
        </Button>
      </FlexView>

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
