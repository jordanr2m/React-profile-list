import { useState } from "react"
import "./Profile.css"
import { profileData } from './profile-data'
import { FaTrashAlt } from "react-icons/fa";

// In order to map over profileData, we must put it in a state. Now, in order to access the array, we will use userProfile
const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  const removeProfile = (id) => {
    console.log(id); // shows id that was clicked

    // return all profiles that do not match the id that was passed in
    const newProfileList = userProfile.filter((profile) => profile.id !== id);

    setUserProfile(newProfileList);
  }
    
  return (
    <section className='profile-sec --flex-center'>
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
                    // Must write this as an arrow function, or else it will run on page load, not when clicked
                    onClick={() => removeProfile(profile.id)}
                />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
