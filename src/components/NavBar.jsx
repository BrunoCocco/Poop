function BottomThumbNav({ active, onChange }) {
  const items = [
    { key: "home", label: "Home", icon: "/img/home.png" },
    { key: "walks", label: "Paseos", icon: "/img/walks.png" },
    { key: "map", label: "Mapa", icon: "/img/map.png" },
    { key: "wallet", label: "Wallet", icon: "/img/wallet.png" },
    { key: "profile", label: "Perfil", icon: "/img/profile.png" },
  ];

  return (
    <div className="bg-light border-top sticky-bottom">
      <div className="container px-2">
        <div className="d-flex justify-content-between py-2">
          {items.map((it) => (
            <button
              key={it.key}
              type="button"
              onClick={() => onChange(it.key)}
              className={
                "btn flex-grow-1 mx-1 py-2 d-flex flex-column align-items-center " +
                (active === it.key ? "btn-primary" : "btn-outline-secondary")
              }
              style={{ minHeight: 56 }}
            >
              <img
                src={it.icon}
                alt={it.label}
                style={{ width: 22, height: 22, objectFit: "contain" }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <small className="mt-1">{it.label}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BottomThumbNav