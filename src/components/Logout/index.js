import './index.css'

const LogOut = props => {
  const {logOut} = props
  return (
    <button type="button" className="button" onClick={logOut}>
      Logout
    </button>
  )
}
export default LogOut
