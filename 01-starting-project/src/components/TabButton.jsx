export default function TabButton({ children }) {
  function handleClick() {
    console.log('This is clicked')
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  )
}
