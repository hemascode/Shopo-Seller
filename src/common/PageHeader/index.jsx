import Head from "next/head";

export const PageHeader = ({ title }) => {
  const defaultTitle = "Shopo Admin";
  return (
    <Head>
      <title>{title || defaultTitle}</title>
    </Head>
  );
};
