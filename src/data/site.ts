// Datos del sitio TryFlama. Editar aquí, no en las páginas.

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

/** Reseñas de Trustpilot (fallback si la API no responde en build). */
export const TRUSTPILOT_REVIEWS: Review[] = [
  { name: 'MATEO LOPEZ ESTEBAN', country: 'MX', stars: 5, date: '14 de agosto de 2026', text: 'Los Femboys son de muy buena calidad' },
  { name: 'Cuenta RBD', country: 'PE', stars: 5, date: '12 de agosto de 2026', text: 'Vengo de parte de Haruuu, muy buena atención dan, muy recomendable' },
  { name: 'Xavier Alberto Ticona', country: 'BO', stars: 5, date: '11 de agosto de 2026', text: 'Recomendable :]' },
  { name: 'Principe Obreke', country: 'CL', stars: 5, date: '11 de agosto de 2026', text: 'Vengo de parte de Haruu' },
  { name: 'Efrain', country: 'AR', stars: 5, date: '10 de agosto de 2026', text: 'Hola, geo, cuando abres el host? XD' },
  { name: 'Traxet', country: 'EC', stars: 5, date: '6 de junio de 2026', text: 'Muy buen hosting de servidores, no hay lag y el ping es de lo mejor, 100% recomendado y si pueden hagan conocer este gran servicio de hosting (vengo de parte de haru)' },
  { name: 'Nord', country: 'FR', stars: 5, date: '12 de agosto de 2025', text: 'ñ??? POR QUE TE MIENTES, SI SABES QUE TE GUSTO' },
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

/* ------------------------------------------------------------------ */
/* Pestañas                                                            */
/* ------------------------------------------------------------------ */

export interface Tab {
  id: string
  label: string
  icon: 'web' | 'process' | 'rocket' | 'star' | 'chat'
}

export const TABS: Tab[] = [
  { id: 'servicios', label: 'Servicios', icon: 'web' },
  { id: 'proceso', label: 'Proceso', icon: 'process' },
  { id: 'proyectos', label: 'Proyectos', icon: 'rocket' },
  { id: 'resenas', label: 'Reseñas', icon: 'star' },
  { id: 'contacto', label: 'Contacto', icon: 'chat' },
]

export interface Service {
  title: string
  desc: string
  items: string[]
}

export const SERVICES: Service[] = [
  {
    title: 'Desarrollo Web',
    desc: 'Sitios y plataformas rápidas, accesibles y escalables que convierten visitas en clientes.',
    items: ['Landing y marketing', 'E-commerce', 'Portales a medida'],
  },
  {
    title: 'Apps y Productos',
    desc: 'Productos a medida para web y móvil, con experiencias pulidas de principio a fin.',
    items: ['MVP en semanas', 'Cross-platform', 'Diseño x código'],
  },
  {
    title: 'Soluciones Fullstack',
    desc: 'De la base de datos al frontend: arquitecturas completas, seguras y listas para crecer.',
    items: ['APIs escalables', 'Bases de datos', 'Infraestructura'],
  },
  {
    title: 'Bots e Integraciones',
    desc: 'Automatizamos tu comunidad y tus operaciones: bots de Discord, integraciones y flujos.',
    items: ['Bots de Discord', 'Automatización', 'Webhooks y APIs'],
  },
  {
    title: 'Diseño UI/UX',
    desc: 'Interfaces con identidad propia: sistemas de diseño, prototipos y refinamiento visual.',
    items: ['Design systems', 'Prototipos', 'Accesibilidad'],
  },
  {
    title: 'Soporte 24/7',
    desc: 'Tu proyecto nunca se apaga: monitorización, respuesta rápida y mejora continua.',
    items: ['Monitorización', 'Respuesta rápida', 'Mejora continua'],
  },
]

export interface Step {
  title: string
  desc: string
}

export const PROCESS: Step[] = [
  { title: 'Descubrimiento', desc: 'Analizamos tu idea, objetivos y audiencia para definir la hoja de ruta.' },
  { title: 'Diseño y desarrollo', desc: 'Diseñamos y construimos con un foco constante en calidad y rendimiento.' },
  { title: 'Lanzamiento y soporte', desc: 'Desplegamos, supervisamos y acompañamos tu proyecto las 24 horas.' },
]

export interface Project {
  name: string
  category: string
  desc: string
  href: string
  logo?: { src: string; alt: string }
  glyph: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Susic',
    category: 'Streaming',
    desc: 'La plataforma de streaming que conecta artistas y fans.',
    href: 'susic',
    glyph: 'S',
    tags: ['Web', 'Streaming', 'Comunidad'],
  },
  {
    name: 'Anna',
    category: 'Bot de Discord',
    desc: 'Bot de Discord con IA que revoluciona la gestión de eventos.',
    href: 'anna',
    glyph: 'A',
    tags: ['Discord', 'IA', 'Automation'],
  },
  {
    name: 'SkyLoading',
    category: 'Host de Minecraft',
    desc: 'Hosting de servidores de Minecraft rápido y confiable.',
    href: 'skyloading',
    glyph: 'S',
    tags: ['Infra', 'Hosting', 'Game servers'],
  },
]

export const EMAIL = 'support@tryflama.com'
export const DISCORD_URL = 'https://discord.gg/YJ3aueX2Sp'

export const STAT_LINE = [
  { value: '3+', label: 'Proyectos estrella' },
  { value: '24/7', label: 'Soporte dedicado' },
  { value: '100%', label: 'Compromiso' },
]
