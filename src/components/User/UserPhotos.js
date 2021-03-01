import {useState} from "react";
import Link from "next/link";

//components
import {UserPhotosWrapper,UserPhotosHeading} from "./User.style";

function UserPhotos({user}){

    const photos = user.photos;
    const [loaded,setLoaded] = useState(false);

    return(
        <UserPhotosWrapper>
           <UserPhotosHeading>
               Photos by {user['name']}
           </UserPhotosHeading>
           <div className="row">
               {
                   photos.map((photo,i) => (
                       <div className="col-12 col-sm-3 col-md-3" key={i}>
                           <div className="card">

                               {/** preloader */}    
                               <Link href={`/photo/${photo['id']}`}>

                                <a>

                                   <div className="card-photo-preloader" style={{
                                   display:loaded ? 'none' : 'block'
                                    }} /> 

                                </a>

                               </Link>

                               {/** image */}                       
                               <Link href={`/photo/${photo['id']}`}>
                                <a>                             

                                    <img
                                    onLoad={() => setLoaded(true)}
                                    style={{
                                        display:loaded ? 'block' : 'none'
                                    }}
                                    className="card-photo"
                                    src={photo['urls']['full']}
                                    alt="card_photo"
                                    />

                                </a>
                               </Link>

                           </div>
                       </div>
                   ))
               }
           </div>
           <style jsx>{`

            .card-photo-preloader {
                width:100%;
                height:200px;
                background-color:grey;
            }

            .card-photo{
                width:100%;
                height:auto;
            }

           `}</style>
        </UserPhotosWrapper>
    )
};

export default UserPhotos;