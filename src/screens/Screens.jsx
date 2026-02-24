import Home from "./Home";
import Walks from "./Walks";
import Map from "./Map";
import Wallet from "./Wallet";
import Profile from "./Profile";

function Screens({ active, booking, setBooking, setActive }) {
  return (
    <div className="container py-3">
      {active === "home" && (
        <Home setBooking={setBooking} goToWalks={() => setActive("walks")} />
      )}

      {active === "walks" && <Walks booking={booking} />}

      {active === "map" && <Map />}
      {active === "wallet" && <Wallet />}
      {active === "profile" && <Profile />}
    </div>
  );
}
export default Screens