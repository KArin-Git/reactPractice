export default function TabButton({ children, onSelect }) {
  // onSelect => handleSelect()
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}
