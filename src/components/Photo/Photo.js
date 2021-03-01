import {useState} from "react";
import Link from "next/link";

//components
import PhotoWrapper from "./Photo.style";

const Photo = ({photo}) => {

    const [main_loaded,setMainLoaded] = useState(false);
    const [user_loaded,setUserLoaded] = useState(false);

    return (
        <PhotoWrapper>

            <div className="media">

                <div className="photo-media-img-preloader" 
                style={{ display:main_loaded ? 'none' : 'block' }}
                />

                <img
                onLoad={() => setMainLoaded(true)}
                className="photo-media-img"
                style={{
                    display:main_loaded ? 'block' : 'none'
                }}
                src={photo['urls']['full']}
                alt={photo['alt_description']}
                />

                <div className="media-body photo-media-body">

                    <h4>
                        {photo['description']}
                    </h4>

                    <div className="media">

                        <div className="photo-user-media-img-preloader"
                        style={{
                            display:user_loaded ? 'none' : 'block'
                        }}
                        />

                        <img
                           onLoad={() => setUserLoaded(true)}
                           className="photo-user-media-img"
                           style={{
                               display:user_loaded ? 'block' : 'none'
                           }}
                           src={
                               photo['user']['profile_image'] ? 
                               photo['user']['profile_image']['large'] : 
                               '/images/avatar.png'
                           }
                        />

                        <div className="media-body photo-user-media-body">
                           
                           <Link href={`/users/${photo['user']['username']}`}>
                               <a className="photo-user-link">
                                   {
                                       photo['user']['name']
                                   }
                               </a>
                           </Link>
                        </div>

                    </div>

                </div>

            </div>

            <style jsx>{`

            .photo-media-img-preloader{
                width:30%;
                height:200px;
                background-color:grey;
            }

            .photo-media-img{
                width:30%;
            }

            .photo-media-body{
                margin-left:20px;
                padding:30px;
            }

            .photo-user-media-img-preloader{
                width:100px;
                height:100px;
                border-radius:50%;
                background-color:grey;
            }

            .photo-user-media-img{
                width:100px;
                height:100px;
                border-radius:50%;
            }

            .photo-user-media-body{
                padding:30px 0px;
                margin-left:10px;
            }

            .photo-user-link:hover{
                text-decoration:none;
            }

            `}</style>

        </PhotoWrapper>
    )
};

export default Photo;