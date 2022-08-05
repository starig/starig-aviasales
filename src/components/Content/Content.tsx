import React, {FC} from 'react';
import Ticket from "../Ticket/Ticket";
import styles from './Content.module.scss';
import {useDispatch, useSelector} from "react-redux";
import Filter from "../Filter/Filter";
import {clearFilter} from "../../redux/ticketSlice/ticketSlice";
import {RootState} from "../../redux/store";

const Content: FC = () => {
    const {tickets, filteredTickets} = useSelector((state: RootState) => state.tickets);
    const dispatch = useDispatch();
    const stops: number[] = [];
    // calculate amount of stops
    tickets.forEach(item => {
        !stops.includes(item.stops) && stops.push(item.stops)
    });
    // sort stops
    stops.sort((a, b) => a - b);
    return (
        <div className={styles.content}>
            <div className={styles.filter}>
                <h4>Количество пересадок</h4>
                <button className={styles.clearFilters} onClick={() => dispatch(clearFilter())}>
                    Сбросить фильтры
                </button>
                {
                    stops.map(item => <Filter key={item} value={item}/>)
                }
            </div>
            <div className={styles.tickets}>
                {
                    filteredTickets.map((ticket, id: number) => <Ticket key={id} {...ticket} />)
                }
            </div>
        </div>
    )
}

export default Content;