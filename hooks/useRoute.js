import useRouter from "next/router";

export const useRoute = (route) => {
  return () => useRouter.push(route);
};
