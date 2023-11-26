import { useParams } from "react-router-dom"

const Profile = () => {
    const {slug} = useParams();
  return (
    <div>Profile page - {slug}</div>
  )
}

export default Profile