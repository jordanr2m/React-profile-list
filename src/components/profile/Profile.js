import { useState } from "react"
import "./Profile.css"
import { profileData } from './profile-data'
import { FaTrashAlt } from "react-icons/fa";

// In order to map over profileData, we must put it in a state. Now, in order to access the array, we will use userProfile
const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  const handleDelete = () => {
    userProfile.filter((profile) => {
        
    })
  }
    
  return (
    <section className='profile-sec'>
      <div className='container'>
        <h2 className="--text-light">User Profiles</h2>
        {userProfile.map((profile) => (
            <div className="profile --card --flex-between" key={profile.id}>
                <img src={profile.img} alt="profile" />
                <div className="description">
                    <h4 className="--text-light">Name: {profile.name}</h4>
                    <p className="--text-light">Job: {profile.job}</p>
                </div>
                <FaTrashAlt className="icon"
                    size={18}
                    // color={"white"}
                />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
