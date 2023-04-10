
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getUser1 } from "../../services/apiServices";
import Button from 'react-bootstrap/Button';

import Avatar from "./Avatar";
import Modelavatar from "../Model/Modelavatar";
import Modelback from "../Model/Modeback";
import { useSelector } from 'react-redux';

const Trangcanhan = () => {
    const Account = useSelector(state => state.accountThanh.Account)
    const [user, setuser] = useState([])
    const [avatar1, setavatar1] = useState(false)
    const [avatar2, setavatar2] = useState(false)
    const params = useParams()
    const location = useLocation()
    const quizId = params.id;
    console.log(quizId)
    // console.log('check user demo', user)
    const img1 = 'http://localhost:8080'
    console.log(location)
    useEffect(() => {
        fetch();
    }, [quizId])

    const fetch = async () => {
        let data = await getUser1(quizId);
        if (data && data.EC === 0) {
            // console.log("trang cá nhân", data.content)
            setuser(data.content)
        }
    }

    return (
        <div>
            <div className='container User '>


                <div>
                    <Avatar user={user} />
                    <Modelavatar
                        show={avatar1} setShow={setavatar1}
                        fetch={fetch}
                    />

                    <Modelback
                        show={avatar2} setShow={setavatar2}
                        fetch={fetch}
                    />

                    <div>
                        <div className='bt-bg'>
                            <Button onClick={() => setavatar2(true)} variant="light">Chỉnh sửa ảnh bia</Button>
                        </div>
                        <div className="bt-bg1">
                            <Button onClick={() => setavatar1(true)} variant="primary">Chỉnh sửa ảnh dai dien</Button>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default Trangcanhan