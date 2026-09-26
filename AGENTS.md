<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# JonnyLab website and private workspace

## Scope and architecture

- This repository is the canonical source for the JonnyLab marketing site, product
  and legal pages, static demonstration assets, and the private Daily Desk
  workspace. Read `PROJECT_STATE.md` before changing a current feature or release.
- The site is a Next.js static export. Use `npm ci`, `npm run dev`, and
  `npm run build`; build output is `out/`. There is no production Next.js server
  and `next start`, server actions, runtime proxies, and image optimization
  services are out of scope.
- Keep public website routes in `app/(en)` and `app/(ko)`. Their layouts preserve
  URL and HTML-language behavior through `components/SiteDocument.tsx`; do not
  merge or replace root layouts casually.
- Keep Daily Desk isolated: its page is `app/(desk)/daily-desk`, its client UI is
  `components/DailyDesk.tsx`, and its private persistence API is the separate
  `workers/daily-desk-api/` Cloudflare Worker. Do not turn personal Desk data into
  a static asset, browser analytics event, public API, repository fixture, or
  marketing content.
- The Daily Desk Worker derives the storage owner solely from a verified Cloudflare
  Access identity and hashes it before D1 storage. Do not accept an owner ID,
  identity email, Access audience, or authorization assertion supplied by browser
  input. Preserve the revision-based compare-and-swap write behavior.

## Code and module conventions

- Prefer small, route-local page components and shared components only when the
  presentation or behavior is genuinely reused. Keep site metadata in
  `lib/siteMetadata.ts`, shared document structure in `components/SiteDocument.tsx`,
  and public route behavior in the appropriate language group.
- New indexable public pages need factual title, description, canonical URL, and
  Open Graph metadata. Use `createPageMetadata` when it fits; preserve the correct
  English (`en_US`) or Korean (`ko_KR`) locale. Private Daily Desk pages must retain
  their noindex metadata and hosting header.
- Use TypeScript for Next.js application code and the existing Node/Worker module
  conventions for focused tests and Worker code. Keep browser state validation at
  the Daily Desk boundary; a malformed server response must not be treated as a
  valid journal state.
- Do not weaken static-export compatibility to add convenience. A feature that
  needs authenticated persistence belongs behind a separately provisioned Worker
  boundary, not in a public page bundle.

## Content, privacy, and compatibility

- Preserve published product, privacy, support, store-attribution, canonical and
  language-switch URLs. Public claims must match verified product behavior; do not
  invent AI, security certifications, encryption, compliance, cloud processing,
  analytics, tracking, app capabilities, or support contacts.
- Use the existing support channels and brand components. English is the default
  for public product pages and Korean pages must remain semantically aligned where
  a translated route exists.
- The inquiry form creates a local draft/mailto link. The standalone automation
  demo is simulated and must never send or retain customer data.
- Do not commit API keys, passwords, private keys, access tokens, credentials,
  personal journal content, `.env` files, release archives, or generated `out/`.
  Record only variable names and provisioning prerequisites in documentation.
- Add dependencies only when the existing Next.js/React/browser or Worker runtime
  cannot implement the requirement safely. Document the reason and verify lockfile
  changes. Avoid dependencies for small static UI behavior.

## Verification and release

- For a focused UI/content change, run the relevant tests plus `npm run lint` and
  `npm run build`. For Daily Desk API changes, run
  `node workers/daily-desk-api/test.mjs` in addition to the site checks. Use
  `git diff --check` before committing. Do not claim browser, accessibility,
  Access, D1, Worker, or live-deployment behavior unless it was actually checked.
- Cloudflare Pages receives only the contents of `out/`, never source, reports,
  environment files, release manifests, or customer data. A commit or Git push
  backs up source but does not deploy Pages. Production release requires a fresh
  `npm run release` and an explicit upload of the reviewed artifact.
