import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroAnimationFrame, useHeroReady } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';
const W = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };
function AnimatedFlowTextHero(props) {
    const { rootRef, reducedMotion, heading = 'the current carries the type', subheading = '', amplitude = 18, wavelength = 4, speed = 0.9, rotateMax = 6, textColor = '#ffffff', subColor = '#9aa1ad', fontSize = 88, headingFontFamily = 'Inter', headingFontWeight = '700', transparentBackground = false, bgColor = '#0a0c14', } = props;
    const weight = W[String(headingFontWeight)] ?? '700';
    useHeroReady(props);
    React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit')
        return; try {
        loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] });
    }
    catch { /* */ } }, [headingFontFamily]);
    const letters = React.useMemo(() => Array.from(String(heading || '')), [heading]);
    // Group letters into word runs so flex-wrap only breaks at word
    // boundaries — previously each character (including spaces) was a
    // sibling flex item, so a long heading wrapped mid-word at any
    // random letter. The animation still indexes by GLOBAL letter
    // position so the wave phase keeps flowing across word breaks.
    const words = React.useMemo(() => {
        const out = [];
        let cur = [];
        for (let i = 0; i < letters.length; i++) {
            const c = letters[i] ?? '';
            if (c === ' ') {
                if (cur.length) {
                    out.push(cur);
                    cur = [];
                }
            }
            else {
                cur.push({ i, ch: c });
            }
        }
        if (cur.length)
            out.push(cur);
        return out;
    }, [letters]);
    const refs = React.useRef([]);
    const tRef = React.useRef(0);
    useHeroAnimationFrame(rootRef, ({ delta }) => {
        if (reducedMotion)
            return;
        tRef.current += delta * Math.max(0.05, speed);
        const k = (2 * Math.PI) / Math.max(0.5, wavelength);
        for (let i = 0; i < letters.length; i++) {
            const el = refs.current[i];
            if (!el)
                continue;
            const phase = k * i - tRef.current * 2.0;
            const y = Math.sin(phase) * amplitude;
            const rot = Math.cos(phase) * rotateMax;
            el.style.transform = `translateY(${y}px) rotate(${rot}deg)`;
        }
    });
    const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", system-ui` : 'system-ui';
    return (_jsxs(_Fragment, { children: [_jsx("crazygl-stage", { style: { background: transparentBackground ? 'transparent' : bgColor } }), _jsx("crazygl-content", { children: _jsxs("div", { className: "crazygl-aft-wrap", style: { fontFamily: ff }, children: [_jsx("div", { className: "crazygl-aft-h", style: { fontWeight: weight, fontSize: `${Math.max(20, fontSize)}px`, color: textColor }, children: words.map((word, wi) => (_jsx("span", { className: "crazygl-aft-w", children: word.map(({ i, ch }) => (_jsx("span", { ref: (el) => { refs.current[i] = el; }, className: "crazygl-aft-c", children: ch }, i))) }, wi))) }), String(subheading).trim() ? _jsx("div", { className: "crazygl-aft-sub", style: { color: subColor }, children: subheading }) : null] }) })] }));
}
export default function AnimatedFlowText(props) { return _jsx(CrazyGLWrapper, { hero: AnimatedFlowTextHero, metadata: metadata, ...props }); }
export { metadata };
