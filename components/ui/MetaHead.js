import Head from "next/head";

const MetaHead = (props) => {
  return (
    <Head>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
    </Head>
  );
};

export default MetaHead;