- `public/_headers` and `public/_redirects` configure static hosting. Hostname
  redirects belong in Cloudflare zone rules. Cloudflare Worker routes, Access
  policies, D1 migrations, DNS, and deployment actions are infrastructure changes:
  inspect and obtain explicit authorization for the exact target before modifying
  them.
- Preserve MX/mail TXT records, API subdomains, Access applications, Workers, and
  unrelated services during website work. Keep a known working deployment for
  rollback until the changed public route is verified.

## Repository practice

- Keep temporary plans, release archives, build output, diagnostics, and user data
  out of commits. Update `PROJECT_STATE.md` when a milestone, deployment fact,
  privacy boundary, test result, or next priority materially changes; keep it as a
  concise factual snapshot rather than a chronological conversation history.
- Inspect the working tree before edits. Preserve unrelated changes. Do not reset,
  discard, reformat broadly, or modify the historical `jonnylab-automation-site`
  folder as part of normal website work.
- Commit only reviewed, scoped source and documentation changes with an imperative,
  descriptive message. Push only when explicitly authorized. Reusable agent skills
  may guide implementation and verification, but must not expand the approved
  scope, publish content, change infrastructure, or access private data.

<!-- BEGIN:work-session-operating-protocol -->
## Work Session Operating Protocol

You are taking over an existing software project. Do not assume this is a new
project and do not redesign the system from scratch. Before making any
changes, establish the current project state.

이 Work에서는 기존 프로젝트 운영 규칙을 최우선으로 따르면서, 필요한 경우
reusable Agent Skills를 선택적으로 활용한다. 새 세션을 시작하면 먼저 현재
repository와 project state를 확인하고, 이미 결정된 내용을 불필요하게 다시
논의하지 않는다.

### 1. Source of Truth

프로젝트에 다음 파일이 존재하면 반드시 먼저 읽는다.

```
AGENTS.md
PROJECT_STATE.md
```

필요한 경우 다음도 확인한다.

```
DECISIONS.md
ROADMAP.md
README.md
docs/
```

`AGENTS.md`는 persistent project rules, architecture constraints, coding
conventions, testing requirements, agent behavior의 authoritative source로
취급한다. `PROJECT_STATE.md`는 current milestone, completed work, known
issues, pending decisions, next priorities의 authoritative source로 취급한다.

우선순위는 다음과 같다.

```
Explicit user instruction
→ AGENTS.md
→ PROJECT_STATE.md
→ Existing project decisions
→ This operating prompt
→ General default behavior
```

기존 프로젝트에 정의된 architecture, approval boundary, testing policy,
model routing 등을 임의로 변경하지 않는다.

### 2. Session Start

새 세션에서는 다음 순서로 시작한다.

1. `AGENTS.md` 확인
2. `PROJECT_STATE.md` 확인
3. 현재 milestone / task 확인
4. 관련 코드와 실제 repository 상태 확인 (repository structure, current Git
   branch, `git status`, recent relevant commits, build configuration, test
   configuration, important dependencies, files relevant to the current
   milestone)
5. 현재 task에 유용한 Skill이 있는지 판단
6. 필요한 경우에만 Skill 사용
7. 바로 현재 task를 이어서 수행

이 단계에서는 아직 파일을 수정하지 않는다. 이미 repository 문서에 명확히
기록된 내용을 사용자에게 다시 질문하지 않는다. 중요한 프로젝트 상태와 운영
결정은 가능한 경우 chat context에만 남기지 말고 repository 문서에도
반영한다.

### 3. Reconcile Documentation with Reality

Repository를 `PROJECT_STATE.md`와 비교한다. `PROJECT_STATE.md`가
오래되었거나 실제 코드와 충돌하는 것으로 보이면, 둘 중 하나가 맞다고
조용히 가정하지 말고 그 불일치를 먼저 보고한다.

### 4. Build a Working Mental Model

구현을 시작하기 전, 다음을 내부적으로 정리한다.

