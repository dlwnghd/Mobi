# 커밋 컨벤션 만들기

## 목표 : 누구나 부담없이 사용하고 서로 알아볼 수 있는 컨벤션
- 커밋 컨벤션을 통해 서로의 작업을 빠르게 이해
- 커밋 해석에 드는 비용(시간)을 줄이고자 커밋 컨벤션을 제작

---

### [형태]
```
[Gitemoji][분류 제목]: [요약]
```

---

### [설명]
1. 가장 앞에 Gitemoji를 추가
1. 가독성이 좋은 3~4 글자의 대문자 제목 활용
    1. ":"의 위치는 5번째 위치 ➡️ 가독성
1. "요약"은 자유롭되 50자를 넘어가지 않도록 한다.

---

### [이모지][분류 제목]: 내용
```
🎉INIT: (Begin a project) 프로젝트 시작
⚙️SET : (Setting) 필수 기본 파일 추가 및 수정(Ex.index.js,page.js...)
🤡MOCK: (Mock things) Mock 데이터 파일 및 코드 추가/수정
👷CICD: (CI/CD)CI/CD 빌드 시스템을 추가/수정
📝DOC : (Documentation) 문서화 관련된 작업
✨ENH : (Enhancement) 개선하거나 신기능 추가
💄UXUI: (Add or update the UI and Style files) UI나 style 파일 추가 및 수정
🙈IGN : (Add or update a .gitignore file) .gitignore 파일 추가 및 수정
🚚MOVE: (Move or Rename Resorces) 파일 및 리소스 위치 이동
🔥DEL : (Remove Code or Files) 파일 및 코드 삭제
🚑FIX : (Error Fix) 에러 수정 및 해결
⏪REVE: (Revert changes) 변경 내용 되돌리기
🔀MERG: (Merge branches) 브랜치 병합
♻️REF : (Refactor) 코드 리팩토링한 작업
✅TEST: (Add, update or pass tests) 새로운 유닛 테스트를 추가하거나 기존 테스트를 수정
🧪FAIL: (Add a failling test) 실패하는 테스트 추가
🐛BUG : (Bug) 버그 수정
🔖VER :	릴리즈/버전 태그
🔍SEO : (Improve SEO) SEO 개선 코드
⚡️PERF: (Performance) 계산 속도의 개선과 관련된 작업
```

---

### [예시]

```
ex) ♻️REF : 미사용 코드 제거
    ✨ENH : 예약 확인 및 수정 intersectionObserver로 페이징 + 무한스크롤 구현
    💄UXUI: 새 소식 상세 페이지 UI 적용
    🙈IGN : .env.local 파일 무시 추가
    🎉INIT: 프로젝트 시작
```

---

#### 참고 자료
- https://www.intelligencelabs.tech/88407556-c76e-49ea-8df2-2140a80ba2ad
- https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-Gitmoji-%EC%82%AC%EC%9A%A9%EB%B2%95-Gitmoji-cli

---

#### ⚠️ 추후 커밋 메세지 컨벤션 추가
<!--
- https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
- https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0#%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B5%AC%EC%A1%B0
- https://doublesprogramming.tistory.com/256
  -->
