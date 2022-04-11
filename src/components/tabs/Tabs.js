import {useState} from "react";
import ContentAnalyze from "../contentAnalize/ContentAnalize";
import './tabs.scss';

const tabs = [
    { id: 0,
        name: 'Analyze' },
    { id: 1,
        name: 'My campaigns' },
    { id: 2,
        name: 'Configure' }
];

const Tabs = () => {
    const [active, setActive] = useState(0);

    const onChangeTab = (evt) => {
        evt.preventDefault();
        const targetId = +evt.target.getAttribute('data-target');
        setActive(targetId);
    }

    const tabItems = tabs.map((item, i) => {
        const classActive = (active === i) ? 'is-active' : '';
        return (
            <li className={`tabs-list__item ${classActive}`} key={item.id}>
                <a href="/" onClick={onChangeTab} className="tab-name" data-target={item.id}>{item.name}</a>
            </li>
        )
    })

    let tabContentItems = tabs.map((item, i) => {
        const classActive = (active === i) ? 'is-active' : '';
        return (
            <div className={`tab-content-item ${classActive}`} key={item.id}>
                { i === 0 ? <ContentAnalyze/> : <p style={{"textAlign": "center", "fontWeight": "500"}}>Tab {item.id}</p> }
            </div>
        )
    });

    return (
        <div className='tabs'>
            <div className="tabs__header">
                <ul className="tabs-list">
                    {tabItems}
                </ul>
            </div>
            <div className="tabs__body">
                {tabContentItems}
            </div>
        </div>
    )
}

export default Tabs;