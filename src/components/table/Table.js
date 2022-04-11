import {useState} from "react";

import './table.scss';

const Table = ({data, onUpdateSearch, onChangeSortDirection}) => {
    const [sortDirection, setSortDirection] = useState('');
    const [value, setValue] = useState('');

    const onChangeSort = (evt) => {
        evt.preventDefault();
        const sort = evt.currentTarget.getAttribute('data-sort');
        let direction = sortDirection;

        if (sort === 'false') {
            evt.currentTarget.setAttribute('data-sort', 'true');
            direction = 'asc';
        } else {
            if (direction === 'asc') {
                direction ='desc';
            } else if (direction === 'desc') {
                direction = 'asc';
            }
        }
        setSortDirection(direction);
        onChangeSortDirection(direction);
    }

    const onChangeValue = (evt) => {
        const inputValue = evt.target.value;
        setValue(inputValue);
        onUpdateSearch(inputValue);
    }
    const tableBody = data.map((item, i) => {
        return (
            <div className="table__row _body" key={i}>
                <div className="table__col _first">{item.data}</div>
                <div className="table__col">{item.summary1}</div>
                <div className="table__col">{item.summary2}</div>
                <div className="table__col">{item.summary3}</div>
                <div className="table__col">{item.summary4}</div>
                <div className="table__col">{item.summary5}</div>
            </div>
        )
    });

    return (
        <div className="table">

            <div className="table__header">
                <div className="table__row">
                    <div
                        className="table__col _first"
                        data-sort="false"
                        data-sort-direction={sortDirection}
                        role="button"
                        onClick={onChangeSort}
                    >Data</div>
                    <div className="table__col">Summary1</div>
                    <div className="table__col">Summary2</div>
                    <div className="table__col">Summary3</div>
                    <div className="table__col">Summary4</div>
                    <div className="table__col">Summary5</div>
                </div>
            </div>

            <div className="table__body">
                {tableBody}
            </div>

            <div className="table__footer">
                <div className="table__row _footer">
                    <div className="table__col _first">

                        <form className="formSearch">
                            <input
                                className="search-input"
                                name="Data"
                                type="text"
                                placeholder="Search..."
                                value={value}
                                onChange={onChangeValue}
                            />
                        </form>

                    </div>
                    <div className="table__col">
                        {/*<FormSearch name="Summary1" placeholder="" />*/}
                    </div>
                    <div className="table__col">
                        {/*<FormSearch name="Summary2" placeholder="" />*/}
                    </div>
                    <div className="table__col">
                        {/*<FormSearch name="Summary3" placeholder="" />*/}
                    </div>
                    <div className="table__col">
                        {/*<FormSearch name="Summary4" placeholder="" />*/}
                    </div>
                    <div className="table__col">
                        {/*<FormSearch name="Summary5" placeholder="" />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;