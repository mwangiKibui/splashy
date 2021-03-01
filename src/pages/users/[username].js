import {useRouter} from "next/router";

//components
import UserPageWrapper from "../../styles/User.style";
import UserInfo from "../../components/User/UserInfo";
import UserPhotos from "../../components/User/UserPhotos";

import {fetchUser} from '../../library/users/users';
import {fetchPhotos} from '../../library/photos/photos';

function UserPage({user}){

    const router = useRouter();  

    if(router.isFallback) return (
        <p>
            Loading..
        </p>
    )

    return(
        <UserPageWrapper>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <UserInfo user={user} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12">
                        <UserPhotos user={user} />
                    </div>
                </div>
            </div>

        </UserPageWrapper>
    );

};

export async function getStaticProps({params}){

    let {username} = params;
    // let url = process.env.SERVER_URL;

    //fetch the user.
    let result = await fetchUser(username).catch(console.log);

    result = result['response'];

    return {
        props:{
            user:result
        },
        revalidate:1
    }
};

export async function getStaticPaths(){

    // let url = process.env.SERVER_URL;

    //get all usernames.
    let usernames = await fetchPhotos(1,20).catch(console.log);

    let paths = usernames.map((username) => {
        return {
            params:{
                username:username['user']['username']
            }
        }
    });

    return {
        paths,
        fallback:true
    };

};

export default UserPage;