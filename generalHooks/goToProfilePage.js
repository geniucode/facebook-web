import { useRouter } from "next/router";
const useGoToProfilePage = (id) => {
  const router = useRouter();
  const onClickToGoToProfilePage = () => {
    router.push({
      pathname: "/profile",
      query: { id },
    });
  };

  return {
    onClickToGoToProfilePage,
  };
};
export { useGoToProfilePage };
