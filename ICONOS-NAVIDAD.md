# Iconos Navideños Personalizados - TryFlama

## 🎨 Iconos Creados (Sin derechos de autor)

Todos los iconos están diseñados desde cero en SVG, combinando con la paleta de colores de TryFlama:

### 1. Árbol de Navidad (tree)
- **Colores**: Degradado verde (#16a34a → #14532d)
- **Detalles**: Adornos dorados y rojos
- **Uso**: Títulos principales, headers

### 2. Copo de Nieve (snowflake)
- **Colores**: Azul claro (#E0F2FE → #BAE6FD)
- **Detalles**: Geometría de 8 puntas con círculos
- **Uso**: Animación de nieve cayendo

### 3. Regalo (gift)
- **Colores**: Rojo TryFlama (#FF5C72 → #FF1E3C) + Dorado (#FFD700)
- **Detalles**: Caja con moño y cinta
- **Uso**: Badge "Próximamente"

### 4. Estrella (star)
- **Colores**: Degradado dorado (#FFD700 → #FFA500)
- **Detalles**: 5 puntas con borde definido
- **Uso**: Animación de nieve cayendo

### 5. Destello (sparkle)
- **Colores**: Degradado radial dorado → rosa
- **Detalles**: 8 rayos + círculo central
- **Uso**: Botón CTA principal

### 6. Bandera RD (rd-flag)
- **Colores**: Azul (#002D62), Rojo (#CE1126), Blanco
- **Detalles**: Cruz con escudo central simplificado
- **Uso**: Identificador de origen dominicano

## 📊 Mejoras de Accesibilidad

Antes:
- 4 violaciones moderadas (elementos decorativos)

Después:
- ✅ **0 violaciones** - 100% WCAG 2.2 compliant

## 🎯 Integración

```astro
import ChristmasIcon from './ChristmasIcon.astro'

<!-- Uso simple -->
<ChristmasIcon name="tree" class="h-8 w-8" />

<!-- Con color personalizado -->
<ChristmasIcon name="sparkle" class="h-5 w-5 text-flame-400" />
```

## 🌟 Animaciones

La nieve ahora usa SVG inline generado dinámicamente:
- Rotación 360° durante la caída
- Drop shadow para profundidad
- 4 tipos de iconos rotan aleatoriamente
- Respeta `prefers-reduced-motion`

## 📱 Responsive

- Desktop: 1.5rem (24px)
- Mobile: 1.2rem (19.2px)
- Todos los iconos son vectoriales y escalables
