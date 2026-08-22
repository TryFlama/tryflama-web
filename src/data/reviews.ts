export interface Review {
  name: string
  stars: number
  date: string
  text: string
  photo?: string
  reply?: string
  country?: string
  source?: 'Google' | 'Trustpilot'
}

export const REVIEWS: Review[] = [
  { name: 'joaquin jordan', stars: 5, date: '16 de agosto de 2026', text: 'nose pero es una empresa muy buena', source: 'Google', photo: 'https://lh3.googleusercontent.com/a/ACg8ocJNuAUQt3HIRh8zjXC8bMmtoH53pR4Wa41RUtijvR2-TuWRBA=s120-c-rp-mo-br100' },
  { name: 'zselever XD', stars: 5, date: '16 de agosto de 2026', text: 'buen selvicio', source: 'Google', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXdaXb43KiNE00iI3QQGW30ZVNj0Gg29SXoU7PYoXw1QhAD8OU=s120-c-rp-mo-br100' },
  { name: 'JhoX XIT', stars: 5, date: '15 de agosto de 2026', text: 'Son una excelente empresa y tiene mucha disciplina', source: 'Google', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjW6pGDcuerVIS4KZ_cdbZ44AeupmfP3oyA9ua3E7mM-4lFLqdiD=s120-c-rp-mo-br100', reply: 'Muchas Gracias por su opinión.' },
  { name: 'Momentos de ale Wang', stars: 5, date: '11 de agosto de 2026', text: 'No sé pero sus productos son, 10/10 solo use los plis.', source: 'Google', photo: 'https://lh3.googleusercontent.com/a/ACg8ocLKdoR3CD6BFWvSeyn6e1VzB3Os4drz5WxCvCSKwaRthRy9Bw=s120-c-rp-mo-br100' },
  { name: 'Nord', stars: 5, date: '11 de agosto de 2026', text: 'Buen servicio', source: 'Google', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVPegHXIzk_RA_SWDV2-VQzqxGkIEJinxjCcuv6cpTMV5DYjLcA=s120-c-rp-mo-br100' },
  { name: 'MATEO LOPEZ ESTEBAN', country: 'MX', stars: 5, date: '14 de agosto de 2026', text: 'Los Femboys son de muy buena calidad' },
  { name: 'Cuenta RBD', country: 'PE', stars: 5, date: '12 de agosto de 2026', text: 'Vengo de parte de Haruuu, muy buena atención dan, muy recomendable' },
  { name: 'Xavier Alberto Ticona', country: 'BO', stars: 5, date: '11 de agosto de 2026', text: 'Recomendable :]' },
  { name: 'Principe Obreke', country: 'CL', stars: 5, date: '11 de agosto de 2026', text: 'Vengo de parte de Haruu' },
  { name: 'Efrain', country: 'AR', stars: 5, date: '10 de agosto de 2026', text: 'Hola, geo, cuando abres el host? XD' },
  { name: 'Traxet', country: 'EC', stars: 5, date: '6 de junio de 2026', text: 'Muy buen hosting de servidores, no hay lag y el ping es de lo mejor, 100% recomendado y si pueden hagan conocer este gran servicio de hosting (vengo de parte de haru)' },
  { name: 'Nord', country: 'FR', stars: 5, date: '12 de agosto de 2025', text: 'ñ??? POR QUE TE MIENTES, SI SABES QUE TE GUSTO' },
]