- 제품이 현재 무엇을 하는가
- 현재 아키텍처
- 현재 milestone
- 이미 끝난 작업
- 의도적으로 범위 밖인 것
- 주요 제약사항
- 알려진 버그 또는 technical debt
- 다음으로 이어질 논리적인 task

강력한 근거가 없는 한 기존 아키텍처와 제품 결정은 그대로 유지한다. 다른
구현이 더 깔끔해 보인다는 이유만으로 광범위한 리팩터링을 수행하지 않는다.

### 5. Work Policy

다음을 우선한다.

- minimal, targeted changes
- existing project patterns
- verification over assumption
- tests/build checks after meaningful changes
- evidence before architectural changes

Consequential하거나 어려운 변경에는 다음을 분리한다.

```
Understand → Decide → Act
```

Data loss, destructive modification, external side effects, irreversible
consequences의 유의미한 위험이 있는 action에는 다음을 적용한다.

```
Confirm → Verify → Recover
```

Secret은 절대 노출하거나 커밋하지 않는다.

### 6. Available Skills

현재 우선적으로 사용할 수 있는 핵심 엔지니어링 Skill 카탈로그:

- Archify: 아키텍처 다이어그램 및 시스템 경계 시각화
- systematic-debugging: 가설 기반 체계적 결함 추적
- verification-before-completion: 증거 기반 완료 상태 검증
- requesting-code-review: 단계별 변경사항 심층 코드 리뷰
- writing-plans: 다중 파일/단계 작업 실행 계획 수립
- writing-skills: 재사용 가능한 에이전트 워크플로우 템플릿화
- test-driven-development (TDD): 실패하는 테스트 작성 후 최소 구현 및
  리팩터링
- security-audit: OWASP 취약점, 시크릿 누출, 권한 경계 검사
- api-contract-verification: OpenAPI/Schema 변경점 브레이킹 체인지 및
  호환성 점검
- git-workflow-hygiene: 원자적 커밋 구성, 컨벤셔널 커밋 및 PR 설명서
  자동화

Skill이 존재한다는 이유만으로 무조건 호출하지 않는다. 현재 작업의 정확도,
안정성, 이해 가능성 또는 재사용성을 실질적으로 높일 때만 사용한다.

**Archify**
- 사용 시점: 시스템 boundary 변경, 신규 external dependency 추가,
  permission/approval boundary 변경, architecture visualization 명시 요청
- 핵심 diagram은 8~12개 주요 컴포넌트로 제한하며, 결과물은
  `docs/architecture/`에 보존

**systematic-debugging**
- 사용 시점: 원인 불명 버그, regression, 재현 조건 불명 결함, 반복 수정
  실패
- 기본 흐름: `Reproduce → Gather Evidence → Root Cause Hypothesis → Test
  Hypothesis → Fix → Verify`

**verification-before-completion**
- 구현 완료 선언 전 반드시 호출
- Tests, Build, Lint, Type Check, Runtime Logs 등 실제 실행 Evidence가
  없으면 `Completed`라 칭하지 않고 `Implemented but not fully verified`로
  표기

**test-driven-development (TDD)**
- 사용 시점: 비즈니스 로직 단위 구현, Edge case가 중요한 파서/계산 모듈,
  버그 패치 전 재현 케이스 고정
- 항상 실패하는 단위 테스트(Red)를 먼저 확보한 뒤 구현(Green) 진행

**security-audit**
- 사용 시점: 인증/인가 로직 수정, 외부 입력 처리 파이프라인 변경, API Key
  및 환경 변수 추가, 패키지 의존성 업데이트 시
- 정적 분석 및 시크릿 패턴 검사, 권한 경계(Trust boundary) 위반 여부 확인

**api-contract-verification**
- 사용 시점: DB schema 변경, API 엔드포인트 파라미터/반환값 수정, DTO
  마이그레이션
