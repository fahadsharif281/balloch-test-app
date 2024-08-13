import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGetTitleRoute = (type: string) => {
  const { routes } = useSelector((state: any) => state.root.user);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const flaged = routes?.find((item: any) => item.type === type);
    setTitle(flaged?.screen_name);
  }, []);

  return { title };
};

export default useGetTitleRoute;
