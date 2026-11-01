// Datos del sitio TryFlama. Edita aquí, nunca en las páginas.

export interface Review {
  name: string
  stars: number
  date: string
  text: string
  country?: string
  photo?: string
  reply?: string | null
  source: string
}

export const TRUSTPILOT_REVIEWS: Review[] = [
  { name: 'MATEO LOPEZ ESTEBAN', country: 'MX', stars: 5, date: '14 de agosto de 2026', text: 'Los Femboys son de muy buena calidad' },
  { name: 'Cuenta RBD', country: 'PE', stars: 5, date: '12 de agosto de 2026', text: 'Vengo de parte de Haruuu, muy buena atención dan, muy recomendable' },
  { name: 'Xavier Alberto Ticona', country: 'BO', stars: 5, date: '11 de agosto de 2026', text: 'Recomendable :]' },
  { name: 'Principe Obreke', country: 'CL', stars: 5, date: '11 de agosto de 2026', text: 'Vengo de parte de Haruu' },
  { name: 'Efrain', country: 'AR', stars: 5, date: '10 de agosto de 2026', text: 'Hola, geo, cuando abres el host? XD' },
]

export const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export function fmtDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getUTCDate()} de ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`
}

/* ================================================================ */
/* Navegación                                                       */
/* ================================================================ */

export interface Tab {
  id: string
  label: string
  icon: 'zap' | 'sparkles' | 'users' | 'message'
  title: string
  desc: string
}

export const TABS: Tab[] = [
  {
    id: 'productos',
    label: 'Productos',
    icon: 'zap',
    title: 'Nuestros productos',
    desc: 'Herramientas construidas para lo que la gente usa de verdad. Desde República Dominicana.',
  },
  {
    id: 'mision',
    label: 'Misión',
    icon: 'sparkles',
    title: 'Por qué lo hacemos',
    desc: 'Sin fines de lucro. Sin excepciones. Todo lo que ganamos vuelve a mejorar los productos y la comunidad.',
  },
  {
    id: 'equipo',
    label: 'Equipo',
    icon: 'users',
    title: 'El equipo',
    desc: 'Un grupo pequeño con una comunidad detrás que crece cada día.',
  },
  {
    id: 'contacto',
    label: 'Contacto',
    icon: 'message',
    title: 'Únete o escríbenos',
    desc: 'Usa la API, invita a Anna a tu servidor o cuéntanos tu proyecto.',
  },
]

/* ================================================================ */
/* Productos                                                        */
/* ================================================================ */

export interface Product {
  id: string
  name: string
  desc: string
  icon: 'api' | 'bot' | 'rocket'
  link?: string
  comingSoon?: boolean
  features: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'ai-api',
    name: 'AI by TryFlama',
    desc: 'API de IA ilimitada. Acceso gratuito y sin límites a modelos como GPT, Claude, Llama y más. Para desarrolladores y creadores.',
    icon: 'api',
    link: 'https://ai.tryflama.com',
    features: ['Modelos ilimitados', 'Sin rate limits', 'API REST completa', 'Gratis para todos'],
  },
  {
    id: 'anna',
    name: 'Anna — Bot de Discord',
    desc: 'Bot multifunción para Discord. Moderación, eventos, entretenimiento y herramientas extra para llevar tu servidor al siguiente nivel.',
    icon: 'bot',
    link: 'https://discord.gg/YJ3aueX2Sp',
    features: ['Multifunción', 'Fácil de configurar', 'Soporte activo', 'Nuevas funciones'],
  },
  {
    id: 'coming-soon',
    name: 'Más herramientas en camino',
    desc: 'Estamos construyendo nuevas soluciones. Herramientas útiles, sin costos ocultos, pensadas para lo que la gente realmente usa.',
    icon: 'rocket',
    comingSoon: true,
    features: ['En desarrollo', 'Comunidad primero', 'Código abierto', 'Próximamente'],
  },
]

/* ================================================================ */
/* Contacto                                                         */
/* ================================================================ */

export const EMAIL = 'support@tryflama.com'
export const DISCORD_URL = 'https://discord.gg/YJ3aueX2Sp'
export const COUNTRY = 'República Dominicana'

/* ================================================================ */
/* Misión                                                           */
/* ================================================================ */

export const MISSION = {
  title: 'Productos que la gente usa de verdad',
  desc: 'No diseñamos para impresionar: construimos para que funcionen. TryFlama es una empresa sin fines de lucro de República Dominicana que crea webs, apps y APIs para desarrolladores y usuarios. Sin fines de lucro. Sin límites artificiales. Sin excepciones.',
  values: [
    { icon: 'globe', title: 'Para todos', desc: 'Accesible, sin barreras ni exclusiones.' },
    { icon: 'heart', title: 'Sin fines de lucro', desc: 'Todo lo que ganamos vuelve a mejorar nuestros productos y a la comunidad.' },
    { icon: 'code', title: 'Abierto', desc: 'APIs documentadas, código abierto cuando tiene sentido.' },
    { icon: 'lightning', title: 'Rápido', desc: 'Infraestructura optimizada para responder al instante.' },
  ],
}

/* ================================================================ */
/* Equipo                                                           */
/* ================================================================ */

export const TEAM = [
  { icon: 'user', title: 'Equipo fundador', desc: 'Visión y dirección.' },
  { icon: 'users', title: 'Comunidad', desc: 'Nuestra fuerza real. Cada usuario que reporta un bug, sugiere una mejora o contribuye, forma parte de esto.' },
]

/* ================================================================ */
/* Estadísticas del hero                                            */
/* ================================================================ */

export const STAT_LINE = [
  { value: '2', label: 'Productos activos', icon: null },
  { value: '24/7', label: 'Soporte real', icon: null },
  { value: 'RD', label: 'Desde República Dominicana', icon: 'globe' },
]
