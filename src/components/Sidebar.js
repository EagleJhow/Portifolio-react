import SocialNetworks from './SocialNetworks';

import Avatar from '../img/2.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';


const SideBar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Jhonatan Lima" />
        <p className="title">Developer</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download Curriculo
            </a>
    </aside>;
}

export default SideBar