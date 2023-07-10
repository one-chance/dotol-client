import { Button, FlexView, Text } from '@components/common';
import { IWriter } from '@interfaces/board';
import { userIdState } from '@states/login';
import { useResponsive } from '@utils/hooks';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type PostTitleProps = {
  title: string;
  writer: IWriter;
  views: number;
  commentCount: number;
  recommenders: string[];
};

const basicUrl = `https://dotols.com`;

export default ({
  title,
  writer,
  views,
  commentCount,
  recommenders,
}: PostTitleProps) => {
  const location = useLocation();
  const isMobile = useResponsive(600);
  const userId = useRecoilValue(userIdState);

  const copyUrl = () => {
    navigator.clipboard.writeText(basicUrl + location.pathname);
  };

  const editPost = () => {
    // 글 수정
    console.log(`수정 가능`);
  };

  const deletePost = () => {
    // 글 삭제
    console.log(`삭제 가능`);
  };

  return (
    <FlexView
      css={{
        borderTop: `1px solid lightgray`,
        borderBottom: `1px solid lightgray`,
        padding: `8px 0`,
      }}
    >
      <FlexView
        css={{ padding: `0 8px`, minHeight: `24px` }}
        items={!isMobile ? `center` : `start`}
        row={!isMobile}
        wrap
      >
        <Text bold fill small>
          {title}
        </Text>

        <FlexView gap={8} items="center" row>
          <FlexView css={{ margin: `0 16px` }} center>
            <Button>
              <Text small>{writer.character}</Text>
            </Button>
          </FlexView>

          <Text center small>
            조회 {views}
          </Text>

          <Text center small>
            댓글 {commentCount}
          </Text>

          <Text center small>
            추천 {recommenders.length}
          </Text>
        </FlexView>
      </FlexView>

      <FlexView
        content="between"
        css={{
          minHeight: `20px`,
          padding: `0 8px`,
        }}
        items="center"
        row
      >
        <Button onClick={copyUrl}>
          <Text color="gray" xSmall>
            {basicUrl + location.pathname}
          </Text>
        </Button>

        {userId === writer.userId && (
          <FlexView gap={16} items="center" row>
            <Button onClick={editPost}>
              <Text xSmall>수정</Text>
            </Button>
            <Button onClick={deletePost}>
              <Text xSmall>삭제</Text>
            </Button>
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
};
