import { Navbar, Container, Nav, Button } from "react-bootstrap";

function BottomThumbNav({ active, onChange }) {
  const items = [
    { key: "home", label: "Home", icon: "/img/home.png" },
    { key: "walks", label: "Paseos", icon: "/img/walks.png" },
    { key: "map", label: "Mapa", icon: "/img/map.png" },
    { key: "wallet", label: "Wallet", icon: "/img/wallet.png" },
    { key: "profile", label: "Perfil", icon: "/img/profile.png" },
  ];

  return (
    <Navbar bg="light" className="border-top" style={{ position: "sticky", bottom: 0 }}>
      <Container className="px-2">
        <Nav className="w-100 d-flex justify-content-between">
          {items.map((it) => (
            <Button
              key={it.key}
              onClick={() => onChange(it.key)}
              variant={active === it.key ? "primary" : "outline-secondary"}
              className="flex-grow-1 mx-1 py-2 d-flex flex-column align-items-center"
              style={{ minHeight: 56 }}
            >
              <img src={it.icon} alt={it.label} style={{ width: 22, height: 22 }} />
              <small className="mt-1">{it.label}</small>
            </Button>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BottomThumbNav;