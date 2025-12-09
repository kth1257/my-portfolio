// src/portfolio.style.js
import styled, { createGlobalStyle, css } from "styled-components";

/* ===================== */
/*        THEME          */
/* ===================== */
export const lightTheme = {
  name: "light",
  bg: "#F6F4EF",
  text: "#111827",
  subtle: "#55607A",
  cardBg: "rgba(255,255,255,0.72)",
  border: "rgba(17,24,39,0.12)",
  shadow: "0 10px 30px rgba(17,24,39,0.08)",
  accent: "#5B7FFF",
  accent2: "#2EC5A6",
  chipBg: "rgba(17,24,39,0.06)",
  chipBorder: "rgba(17,24,39,0.16)",
  glow1: "rgba(91,127,255,0.18)",
  glow2: "rgba(46,197,166,0.14)",
  selection: "rgba(91,127,255,0.22)",
};

export const darkTheme = {
  name: "dark",
  bg: "#0B0F19",
  text: "#E7ECF5",
  subtle: "#A7B3C7",
  cardBg: "rgba(20,24,38,0.6)",
  border: "rgba(167,179,199,0.22)",
  shadow: "0 16px 40px rgba(0,0,0,0.45)",
  accent: "#8EA6FF",
  accent2: "#2DD4BF",
  chipBg: "rgba(167,179,199,0.14)",
  chipBorder: "rgba(167,179,199,0.28)",
  glow1: "rgba(142,166,255,0.18)",
  glow2: "rgba(45,212,191,0.12)",
  selection: "rgba(142,166,255,0.25)",
};

/* ===================== */
/*      GLOBALSTYLE      */
/* ===================== */
export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => (theme.name === "dark" ? "dark" : "light")};
    --header-h: 56px;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  html {
    scroll-behavior: smooth;
    background:
      radial-gradient(60vw 40vh at 85% -10%, ${({theme}) => theme.glow1}, transparent),
      radial-gradient(50vw 32vh at 8%  -18%, ${({theme}) => theme.glow2}, transparent),
      ${({ theme }) => theme.bg};
    background-attachment: fixed;
    transition: background .28s ease; /* 테마 배경 전환 부드럽게 */
  }

  body {
    margin: 0;
    padding: 0;
    background: transparent;
    color: ${({ theme }) => theme.text};
    font-family: system-ui,-apple-system,Segoe UI,Roboto,"Noto Sans KR","Apple SD Gothic Neo",
                 Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",
                 "Noto Color Emoji",sans-serif;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-height: 100%;
  }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  ::selection { background: ${({theme}) => theme.selection}; }
  :focus-visible { outline: 2px solid ${({theme}) => theme.accent}; outline-offset: 2px; }

  /* ▼ 테마 토글 순간에만 전역 트랜지션 적용 */
  html.theme-transition *,
  html.theme-transition *::before,
  html.theme-transition *::after {
    transition: background-color .28s ease, color .28s ease,
                border-color .28s ease, box-shadow .28s ease,
                fill .28s ease, stroke .28s ease !important;
  }
`;

/* ===================== */
/*       UTIL MIXIN      */
/* ===================== */
const gradientBorder = css`
  background:
    linear-gradient(${({theme}) => theme.cardBg}, ${({theme}) => theme.cardBg}) padding-box,
    linear-gradient(120deg, ${({theme}) => theme.accent}, ${({theme}) => theme.accent2}) border-box;
  border: 1px solid transparent;
`;

/* ===================== */
/*        LAYOUT         */
/* ===================== */
export const Wrap = styled.div` min-height: 100%; `;

export const Container = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding-left: clamp(14px, 4vw, 28px);
  padding-right: clamp(14px, 4vw, 28px);
`;

/* ===================== */
/*     HEADER / NAV      */
/* ===================== */
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0)),
    ${({ theme }) => (theme.name === "dark" ? "rgba(11,15,25,0.58)" : "rgba(255,255,255,0.65)")};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
`;

export const Brand = styled.a`
  font-weight: 800;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const Nav = styled.nav`
  display: none;
  gap: 10px;
  @media (min-width: 640px){ display:flex; }
`;

export const NavLink = styled.a`
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 999px;
  transition: background .18s ease, transform .18s ease;
  &:hover, &:focus-visible {
    background: ${({theme}) => theme.name==='dark' ? "rgba(255,255,255,0.06)" : "rgba(17,24,39,0.05)"};
    transform: translateY(-1px);
  }
`;

export const ThemeBtn = styled.button`
  ${gradientBorder};
  border-radius: 999px;
  padding: 8px 12px;
  line-height: 1;
  cursor: pointer;
  transition: transform .18s ease, filter .18s ease;
  &:hover { transform: translateY(-1px); filter: saturate(1.05); }
`;

/* ===================== */
/*        SECTIONS       */
/* ===================== */
export const Section = styled.section`
  padding: clamp(30px, 6.5vw, 64px) 0;
  scroll-margin-top: var(--header-h);
`;

/* 타이틀 */
export const Title = styled.h2`
  position: relative;
  display: inline-block;
  margin: 0 0 18px;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.01em;

  &::after{
    content:"";
    display:block;
    width: 44px;
    height: 4px;
    margin-top: 8px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
  }

  /* ▼ 섹션 앵커 도착 시, 타이틀만 반짝 */
  :where(section:target) & {
    animation: titleFlash .9s ease-out;
  }

  @keyframes titleFlash {
    0%   { box-shadow: 0 0 0 9999px ${({theme})=>theme.glow1} inset; }
    100% { box-shadow: 0 0 0 0     ${({theme})=>theme.glow1} inset; }
  }
`;

