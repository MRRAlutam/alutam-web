export default function AlutamLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-alutam.jpg" alt="ALUTAM" className="h-10 w-auto" />
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">ALUTAM</div>
                <div className="text-sm text-slate-500">Flujo inteligente de materiales</div>
              </div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#inicio" className="hover:text-slate-950">Inicio</a>
            <a href="#nosotros" className="hover:text-slate-950">Nosotros</a>
            <a href="#productos" className="hover:text-slate-950">Productos</a>
            <a href="#ventajas" className="hover:text-slate-950">Ventajas</a>
            <a href="#contacto" className="hover:text-slate-950">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Comercialización de soluciones en aluminio
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Soluciones en tapas y materiales para la industria alimentaria
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              En ALUTAM conectamos a nuestros clientes con soluciones eficientes en aluminio y materiales de empaque, con enfoque comercial, atención personalizada y acompañamiento técnico.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                Solicitar cotización
              </a>
              <a
                href="#productos"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Ver productos
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">Tapas de aluminio</div>
                  <p className="mt-2 text-sm text-slate-600">Distintos diámetros y aplicaciones para alimentos y lácteos.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">Láminas y materiales</div>
                  <p className="mt-2 text-sm text-slate-600">Opciones versátiles para procesos industriales y comerciales.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">Atención comercial</div>
                  <p className="mt-2 text-sm text-slate-600">Respuesta ágil, seguimiento cercano y orientación en cada etapa.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">Enfoque B2B</div>
                  <p className="mt-2 text-sm text-slate-600">Pensado para empresas que buscan continuidad, imagen y eficiencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Quiénes somos</h2>
            <p className="mt-5 leading-8 text-slate-600">
              ALUTAM es una empresa enfocada en la comercialización de soluciones en aluminio y materiales asociados para distintas industrias, especialmente alimentos y packaging. Nuestro objetivo es entregar un servicio confiable, cercano y orientado a resultados.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Trabajamos con una visión comercial moderna: detectar necesidades, proponer alternativas y acompañar a cada cliente en la búsqueda de la mejor solución para su operación.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-xl font-semibold">Propuesta de valor</h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <li>• Atención personalizada y rápida.</li>
              <li>• Soluciones pensadas para requerimientos reales de la industria.</li>
              <li>• Enfoque en continuidad comercial y buena presentación del producto.</li>
              <li>• Relación cercana con clientes que buscan crecer y diferenciarse.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="productos" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Productos y soluciones</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Soluciones comerciales en aluminio y materiales para empresas que buscan cierres confiables, presentación premium y continuidad de suministro.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Tapas de aluminio',
                text: 'Opciones para alimentos, lácteos y otros formatos que requieren sellado seguro, buena presentación y compatibilidad industrial.',
              },
              {
                title: 'Láminas y materiales',
                text: 'Alternativas laminadas y otras soluciones asociadas para distintas necesidades técnicas y comerciales.',
              },
              {
                title: 'Acompañamiento comercial',
                text: 'Apoyo para evaluar formatos, medidas, compatibilidades y alternativas según cada proyecto.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Diámetros disponibles</h3>
                <p className="mt-2 text-slate-600">Medidas de referencia para evaluación comercial y técnica.</p>
              </div>
              <a
                href="mailto:ventas@alutam.cl?subject=Solicitud%20de%20cat%C3%A1logo%20ALUTAM"
                className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Solicitar catálogo
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['75 mm', '95 mm', '101 mm', '117.5 mm'].map((size) => (
                <div key={size} className="rounded-2xl bg-slate-100 p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Diámetro</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">{size}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ventajas" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900">Por qué elegir ALUTAM</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            'Atención comercial ágil',
            'Enfoque en relaciones de largo plazo',
            'Soluciones para distintos formatos',
            'Imagen profesional y confianza',
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-100 p-6 text-center text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Hablemos</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Cuéntanos tu formato, diámetro o necesidad comercial y te ayudamos a evaluar una solución adecuada para tu producto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/56999690155"
                className="rounded-[1.5rem] bg-white px-6 py-4 text-center text-sm font-semibold text-slate-900 shadow hover:opacity-90"
              >
                WhatsApp directo
              </a>
              <a
                href="mailto:ventas@alutam.cl?subject=Solicitud%20de%20cotizaci%C3%B3n%20ALUTAM"
                className="rounded-[1.5rem] border border-slate-600 px-6 py-4 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Solicitar cotización
              </a>
              <a
                href="mailto:ventas@alutam.cl?subject=Solicitud%20de%20cat%C3%A1logo%20ALUTAM"
                className="rounded-[1.5rem] border border-slate-600 px-6 py-4 text-center text-sm font-semibold text-white hover:bg-slate-800 sm:col-span-2"
              >
                Descargar catálogo por correo
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-800 shadow-xl">
            <h3 className="text-xl font-semibold">Contacto comercial</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <p><strong>Empresa:</strong> ALUTAM</p>
              <p><strong>Email:</strong> ventas@alutam.cl</p>
              <p><strong>Teléfono:</strong> +56 9 9969 0155</p>
              <p><strong>Enfoque:</strong> Atención B2B para soluciones en aluminio y packaging</p>
            </div>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Nombre de empresa"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Nombre de contacto"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Diámetro o producto de interés"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
              <textarea
                placeholder="Cuéntanos lo que necesitas"
                rows={4}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
              <a
                href="mailto:ventas@alutam.cl?subject=Consulta%20desde%20web%20ALUTAM"
                className="inline-block rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Enviar consulta
              </a>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © 2026 ALUTAM. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
