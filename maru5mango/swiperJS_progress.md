## ✨swiperJS 오픈컨트리뷰션을 향한 여정
### 😏 swiperJS의 첫 만남
- swiperJS를 demo 정도만 사용하고, 제대로 써본 적은 없음.
- 옵션이 많고, 옵션 간의 충돌이 있음

### 🥵 swiperJS의 다양한 이슈
##### 1. issue#5468       
`centeredSlides: true`이고, progress를 켜둔 상태에서 slide의 크기가 제각각일 때 progrress가 0이 되지 않는 이슈
vanillaJS 사용,
##### 2. issue#5427             
react 에서 hook을 사용하여 slider를 만들었는데, multipleslider가 아닌 단일 slide가 만들어짐.
##### 3. issue#5799               
react18를 사용하는데 `SwiperSlideProps`에서 에러가 있음. (typescript)
##### 4. issue#5797     
`slidesPerView, slidesPerGroup` 으로 4*4 형태로 slider를 만들었을 때, slide의 번호가 잘못 매겨짐.
##### 5. issue#5714        
`autoplay infinite slider`에 작게 flicker가 생김.

### ⛏ swiperJS의 이슈 선정_progress
- [issue#5468](https://github.com/nolimits4web/swiper/issues/5468)
- centeredSlides가 true이고, progress가 켜져 있는 상태에서 slide의 progress가 0이 되는 이슈

### 👀 swiperJS_Progress 추적
##### 1) core 폴더 뜯어보기
##### 2) core내의 폴더 살펴보기
##### 3) core > update > updateProgress.js 살펴보기
##### 4) updateProgress를 호출하는 부분 디버깅
##### 5) onScroll, onTouchMove, SlideTo, setTranslate, translateTo 등 updateProgress 호출 부분 살피기
##### 6) core > update > updateSlidesProgress.js 살펴보기
##### 7) updateSlidesProgress.js에서 현재 setting 과 관련된 코드
```javascript
export default function updateSlidesProgress(
  translate = (this && this.translate) || 0
) {
  const swiper = this;
  const params = swiper.params;

  const { slides } = swiper;

  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();

  let offsetCenter = -translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    const slideProgress =
      (offsetCenter + swiper.minTranslate() - slideOffset) /
      (slide.swiperSlideSize + params.spaceBetween);
    slide.progress = slideProgress;
  }
}
```
##### 7) issue5468에서 centeredSlides가 false이면, 정상 작동
##### 8) updateSlidesProgress에서 centeredSlides와 관련된 부분 : `swiper.minTranslate()`
##### 9) minTranslate = `-snapGrid[0]`
##### 10) slider 사이즈가 제각각일 때 snapGrid 정상 동작인지 확인하기
##### 11) core > update > updateSlides.js
##### 12) ...

### ⏳ swiperJS 컨트리뷰션을 하며 느낀점
- folder 구조가 option, event가 섞여 있어서 파악이 어려웠다.
- swiperJS 내의 param을 어떤 함수도 전부 접근해서 바꿀 수 있는 점이 원인 파악에서 어려웠다.
- 옵션 간의 충돌을 다 파악하기에 옵션이 너무 많았다.
- 쓰지 않는 라이브러리를 선택한 점에서 라이브러리 자체에 대한 이해가 부족했다.
- star가 많은 라이브러리라도 코드의 통일성이 없을 수 있다.
- 번역, 이슈에 대한 답변 등의 작은 컨트리뷰션도 많은 노력과 시간이 필요하다.
