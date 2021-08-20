import React, { useState } from "react";

interface SortList {
    name: string,
    value: string,
    isnumeric: boolean
}

interface Languages {
    lang: string[]
}


const viewOptionsItem = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '4rem'
}
const Select = (props: Languages) => {
    // console.log(props);

    const [defaultOptions, setDefaultOptions] = useState('');
    const [filterData, setFilterData] = useState('');
    const [toggleData, setToggleData] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setDefaultOptions(value)
    }
    const sortList = [
        { name: 'Activity', value: 'score', isnumeric: true },
        { name: 'Name', value: 'name', isnumeric: false },
        { name: 'Organization', value: 'full_name', isnumeric: false },
        { name: 'Stars', value: 'stargazers_count', isnumeric: true },
        { name: 'Watchers', value: 'watchers_count', isnumeric: true },
        { name: 'Issues', value: 'open_issues_count', isnumeric: true },
        { name: 'Forks', value: 'forks_count', isnumeric: true }
    ]

    const filterList = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFilterData(value)
    }

    const handleToggle = () => {
        setToggleData(!toggleData)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="dropdown" id="language">Filter by Languages:</label>
                            <select
                                id="langdropdown"
                                value={defaultOptions}
                                onChange={handleChange}
                                className="form-select mb-3"
                            >
                                {
                                    props.lang.map((data: string, i: number) => (
                                        <option
                                            key={i}
                                            value={data}
                                        >
                                            {data}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="dropdown" id="sortBy">Sort by:</label>
                            <select
                                id="sortbydropdown"
                                value={defaultOptions}
                                onChange={handleChange}
                                className="form-select mb-3"
                            >
                                {
                                    sortList.map((data: SortList, i: number) => (
                                        <option
                                            key={i}
                                            value={data.name}
                                        >
                                            {data.name}
                                        </option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group mt-4">
                            <label className="form-control-placeholder" htmlFor="inputText">
                                <input type="text" id="inputText" className="form-control" onChange={filterList} value={filterData} />
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className={`form-check form-switch text-center mt-4`}>
                            <i
                                className={`fa fa-th`}
                                id="cardView"
                                style={
                                    {
                                        color: !toggleData ? '#2196F3' : '#444444',
                                        fontSize: '1.2rem',
                                        display: 'inline-block',
                                        verticalAlign: 'middle'
                                    }
                                }
                            />
                            <div style={viewOptionsItem}>
                                <input className="form-check-input" type="checkbox" id="toggle" onClick={handleToggle} defaultChecked={toggleData} aria-labelledby="lbl-main-menu-mob" />

                                <label id="lbl-main-menu-mob"> </label>
                                {/* <input className="form-check-input" type="checkbox" id="toggle" onClick={handleToggle} defaultChecked={toggleData} /> */}
                                {/* <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
                            </div>
                            <i className="fa fa-th-list" style={{ color: toggleData ? '#2196F3' : '#444444', display: 'inline-block', verticalAlign: 'middle', marginLeft: '1rem', fontSize: '1.2rem' }} id="listView"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Select;