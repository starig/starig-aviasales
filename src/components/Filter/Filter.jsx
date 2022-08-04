import React, {useEffect, useState} from 'react';
import styles from './Filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {filterTickets, setStopValue} from "../../redux/ticketSlice/ticketSlice";

const Filter = ({value}) => {
    const {stopsValues} = useSelector(state => state.tickets);
    const [checkboxStatus, setCheckboxStatus] = useState(stopsValues.includes(value));
    useEffect(() => {
        setCheckboxStatus(stopsValues.includes(value));
        dispatch(filterTickets())
    }, [stopsValues]);

    const dispatch = useDispatch();
    let stopsWord = 'пересадок'
    if (value === 1) {
        stopsWord = 'пересадка'
    } else if (value > 1 && value < 5) {
        stopsWord = 'пересадки'
    }
    return (
        <div className={styles.filter} onClick={() => {
            setCheckboxStatus(!checkboxStatus);
            dispatch(setStopValue(value));
        }}>
            <input type="checkbox" checked={checkboxStatus} readOnly/>
            <div>
                {value + ' ' + stopsWord}
            </div>
        </div>
    )
}

export default Filter;