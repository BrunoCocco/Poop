function Walks({ booking }) {
  return (
    <section>
      <h1 className="h4">Paseos</h1>

      {!booking ? (
        <p className="text-muted">Todavía no reservaste ningún paseo.</p>
      ) : (
        <div className="border rounded-4 p-3 bg-light shadow-sm">
          <p className="mb-1 text-muted">Reserva confirmada:</p>
          <strong>
            {new Date(booking.isoDateTime).toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}{" "}
            {String(booking.hour).padStart(2, "0")}:
            {String(booking.minute).padStart(2, "0")}
          </strong>
        </div>
      )}
    </section>
  );
}
export default Walks