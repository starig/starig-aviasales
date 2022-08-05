import React, {FC, useEffect, useState} from 'react';
import styles from './Filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {filterTickets, setStopValue} from "../../redux/ticketSlice/ticketSlice";
import {RootState} from "../../redux/store";

interface IFilter {
    value: number;
}

const Filter: FC<IFilter> = ({value}) => {
    const {stopsValues} = useSelector((state: RootState) => state.tickets);
    const [checkboxStatus, setCheckboxStatus] = useState<boolean>(stopsValues.includes(value));
    useEffect(() => {
        setCheckboxStatus(stopsValues.includes(value));
        dispatch(filterTickets());
    }, [stopsValues]);

    const dispatch = useDispatch();
    //correct form of 'пересадка' word
    let stopsWord: string = 'пересадок'
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
            <input type="checkbox" checked={checkboxStatus} readOnly className={styles.checkbox}/>
            <div>
                {value + ' ' + stopsWord}
            </div>
        </div>
    )
}

export default Filter;