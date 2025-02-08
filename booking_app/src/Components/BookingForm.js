import { useState } from "react";
import axios from "axios";

function BookingForm() {
    const [category, setCategory] = useState("");
    const [selection, setSelection] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [tickets, setTickets] = useState(1);
    const [name, setName] = useState("");

    const handleBooking = () => {
        axios.post("https://bookingbot-uskg.onrender.com/api/bookings", {
            name, category, selection, date, time, tickets
        }).then((res) => alert(res.data.message));
    };

    return (
        <div>
            <input placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option>Select a Category</option>
                <option value="movies">Movies</option>
                <option value="events">Events</option>
            </select>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <button onClick={handleBooking}>Confirm Booking</button>
        </div>
    );
}

export default BookingForm;
