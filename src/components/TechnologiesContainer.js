import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "type", name: "TypeScript", icon: <SiTypescript /> },
]

const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
            {technologies.map((tech) => (
                <div className='technologies-card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technologies-info'>
                        <h3>{tech.name}</h3>
                        <p>Informações das tecnologias</p>
                    </div>  
                </div>
            ))}

        </div>
    </section>

}

export default TechnologiesContainer