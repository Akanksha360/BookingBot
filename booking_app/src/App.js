import DialogflowChat from "./Components/ChatBot";
import BookingForm from "./Components/BookingForm";

function App() {
    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">Live Chat Ticket Booking</h1>
            <DialogflowChat />
            <BookingForm />
        </div>
    );
}

export default App;
