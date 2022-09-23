import React from 'react'
import FollowersCards from '../FollowersCard/FollowersCards'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCards/>
    </div>
  )
}

export default ProfileSide