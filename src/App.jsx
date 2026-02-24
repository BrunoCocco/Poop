import { useState } from "react";
import BottomThumbNav from "./components/NavBar";
import Screens from "./screens/Screens";

function App() {
  // 1) controla qué pantalla se ve
  const [active, setActive] = useState("home");

  // 2) guarda la reserva confirmada desde Home
  // booking: { isoDateTime, hour, minute }
  const [booking, setBooking] = useState(null);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <Screens
          active={active}
          booking={booking}
          setBooking={setBooking}
          setActive={setActive}
        />
      </main>

      <BottomThumbNav active={active} onChange={setActive} />
    </div>
  );
}

export default App;