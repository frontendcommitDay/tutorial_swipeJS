### swiperJS Option
- allowSlideNext: 다음 슬라이드 방향으로의 스와이프 활성화 여부
- allowSlidePrev: 이전 슬라이드 방향으로의 스와이프 활성화 여부
- allowTouchMove: false로 설정 시 slidePrev, slideNext API 함수로만 이동 가능
- autoHeight: slider wrapper가 현재 활성화 된 슬라이드 높이에 맞게 높이를 조정
- breakpoints: 화면 크기에 따른 매개변수 설정 가능, slidesPerView, slidesPerGroup, spaceBetween 사용 가능
- breakpointsBase(베타 버전)
  window나 container 설정 가능, breakpoint의 기준 너비를 설정할 수 있음. default 는 window
- centerInsufficientSlides: 슬라이드를 가운데로 슬라이드한다. loop모드, grid.rows와 사용 X
- centeredSlides: 활성 슬라이드가 중앙에 배치
- centeredSlidesBounds: 슬라이더 시작과 끝에 간격을 추가하지 않고 중앙에 배치, centeredSlides: true와 같이 사용되야함
- containerModifierClass: swiper 컨테이너에 추가할 수 있는 modifier CSS 클래스 prefix
- createElements: swiper-wrapper 요소로 슬라이드를 래핑하고, 필요한 요소를 만든다.
- cssMode: 최신 css scripp snap api를 사용  
< 활성화된 경우 `지원되지 않는 항목`은 다음과 같습니다. >
1. 큐브 및 카드 효과
2. speed 옵션
3. 모든 transition start/end 이벤트
4. slidesPerGroup제한
5. simulateTouch효과 X, drag X
6. resistance
7. allowSlidePrev/Next
8. swipeHandler
9. freeMode
- direction: 'horizontal' | 'vertical' 사용 가능
- edgeSwipeDetection: swipe-back 이벤트(뒤로 가기 이벤트)를 방지
- edgeSwipeThreshold: edgeSwipeDetection 임계값
- effect: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' 사용 가능, transition effect
- enabled: swiper 활성화 여부
- focusableElements: 'input, select, option, textarea, button, video, label' focus 되어 있으면 swiper 비활성화
- followFinger: 슬라이더를 놓을 때만 애니메이션 적용
- grabCursor: swiper에 마우스를 hover했을 때 grap 커서가 표시된다.
- height: swiper가 숨겨져있고, SSR 및 테스트 환경에서 초기화하는 경우만 유용
- init: 인스턴스 생성 시 swiper 자동 초기화 여부
- initialSlide: 초기 sipder index 번호
- longSwipes: long swipe 비활성화 여부
- longSwipesMs: 길게 스와이프 할 때 트리거 지속시간
- longSwipesRatio: 길게 스와이프 할 때, 다음, 이전 슬라이드로 트리거하는 비율
- loop: 연속 루프 모드/ loopedSlidesdes와 사용 X
- loopAdditionalSlides: 루프 생성 후 복제될 슬라이드 추가 수
- loopFillGroupWithBlank: 빈 슬라이드로 슬라이스가 부족한 그룹을 채움
- loopPreventsSlide: 전환이 진행 중일 때 이벤트를 방지
- loopedSlides: `slidesPerView:'auto'`와 사용하여 얼마나 많은 슬라이드를 복제하는지 알림
- maxBackfaceHiddenSlides: safari에서 깜박임을 줄이기위해 사용, 슬라이드 수가 많을 때는 활성화 하지 않는 것이 좋음.


