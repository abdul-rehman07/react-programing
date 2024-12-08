import { useContext } from "react"

function display({ value }) {

    const theme = useContext(ThemeContext)

    return (


        <h3>my name is {name} </h3>
    )
}

export default display
