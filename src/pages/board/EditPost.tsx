/* eslint-disable no-underscore-dangle */
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { useEffect, useRef, useState } from 'react';

import {
  updatePost,
  requestPreSignedPostUrl,
  uploadPreSignedPostUrl,
} from '@apis/board';
import { Button, FlexView, Input, Text } from '@components/common';
import { Toast } from '@components/toast';
import { Category, IPost } from '@interfaces/board';
import { Colors } from '@styles/system';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

const CATEGORES = [`free`, `tip`, `video`, `sever`, `trade`];

const toolbarItems = [
  [`heading`, `bold`, `italic`, `strike`],
  [`hr`],
  [`ul`, `ol`, `task`],
  [`table`, `link`, `image`],
];

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const post = (location.state as IPost) ?? null;
  const category = location.pathname.split(`/`)[2] as Category;

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
    const key = `image/${category}/${post._id}/${new Date().getTime()}.${
      blob.type.split(`/`)[1]
    }`;

    const res = await requestPreSignedPostUrl(category, key);
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

  const editPost = () => {
    updatePost(
      category,
      post.index,
      title,
      contentRef.current?.getInstance().getHTML() || ``,
    ).then(res => {
      if (res.statusCode === 200) {
        navigate(`/board/free/post/postId`);
      }
    });
  };

  useEffect(() => {
    if (!CATEGORES.includes(category) || post === null) {
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

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
