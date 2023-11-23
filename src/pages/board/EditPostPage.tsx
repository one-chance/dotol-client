/* eslint-disable no-underscore-dangle */
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { useEffect, useRef, useState } from 'react';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  updatePost,
  requestPreSignedPostUrl,
  uploadPreSignedPostUrl,
} from '@apis/board';
import { Button, FlexView, Input, Text } from '@components/common';

import { useResponsive } from '@hooks/index';
import { Board, IPost } from '@interfaces/index';
import { Colors } from '@styles/system';
import { useSetRecoilState } from 'recoil';
import { toastState } from '@states/toast';

const CATEGORES = [
  `freeboard`,
  `tipboard`,
  `videoboard`,
  `severboard`,
  `tradeboard`,
];

const toolbarItems = [
  [`heading`, `bold`, `italic`, `strike`],
  [`hr`],
  [`ul`, `ol`, `task`],
  [`table`, `link`, `image`],
];

export default function EditPostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const post = (location.state as IPost) ?? null;
  const board = location.pathname.split(`/`)[2] as Board;

  const isMobile = useResponsive(800);
  const contentRef = useRef<Editor>(null);
  const openToast = useSetRecoilState(toastState);

  const [title, setTitle] = useState(``);

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setTitle(e.target.value);
  };

  const uploadImage = async (blob: Blob) => {
    const key = `image/${board}/${post._id}/${new Date().getTime()}.${
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
      return openToast({
        open: true,
        type: 'error',
        message: `이미지는 10MB 이하만 가능합니다.`,
      });
    }

    const url = await uploadImage(blob);
    const regex = /\/(\d+)\.png$/;

    callback(url, url?.match(regex)?.[1] || `image`);
  };

  const editPost = () => {
    updatePost(
      board,
      post.index,
      title,
      contentRef.current?.getInstance().getHTML() || ``,
    ).then(res => {
      if (res.statusCode === 200) {
        navigate(`/freeboard/postId`);
      }
    });
  };

  useEffect(() => {
    if (!CATEGORES.includes(board) || post === null) {
      navigate(`/`);
    } else {
      setTitle(post.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `1080px`,
        width: `100%`,
        margin: `60px auto`,
      }}
    >
      <FlexView gap={20}>
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
            initialValue={post?.content || ``}
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
            aria-label="수정"
            border={Colors.primary}
            css={{ width: `160px`, height: `40px` }}
            radius={4}
            onClick={editPost}
          >
            <Text color="blue">수정</Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
}
