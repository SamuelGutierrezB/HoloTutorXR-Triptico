import qrDocumentacion from "./assets/qr-documentacion.png";
import qrItchio from "./assets/qr-itchio.png";
import qrSidequest from "./assets/qrsidequest.png";
import {
  Glasses,
  Bot,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Hand,
  MessageSquare,
  DollarSign,
  CheckCircle2,
  Code2,
  Layers,
  Mic,
  Store,
  FlaskConical,
  Brain,
  Atom,
  Wrench,
} from "lucide-react";

// ─── QrCard y QrSheet ──────────────────────────────────────────────
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
    className="w-[5.5in] h-[9.25in] bg-gradient-to-br from-slate-50 via-[#9095DD]/8 to-[#768BD6]/8 flex flex-col p-5 gap-4 shrink-0"
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
  </div>
);

// ─── Helpers y Tarjeta Informativa ─────────────────────────────────
import {
  Glasses,
  Bot,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Hand,
  MessageSquare,
  DollarSign,
  CheckCircle2,
  Code2,
  Layers,
  Mic,
  Store,
  FlaskConical,
  Brain,
  Atom,
  Wrench,
} from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────────────

const Divider = () => <div className="my-1.5 border-t border-[#9095DD]/30" />;

interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent?: string;
}

