export default function Tabbtn({ children, onSelect }) {


    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}