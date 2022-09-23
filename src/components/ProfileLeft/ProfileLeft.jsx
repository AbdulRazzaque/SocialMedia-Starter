import React from 'react'

import LogoSearch from '../LogoSearch/LogoSearch'

import InfoCard from '../InfoCard/InfoCard'

import FollowersCards from '../FollowersCard/FollowersCards'
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        
        <InfoCard />
        <FollowersCards/>
        

    </div>
  )
}

export default ProfileLeft