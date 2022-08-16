
import Head from 'next/head'
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({ params }:{params: any}) {
    const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Post ページ
export default function Post({ postData }:{postData: any}) {
    return (
      <Layout>
        <Head>
        <title>{postData.title}</title>
      </Head>
      <article> 
        {/* {postData.title} */}
        <br />
        {/* {postData.id}
        <br /> */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article> 
      </Layout>
    );
  }


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
