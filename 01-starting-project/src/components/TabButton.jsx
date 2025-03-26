// Component composition
export default function TabButton({ children }) {
  return (
    <li>
      {/* props.children is somethign between component tag */}
      {/* <button>{props.children}</button> */}
      <button>{children}</button>
    </li>
  )
}
