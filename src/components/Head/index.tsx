import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, Meta, HeadProvider } from 'react-head';

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
        <Title>{import.meta.env.VITE_SEO_TITLE}</Title>
        <Meta name="description" content={import.meta.env.DESCRIPTION} />
        <Meta name="keywords" content={import.meta.env.VITE_SEO_KEYWORDS} />
      </HeadProvider>
      {children}
    </>
  );
};

export default Head;
