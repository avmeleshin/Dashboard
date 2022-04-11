import ButtonIcon from "../buttonIcon/ButtonIcon";
import DatePicker from "../datePicker/DatePicker";
import Table from "../table/Table";

import './content.scss';

const Content = ({data, onUpdateSearch, onChangeSortDirection}) => {
    return (
        <div className="content">
            <div className="content__header">
                <h2>Dashboard</h2>
                <DatePicker />
                <ButtonIcon type="print"/>
                <ButtonIcon type="download"/>
            </div>

            <div className="content__body">
                <Table
                    data={data}
                    onUpdateSearch={onUpdateSearch}
                    onChangeSortDirection={onChangeSortDirection}
                />
            </div>
        </div>
    )
}

export default Content;