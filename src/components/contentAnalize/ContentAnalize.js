import {useState} from "react";

import FilterBlock from "../filterBlock/FilterBlock";
import Content from "../content/Content";

import './contentAnalyze.scss';

const tableInitialData = [
    {
        data: 'Data1',
        summary1: 186,
        summary2: 186,
        summary3: 92,
        summary4: 8,
        summary5: 1,
    },
    {
        data: 'Data2',
        summary1: 95,
        summary2: 95,
        summary3: 31,
        summary4: 11,
        summary5: 0,
    },
    {
        data: 'Data3',
        summary1: 329,
        summary2: 329,
        summary3: 256,
        summary4: 32,
        summary5: 4,
    },
    {
        data: 'Data4',
        summary1: 804,
        summary2: 804,
        summary3: 697,
        summary4: 40,
        summary5: 22,
    },
    {
        data: 'First Data',
        summary1: 304,
        summary2: 304,
        summary3: 193,
        summary4: 49,
        summary5: 2,
    },
    {
        data: 'Second Data',
        summary1: 751,
        summary2: 759,
        summary3: 541,
        summary4: 25,
        summary5: 11,
    },
    {
        data: 'Third Data',
        summary1: 147,
        summary2: 741,
        summary3: 658,
        summary4: 58,
        summary5: 19,
    },
    {
        data: 'Fourth Data',
        summary1: 444,
        summary2: 445,
        summary3: 39,
        summary4: 297,
        summary5: 8,
    },
    {
        data: 'Fifth Data',
        summary1: 986,
        summary2: 974,
        summary3: 257,
        summary4: 27,
        summary5: 99,
    },
    {
        data: 'first small Data',
        summary1: 304,
        summary2: 304,
        summary3: 193,
        summary4: 49,
        summary5: 2,
    },
    {
        data: 'second small Data',
        summary1: 751,
        summary2: 759,
        summary3: 541,
        summary4: 25,
        summary5: 11,
    },
];

const ContentAnalyze = () => {
    // const [data, setData] = useState(tableInitialData);
    const [searchStr, setSearchStr] = useState('');
    const [sortDirection, setSortDirection] = useState('');
    const [filter, setFilter] = useState('all');

    // Поиск по столбцу Data
    const searchData = (items, str) => {
        if (str.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.data.indexOf(str) > -1;
        });
    }

    const onUpdateSearch = (str) => {
        setSearchStr(str);
    }

    // Сортировака по столбцу Data
    const sortStr = (str1, str2) => {
        const val1 = str1.data.toLowerCase();
        const val2 = str2.data.toLowerCase();
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }

    const sortData = (items, direction) => {
        // setFilter('all');
        switch (direction) {
            case 'asc':
                return items.sort(sortStr);
            case 'desc':
                return items.sort(sortStr).reverse();
            default:
                return items;
        }
    }

    const onChangeSortDirection = (direction) => {
        setSortDirection(direction);
    }

    // Фильтрация по полю Data
    const filterList = (items, filter) => {
        switch (filter) {
            case 'odd':
                return items.filter((item, i) => (i % 2 === 0))
            case 'even':
                return items.filter((item, i) => ((i + 1) % 2 === 0))
            default:
                return items
        }
    }

    const onFilterData = (filter) => {
        setFilter(filter);
    }

    let visibleData = sortData(tableInitialData, sortDirection);
    visibleData = searchData(visibleData, searchStr);
    visibleData = filterList(visibleData, filter);

    return (
        <div className="block-with-filters">
            <FilterBlock onFilterData={onFilterData} />
            <Content
                data={visibleData}
                onUpdateSearch={onUpdateSearch}
                onChangeSortDirection={onChangeSortDirection}
            />
        </div>
    )
}

export default ContentAnalyze;