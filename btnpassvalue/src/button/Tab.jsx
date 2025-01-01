export default function Tab({ children, button, Buttonscontainer = 'menu' }) {
    // const Buttonscontainer = buttonscontainer;
    return (

        <>
            <Buttonscontainer>
                {button}
            </Buttonscontainer>
            {children}
        </>
    )

}