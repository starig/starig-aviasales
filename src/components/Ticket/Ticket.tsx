import React, {FC} from 'react';
import styles from './Ticket.module.scss';
import logoImg from './../../assets/ticketLogo.png';
import {ITicket} from "../../types";

const Ticket: FC<ITicket> = ({
                    origin,
                    origin_name,
                    destination,
                    destination_name,
                    departure_date,
                    departure_time,
                    arrival_date,
                    arrival_time,
                    stops,
                    price
                }) => {
    // correct form of 'пересадка' word
    let stopsWord: string = 'пересадок'
    if (stops === 1) {
        stopsWord = 'пересадка'
    } else if (stops > 1 && stops < 5) {
        stopsWord = 'пересадки'
    }
    return (
        <div className={styles.ticket}>
            <div className={styles.header}>
                <img src={logoImg} alt={'logo'} className={styles.logoImg}/>
                <button className={styles.buyButton}>Купить <br/>за {price} руб.</button>
            </div>
            <div className={styles.body}>
                <div className={styles.origin}>
                    <div className={styles.time}>{departure_time}</div>
                    <div className={styles.place}>{origin}, {origin_name}</div>
                    <div className={styles.date}>{departure_date}</div>
                </div>
                <div className={styles.stops}>
                    {stops + ' ' + stopsWord}
                </div>
                <div className={styles.destination}>
                    <div className={styles.time}>{arrival_time}</div>
                    <div className={styles.place}>{destination}, {destination_name}</div>
                    <div className={styles.date}>{arrival_date}</div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;