import { Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56982291920";
const MAIL_URL = "mailto:contacto@molespa.cl";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),0_14px_34px_hsl(142_70%_26%/0.28)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:brightness-110"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M16.04 4C9.43 4 4.06 9.37 4.06 15.98c0 2.11.55 4.17 1.6 5.98L4 28l6.19-1.63a11.92 11.92 0 0 0 5.85 1.49h.01c6.61 0 11.98-5.37 11.98-11.98C28.03 9.37 22.65 4 16.04 4Zm0 21.84h-.01c-1.76 0-3.48-.47-4.99-1.36l-.36-.21-3.67.96.98-3.58-.23-.37a9.9 9.9 0 0 1-1.51-5.3c0-5.4 4.39-9.79 9.8-9.79 2.61 0 5.07 1.02 6.92 2.87a9.73 9.73 0 0 1 2.87 6.92c0 5.41-4.4 9.86-9.8 9.86Zm5.37-7.35c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.08c.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
      <a
        href={MAIL_URL}
        aria-label="Enviar correo"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-hero-dark/20 bg-hero-dark text-hero-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.18),0_14px_34px_hsl(215_35%_8%/0.32)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-hero-dark/88 hover:text-accent"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}
