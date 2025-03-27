export default function TabButton({ children, onSelect }) {
  // onSelect => handleSelect()
  console.log('TABBUTTON COMPONENT EXE') // 4 times
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}
