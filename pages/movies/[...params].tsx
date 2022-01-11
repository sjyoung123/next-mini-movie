import Seo from "../../components/Seo";

const Detail = ({ params }: IParams) => {
  const [title] = params || [];
  return (
    <>
      <Seo title={title} />
      {<h1>{title}</h1>}
    </>
  );
};

export default Detail;

interface IParams {
  params: string[];
}

interface IServer {
  params: {
    params: IParams;
  };
}

export const getServerSideProps = ({ params: { params } }: IServer) => {
  return {
    props: {
      params,
    },
  };
};