const Card = ({
  icon,
  title,
  children,
  accent = "from-[#FF4C95] to-[#9095DD]",
}: CardProps) => (
  <div className="rounded-xl border border-[#9095DD]/25 bg-white shadow-sm p-3 flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <div
        className={`bg-gradient-to-br ${accent} rounded-lg p-1.5 text-white shrink-0`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-[11.5px] uppercase tracking-wide text-gray-700 leading-tight">
        {title}
      </h3>
    </div>
    <Divider />
    <div className="text-[11.5px] text-gray-600 leading-snug space-y-1">
      {children}
    </div>
  </div>
);

const Bullet = ({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <p className="flex items-start gap-1">
    <span className="mt-[2px] text-[#FF4C95] shrink-0">{icon ?? "•"}</span>
    <span>{children}</span>
  </p>
);

// ─── Cara Trasera ────────────────────────────────────────────────────────────

const CaraTrasera = () => (
  <div
    className="w-[5.5in] h-[9.2in] bg-gradient-to-br from-slate-50 via-[#9095DD]/8 to-[#768BD6]/8
               flex flex-col p-5 gap-3 shrink-0"
  >
    {/* Header trasero */}
    <div className="text-center mb-1">
      <span
        className="inline-block bg-gradient-to-r from-[#FF4C95] to-[#9095DD] text-white
                   text-[10.5px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow"
      >
        Detalles Técnicos
      </span>
    </div>

    {/* Grid 2×2 */}
    <div className="grid grid-cols-2 gap-3 flex-1">
      {/* 1. Arquitectura y Lógica */}
      <Card
        icon={<Code2 size={14} />}
        title="Arquitectura y Lógica"
        accent="from-[#FF4C95] to-[#9095DD]"
      >
        <Bullet icon={<Cpu size={10} />}>
          <span>
            <strong>Motor:</strong> Godot Engine 4.3 (OpenXR). Arquitectura en 3
            capas: <em>Presentación XR</em>, <em>Lógica de aplicación</em> y{" "}
            <em>Servicios externos</em>.
          </span>
        </Bullet>
        <Bullet icon={<Layers size={10} />}>
          <span>
            <strong>Sistemas Core:</strong> <code>game_mode_manager</code> para
            control de estados. <code>lesson_registry</code> modular escalable a
            mas lecciones de diferentes asignaturas (5 lecciones de química
            actualmente operativas).
          </span>
        </Bullet>
        <Bullet icon={<Glasses size={10} />}>
          <span>
            <strong>UI 3D:</strong> Paneles flotantes renderizados en espacio
            mediante <em>SubViewport</em> y <em>ObjectMenuUI</em>.
          </span>
        </Bullet>
        <Bullet icon={<Atom size={10} />}>
          <span>
            <strong>Modo Libre:</strong> Explora tabla periódica interactiva y
            visualiza átomos de los elementos en <strong>3D</strong>.
          </span>
        </Bullet>
      </Card>

      {/* 2. Interacción y Tutor IA */}
      <Card
        icon={<Brain size={14} />}
        title="Interacción y Tutor IA"
        accent="from-[#9095DD] to-[#768BD6]"
      >
        <Bullet icon={<Hand size={10} />}>
          <span>
            <strong>Interacción Física:</strong> Hand Tracking (gestos pinza y
            palma abierta), raycasting y <em>Laser Pull</em>.
          </span>
        </Bullet>
        <Bullet icon={<Glasses size={10} />}>
          <span>
            <strong>Menú gestual:</strong> Apertura del menú principal con
            gestos naturales para navegar opciones sin controles externos.
          </span>
        </Bullet>
        <Bullet icon={<Mic size={10} />}>
          <span>
            <strong>Pipeline de Voz:</strong> Whisper STT, GPT-4o con contexto
            de lección y TTS.
          </span>
        </Bullet>
        <Bullet icon={<MessageSquare size={10} />}>
          <span>
            <strong>Consulta al tutor:</strong> El alumno puede preguntar por
            voz o con atajos gestuales durante cada paso del experimento.
          </span>
        </Bullet>
        <Bullet icon={<Wrench size={10} />}>
          <span>
            <strong>Modo Libre:</strong> Permite hablar con el tutor y utilizar
            instrumentos de las lecciones fuera del flujo guiado.
          </span>
        </Bullet>
        <Bullet icon={<Bot size={10} />}>
          <span>
            <strong>Avatar</strong> <em>low-poly</em> (15 000 polígonos),
            Billboard mode y sincronía labial dinámica (<em>blendshapes</em>).
          </span>
        </Bullet>
      </Card>

      {/* 3. Modelo de Negocio */}
      <Card
        icon={<Store size={14} />}
        title="Modelo de Negocio"
        accent="from-[#768BD6] to-[#9095DD]"
      >
        <Bullet icon={<DollarSign size={10} />}>
          <span>
            <strong>B2C:</strong> Distribución en SideQuest e Itch.io a ~
            <strong>$10 USD</strong>.
          </span>
        </Bullet>
        <Bullet icon={<TrendingUp size={10} />}>
          <span>
            <strong>B2B:</strong> Licencias para instituciones educativas;
            elimina costos de reactivos, mantenimiento y equipamiento de
            laboratorios físicos. Precio sugerido: <strong>$99 USD/año </strong>
            por laboratorio (hasta 40 alumnos).
          </span>
        </Bullet>
        <Bullet icon={<MessageSquare size={10} />}>
          <span>
            <strong>Validación:</strong> El <strong>60 %</strong> de usuarios
            potenciales aprueba el modelo de pago por la plataforma.
          </span>
        </Bullet>
      </Card>

      {/* 4. Calidad y Validación */}
      <Card
        icon={<ShieldCheck size={14} />}
        title="Calidad y Validación"
        accent="from-[#FF4C95] to-[#768BD6]"
      >
        <Bullet icon={<Glasses size={10} />}>
          <span>
            <strong>Rendimiento:</strong> 72 fps nativos estables en Meta Quest
            3 autónomo, crítico para evitar cinetosis.
          </span>
        </Bullet>
        <Bullet icon={<CheckCircle2 size={10} />}>
          <span>
            <strong>100 % de aprobación</strong> con{" "}
            <strong>76 casos de prueba</strong> (UT unitarias, integración
            física VR, flujo IT-FLOW y regresión visual).
          </span>
        </Bullet>
        <Bullet icon={<FlaskConical size={10} />}>
          <span>
            <strong>5 prácticas</strong> validadas paso a paso: pipeta
            volumétrica, balanza analítica, filtración y más.
          </span>
        </Bullet>
      </Card>
    </div>

    {/* Footer trasero */}
    <div className="text-center mt-1">
      <p className="text-[10.5px] text-gray-400 tracking-wide">
        CETI · Centro de Enseñanza Técnica Industrial · Plantel Colomos ·
        Ingeniería en Desarrollo de Software · 2026
      </p>
    </div>
  </div>
);

// ─── Cara Frontal ────────────────────────────────────────────────────────────

const CaraFrontal = () => (
  <div
    className="w-[5.5in] h-[9.2in] bg-white border-l border-[#9095DD]/25
               flex flex-col items-center px-6 py-5 shrink-0 relative overflow-hidden"
  >
    {/* Decoración de fondo */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4C95]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#768BD6]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

    {/* Logo */}
    <div className="z-10 mb-2">
      <img
        src="/logo.png"
        alt="HoloTutorXR Logo"
        className="h-20 w-auto object-contain"
      />
    </div>

    {/* Nombre técnico */}
    <p className="z-10 text-center text-[11.5px] font-bold text-gray-700 uppercase tracking-wide leading-tight mb-3 px-2">
      Aprendizaje Inmersivo con IA en Realidad Extendida
    </p>

    {/* Avatar */}
    <div className="z-10 flex-1 flex items-center justify-center my-1">
      <img
        src="/tutor.png"
        alt="Tutor Avatar"
        className="h-[2.8in] w-auto object-contain drop-shadow-lg"
      />
    </div>

    {/* Problema */}
    <div className="z-10 w-full mb-3">
      <div className="flex items-center gap-1.5 mb-1">
        <AlertTriangle size={13} className="text-amber-500 shrink-0" />
        <h4 className="text-[11.5px] font-bold text-gray-700 uppercase tracking-wide">
          El Problema
        </h4>
      </div>
      <div
        className="rounded-xl border border-amber-200 bg-amber-50/60 p-2.5 text-[11.5px]
                   text-gray-600 leading-snug"
      >
        La enseñanza de ciencias experimentales enfrenta barreras por{" "}
        <strong>
          horarios de laboratorio, costos de reactivos y riesgos físicos
        </strong>
        . Los alumnos{" "}
        <strong>interactúan muy poco con instrumentos de precisión</strong>.
      </div>
    </div>

    {/* Solución */}
    <div className="z-10 w-full mb-4">
      <div className="flex items-center gap-1.5 mb-1">
        <Lightbulb size={13} className="text-[#FF4C95] shrink-0" />
        <h4 className="text-[11.5px] font-bold text-gray-700 uppercase tracking-wide">
          La Solución
        </h4>
      </div>
      <div
        className="rounded-xl border border-[#9095DD]/30 bg-gradient-to-r from-[#FF4C95]/5 to-[#768BD6]/5
                   p-2.5 text-[11.5px] text-gray-600 leading-snug"
      >
        <strong>HoloTutorXR</strong> simula procedimientos guiados, seguros y
        repetibles, basados en el <strong>aprendizaje experiencial </strong> y
        el <strong>constructivismo</strong>, reduciendo la carga cognitiva.
      </div>
    </div>

    {/* Autores */}
    <div className="z-10 w-full border-t border-[#9095DD]/25 pt-3 text-center">
      <p className="text-[10.5px] text-[#FF4C95] font-semibold uppercase tracking-widest mb-1">
        Grupo 8P
      </p>
      <p className="text-[11.5px] font-bold text-gray-700">
        Daniel Osmar Garcia Cataño
      </p>
      <p className="text-[10.5px] text-gray-400 mb-0.5">20310363</p>
      <p className="text-[11.5px] font-bold text-gray-700">
        Samuel Gutierrez Barona
      </p>
      <p className="text-[10.5px] text-gray-400 mb-0.5">22310388</p>
      <p className="text-[11.5px] font-bold text-gray-700">
        Yahir Armando Mendoza Rios
      </p>
      <p className="text-[10.5px] text-gray-400">22310371</p>
    </div>
  </div>
);

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Tarjeton() {
  return (
    <>
      {/* Botón de impresión – se oculta al imprimir */}
      <div className="no-print flex justify-center py-4 bg-gray-100">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF4C95] to-[#9095DD] text-white text-sm font-semibold shadow hover:opacity-90 transition"
        >
          Imprimir Tarjetón
        </button>
      </div>

      {/* Hoja Carta horizontal: Tarjeta informativa */}
      <div
        className="print-page w-[11in] h-[9.2in] flex bg-white shadow-2xl mx-auto mb-8"
        style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif" }}
      >
        <CaraTrasera />
        <CaraFrontal />
      </div>

      {/* Hoja QR: debajo, en la misma vista */}
      <div
        className="print-page w-[5.5in] h-[9.25in] flex bg-white shadow-2xl mx-auto"
        style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif" }}
      >
        <QrSheet />
      </div>
    </>
  );
}
