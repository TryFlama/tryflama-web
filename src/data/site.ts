// Datos actualizados: empresa sin fines de lucro, productos reales
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
/* Pestañas                                                         */
/* ================================================================ */

export interface Tab {
  id: string
  label: string
  icon: 'zap' | 'sparkles' | 'gift' | 'users' | 'mail'
}

export const TABS: Tab[] = [
  { id: 'productos', label: 'Nuestros Productos', icon: 'zap' },
  { id: 'mision', label: 'Nuestra Misión', icon: 'sparkles' },
  { id: 'equipo', label: 'El Equipo', icon: 'users' },
  { id: 'contacto', label: 'Únete', icon: 'mail' },
]

export interface Product {
  id: string
  name: string
  desc: string
  icon: 'zap' | 'bot' | 'rocket'
  link?: string
  comingSoon?: boolean
  features: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'ai-api',
    name: 'AI by TryFlama',
    desc: 'API de IA ilimitada para desarrolladores y creadores. Acceso gratuito a GPT, Claude, Llama y más modelos sin restricciones.',
    icon: 'zap',
    link: 'https://ai.tryflama.com',
    features: ['Modelos ilimitados', 'Sin rate limits', 'API REST completa', 'Gratis para todos'],
  },
  {
    id: 'anna',
    name: 'Anna — Bot de Discord',
    desc: 'Bot multifunción para Discord. Moderación, eventos, entretenimiento y mucho más para hacer tu servidor mejor.',
    icon: 'bot',
    link: 'https://discord.gg/YJ3aueX2Sp',
    features: ['Multifunción', 'Fácil de configurar', 'Soporte activo', 'Nuevas funciones'],
  },
  {
    id: 'coming-soon',
    name: 'Más herramientas próximamente',
    desc: 'Estamos creando nuevas soluciones para desarrolladores y creadores. Herramientas útiles, sin costos ocultos.',
    icon: 'rocket',
    comingSoon: true,
    features: ['En desarrollo', 'Comunidad primero', 'Código abierto', '2026'],
  },
]

export const EMAIL = 'support@tryflama.com'
export const DISCORD_URL = 'https://discord.gg/YJ3aueX2Sp'
export const COUNTRY = 'República Dominicana 🇩🇴'

export const MISSION = {
  title: 'Creamos herramientas para la gente',
  desc: 'TryFlama es una empresa de República Dominicana que crea webs, apps y soluciones para desarrolladores y usuarios. Sin fines de lucro, sin limitaciones artificiales. Solo herramientas que funcionan.',
  values: [
    { emoji: '🎯', title: 'Para todos', desc: 'Herramientas accesibles, sin exclusión ni barreras.' },
    { emoji: '💚', title: 'Sin fines de lucro', desc: 'Ganancia reinvertida en mejoras y comunidad.' },
    { emoji: '🔗', title: 'Abierto', desc: 'APIs documentadas, código abierto cuando es posible.' },
    { emoji: '⚡', title: 'Rápido', desc: 'Infraestructura optimizada para responder al instante.' },
  ],
}

export const TEAM = [
  { name: 'Founder', role: 'Visión y dirección', emoji: '👨‍💼' },
  { name: 'Comunidad', role: 'Nuestra fuerza real', emoji: '👥' },
]

export const STAT_LINE = [
  { value: '2', label: 'Productos activos', icon: null },
  { value: '24/7', label: 'Soporte real', icon: null },
  { value: 'RD', label: 'Desde República Dominicana', icon: 'rd-flag' },
]
