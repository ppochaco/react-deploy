import { Divider, Text } from '@chakra-ui/react';

import { ProductData } from '@/types/productType';

import { Image } from '@/components/ui/Image/Default';
import { Container } from '@/components/ui/Layout/Container';

import { containerStyle } from './styles';

type ProductDetailProps = {
  productDetail: ProductData;
};

export const ProductDetail = ({ productDetail }: ProductDetailProps) => {
  return (
    <Container gap="2rem" css={containerStyle}>
      <Image src={productDetail.imageUrl} ratio="square" />
      <Container
        flexDirection="column"
        gap="2rem"
        maxWidth="20rem"
        css={{ paddingTop: '1rem' }}
      >
        <Container flexDirection="column" gap="1rem">
          <Text fontSize="2xl" data-testid="product-detail-name">
            {productDetail.name}
          </Text>
          <Text fontSize="3xl" data-testid="product-detail-price">
            {productDetail.price}원
          </Text>
        </Container>
        <Divider />
        <Text fontSize="sm" as="b">
          카톡 친구가 아니어도 선물 코드로 선물 할 수 있어요!
        </Text>
        <Divider />
      </Container>
    </Container>
  );
};