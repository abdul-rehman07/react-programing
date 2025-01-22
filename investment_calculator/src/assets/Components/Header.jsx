import logo from '../image.png';
function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="logo show the money bag" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header
