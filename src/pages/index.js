
//components
import Meta from '../components/Layout/Meta';
import HomePageWrapper from '../styles/Home.style';
import Photos from "../components/Photos/Photos";
import {fetchPhotos} from "../library/photos/photos";

function Home({photos}) {

  return (
    <HomePageWrapper>
      <Meta />
      <Photos  photos={photos}/>
    </HomePageWrapper>
  )
};

export async function getServerSideProps(){

  let page = 1;
  let perPage = 20;

  let result = await fetchPhotos(page,perPage).catch(console.log);

    
  return {
    props:{
      'photos':result
    }
  }

}

export default Home;