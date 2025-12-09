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
    nameKo: "김태훈",
    role: "웹퍼블리셔, 프론트엔드 개발 지망생",
    summary:
  "신구대학교 IT소프트웨어학과 졸업(2019~2024).\n" +
  "2024년에는 MBC 컴퓨터 학원에서 UI/UX 웹디자인 과정을 배웠습니다.\n" +
  "2025년에는 프론트엔드 개발에 집중하며 모두의연구소 자바스크립트 웹 풀스택 과정에서 2차 미니프로젝트 ‘대상’, 파이널 프로젝트 ‘우수상’을 수상했습니다.",

    location: "서울 강동구 강일동",
    email: "xognswldk@gmail.com",
    github: "https://github.com/kth1257",
    velog: "https://velog.io/@ase777",
    phone: "010-4920-9597",
  };

  const skills = [
    { title: "Core", items: ["HTML", "CSS", "JavaScript(ES6+)"] },
    { title: "Frontend", items: ["React", "Vite", "Styled-Components"] },
    {
      title: "Tools",
      items: ["Git/GitHub"],
    },
    {
      title: "Design / Media",
      items: [
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "After Effects",
        "Figma",
        "Adobe XD",
      ],
    },
  ];

  const projects = [
    {
      title: "2차 미니 프로젝트 — Open Market UI",
      period: "2025.06",
      award: "대상 수상",
      summary:
        "바닐라 JS로 구현한 SPA 방식 오픈마켓의 상품 리스트/상세/회원가입·로그인 UI를 구현했습니다. 캐러셀, 라우팅, 상태 관리의 기본 원리를 학습했습니다.",
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
        "React + styled-components 기반 SNS/마켓 플랫폼입니다. 프론트엔드 3명, 백엔드 2명 팀으로 페이지 단위 구현과 Git Flow 협업을 경험했습니다.",
      stack: ["React", "styled-components", "Django/DRF"],
      role: [
        "Post Detail / Upload / Chat Room UI 구현",
        "컴포넌트 스타일 분리(파일 단위) 및 컨벤션 정립",
        "PR 템플릿/커밋 컨벤션 도입",
      ],
      highlights: [
        "협업 중심 Git Flow(Upstream, Fork, PR)",
        "디자인 시스템 기초 정립",
        "SPA 구조 설계 경험",
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
      summary:
        "오늘의 할 일을 기록하고 관리하는 To-Do-List 웹사이트입니다. 필터와 로컬 저장 기능으로 기본적인 상태 관리와 브라우저 저장소 사용을 연습했습니다.",
      stack: ["HTML", "CSS", "JavaScript"],
      role: ["기능 설계 및 구현 전담", "접근성을 고려한 키보드 인터랙션"],
      highlights: [
        "상태 기반 필터(전체/진행/완료)",
        "LocalStorage로 새로고침 후에도 데이터 보존",
        "간단한 애니메이션과 인터랙션 적용",
      ],
      links: {
        demo: "https://kth1257.github.io/To-do-list/to-do-list/",
        repo: "https://github.com/kth1257/To-do-list.git",
      },
      thumb: toDoList,
    },
    {
      title: "안드로이드 앱 — 나만의 미술관 (부분 구현)",
      period: "2023",
      summary:
        "안드로이드 스튜디오와 Firebase를 활용해 그림을 그리고 게시할 수 있는 미술관 앱을 부분 구현했습니다. UI는 Figma로 설계하고 XML 레이아웃과 Java로 화면을 구성했습니다.",
      stack: ["XML", "Java", "Firebase", "Figma"],
      role: [
        "화면 기획 및 Figma 프로토타입 설계",
        "메인 화면 및 일부 화면 XML 레이아웃 구현",
        "Firebase 연동을 위한 기초 세팅",
      ],
      highlights: [
        "UI 설계 → Android 구현까지의 전체 흐름 경험",
        "Firebase 연동 경험(기본 구조 위주)",
        "모바일 인터페이스 특성에 대한 이해",
      ],
      links: {
        demo: "https://odd-mandarin-70a.notion.site/14b5f29fab04802292c5c62ef32d6ea7",
        repo: null,
      },
      thumb: "https://i.postimg.cc/sDBy5K4K/art.jpg",
    },
    {
      title: "AI 팀 프로젝트 — Hand/Made",
      period: "2023",
      summary:
        "Python 기반 딥러닝 모델(GAN)에 손 이미지를 학습시켜 새로운 손 이미지를 생성하는 AI 팀 프로젝트입니다. 데이터 전처리와 결과 이미지 시각화를 중심으로 참여했습니다.",
      stack: ["Python"],
      role: [
        "프로젝트 기획 및 Notion 문서 정리",
        "학습용 손 이미지 데이터 수집 및 정리 지원",
        "생성 결과 이미지 정리 및 발표자료 제작",
      ],
      highlights: [
        "GAN 기반 이미지 생성 파이프라인 경험",
        "AI 프로젝트 협업 및 역할 분담 경험",
        "결과물을 시각적으로 정리해 설명하는 작업 수행",
      ],
      links: {
        demo: "https://odd-mandarin-70a.notion.site/AI-Hand-made-14b5f29fab04806bb628f3e8c2694086",
        repo: null,
      },
      thumb: "https://i.postimg.cc/6pQLKw0y/handmade.jpg",
    },
  ];

  const awards = [
    { when: "2025.06", what: "모두의연구소 2차 미니 프로젝트 대상" },
    { when: "2025.08", what: "모두의연구소 파이널 팀 프로젝트 우수상" },
  ];

   const photoshopImages = [
    { src: "https://i.postimg.cc/zXmvVndq/2.jpg", alt: "입생로랑 화장품 광고" },
    { src: "https://i.postimg.cc/1RV4mWrW/image.jpg", alt: "알로에 베라 화장품 광고" },
    { src: "https://i.postimg.cc/1t2t06sc/image.jpg", alt: "테팔 주방제품 광고" },
    { src: "https://i.postimg.cc/8cvCZ5C8/image.jpg", alt: "쿠쿠 가전제품 광고" },
    { src: "https://i.postimg.cc/C1z5fJTx/2.jpg", alt: "이벤트형 잡화 광고" },
    { src: "https://i.postimg.cc/xdsqChZZ/image.jpg", alt: "이벤트형 잡화 광고" },
    { src: "https://i.postimg.cc/J0H8R2wj/1-2.jpg", alt: "금연 공익광고" },
    { src: "https://i.postimg.cc/vDRsTtMk/image.jpg", alt: "특산물 광고" },
    { src: "https://i.postimg.cc/y6D3J6sy/2.jpg", alt: "특산물 광고" },
    { src: "https://i.postimg.cc/8PWFHyFF/2.jpg", alt: "북커버 디자인" },
    { src: "https://i.postimg.cc/tR8ZF0gQ/image.jpg", alt: "가구 브랜드 광고" },
    { src: "https://i.postimg.cc/P5QCGPQT/1.jpg", alt: "오픈마켓 광고" },
    { src: "https://i.postimg.cc/bvYsqpmb/3.jpg", alt: "오픈마켓 광고" },
    { src: "https://i.postimg.cc/XJK98L05/jazz.jpg", alt: "음악 관련 포스터" },
    { src: "https://i.postimg.cc/J7qbHpxV/LG.jpg", alt: "기업 브랜드 광고" },
    { src: "https://i.postimg.cc/nrHBwmHP/MJ.jpg", alt: "음악 관련 광고" },
    { src: "https://i.postimg.cc/sxw7F2xD/monami.jpg", alt: "문구류 광고" },
  ];

  const illustratorImages = [
    { src: "https://i.postimg.cc/B6FDqkk0/image.jpg", alt: "음료수 광고 디자인" },
    { src: "https://i.postimg.cc/tCpPjrzK/1.jpg", alt: "카페 명함 디자인" },
    { src: "https://i.postimg.cc/xT5mTKxc/2.jpg", alt: "미용실 명함 디자인" },
    { src: "https://i.postimg.cc/zvSghWq2/image.jpg", alt: "카페 메뉴판 디자인" },
    { src: "https://i.postimg.cc/HnCMj317/image.png", alt: "티켓 디자인" },
    { src: "https://i.postimg.cc/y6F92q0h/2.png", alt: "티켓 디자인" },
    { src: "https://i.postimg.cc/jjGwKpKP/c1.jpg", alt: "달력 봄 디자인" },
    { src: "https://i.postimg.cc/4dVK3WNM/c2.jpg", alt: "달력 여름 디자인" },
    { src: "https://i.postimg.cc/1zCxqS4V/c3.jpg", alt: "달력 가을 디자인" },
    { src: "https://i.postimg.cc/prvm5Kmd/c4.jpg", alt: "달력 겨울 디자인" },
  ];

  // ▼ Design & Media 요약 카드
  const mediaWorks = [
    {
      tool: "Photoshop",
      summary:
        "브랜드/공익광고/행사 포스터, 북커버, 가전·잡화 광고 등 다양한 합성·레터링 작업을 진행했습니다.",
      items: [
        "입생로랑/알로에 베라/테팔/쿠쿠 등 제품 광고 포스터",
        "금연 공익광고, 특산물/이벤트형 잡화 광고 디자인",
        "오픈마켓 및 음악 관련 포스터, 브랜드 광고 시리즈",
      ],
    },
    {
      tool: "Illustrator",
      summary:
        "명함·티켓·달력 등 인쇄물을 중심으로 벡터 기반 그래픽 작업을 수행했습니다.",
      items: [
        "카페/미용실 명함 디자인",
        "카페 메뉴판 및 티켓 디자인",
        "4계절(봄/여름/가을/겨울) 달력 일러스트 디자인",
      ],
    },
    {
      tool: "Premiere Pro",
      summary:
        "촬영본과 음악을 활용해 리듬감 있는 하이라이트 영상, 더빙 영상 편집을 경험했습니다.",
      items: [
        "케이크 만드는 과정을 음악에 맞춰 편집한 영상 — 「케이크 리듬」",
        "클로바 더빙을 활용한 유머 영상 — 「팔씨름」",
        "컷 편집, 타이밍, 자막·효과음 배치를 연습",
      ],
      links: [
        { label: "케이크 리듬", href: "https://youtu.be/yrZ6YY8TVCU" },
        { label: "팔씨름", href: "https://youtu.be/6N9EvGMUrOM" },
      ],
    },
    {
      tool: "After Effects",
      summary:
        "퍼펫툴과 합성을 활용해 모션 그래픽, 뮤직비디오 스타일 영상 등을 제작했습니다.",
      items: [
        "AI로 만든 과일 노래를 기반으로 한 모션 그래픽 영상 — 「과일노래」",
        "퍼펫툴을 활용한 캐릭터 애니메이션 영상 — 「The Final Clue」",
        "키프레임 애니메이션과 그래프 에디터 기초 학습",
      ],
      links: [
        { label: "과일노래", href: "https://youtu.be/dmoRcQ1Rb0A" },
        { label: "The Final Clue", href: "https://youtu.be/I6zlmO90n0U" },
      ],
    },
  ];

  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const openLightbox = (src, alt) => {
    setLightbox({ open: true, src, alt });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: "", alt: "" });
  };

  // Illustrator 슬라이더
  const [ilIndex, setIlIndex] = useState(0);

  const showPrevIllustrator = () => {
    setIlIndex((prev) =>
      (prev - 1 + illustratorImages.length) % illustratorImages.length
    );
  };

  const showNextIllustrator = () => {
    setIlIndex((prev) => (prev + 1) % illustratorImages.length);
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
    const v =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-h"
      ) || "56px";
    return parseFloat(v);
  };

  // 부드럽고 가벼운 이징(rAF)
  const animatedScrollTo = (toY, duration = 600) => {
    const startY = window.pageYOffset;
    const dist = toY - startY;
    const start = performance.now();
    const ease = (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2; // easeInOutCubic

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
      if (title)
        title.setAttribute("tabindex", "-1"),
          title.focus({ preventScroll: true });
    }, 660);
  }, []);

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "design", label: "Design" },
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
            <S.Brand href="#home" onClick={(e) => onNavClick(e, "home")}>
              {me.nameKo}
            </S.Brand>
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
              onClick={() => {
                runThemeTransition();
                setIsDark((v) => !v);
              }}
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
                    <S.GhostBtn
                      href={me.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub↗
                    </S.GhostBtn>
                  )}
                  {me.velog && (
                    <S.GhostBtn
                      href={me.velog}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Velog↗
                    </S.GhostBtn>
                  )}
                  {me.notion && (
                    <S.GhostBtn
                      href={me.notion}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Notion↗
                    </S.GhostBtn>
                  )}
                </S.RowWrap>
              </div>
              <S.Card>
                <S.InfoList>
                  <div>
                    <b>지역</b>
                    <span className="muted">{me.location}</span>
                  </div>
                  <div>
                    <b>이메일</b>
                    <span className="muted">{me.email}</span>
                  </div>
                  <div>
                    <b>전화</b>
                    <span className="muted">{me.phone}</span>
                  </div>
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
                디자인과 퍼블리싱, 프론트엔드 개발을 함께 공부하며 화면을 처음 기획하는 순간부터
                실제 동작하는 페이지까지 만드는 데 관심이 있습니다.
              </p>
                        
              <S.Ul>
                <li>신구대학교 IT소프트웨어학과 졸업 (2019–2024)</li>
                <li>MBC컴퓨터학원 UI·UX 웹디자인 과정 수료 — Photoshop, Illustrator, 이미지, 영상 편집 작업 경험</li>
                <li>모두의연구소 JS 웹 풀스택 과정 — 오픈마켓 SPA 대상, 들바다 파이널 우수상</li>
              </S.Ul>
                        
              <p>
                디자인과 개발을 함께 이해하는 웹 퍼블리셔 · 프론트엔드 개발자로 성장하고자 합니다.
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 8,
                    }}
                  >
                    {g.items.map((s) => (
                      <S.Chip key={s}>{s}</S.Chip>
                    ))}
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
                      <S.Meta>
                        {p.period} {p.award ? `· ${p.award}` : ""}
                      </S.Meta>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexShrink: 0,
                        flexWrap: "wrap",
                      }}
                    >
                      {p.links?.demo && p.links?.liveEnabled !== false ? (
                        <S.SmallBtn
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live↗
                        </S.SmallBtn>
                      ) : (
                        <S.SmallBtn
                          as="button"
                          disabled
                          aria-disabled="true"
                          title={
                            p.links?.liveReason ||
                            "현재 Live 서비스가 중단되었습니다"
                          }
                        >
                          Live (off)
                        </S.SmallBtn>
                      )}
                      {p.links?.repo && (
                        <S.SmallBtn
                          href={p.links.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Repo↗
                        </S.SmallBtn>
                      )}
                    </div>
                  </S.ProjectHead>

                  <S.P style={{ marginTop: 12, marginBottom: 0 }}>
                    {p.summary}
                  </S.P>
                  <S.TagRow>
                    {p.stack.map((s) => (
                      <S.Chip key={s}>{s}</S.Chip>
                    ))}
                  </S.TagRow>

                  <S.TwoCol>
                    <S.Ul>
                      {p.role.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </S.Ul>
                    <S.Ul>
                      {p.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </S.Ul>
                  </S.TwoCol>

                  {p.thumb &&
                    (Array.isArray(p.thumb) ? (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(3, minmax(0, 1fr))",
                          gap: 20,
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        {p.thumb.map((src, i) => (
                          <S.Thumb
                            key={i}
                            onClick={() =>
                              openLightbox(src, `${p.title} 썸네일 ${i + 1}`)
                            }
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) =>
                              e.key === "Enter" &&
                              openLightbox(
                                src,
                                `${p.title} 썸네일 ${i + 1}`
                              )
                            }
                            aria-label={`${p.title} 이미지 크게 보기 ${
                              i + 1
                            }`}
                            style={{
                              width: "100%",
                              aspectRatio: "7 / 10",
                              overflow: "hidden",
                              borderRadius: 12,
                            }}
                          >
                            <img
                              src={src}
                              alt={`${p.title} 썸네일 ${i + 1}`}
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                              }}
                            />
                          </S.Thumb>
                        ))}
                      </div>
                    ) : (
                      <S.Thumb
                        onClick={() =>
                          openLightbox(p.thumb, `${p.title} 썸네일`)
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          openLightbox(p.thumb, `${p.title} 썸네일`)
                        }
                        aria-label={`${p.title} 이미지 크게 보기`}
                        style={{ width: "50%", margin: "10px auto" }}
                      >
                        <img
                          src={p.thumb}
                          alt={`${p.title} 썸네일`}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                      </S.Thumb>
                    ))}
                </S.ProjectArticle>
              ))}
            </div>
          </S.Container>
        </S.Section>

                {/* DESIGN & MEDIA */}
        <S.Section id="design">
          <S.Container>
            <S.Title>Design &amp; Media</S.Title>

            <S.Prose>
              <p>
                Photoshop과 Illustrator를 사용해 광고, 포스터, 인쇄물, 달력 등
                다양한 작업을 진행했습니다. 아래에서는 웹/앱 개발과 별도로,
                디자인 작업물만 모아서 볼 수 있도록 구성했습니다.
              </p>
            </S.Prose>

            {/* Photoshop: 그리드 + 스크롤 + 모달 */}
            <S.DesignBlock>
              <h3 style={{ marginTop: 0 }}>Photoshop</h3>
              <S.P style={{ marginTop: 8 }}>
                브랜드 광고, 공익 광고, 북커버, 오픈마켓 프로모션 등 합성·보정
                작업 위주 포트폴리오입니다. 박스 안에서 스크롤하며 여러 이미지를
                한 번에 확인할 수 있습니다.
              </S.P>

              <S.PSGrid aria-label="Photoshop 작업 이미지 목록">
                {photoshopImages.map((img, idx) => (
                  <S.GalleryImgBtn
                    key={idx}
                    type="button"
                    onClick={() => openLightbox(img.src, img.alt)}
                    aria-label={`${img.alt} 크게 보기`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </S.GalleryImgBtn>
                ))}
              </S.PSGrid>
            </S.DesignBlock>

            {/* Illustrator: 슬라이더 + 모달 */}
            <S.DesignBlock style={{ marginTop: 24 }}>
              <h3 style={{ marginTop: 0 }}>Illustrator</h3>
              <S.P style={{ marginTop: 8 }}>
                명함, 메뉴판, 티켓, 계절 달력 등 벡터 기반 인쇄물 작업입니다.
                좌우 버튼으로 슬라이드하며 작업물을 넘겨볼 수 있습니다.
              </S.P>

              <S.SliderWrap aria-label="Illustrator 작업 슬라이더">
                <S.SliderBtn
                  type="button"
                  onClick={showPrevIllustrator}
                  aria-label="이전 작업 보기"
                >
                  ‹
                </S.SliderBtn>

                <S.SliderViewport>
  {illustratorImages.length > 0 && (
    <>
      <S.IlGalleryImgBtn
              type="button"
              onClick={() =>
                openLightbox(
                  illustratorImages[ilIndex].src,
                  illustratorImages[ilIndex].alt
                )
              }
              aria-label={`${illustratorImages[ilIndex].alt} 크게 보기`}
            >
              <img
                src={illustratorImages[ilIndex].src}
                alt={`${illustratorImages[ilIndex].alt} (${ilIndex + 1}/${illustratorImages.length})`}
                loading="lazy"
                decoding="async"
              />
            </S.IlGalleryImgBtn>
            <S.SliderMeta>
              {ilIndex + 1} / {illustratorImages.length}
            </S.SliderMeta>
          </>
        )}
      </S.SliderViewport>


                <S.SliderBtn
                  type="button"
                  onClick={showNextIllustrator}
                  aria-label="다음 작업 보기"
                >
                  ›
                </S.SliderBtn>
              </S.SliderWrap>
            </S.DesignBlock>

            {/* Premiere / After Effects 카드는 그대로 활용 */}
            <S.DesignBlock style={{ marginTop: 24 }}>
              <h3 style={{ marginTop: 0 }}>Motion &amp; Video</h3>
              <S.CardsGrid>
                {mediaWorks
                  .filter(
                    (w) => w.tool === "Premiere Pro" || w.tool === "After Effects"
                  )
                  .map((w) => (
                    <S.Card key={w.tool}>
                      <h4 style={{ margin: 0, fontWeight: 700 }}>{w.tool}</h4>
                      <S.P style={{ marginTop: 8 }}>{w.summary}</S.P>
                      <S.Ul style={{ marginTop: 8 }}>
                        {w.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </S.Ul>
                      {w.links && w.links.length > 0 && (
                        <div
                          style={{
                            marginTop: 12,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                          }}
                        >
                          {w.links.map((link) => (
                            <S.SmallBtn
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}↗
                            </S.SmallBtn>
                          ))}
                        </div>
                      )}
                    </S.Card>
                  ))}
              </S.CardsGrid>
            </S.DesignBlock>
          </S.Container>
        </S.Section>


        {/* AWARDS */}
        <S.Section id="awards">
          <S.Container>
            <S.Title>Awards</S.Title>
            <div style={{ display: "grid", gap: 12 }}>
              {awards.map((a, i) => (
                <S.Card
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
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
              <div
                style={{
                  fontSize: 14,
                  color: isDark ? S.darkTheme.subtle : S.lightTheme.subtle,
                }}
              >
                포트폴리오/협업 관련 문의는 이메일({me.email}) 또는 GitHub
                이슈로 남겨 주세요. 빠르게 답변드리겠습니다.
              </div>
              <S.RowWrap>
                {me.email && (
                  <S.GhostBtn href={`mailto:${me.email}`}>
                    이메일 보내기
                  </S.GhostBtn>
                )}
                {me.github && (
                  <S.GhostBtn
                    href={me.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </S.GhostBtn>
                )}
              </S.RowWrap>
            </S.Card>
          </S.Container>
        </S.Section>

        {/* FOOTER */}
        <S.Footer>
          <S.Container>
            © {new Date().getFullYear()} {me.nameKo}. All rights reserved.
          </S.Container>
        </S.Footer>

        {lightbox.open && (
          <S.LightboxOverlay
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <S.LightboxImg
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
            />
            <S.LightboxClose onClick={closeLightbox} aria-label="닫기">
              ✕
            </S.LightboxClose>
          </S.LightboxOverlay>
        )}
      </S.Wrap>
    </ThemeProvider>
  );
}
