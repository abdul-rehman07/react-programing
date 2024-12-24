
export default function CoreConcept({ title, image, description }) {
    return (
        <li>
            <img src={image} alt="React" />
            <p>{title}</p>
            <p>{description}</p>
        </li>)

}
