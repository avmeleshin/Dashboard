import {useState} from "react";

import Button from "../button/Button";

import './filterBlock.scss';

const filterData = [
    {
        filter: 'even',
        caption: 'Even rows of data',
        subcaption: 'Display rows 2,4,6 etc',
    },
    {
        filter: 'odd',
        caption: 'Odd rows of data',
        subcaption: 'Display rows 1,3,5 etc',
    },
    {
        filter: 'all',
        caption: 'All data',
        subcaption: 'Display all data',
    }
];

const FilterBlock = ({onFilterData}) => {
    const [filter, setFilter] = useState('all');

    const onSelectFilter = evt => {
        evt.preventDefault();
        const filter = evt.currentTarget.getAttribute('data-filter');
        setFilter(filter);
        onFilterData(filter);
    }

    const filterListItems = filterData.map((item, i) => {
        const activeClass = item.filter === filter ? 'is-active' : '';

        return (
            <li className="filter-list__item" key={i}>
                <a
                    href="/"
                    className={`filter ${activeClass}`}
                    data-filter={item.filter}
                    onClick={onSelectFilter}
                >
                    <span className="filter__caption">{item.caption}</span>
                    <span className="filter__subcaption">{item.subcaption}</span>
                </a>
            </li>
        )
    });

    return (
        <div className="filter-block">
            <Button link="/" label="Create new" clazz="_createNew" />
            
            <ul className="filter-list">
                {filterListItems}
            </ul>
        </div>
    )
}

export default FilterBlock;