- 이전 버전 클라이언트와의 하위 호환성 및 OpenAPI/Protobuf 명세 일치 여부
  검증

**git-workflow-hygiene**
- 작업 단위 분리, squash 필요성 검토, semantic commit message(feat, fix,
  refactor 등) 작성 표준화

### 7. Existing Project Rules

이 Skill 정책은 기존 Work 운영체계를 대체하지 않는다. 특히 다음이 이미
정의되어 있다면 그대로 유지한다.

- Worker / Reviewer / Architect 계층 체계
- milestone-based execution
- `AGENTS.md`
- `PROJECT_STATE.md`
- approval boundaries
- test / verify / review requirements
- architecture conventions
- coding conventions
- security requirements

Skill은 이 구조 안에서 필요한 순간에 호출되는 보조 capability로 취급한다.

### 8. Model Routing (Claude)

Claude 모델 계층은 Haiku 4.5 → Sonnet 5 → Opus 5 순으로 사용하며, 각 모델
내에서도 extended thinking(추론 강도)을 Off/Low/Medium/High로 조절해
세분화한다. Thinking을 켜면 latency와 비용이 늘어나므로, 모델 단계와
thinking 강도는 항상 함께 결정한다.

**Claude Haiku 4.5** — 담당:
- 구현, 코드 수정, 단위 테스트 작성 및 실행
- 반복 작업, Lint/타입 에러 수정, 문서화
- 일반적인 디버깅 및 명확한 실행 계획 수행

권장 설정:
- 기본 구현/단순 작업: `Thinking: Off`
- 분기 로직 점검, TDD 단위 테스트, 다단계 파싱: `Thinking: Medium`

**Claude Sonnet 5** — 담당:
- 코드 변경점 검토 및 1차 PR 리뷰
- 원인 불명의 버그 디버깅 (systematic-debugging)
- 인터페이스 계약 검증 (api-contract-verification)
- 보안/권한 경계 1차 감사 (security-audit)
- 기술적 트레이드오프 분석 및 리팩터링 검토

권장 설정: `Thinking: High`

**Claude Opus 5** — 담당:
- 전체 시스템 아키텍처 및 모듈 경계 설계 (Archify)
- 대규모 코드베이스 cross-validation 및 최종 기술 승인
- 고난도 시스템 병목, 동시성/분산 트랜잭션 이슈 해결
- Sonnet 5 레벨에서 해결되지 않은 문제의 Escalation
- 데이터 손실/보안/프로덕션 장애 위험이 큰 핵심 의사결정

권장 설정:
- 복잡한 코드 리뷰 및 심층 검증: `Thinking: Medium`
- 핵심 아키텍처 설계 및 최고 난도 추론/에스컬레이션: `Thinking: High`

### 9. Routing Principle

항상 현재 작업을 안정적으로 수행할 수 있는 가장 낮은 Model tier + Thinking
depth를 우선한다.

다음 상황에서는 즉시 상위 모델인 Claude Opus 5로 escalation한다:

- 동일 문제를 반복해서 해결하지 못함
- 요구사항이 모호하고 컴포넌트 간 상호작용이 복잡함
- 데이터 무결성 파괴, 시크릿 유출, 프로덕션 장애 위험
- 여러 컴포넌트에 영향을 미치는 설계 및 기술 스택 교체 판단
- 현재 모델의 신뢰도(confidence)가 낮고 최종 검증에 높은 보증이 필요한
  경우

목표는 최소 모델 사용이 아니다. 필요한 성능과 신뢰도를 유지하면서
불필요한 reasoning latency 및 resource 소비를 줄이는 것이다.

### 10. Approval Policy

**Approval Required**
- 아키텍처 변경, 신규 라이브러리/의존성 도입
- DB 스키마 수정 및 데이터 마이그레이션
- 프로덕션 배포, Secret/Credential/권한 설정 변경
- 비즈니스 요구사항이나 제품 스펙의 수정

