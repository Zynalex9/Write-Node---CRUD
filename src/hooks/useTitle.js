import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Write Node`;
  },[]);
  return null;
};

export default useTitle;
