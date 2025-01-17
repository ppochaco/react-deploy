import BaseLayout from '@/layouts/BaseLayout';
import { useAuth } from '@/provider/auth/useAuth';

import { Content } from '@/components/Content';
import { UpDownDots } from '@/components/Loading/UpDownDots';
import { Container } from '@/components/ui/Layout/Container';

import { MyAccountConent } from './components/MyAccountContent';
import { WishSection } from './components/WishSection';

export const MyAccountPage = () => {
  const { authInfo } = useAuth();

  if (!authInfo) {
    return <UpDownDots />;
  }

  return (
    <BaseLayout>
      <Container flexDirection="column" alignItems="center">
        <MyAccountConent userName={authInfo.userInfo.name} />
        <Content maxWidth="54rem" gap="4rem">
          <WishSection />
        </Content>
      </Container>
    </BaseLayout>
  );
};
