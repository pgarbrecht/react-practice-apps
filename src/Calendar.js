import {React, useState} from 'react';

export const Calendar = () => {
    let today = new Date();

    const [date, setDate] = useState({
        month: String(today.getMonth() + 1).padStart(2, '0'),
        day: String(today.getDate()).padStart(2, '0'),
        year: today.getFullYear()
    })

    return(
    <div>
    <h2>Calendar App</h2>
    <p>Today's date is {date.month} {date.day} {date.year}</p>
    </div>
    )
}