export const Prose = styled.div`
  max-width: none;
  line-height: 1.85;
  p { margin: 0 0 12px; }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

/* ===================== */
/*          HERO         */
/* ===================== */
export const Grid = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 768px){ grid-template-columns: 1.6fr 1fr; align-items: center; }
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: clamp(26px, 3.8vw, 40px);
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.01em;
  word-break: keep-all;
  span{
    background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const P = styled.p`
  margin: 16px 0 0;
  font-size: clamp(15px, 2.4vw, 18px);
  color: ${({theme})=>theme.subtle};
  white-space: pre-line;
`;

export const RowWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-top:24px;
`;

export const GhostBtn = styled.a`
  ${gradientBorder};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 8px 14px;
  font-size:14px;
  border-radius: 12px;
  transition: transform .18s ease, filter .18s ease, background .18s ease;
  &:hover { transform: translateY(-1px); filter: saturate(1.05); }
`;

export const InfoList = styled.div`
  font-size: 14px;
  line-height: 1.9;
  b{ font-weight:700; }
  .muted{ color: ${({theme})=>theme.subtle}; margin-left:8px; }
`;

/* ===================== */
/*         SKILLS        */
/* ===================== */
export const CardsGrid = styled.div`
  display:grid;
  gap:16px;
  @media (min-width:640px){ grid-template-columns: repeat(2,1fr); }
  @media (min-width:768px){ grid-template-columns: repeat(3,1fr); }
`;

export const Chip = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({theme})=>theme.chipBg};
  border: 1px solid ${({theme})=>theme.chipBorder};
  white-space: nowrap;
`;

/* ===================== */
/*        PROJECTS       */
/* ===================== */
export const ProjectArticle = styled(Card)` display:block; `;

export const ProjectHead = styled.div`
  display:flex;
  gap:16px;
  justify-content:space-between;
  align-items:flex-start;
  flex-wrap: wrap;
`;

export const ProjectTitle = styled.h3`
  margin:0;
  font-size:20px;
  font-weight:800;
`;

export const Meta = styled.p`
  margin:6px 0 0;
  font-size:13px;
  color:${({theme})=>theme.subtle};
`;

export const TagRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
`;

export const TwoCol = styled.div`
  margin-top:16px;
  display:grid;
  gap:16px;
  @media (min-width:768px){ grid-template-columns:1fr 1fr; }
`;

export const Ul = styled.ul`
  margin:0;
  padding-left:20px;
  li{ font-size:14px; line-height:1.6; }
`;

export const Thumb = styled.div`
  margin-top:16px;
  display: flex;
  justify-content: center;
  img{
    width:30%;
    height:auto;
    object-fit: cover;
    border:1px solid ${({theme})=>theme.border};
    border-radius:12px;
  }
`;

/* ===================== */
/*       LIGHTBOX        */
/* ===================== */
export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 40px);
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(2px);
  animation: fadeIn .18s ease-out;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

export const LightboxImg = styled.img`
  max-width: 92vw;
  max-height: 86vh;
  object-fit: contain;
  background: #000;
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 12px;
  box-shadow: ${({theme})=>theme.shadow};
  cursor: zoom-out;
`;

export const LightboxClose = styled.button`
  ${gradientBorder};
  position: absolute;
  top: clamp(8px, 2vw, 16px);
  right: clamp(8px, 2vw, 16px);
  padding: 6px 10px;
  line-height: 1;
  color: inherit;
  border-radius: 999px;
  cursor: pointer;
`;

export const SmallBtn = styled.a`
  ${gradientBorder};
  padding:6px 10px;
  font-size:13px;
  border-radius:999px;
  transition: transform .18s ease, filter .18s ease;
  &:hover{ transform: translateY(-1px); filter: saturate(1.05); }

  /* disabled 공통 처리 */
  &.disabled,
  &[disabled],
  &[aria-disabled="true"],
  &:disabled {
    opacity: .55;
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale(.35);
    transform: none;
  }
`;

/* ===================== */
/*        HELPERS        */
/* ===================== */
export const SmallMuted = styled.span` font-size:12px; color:${({theme})=>theme.subtle}; `;

export const Footer = styled.footer`
  ${Container}{
    padding:40px 16px;
    font-size:12px;
    color:${({theme})=>theme.subtle};
  }
`;
// =====================
//    DESIGN & MEDIA
// =====================
export const DesignBlock = styled(Card)`
  margin-top: 16px;
`;

export const PSGrid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(17,24,39,0.18)"};
  }
`;

export const GalleryImgBtn = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.16s ease, box-shadow 0.16s ease, filter 0.16s ease;

  /* 카드 자체 사이즈를 고정해서 줄 맞추기 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;            /* 원하는 높이로 조절 (240~280 사이) */

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    filter: saturate(1.05);
  }
`;

export const IlGalleryImgBtn = styled(GalleryImgBtn)`
  height: 520px;

  img {
    object-fit: contain;
    background: #0002;
  }
`;



export const SliderWrap = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const SliderBtn = styled.button`
  ${gradientBorder};
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  background: ${({ theme }) => theme.cardBg};
  transition: transform 0.16s ease, filter 0.16s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    filter: saturate(1.05);
  }
`;

export const SliderViewport = styled.div`
  flex: 1;
  max-width: 640px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const SliderMeta = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.subtle};
`;
