import { useRouter } from "next/router";
const useGoToProfilePage = (userId) => {
  const router = useRouter();
  const onClickToGoToProfilePage = () => {
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
