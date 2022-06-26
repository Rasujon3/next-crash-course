import React from "react";
import { useRouter } from "next/router";

const article = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>this is article {id}</h2>
    </div>
  );
};

export default article;
