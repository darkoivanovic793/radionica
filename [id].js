import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css"
import Layout from "../../components/layout";
import WelcomeMessage from "../../components/WelcomeMessage";
import Link from "next/link";
import { getImageSrc } from "../../utils/getImageSrc";


 function Article({articles}){
    const router=useRouter();
    if(router.isFallback){
      return <div>Loading</div>
  }
    const header= ({article}) => {
      return (
        
        <div>
          <h1>Articles header {article.header}</h1>
          
        </div>
       
      );
    }
    const articlescontent = ({article}) => {
      return (
        <div>
        <p>Article contents {article.articlesContent}</p>
        </div>
      );
    }
    const youtube= ({article}) => {
      return (
        <div>
          <p>You tube {article.youtube}</p>
        </div>
      );
    }
      const footer= ({article}) => {
        return (
          <div>
            <footer>Footer on page {article.footer}</footer>
         
          </div>
        );
      }
      <div>
      <button className={styles.code} onClick={() => router.back()}>Nazad</button>
      </div>
      
}



export async function getStaticPaths(){
    const res=await fetch("http://localhost:3000/api/articles");
    const articles= await res.json();

    const paths=articles.map(article => ({
        params:{id:article.id.toString()}

    }))
return (

    {paths,fallback:true}
)
}

export async function getStaticProps({params}){
    const res=await fetch("http://localhost:3000/api/articles");
    const articles= await res.json();
    const article =articles.find(article => article.id===params.id )
   return {props:{article}};
}

export default Article

