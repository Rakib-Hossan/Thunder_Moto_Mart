import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth"
import auth from "../firebase/firebase.config"
import { useState } from "react";

export default function EditProfile() {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [user] = useAuthState(auth);
    const [displayName, setDisplayName] = useState(user.displayName || '');
    const [email, setEmail] = useState(user.email || '');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState(user.phoneNumber || '');

    const handleUpdateProfile = () => {
        const promises = [];
    
        if (displayName !== user.displayName) {
          promises.push(user.updateProfile({ displayName }));
        }
        if (email !== user.email) {
          promises.push(user.updateEmail(email));
        }
        if (password && newPassword) {
          promises.push(user.updatePassword(newPassword));
        }
        if (phone !== user.phoneNumber) {
            promises.push(user.updatePhoneNumber(phone));
            
        }

        Promise.all(promises)
      .then(() => {
        // All updates succeeded
        alert('All updates succeeded')
      })
      .catch((error) => {
        // Handle errors
      });
  };
  return (
    <div className="container mx-auto">
      <h2>User Profile</h2>
      <div className="md:w-[60%] mx-auto">
      <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label>Name:</label>
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
          </div>

          <div className="mb-4">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
          </div>

          <div className="mb-4">
            <label>New Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}className="w-full py-3 px-4 border-2 border-gray-500"/>
          </div>

          <div className="mb-4">
            <label>Confirm New Password:</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}className="w-full py-3 px-4 border-2 border-gray-500"/>
          </div>

          <div className="mb-4">
              <label>Phone Number:</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}className="w-full py-3 px-4 border-2 border-gray-500"/>
          </div>

        <div className="mb-4">
          <input type="Submit" value={'Update Profile'} className="w-full py-3 px-4 border bg-success text-white font-semibold"/>
        </div>
      </form>
      </div>
    </div>
  )
}
