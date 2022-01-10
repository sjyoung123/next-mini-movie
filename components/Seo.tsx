import Head from "next/head";

interface ISeo {
  title: string;
}

const Seo = ({ title }: ISeo) => {
  return (
    <>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </>
  );
};
export default Seo;
