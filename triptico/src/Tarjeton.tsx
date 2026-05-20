import qrDocumentacion from "./assets/qr-documentacion.png";
import qrItchio from "./assets/qr-itchio.png";
import qrSidequest from "./assets/qrsidequest.png";

function QrCard({
  title,
  description,
  qrSrc,
  size = "small",
}: {
  title: string;
  description: string;
  qrSrc: string;
  size?: "small" | "large";
}) {
  const isLarge = size === "large";

  return (
    <section
      className={`rounded-2xl border border-[#9095DD]/30 bg-white/90 shadow-sm p-4 flex ${
        isLarge ? "flex-col items-center gap-3" : "flex-col items-center gap-2"
      }`}
    >
      <p
        className={`font-extrabold uppercase tracking-wide text-[#FF4C95] leading-tight text-center ${
          isLarge ? "text-[15px]" : "text-[13px]"
        }`}
      >
        {title}
      </p>
      <p className="text-[10.5px] font-semibold text-gray-500 leading-tight text-center">
        {description}
      </p>
      <div className="inline-flex rounded-2xl border-3 border-[#FF4C95] bg-white p-2 shadow-lg">
        <img
          src={qrSrc}
          alt={`QR de ${title} de HoloTutorXR`}
          className={`${isLarge ? "h-[2.95in] w-[2.95in]" : "h-[2.15in] w-[2.15in]"} object-contain`}
        />
      </div>
    </section>
  );
}

const QrSheet = () => (
  <div
    className="w-[5.5in] h-[9.25in] bg-gradient-to-br from-slate-50 via-[#9095DD]/8 to-[#768BD6]/8
               flex flex-col p-5 gap-4 shrink-0"
  >
    <div className="flex-1 flex flex-col gap-3 min-h-0">
      <QrCard
        title="Documentacion"
        description="Manual, arquitectura y validacion"
        qrSrc={qrDocumentacion}
        size="large"
      />

      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        <QrCard
          title="SideQuest"
          description="Publicacion oficial de la app"
          qrSrc={qrSidequest}
        />
        <QrCard
          title="Itch.io"
          description="Descarga y demo del proyecto"
          qrSrc={qrItchio}
        />
      </div>
    </div>

    <footer className="text-center pt-1">
      <p className="text-[10px] text-gray-400 tracking-wide">
        CETI · Plantel Colomos · HoloTutorXR · 2026
      </p>
    </footer>
  </div>
);

export default function Tarjeton() {
  return (
    <>
      <div className="no-print flex justify-center py-4 bg-gray-100">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF4C95] to-[#9095DD]
                     text-white text-sm font-semibold shadow hover:opacity-90 transition"
        >
          Abrir hoja
        </button>
      </div>

      <div
        className="print-page w-[5.5in] h-[9.25in] flex items-center justify-center bg-white shadow-2xl mx-auto"
        style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif" }}
      >
        <QrSheet />
      </div>
    </>
  );
}