**Approval Not Required**
- 기승인된 계획에 따른 코드 구현 및 단위 테스트 작성
- 버그 픽스, 정적 분석 에러/Lint 수정
- 문서화, 아키텍처 다이어그램 업데이트

### 11. State Management

의미 있는 변경이 있었다면 프로젝트 상태를 repository에 반영한다.

```
PROJECT_STATE.md
DECISIONS.md
ROADMAP.md
AGENTS.md
```

- Milestone, architecture decision, important limitation, next priority가
  바뀌면 `PROJECT_STATE.md`를 갱신한다.
- Durable project rule이 바뀌면 `AGENTS.md`를 갱신한다.

Chat 메모리에만 의존하지 않고 항상 파일 시스템에 최신 상태를 기록한다.
Repository는 여러 AI agent/provider 간에 이식 가능한 상태를 유지해야 한다.

### 12. Session End Report

각 세션 종료 시 아래 형식으로 보고한다.

**이번 세션 결과 / Feedback** — 포함할 내용:
- 작업 내용 및 실제 실행 결과
- 남아 있는 blocker / risk
- 다음 세션이 알아야 할 핵심 context

**Verification** — 다음 중 하나를 명시한다: `Verified` / `Partially
Verified` / `Not Verified` (실행 증거 또는 미검증 사유를 반드시 1줄 첨부)

**이전 단계 요약** — 이번 세션 시작 전 상태를 2~4줄로 요약.

**다음 행동 추천**
```
Next:
<다음 행동 하나>
```

**사용자 승인**
```
Approval Required: Yes / No
Reason: <이유>
```

**추천 모델**
```
Recommended: Claude Haiku 4.5 (Thinking: Off)
Reason: 확정된 스펙 기반의 단위 테스트 및 기능 구현 작업.
```

### 13. Session End Example

```
## 이번 세션 결과 / Feedback

OAuth2 Refresh Token 갱신 파이프라인을 구축하고 토큰 만료 시나리오 테스트를 완료했다.
기존 Redis 세션과 동기화하는 과정에서 동시 요청 시 레이스 컨디션이 발생할 가능성을 확인하여 락 처리를 추가했다.

Verification: Verified
Evidence: jest --runInBand auth.e2e.spec.ts 전체 통과 및 Redis 키 만료 로그 확인.

## 이전 단계 요약

OAuth 기본 로그인 및 Access Token 발급 로직만 구현되어 만료 시 강제 로그아웃되는 상태였음.

## 다음 행동 추천

Next:
클라이언트 세션 인터셉터에 토큰 자동 갱신 요청 fallback 로직을 구현한다.

## 사용자 승인

Approval Required: No
Reason: 기존 인증 마일스톤 범위 내 내부 로직 보완 작업.

## 추천 모델

Recommended: Claude Haiku 4.5 (Thinking: Medium)
Reason: HTTP 인터셉터의 비동기 큐잉 및 재시도 로직 구현에 적절한 추론이 필요함.
```

### 14. Begin the Requested Task

Current task: (세션마다 실제 요청받은 task로 대체 — 고정된 반복 문구가
아니라 매 세션의 실제 작업 지시를 채워 넣는 템플릿 자리)

구현에 들어가기 전, 다음을 포함한 간결한 state check를 먼저 제시한다.

- Current milestone
- Relevant architecture
- Files likely involved
- Important constraints
- Proposed approach

그 다음, genuinely blocking한 ambiguity나 high-risk action이 사용자
결정을 요구하지 않는 한 바로 task를 진행한다.

### Final Operating Principle

```
Project state > Chat memory
Evidence > Assumption
Verification > Confidence
Simple execution > Unnecessary process
Useful Skill usage > Skill usage for its own sake
Lowest sufficient model > Unnecessary escalation
```
<!-- END:work-session-operating-protocol -->
