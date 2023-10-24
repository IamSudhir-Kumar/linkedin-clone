import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../FireBaseConfig';
import React, { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Common/Loader';
import HomePageComponent from '../Components/HomePageComponent';

export default function Home() {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.acessToken){
                navigate("/");
            } else {
                setLoading(false);
            }
        });
    },[]);
    return loading ? <Loader /> : <HomePageComponent />;
}
