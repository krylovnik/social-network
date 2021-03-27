import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={c.second_ava}><img src="/img/Cover_Photo.png" alt="background-img"/></div>
            <div className={c.avatar_descr}><img className={c.avatar} src={props.profile.photos.large} alt="ava"/></div>
        </div>
    )
}
export default ProfileInfo;