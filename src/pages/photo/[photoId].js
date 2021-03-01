
//components
import PhotoWrapper from "../../styles/Photo.style";
import Photo from "../../components/Photo/Photo";
import {fetchPhoto,fetchPhotos} from '../../library/photos/photos';

function PhotoComponent({photo}){
    return (
        <PhotoWrapper>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <Photo photo={photo} />
                    </div>
                </div>
            </div>
        </PhotoWrapper>
    )
};

export async function getStaticProps({params}){

    // let url = process.env.SERVER_URL;

    let {photoId} = params;

    let result = await fetchPhoto(photoId).catch(console.log);

    return {
        props:{
            photo:result['response']
        },
        revalidate:1
    };

};

export async function getStaticPaths(){

    //let url = process.env.SERVER_URL;

    let photos = await fetchPhotos(1,20).catch(console.log);

    let paths = photos.map((photo) => {
        return {
            params:{
                photoId:photo['id']
            }
        }
    });

    return {
        paths,
        fallback:true
    };

};

export default PhotoComponent;