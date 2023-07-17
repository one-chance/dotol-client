import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import { useRef, useState } from 'react';

import {
  createFreeboardPost,
  requestPreSignedPostUrl,
  uploadPreSignedPostUrl,
} from '@apis/freeboard';
import { Button, FlexView, Input, Text } from '@components/common';
import { CATEGORES } from '@constants/board';
import { Category } from '@interfaces/board';
import { Colors } from '@styles/system';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useResponsive } from '@utils/hooks';
import ObjectId from 'bson-objectid';
import { useNavigate } from 'react-router-dom';

type NewPostProps = {
  category: Category;
};

const postId = new ObjectId().toHexString();

export default ({ category }: NewPostProps) => {
  const navigate = useNavigate();
  const isMobile = useResponsive(800);
  const contentRef = useRef<Editor>(null);

  const [title, setTitle] = useState(``);

  const toolbarItems = [
    [`heading`, `bold`, `italic`, `strike`],
    [`hr`],
    [`ul`, `ol`, `task`],
    [`table`, `link`, `image`],
  ];

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setTitle(e.target.value);
  };

  const uploadImage = async (blob: Blob) => {
    const key = `image/${category}/${postId}/${new Date().getTime()}.${
      blob.type.split(`/`)[1]
    }`;

    const res = await requestPreSignedPostUrl(key);
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
      alert(`10MB 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    const url = await uploadImage(blob);
    const regex = /\/(\d+)\.png$/;

    callback(url, url?.match(regex)?.[1] || `image`);
  };

  const uploadPost = () => {
    createFreeboardPost(
      postId,
      title,
      contentRef.current?.getInstance().getHTML() || ``,
    ).then(res => {
      if (res.statusCode === 200) {
        alert(`성공적으로 등록되었습니다.`);
        navigate(`/board/free?page=1`);
      }
    });
  };

  return (
    <FlexView gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold>
        [{CATEGORES[category]}] 게시물 작성
      </Text>

      <FlexView gap={10}>
        <Input
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
          border={Colors.red}
          css={{ width: `160px`, height: `40px` }}
          radius={4}
        >
          <Text color="red">취소</Text>
        </Button>
        <Button
          border={Colors.primary}
          css={{ width: `160px`, height: `40px` }}
          radius={4}
          onClick={uploadPost}
        >
          <Text color="blue">등록</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
