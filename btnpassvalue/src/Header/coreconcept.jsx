
import { CORE_CONCEPTS } from '../Database.js'
import CoreConcept from "../core-cocept.jsx";
import React from 'react'




function Coreconcept() {
    return (
        <section>
            <h2>Core Concept</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptsitems) => (
                    <CoreConcept key={conceptsitems.title} {...conceptsitems} />
                ))}
            </ul>
        </section>
    )
}

export default Coreconcept;
