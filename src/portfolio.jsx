// src/portfolio.jsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./portfolio.style";
import openMarketImg from "./images/open-market.png";
import openMarketImg2 from "./images/open-market2.png";
import openMarketImg3 from "./images/open-market3.png";
import deulbada from "./images/home.gif";
import deulbada2 from "./images/post.gif";
import deulbada3 from "./images/chat.gif";
import toDoList from "./images/todo.png";

export default function PortfolioSite() {
  // ---- ▼ 개인 정보 ------------------------------------
  const me = {
    nameKo: "김태훈 Portfolio",
    role: "프론트엔드 개발자 지망생",
    summary:
      "신구대학교 IT소프트웨어학과 졸업(2019 ~ 2024). 2025년 프론트엔드 학습. 모두의연구소 2차 미니프로젝트 대상 및 파이널 우수상 수상.",
    location: "서울 강동구",
    email: "xognswldk@gmail.com",
    github: "https://github.com/kth1257",
    velog: "https://velog.io/@ase777",
    phone: "010-4920-9597",
  };

  const skills = [
    { title: "Core", items: ["HTML", "CSS", "JavaScript(ES6+)"] },
    { title: "Frontend", items: ["React", "Vite", "Styled-Components"] },
    { title: "Tools", items: ["Git/GitHub", "Figma", "Vercel/Netlify"] },
  ];

  const projects = [
    {
      title: "2차 미니 프로젝트 — Open Market UI",
      period: "2025.06",
      award: "대상 수상",
      summary:
        "바닐라 JS로 구현한 SPA방식의 오픈마켓의 상품 리스트/상세/회원가입·로그인 UI 구현. 캐러셀, 라우팅, 상태 관리의 기본 원리 학습.",
      stack: ["HTML", "CSS", "Vanilla JS"],
      role: [
        "ProductList/Detail 레이아웃 및 컴포넌트화",
        "로그인/회원가입 UI 및 유효성 문구 처리",
        "캐러셀 컴포넌트 분리 및 재사용",
      ],
      highlights: [
        "피그마 기준 픽셀 피팅 및 반응형",
        "네비게이션/라우터 설계",
        "로컬 스토리지 세션 관리 초안",
      ],
      links: {
        demo: "https://kth1257.github.io/open-market-project/",
        repo: "https://github.com/kth1257/open-market-project.git",
      },
      thumb: [openMarketImg, openMarketImg2, openMarketImg3],
    },
    {
      title: "파이널 팀 프로젝트 — 들바다(농수산물 마켓+SNS)",
      period: "2025.07–08",
      award: "우수상",
      summary:
        "React + styled-components 기반 SNS/마켓 플랫폼. 팀 협업(프론트 3, 백 2)으로 페이지 단위 구현과 Git Flow를 경험.",
      stack: ["React", "styled-components", "Django/DRF"],
      role: [
        "Post Detail / Upload / Chat Room UI 구현",
        "컴포넌트 스타일 분리(파일 단위) 및 컨벤션 정립",
        "PR 템플릿/커밋 컨벤션 도입",
      ],
      highlights: [
        "협업 중심 Git Flow(Upstream, Fork, PR)",
        "디자인 시스템 기초 정립",
        "SPA 설계",
      ],
      links: {
        demo: null,
        repo: "https://github.com/yourname/deulbada",
      },
      thumb: [deulbada, deulbada2, deulbada3],
    },
    {
      title: "개인 토이 프로젝트 — Todo List",
      period: "2025.09",
      summary: "간단한 투두 리스트 기능 구현 프로젝트",
      stack: ["HTML", "CSS", "JavaScript"],
      role: ["기능 설계 및 구현 전담", "접근성 고려한 키보드 인터랙션"],
      highlights: [
        "상태 기반 필터(전체/진행/완료)",
        "LocalStorage로 새로고침 보존",
        "위치 정보를 통한 날씨 api 사용",
      ],
      links: {
        demo: "http://xognswldk.dothome.co.kr/to-do-list/index.html",
        repo: "https://github.com/kth1257/To-do-list.git",
      },
      thumb: toDoList,
    },
  ];

  const awards = [
    { when: "2025.06", what: "모두의연구소 2차 미니 프로젝트 대상" },
    { when: "2025.08", what: "모두의연구소 파이널 팀 프로젝트 우수상" },
  ];
  // ---- ▲ 개인 정보 끝 ------------------------------------

  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const openLightbox = (src, alt) => {
    setLightbox({ open: true, src, alt });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: "", alt: "" });
  };

  // ESC로 닫기 + 모달 열릴 때 스크롤 잠금
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightbox.open) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }
  }, [lightbox.open]);

  // 다크모드 토글 (localStorage 유지)
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("site:dark");
    if (saved) setIsDark(saved === "1");
  }, []);
  useEffect(() => {
    localStorage.setItem("site:dark", isDark ? "1" : "0");
  }, [isDark]);

  // ▼ 테마 전환 시 300ms 동안만 전역 트랜지션 활성화
  const runThemeTransition = () => {
    const el = document.documentElement;
    el.classList.add("theme-transition");
    window.setTimeout(() => el.classList.remove("theme-transition"), 320);
  };

  /* ===================== */
  /*   NAV 스크롤 애니메이션  */
  /* ===================== */
  const getHeaderOffset = () => {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--header-h") || "56px";
    return parseFloat(v);
  };

  // 부드럽고 가벼운 이징(rAF)
  const animatedScrollTo = (toY, duration = 600) => {
    const startY = window.pageYOffset;
    const dist = toY - startY;
    const start = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // easeInOutCubic

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const y = startY + dist * ease(t);
      window.scrollTo(0, y);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const onNavClick = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const header = getHeaderOffset();
    const rect = target.getBoundingClientRect();
    const targetY = Math.max(0, rect.top + window.pageYOffset - header);

    // 스크롤 애니메이션
    animatedScrollTo(targetY, 650);

    // 스크롤 완료 타이밍에 해시 갱신하여 Title 하이라이트 트리거
    setTimeout(() => {
      // 중복 푸시 방지: 동일 앵커면 replace
      if (location.hash === `#${id}`) {
        history.replaceState(null, "", `#${id}`);
      } else {
        history.pushState(null, "", `#${id}`);
      }
      // 접근성: 타이틀 포커스 힌트(시각적 영향 없음)
      const title = target.querySelector("h2, [data-title]");
      if (title) title.setAttribute("tabindex", "-1"), title.focus({ preventScroll: true });
    }, 660);
  }, []);

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "awards", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <ThemeProvider theme={isDark ? S.darkTheme : S.lightTheme}>
      <S.GlobalStyle />
      <S.Wrap>
        {/* NAV */}
        <S.Header>
          <S.Row>
            <S.Brand href="#home" onClick={(e)=>onNavClick(e, "home")}>{me.nameKo}</S.Brand>
            <S.Nav>
              {nav.map((n) => (
                <S.NavLink
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => onNavClick(e, n.id)}
                >
                  {n.label}
                </S.NavLink>
              ))}
            </S.Nav>
            <S.ThemeBtn
              onClick={() => { runThemeTransition(); setIsDark((v) => !v); }}
              aria-label="Toggle theme"
            >
              {isDark ? "🌙" : "☀️"}
            </S.ThemeBtn>
          </S.Row>
        </S.Header>

        {/* HERO */}
        <S.Section id="home">
          <S.Container>
            <S.Grid>
              <div>
                <S.H1>
                  안녕하세요, {me.role} <span>{me.nameKo}</span>입니다.
                </S.H1>
                <S.P>{me.summary}</S.P>
                <S.RowWrap>
                  {me.github && (
                    <S.GhostBtn href={me.github} target="_blank" rel="noreferrer">GitHub↗</S.GhostBtn>
                  )}
                  {me.velog && (
                    <S.GhostBtn href={me.velog} target="_blank" rel="noreferrer">Velog↗</S.GhostBtn>
                  )}
                  {me.notion && (
                    <S.GhostBtn href={me.notion} target="_blank" rel="noreferrer">Notion↗</S.GhostBtn>
                  )}
                </S.RowWrap>
              </div>
              <S.Card>
                <S.InfoList>
                  <div><b>지역</b><span className="muted">{me.location}</span></div>
                  <div><b>이메일</b><span className="muted">{me.email}</span></div>
                  <div><b>전화</b><span className="muted">{me.phone}</span></div>
                </S.InfoList>
              </S.Card>
            </S.Grid>
          </S.Container>
        </S.Section>

        {/* ABOUT */}
        <S.Section id="about">
          <S.Container>
            <S.Title>About</S.Title>
            <S.Prose>
              <p>
                2024년 신구대학교 IT소프트웨어학과 3년제 졸업. 2025년 프론트엔드 역량을 집중 학습하며,
                모두의연구소 교육 과정에서 미니 프로젝트 1회 팀 프로젝트 1회를 수행했습니다. 수상 경험을 통해 경험을 인정받았습니다.
              </p>
            </S.Prose>
          </S.Container>
        </S.Section>

        {/* SKILLS */}
        <S.Section id="skills">
          <S.Container>
            <S.Title>Skills</S.Title>
            <S.CardsGrid>
              {skills.map((g) => (
                <S.Card key={g.title}>
                  <h4 style={{ margin: 0, fontWeight: 700 }}>{g.title}</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                    {g.items.map((s) => <S.Chip key={s}>{s}</S.Chip>)}
                  </div>
                </S.Card>
              ))}
            </S.CardsGrid>
          </S.Container>
        </S.Section>

        {/* PROJECTS */}
        <S.Section id="projects">
          <S.Container>
            <S.Title>Projects</S.Title>
            <div style={{ display: "grid", gap: 24 }}>
              {projects.map((p) => (
                <S.ProjectArticle key={p.title}>
                  <S.ProjectHead>
                    <div>
                      <S.ProjectTitle>{p.title}</S.ProjectTitle>
                      <S.Meta>{p.period} {p.award ? `· ${p.award}` : ""}</S.Meta>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      {p.links?.demo && p.links?.liveEnabled !== false ? (
                        <S.SmallBtn href={p.links.demo} target="_blank" rel="noreferrer">Live↗</S.SmallBtn>
                      ) : (
                        <S.SmallBtn as="button" disabled aria-disabled="true" title={p.links?.liveReason || "현재 Live 서비스가 중단되었습니다"}>
                          Live (off)
                        </S.SmallBtn>
                      )}
                      {p.links?.repo && (
                        <S.SmallBtn href={p.links.repo} target="_blank" rel="noreferrer">Repo↗</S.SmallBtn>
                      )}
                    </div>
                  </S.ProjectHead>

                  <S.P style={{ marginTop: 12, marginBottom: 0 }}>{p.summary}</S.P>
                  <S.TagRow>{p.stack.map((s) => <S.Chip key={s}>{s}</S.Chip>)}</S.TagRow>

                  <S.TwoCol>
                    <S.Ul>{p.role.map((r, i) => <li key={i}>{r}</li>)}</S.Ul>
                    <S.Ul>{p.highlights.map((h, i) => <li key={i}>{h}</li>)}</S.Ul>
                  </S.TwoCol>

                  {p.thumb &&
                    (Array.isArray(p.thumb) ? (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                          gap: 20,
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        {p.thumb.map((src, i) => (
                          <S.Thumb
                            key={i}
                            onClick={() => openLightbox(src, `${p.title} 썸네일 ${i + 1}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && openLightbox(src, `${p.title} 썸네일 ${i + 1}`)}
                            aria-label={`${p.title} 이미지 크게 보기 ${i + 1}`}
                            style={{ width: "100%", aspectRatio: "7 / 10", overflow: "hidden", borderRadius: 12 }}
                          >
                            <img src={src} alt={`${p.title} 썸네일 ${i + 1}`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
                          </S.Thumb>
                        ))}
                      </div>
                    ) : (
                      <S.Thumb
                        onClick={() => openLightbox(p.thumb, `${p.title} 썸네일`)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && openLightbox(p.thumb, `${p.title} 썸네일`)}
                        aria-label={`${p.title} 이미지 크게 보기`}
                        style={{ width: "50%", margin: "10px auto" }}
                      >
                        <img src={p.thumb} alt={`${p.title} 썸네일`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
                      </S.Thumb>
                    ))}
                </S.ProjectArticle>
              ))}
            </div>
          </S.Container>
        </S.Section>

        {/* AWARDS */}
        <S.Section id="awards">
          <S.Container>
            <S.Title>Awards</S.Title>
            <div style={{ display: "grid", gap: 12 }}>
              {awards.map((a, i) => (
                <S.Card key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14 }}>{a.what}</span>
                  <S.SmallMuted>{a.when}</S.SmallMuted>
                </S.Card>
              ))}
            </div>
          </S.Container>
        </S.Section>

        {/* CONTACT */}
        <S.Section id="contact">
          <S.Container>
            <S.Title>Contact</S.Title>
            <S.Card>
              <div style={{ fontSize: 14, color: isDark ? S.darkTheme.subtle : S.lightTheme.subtle }}>
                포트폴리오/협업 관련 문의는 이메일({me.email}) 또는 GitHub 이슈로 남겨 주세요. 빠르게 답변드리겠습니다.
              </div>
              <S.RowWrap>
                {me.email && <S.GhostBtn href={`mailto:${me.email}`}>이메일 보내기</S.GhostBtn>}
                {me.github && <S.GhostBtn href={me.github} target="_blank" rel="noreferrer">GitHub</S.GhostBtn>}
              </S.RowWrap>
            </S.Card>
          </S.Container>
        </S.Section>

        {/* FOOTER */}
        <S.Footer>
          <S.Container>© {new Date().getFullYear()} {me.nameKo}. All rights reserved.</S.Container>
        </S.Footer>

        {lightbox.open && (
          <S.LightboxOverlay onClick={closeLightbox} role="dialog" aria-modal="true">
            <S.LightboxImg src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
            <S.LightboxClose onClick={closeLightbox} aria-label="닫기">✕</S.LightboxClose>
          </S.LightboxOverlay>
        )}
      </S.Wrap>
    </ThemeProvider>
  );
}
