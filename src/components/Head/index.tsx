import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, Meta, HeadProvider } from 'react-head';
import { DESCRIPTION, KEYWORDS, TITLE } from '../../helpers/constants';

interface HeadProps {
  children: ReactNode;
}
const Head: React.FC<HeadProps> = ({children}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <HeadProvider>
        <Title>{TITLE}</Title>
        <Meta name="description" content={DESCRIPTION} />
        <Meta name="keywords" content={KEYWORDS} />
        <Meta name="author" content="Marketing Integration" />
      </HeadProvider>
      {children}
    </>
  );
};

export default Head;
