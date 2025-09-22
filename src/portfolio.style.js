// src/portfolio.style.js
import styled, { createGlobalStyle } from "styled-components";

/* ===================== */
/*        THEME          */
/* ===================== */
export const lightTheme = {
  name: "light",
  // 베이스 & 텍스트
  bg: "#F6F4EF",             // porcelain
  text: "#111827",           // ink-ish
  subtle: "#55607A",

  // 카드/테두리/그림자
  cardBg: "rgba(255,255,255,0.72)",
  border: "rgba(17,24,39,0.12)",
  shadow: "0 10px 30px rgba(17,24,39,0.08)",

  // 포인트 컬러 (그라데이션)
  accent: "#5B7FFF",         // han-indigo
  accent2: "#2EC5A6",        // jade-mint

  // 칩/버튼 배경
  chipBg: "rgba(17,24,39,0.06)",
  chipBorder: "rgba(17,24,39,0.16)",

  // 배경 글로우
  glow1: "rgba(91,127,255,0.18)",
  glow2: "rgba(46,197,166,0.14)",

  // 기타
  selection: "rgba(91,127,255,0.22)",
};

export const darkTheme = {
  name: "dark",
  bg: "#0B0F19",             // ink night
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
/*     GLOBAL STYLE      */
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
    /* 스크롤해도 유지되는 은은한 글로우 */
    background:
      radial-gradient(60vw 40vh at 85% -10%, ${({theme}) => theme.glow1}, transparent),
      radial-gradient(50vw 32vh at 8%  -18%, ${({theme}) => theme.glow2}, transparent),
      ${({ theme }) => theme.bg};
    background-attachment: fixed;
  }

  body {
    margin: 0; padding: 0;
    background: transparent; /* html에서 이미 처리 */
    color: ${({ theme }) => theme.text};
    font-family: system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
                 Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                 "Noto Color Emoji", sans-serif;
    -webkit-tap-highlight-color: transparent;
    display: block; /* vite 기본 flex 덮기 */
    min-height: 100%;
  }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  ::selection {
    background: ${({theme}) => theme.selection};
  }

  :focus-visible {
    outline: 2px solid ${({theme}) => theme.accent};
    outline-offset: 2px;
  }
`;

/* ===================== */
/*       LAYOUT          */
/* ===================== */
export const Wrap = styled.div`
  min-height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(14px, 4vw, 28px);
  padding-right: clamp(14px, 4vw, 28px);
`;

/* ===================== */
/*     HEADER / NAV      */
/* ===================== */
export const Header = styled.header`
  position: sticky; top: 0; z-index: 50;
  height: var(--header-h);
  display: flex; align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0)) ,
    ${({ theme }) => theme.name === "dark" ? "rgba(11,15,25,0.58)" : "rgba(255,255,255,0.65)"};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Row = styled(Container)`
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 6px; padding-bottom: 6px;
`;

export const Brand = styled.a`
  font-weight: 800; font-size: 18px; line-height: 1;
  letter-spacing: -0.02em;
`;

export const Nav = styled.nav`
  display: none; gap: 10px;
  @media (min-width: 640px){ display:flex; }
`;

export const NavLink = styled.a`
  font-size: 14px; padding: 8px 12px; border-radius: 999px;
  transition: background .18s ease, transform .18s ease;
  &:hover, &:focus-visible {
    background: ${({theme}) => theme.name==='dark' ? "rgba(255,255,255,0.06)" : "rgba(17,24,39,0.05)"};
    transform: translateY(-1px);
  }
`;

export const ThemeBtn = styled.button`
  border-radius: 999px; padding: 8px 12px; line-height: 1;
  background:
    linear-gradient(${({theme})=>theme.cardBg}, ${({theme})=>theme.cardBg}) padding-box,
    linear-gradient(120deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2}) border-box;
  border: 1px solid transparent; cursor: pointer;
  transition: transform .18s ease, filter .18s ease;
  &:hover { transform: translateY(-1px); filter: saturate(1.05); }
`;

/* ===================== */
/*       SECTIONS        */
/* ===================== */
export const Section = styled.section`
  padding: clamp(30px, 6.5vw, 64px) 0;
  scroll-margin-top: var(--header-h);
`;
export const Title = styled.h2`
  font-size: 24px; font-weight: 900; margin: 0 0 18px;
  letter-spacing: -0.01em;
  position: relative; display: inline-block;
  &::after{
    content:""; display:block; height: 4px; width: 44px; margin-top: 8px; border-radius: 2px;
    background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
  }
`;
export const Prose = styled.div`
  max-width: none; line-height: 1.85;
  p { margin: 0 0 12px; }
`;
export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px; padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

