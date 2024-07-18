import './index.css'

const Message = props => {
  const {name} = props
  return <h1 className="heading">{name}</h1>
}
export default Message
