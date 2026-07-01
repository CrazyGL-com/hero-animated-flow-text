<sub>*Hero made by [@ybouane](https://x.com/ybouane).*</sub>
<p align="center">
  <img src="https://crazygl.com/heroes/hero-animated-flow-text/banner-full.png" alt="Animated Flow Text" width="640">
</p>

# @crazygl/hero-animated-flow-text

Each word rides its own sine wave with a per-letter phase offset — the line reads like a banner caught in a slow current.

## Demo
[Animated Flow Text](https://crazygl.com/hero/animated-flow-text)

## Install

```bash
npm install @crazygl/hero-animated-flow-text
```

## Usage

```tsx
import AnimatedFlowText from '@crazygl/hero-animated-flow-text';

export default function Page() {
  return (
    <AnimatedFlowText
      heading="the current carries the type"
      amplitude={18}
      speed={0.9}
      textColor="#ffffff"
    />
  );
}
```

## Customise

- **Content** — `heading`, optional `subheading`.
- **Flow** — `amplitude` (wave height in px), `wavelength` (chars per wave), `speed`, `rotateMax` (per-letter tilt in degrees).
- **Typography** — `textColor`, `subColor`, `fontSize`, `headingFontFamily` (Google font), `headingFontWeight`.
- **Backdrop** — `transparentBackground`, `bgColor`.

## Best for

- SaaS and product landing pages wanting a lively, motion-forward headline
- Portfolio and agency sites with a playful, type-driven personality
- Event, launch or campaign pages where the wording should feel alive



This hero is part of [CrazyGL](https://crazygl.com), a collection of production-ready WebGL, canvas, 3D, and typography effects. Every CrazyGL hero ships with an agent-ready `SKILL.md` file that helps developers and coding agents adapt the effect into custom landing pages and interactive experiences.
