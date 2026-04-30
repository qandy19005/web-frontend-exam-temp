import {useEffect, useState} from 'react';

function usePageLoading() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 400);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, {once: true});
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  return {loading, fadeOut};
}

export default usePageLoading;