/* ===================== */
/*         HERO          */
/* ===================== */
export const Grid = styled.div`
  display: grid; gap: 24px;
  @media (min-width: 768px){ grid-template-columns: 1.6fr 1fr; align-items: center; }
`;
export const H1 = styled.h1`
  font-size: clamp(26px, 3.8vw, 40px);
  font-weight: 900; line-height: 1.25; margin: 0;
  word-break: keep-all; letter-spacing: -0.01em;
  span{
    background: linear-gradient(90deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2});
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
`;
export const P = styled.p`
  margin: 16px 0 0; font-size: clamp(15px, 2.4vw, 18px);
  color: ${({theme})=>theme.subtle};
`;
export const RowWrap = styled.div`
  display:flex; flex-wrap:wrap; gap:12px; margin-top:24px;
`;

export const GhostBtn = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 36px; font-size:14px; border-radius: 12px;
  padding: 8px 14px;
  background:
    linear-gradient(${({theme})=>theme.cardBg}, ${({theme})=>theme.cardBg}) padding-box,
    linear-gradient(120deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2}) border-box;
  border: 1px solid transparent;
  transition: transform .18s ease, filter .18s ease, background .18s ease;
  &:hover{
    transform: translateY(-1px);
    filter: saturate(1.05);
  }
`;

export const InfoList = styled.div`
  font-size: 14px; line-height: 1.9;
  b{ font-weight:700; } span.muted{ color: ${({theme})=>theme.subtle}; margin-left:8px; }
`;

/* ===================== */
/*        SKILLS         */
/* ===================== */
export const CardsGrid = styled.div`
  display:grid; gap:16px;
  @media (min-width:640px){ grid-template-columns: repeat(2,1fr); }
  @media (min-width:768px){ grid-template-columns: repeat(3,1fr); }
`;

export const Chip = styled.span`
  font-size: 12px; border-radius: 999px; padding: 6px 10px;
  background: ${({theme})=>theme.chipBg};
  border: 1px solid ${({theme})=>theme.chipBorder};
  white-space: nowrap;
`;

/* ===================== */
/*       PROJECTS        */
/* ===================== */
export const ProjectArticle = styled(Card)` display:block; `;
export const ProjectHead = styled.div`
  display:flex; gap:16px; justify-content:space-between; align-items:flex-start; flex-wrap: wrap;
`;
export const ProjectTitle = styled.h3` margin:0; font-size:20px; font-weight:800; `;
export const Meta = styled.p` margin:6px 0 0; font-size:13px; color:${({theme})=>theme.subtle}; `;
export const TagRow = styled.div` display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; `;
export const TwoCol = styled.div`
  margin-top:16px; display:grid; gap:16px;
  @media (min-width:768px){ grid-template-columns:1fr 1fr; }
`;
export const Ul = styled.ul` margin:0; padding-left:20px; li{ font-size:14px; line-height:1.6; } `;
export const Thumb = styled.div`
  margin-top:16px;
  display: flex;
  justify-content: center;
  img{
    width:30%; height:auto; object-fit: cover;
    border:1px solid ${({theme})=>theme.border}; border-radius:12px;
    /* 필요하면 고정 비율: aspect-ratio: 16 / 9; object-fit: cover; */
  }
`;

/* ===== Lightbox (Modal) ===== */
export const LightboxOverlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center;
  padding: clamp(16px, 4vw, 40px);
  z-index: 999;
  animation: fadeIn .18s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
`;

export const LightboxImg = styled.img`
  max-width: 92vw;
  max-height: 86vh;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid ${({theme})=>theme.border};
  box-shadow: ${({theme})=>theme.shadow};
  background: #000;
  cursor: zoom-out; /* 클릭으로 닫기 */
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: clamp(8px, 2vw, 16px);
  right: clamp(8px, 2vw, 16px);
  border: 1px solid ${({theme})=>theme.border};
  border-radius: 999px;
  padding: 6px 10px;
  background:
    linear-gradient(${({theme})=>theme.cardBg}, ${({theme})=>theme.cardBg}) padding-box,
    linear-gradient(120deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2}) border-box;
  color: inherit;
  cursor: pointer;
  line-height: 1;
`;

export const SmallBtn = styled.a`
  font-size:13px; border-radius:999px; padding:6px 10px;
  background:
    linear-gradient(${({theme})=>theme.cardBg}, ${({theme})=>theme.cardBg}) padding-box,
    linear-gradient(120deg, ${({theme})=>theme.accent}, ${({theme})=>theme.accent2}) border-box;
  border:1px solid transparent;
  transition: transform .18s ease, filter .18s ease;
  &:hover{ transform: translateY(-1px); filter: saturate(1.05); }

  /* ▼ 비활성화 공통 처리 (a, button 모두 커버) */
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

/* helpers */
export const SmallMuted = styled.span` font-size:12px; color:${({theme})=>theme.subtle}; `;

/* ===================== */
/*        FOOTER         */
/* ===================== */
export const Footer = styled.footer`
  ${Container}{ padding:40px 16px; color:${({theme})=>theme.subtle}; font-size:12px; }
`;
