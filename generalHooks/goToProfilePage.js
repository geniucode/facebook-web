import { useRouter } from "next/router";
const useGoToProfilePage = () => {
  const router = useRouter();
  const onClickToGoToProfilePage = (userId) => {
    router.push({
      pathname: "/profile",
      query: { id: userId },
    });
  };

  return {
    onClickToGoToProfilePage,
  };
};
export { useGoToProfilePage };
