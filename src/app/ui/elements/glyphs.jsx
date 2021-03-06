//
// Reusable SVG icons
//
// Reference:
//  - https://www.w3.org/TR/SVG/paths.html
//  - https://www.w3.org/TR/SVG/shapes.html
//
// Using "currentColor" allows styling using CSS color property
//

const BurgerGlyph = () => { // this is unquestionably a vegan burger
  return (
    <svg viewBox="-50 -50 100 100">

      {/* -- guides
      <g stroke="red" fill="lightgrey">
        <rect x="-50" y="-50" width="100" height="100" />
        <path d="M-50   0 h100z" />
        <path d="M-50 -14 h100z" />
        <path d="M-50  14 h100z" />
        <path d="M-26 -50 v100z" />
        <path d="M 26 -50 v100z" />
      </g>
      */}

      <path fill="currentColor"
        d={
          "M22-18a1 1 0 110 8h-44a1 1 0 110-8z" +
          "M22 -4a1 1 0 110 8h-44a1 1 0 110-8z" +
          "M22 10a1 1 0 110 8h-44a1 1 0 110-8z"
        } />
    </svg>
  )
}

const NavigateGlyph = () => {
  return (
    <svg viewBox="-50 -50 100 100">
      <polygon
        fill="currentColor" transform="rotate(30)"
        points="-20 26 0-28 20 26 0 16" />
    </svg>
  )
}

const LayersGlyph = () => {
  return (
    <svg viewBox="-50 -50 100 100">
      <g stroke="currentColor" stroke-width="3">
        <polygon points="-30 5 0-10 30 5 0 20" fill="none" />
        <polygon points="-30-10 0-25 30-10 0 5" fill="currentColor" />
      </g>
    </svg>
  )
}

const PencilGlyph = () => {
  return (
    <svg viewBox="-50 -50 100 100">
      <g fill="currentColor" transform="rotate(45)">
        <polygon points="0 30 -5 25 -5-15 5-15 5 25" />
        <rect x="-5" y="-30" width="10" height="10" />
      </g>
    </svg>
  )
}

export {
  BurgerGlyph,
  NavigateGlyph,
  LayersGlyph,
  PencilGlyph
}
