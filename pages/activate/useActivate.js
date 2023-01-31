import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { getAxios } from "../../service/axios.js";

const useActivate = () => {
  const containerDiv = useRef();
  const router = useRouter();
  const { hash } = router.query;
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isActivted, setIsActivted] = useState(false);

  const activateUser = async () => {
    const response = await getAxios(`user/activate-account/${hash}`);
    await delay(1500);
    setIsLoading(false);
    if (response?.success) {
      setIsActivted(true);
      setSnackMsg(response?.message);
    } else {
      setSnackMsg(response?.message);
    }
    await delay(2000);
    router.push("/login");
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (containerDiv.current && hash) {
      activateUser();
    }
  }, [hash]);

  return {
    snackMsg,
    containerDiv,
    isLoading,
    isActivted,
    setSnackMsg,
  };
};

export { useActivate };
