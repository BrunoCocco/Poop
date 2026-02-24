import { useMemo, useState } from "react";

function Home({ setBooking, goToWalks }) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const [hour, setHour] = useState(() => {
    const now = new Date();
    const h = now.getHours();
    return Math.min(21, Math.max(8, h));
  });

  const [minute, setMinute] = useState(() => {
    const m = new Date().getMinutes();
    return m < 30 ? 30 : 0;
  });

  const days = useMemo(() => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    return Array.from({ length: 21 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);

      const weekday = d
        .toLocaleDateString("es-ES", { weekday: "short" })
        .replace(".", "");

      return {
        key: d.toISOString().slice(0, 10),
        date: d,
        weekday,
        dayNumber: d.getDate(),
      };
    });
  }, []);

  const hours = useMemo(() => Array.from({ length: 14 }, (_, i) => 8 + i), []);
  const minutes = [0, 30];

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const pad2 = (n) => String(n).padStart(2, "0");

  // 1) arma un DateTime con la fecha seleccionada + hora/minuto seleccionados
  const selectedDateTime = useMemo(() => {
    const d = new Date(selectedDate);
    d.setHours(hour, minute, 0, 0);
    return d;
  }, [selectedDate, hour, minute]);

  // 2) cuando tocas "RESERVAR PASEO":
  //    - guarda el datetime en App (booking)
  //    - cambia a pantalla Walks
  const handleReserve = () => {
    setBooking({
      isoDateTime: selectedDateTime.toISOString(),
      hour,
      minute,
    });
    goToWalks();
  };

  return (
    <section className="py-3">
      <h1 className="h4 text-center mb-3">¿Preparado para un nuevo Paseo?</h1>

      {/* 21 días */}
      <div className="d-flex gap-2 justify-content-center flex-wrap my-3 mt-5">
        {days.map((d) => {
          const active = isSameDay(d.date, selectedDate);
          return (
            <button
              key={d.key}
              type="button"
              onClick={() => setSelectedDate(d.date)}
              className={
                "btn d-flex flex-column align-items-center justify-content-center " +
                (active ? "btn-primary" : "btn-outline-secondary")
              }
              style={{ width: 56, height: 56, borderRadius: 999, padding: 0 }}
            >
              <small className="text-uppercase" style={{ lineHeight: 1 }}>
                {d.weekday}
              </small>
              <strong style={{ lineHeight: 1 }}>{d.dayNumber}</strong>
            </button>
          );
        })}
      </div>

      {/* Selector hora */}
      <div className="d-flex justify-content-center my-3 mt-5">
        <div
          className="bg-light border rounded-4 px-3 py-2 shadow-sm"
          style={{ minWidth: 280 }}
        >
          <div className="d-flex align-items-center justify-content-between gap-2">
            <span className="text-muted small">Hora del paseo</span>

            <div className="d-flex align-items-center gap-2">
              <select
                className="form-select form-select-sm"
                value={hour}
                onChange={(e) => setHour(Number(e.target.value))}
                style={{ width: 90, borderRadius: 14 }}
              >
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {pad2(h)}
                  </option>
                ))}
              </select>

              <span className="fw-bold">:</span>

              <select
                className="form-select form-select-sm"
                value={minute}
                onChange={(e) => setMinute(Number(e.target.value))}
                style={{ width: 90, borderRadius: 14 }}
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {pad2(m)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-2 small text-muted">
            Disponible de <strong>08:00</strong> a <strong>21:00</strong> — saltos
            de <strong>30 min</strong>.
          </div>
        </div>
      </div>

      {/* Confirmación */}
      <div className="text-center mb-2 mt-5">
        <span className="text-muted">Seleccionado: </span>
        <strong>
          {selectedDateTime.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}{" "}
          {pad2(hour)}:{pad2(minute)}
        </strong>
      </div>

      {/* Botón RESERVAR (debajo de la confirmación) */}
      <div className="d-flex justify-content-center my-3">
        <button
          type="button"
          className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
          onClick={handleReserve}
        >
          RESERVAR PASEO
        </button>
      </div>

      <p className="text-center mb-0">Gracias por confiar en nosotros.</p>
    </section>
  );
}

export default Home;