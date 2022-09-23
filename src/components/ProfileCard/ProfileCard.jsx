import React from 'react'
import Cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
function ProfileCard() {

    const profilepage=true;
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Zendaya MJ</span>
            <span>Senior UI/UX</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
            <div className="follow">
                <span>6,890</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>
            {profilepage &&  (
                <>
                <div className="vl"></div>
                <div className='follow'>
                    <span>3</span>
                    <span>Post</span>
                </div>
                </>
            )}
        </div>
        <hr />
        </div>
        {profilepage ? "":   <span>My profile</span>}
     
    </div>

    )
}

export default ProfileCard