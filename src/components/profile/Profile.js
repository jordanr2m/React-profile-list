import { useState } from "react"
import "./Profile.css"
import { profileData } from './profile-data'
import { FaTrashAlt } from "react-icons/fa";

// In order to map over profileData, we must put it in a state. Now, in order to access the array, we will use userProfile
const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);
    
  return (
    <section className='profile-sec'>
      <div className='container'>
        <h2>User Profiles</h2>
        {userProfile.map((profile) => (
            <div className="profile" key={profile.id}>
                <img src={profile.img} alt="profile" />
                <div className="description">
                    <h4>Name: {profile.name}</h4>
                    <p>Job: {profile.job}</p>
                </div>
                <FaTrashAlt 
                    size={18}
                />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
