import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

import Modal from '../Modal';
import ModalM from '../ModalM';

type ModalProps = {
  close: () => void;
};

const desktopModal = (close: () => void) => (
  <Modal closePortal={close} height={440} width={620} close>
    <FlexView
      css={{
        padding: `20px 40px`,
        overflowY: `auto`,
        scrollbarWidth: `none`,
        '::-webkit-scrollbar': { display: `none` },
      }}
      gap={24}
    >
      <FlexView gap={4} items="center" row>
        <Text color="blue" bold large>
          제작확률 증가(%)
        </Text>

        <Text color="blue">
          = (장비 수치 + 한벌 효과) x 치장 효과 + 가문 특성
        </Text>
      </FlexView>

      <FlexView gap={8}>
        <FlexView>
          <Text semiBold>장비 수치</Text>
          <FlexView gap={4} row wrap>
            <Text small>사색인장 7(9.1)</Text>
            <Text small>/</Text>
            <Text small>상급목각도깨비방망이 3.5(4.55)</Text>
            <Text small>/</Text>
            <Text small>전설목각도깨비방망이 5.6(7.28)</Text>
            <Text small>/</Text>
            <Text small>고대마령의단검 0.7(0.91)</Text>
            <Text small>/</Text>
            <Text small>고대마령의적혈단검 2.8(3.64)</Text>
            <Text small>/</Text>
            <Text small>금옥노리개 0.21(0.273)</Text>
            <Text small>/</Text>
            <Text small>분신류 3.5</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold>한벌 효과</Text>
          <FlexView gap={4} row wrap>
            <Text small>바람연대기(최상) 8.4</Text>
            <Text small>/</Text>
            <Text small>바람연대기(상) 7</Text>
            <Text small>/</Text>
            <Text small>바람연대기(중) 3.5</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold>치장 효과</Text>
          <FlexView gap={4} row wrap>
            <Text small>2품의 1.025</Text>
            <Text small>/</Text>
            <Text small>1품의1.05</Text>
            <Text small>/</Text>
            <Text small>명품의1.075</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold>가문 특성</Text>
          <Text small>2포인트 0.7</Text>
        </FlexView>
      </FlexView>

      <FlexView>
        <Text small>
          - 장비 수치의 괄호는 강화석으로 올릴 수 있는 최종 수치이다.
        </Text>
        <Text small>
          - 신체각성은 사색인장을 강화한 수치보다 낮아서 제외하였다.
        </Text>
        <Text small>- 환인장비 한벌효과는 사실상 불가능하므로 제외하였다.</Text>
      </FlexView>
    </FlexView>
  </Modal>
);

const mobileModal = (close: () => void) => (
  <ModalM closePortal={close} close>
    <FlexView gap={40}>
      <FlexView gap={4} items="center" row wrap>
        <Text color="blue" bold>
          제작확률 증가(%)
        </Text>

        <Text color="blue" small>
          = (장비 수치 + 한벌 효과) x 치장 효과 + 가문 특성
        </Text>
      </FlexView>

      <FlexView gap={8}>
        <FlexView>
          <Text semiBold small>
            장비 수치
          </Text>

          <FlexView gap={4} row wrap>
            <Text xSmall>사색인장 7(9.1)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>상급목각도깨비방망이 3.5(4.55)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>전설목각도깨비방망이 5.6(7.28)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>고대마령의단검 0.7(0.91)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>고대마령의적혈단검 2.8(3.64)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>금옥노리개 0.21(0.273)</Text>
            <Text xSmall>/</Text>
            <Text xSmall>분신류 3.5</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold small>
            한벌 효과
          </Text>

          <FlexView gap={4} row wrap>
            <Text xSmall>바람연대기(최상) 8.4</Text>
            <Text xSmall>/</Text>
            <Text xSmall>바람연대기(상) 7</Text>
            <Text xSmall>/</Text>
            <Text xSmall>바람연대기(중) 3.5</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold small>
            치장 효과
          </Text>

          <FlexView gap={4} row wrap>
            <Text xSmall>2품의 1.025</Text>
            <Text xSmall>/</Text>
            <Text xSmall>1품의1.05</Text>
            <Text xSmall>/</Text>
            <Text xSmall>명품의1.075</Text>
          </FlexView>
        </FlexView>

        <FlexView>
          <Text semiBold small>
            가문 특성
          </Text>
          <Text xSmall>2포인트 0.7</Text>
        </FlexView>
      </FlexView>

      <FlexView>
        <Text xSmall>
          - 장비 수치의 괄호는 강화석으로 올릴 수 있는 최종 수치이다.
        </Text>
        <Text xSmall>
          - 신체각성은 사색인장을 강화한 수치보다 낮아서 제외하였다.
        </Text>
        <Text xSmall>
          - 환인장비 한벌효과는 사실상 불가능하므로 제외하였다.
        </Text>
      </FlexView>
    </FlexView>
  </ModalM>
);

export default ({ close }: ModalProps) => {
  const isMobile = useResponsive(720);

  return isMobile ? mobileModal(close) : desktopModal(close);
};
