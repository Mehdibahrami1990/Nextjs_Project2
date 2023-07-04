import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
  const router = useRouter();
  const query = router.query.name;
  //   console.log(router);
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      This is dynamic Route : {query}
    </div>
  );
};

export default Dynamic;
