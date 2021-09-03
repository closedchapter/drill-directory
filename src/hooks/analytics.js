import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-162744232-3', {
      gaOptions: {
          cookieFlags: 'SameSite=None;Secure'
        }
    });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;