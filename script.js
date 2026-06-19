const menuDim = document.getElementById("menuDim");
const menuPanel = document.getElementById("menuPanel");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  menuPanel.classList.add("open");
  menuDim?.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  menuPanel.classList.remove("open");
  menuDim?.classList.remove("open");
});

menuDim?.addEventListener("click", () => {
  menuPanel.classList.remove("open");
  menuDim.classList.remove("open");
});

document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuPanel.classList.remove("open");
  });
});

const works = {
  persona: `
    <div class="work-inner">
      <h1 class="work-title">Persona</h1>
      <div class="work-subtitle">다중의 가면</div>
      <p>우리는 사회 속에서 다양한 역할을 수행하며 여러 얼굴을 지닌다. 관계와 상황에 따라 변화하는 현대인의 다중 정체성을 시각화한다.</p>

      <div class="artist-name">서가현 Seo Gahyeon</div>
      <div class="image-row">
        <div><img src="./assets/persona/sgh_01.jpg"><div class="caption">Shell #1</div></div>
        <div><img src="./assets/persona/sgh_02.jpg"><div class="caption">Shell #2</div></div>
        <div><img src="./assets/persona/sgh_03.jpg"><div class="caption">Shell #3</div></div>
      </div>
      <p>우리는 살아가며 수많은 껍질을 만들어낸다. 타인과 관계 맺고 사회 속에 존재하기 위해 형성된 모습들, 이른바 페르소나는 흔히 진실한 자아와 구분되는 가면으로 여겨진다.</p>
      <p>조개의 껍질은 연약한 속살을 감싸면서도 조개 자신으로부터 분리될 수 없다. 사람 또한 저마다의 껍질을 지닌 채 살아가며, 그 껍질은 자신을 감추는 동시에 자신을 드러낸다.</p>
    </div>
  `,

  desire: `
    <div class="work-inner">
      <h1 class="work-title">Desire</h1>
      <div class="work-subtitle">투영된 욕망</div>
      <p>디지털 미디어가 만들어내는 이상향과 욕망을 조명한다. 성공과 아름다움으로 포장된 이미지 속 현대인의 갈망을 탐색한다.</p>

      <div class="artist-name">손지영 Son Jiyoung</div>
      <div class="image-row two">
        <div><img src="./assets/desire/sjy_01.jpeg"><div class="caption">향수 Illusion</div></div>
        <div><img src="./assets/desire/sjy_02.jpeg"><div class="caption">구두 Distance</div></div>
        <div><img src="./assets/desire/sjy_03.jpeg"><div class="caption">보석 Impermanence</div></div>
        <div><img src="./assets/desire/sjy_04.jpeg"><div class="caption">립스틱</div></div>
      </div>
      <p>현실과 이미지의 경계가 흐려진 시대, 우리는 보이는 것을 현실이라 믿는다. 이미지는 욕망의 대상이 되고, 욕망은 다시 새로운 이미지를 만들어낸다.</p>

      <div class="artist-name">이동현 Lee Donghyun</div>
      <img src="./assets/desire/ldh_01.jpg" class="work-img">
      <div class="caption">과욕 Greed</div>
      <p>자신의 상황에 맞지 않음에도 끊임없이 갈구하는 인간의 욕망을 의류를 시각화하였다.</p>

      <img src="./assets/desire/ldh_02.jpg" class="work-img">
      <div class="caption">환상 Illusion</div>
      <p>인간은 흔하고 아름다운 명품을 통해 삶이 빛나는 환상을 꿈꾼다.</p>

      <img src="./assets/desire/ldh_03.jpg" class="work-img">
      <div class="caption">중독 Addiction</div>
      <p>인간은 원하는 것을 얻는 순간 또 다른 갈망을 좇는다.</p>
    </div>
  `,

  reality: `
    <div class="work-inner">
      <h1 class="work-title">Reality</h1>
      <div class="work-subtitle">이미지 너머의 진실</div>
      <p>완벽한 이미지 뒤에 숨겨진 감정과 서사를 마주한다. 가공되지 않은 기록을 통해 우리가 지켜야 할 진짜 모습을 질문한다.</p>

      <div class="artist-name">엄윤성 Um Yunseong</div>
      <img src="./assets/reality/uys_01.jpg" class="work-img">
      <div class="caption">흔들리는 현실 1 Faltering Reality 1</div>
      <p>보여지는 이미지와 실제 모습 사이에서, 빛을 가린 손끝은 선명함을 지우고 흐릿한 경계를 만든다.</p>

      <img src="./assets/reality/uys_02.jpg" class="work-img">
      <div class="caption">흔들리는 현실 2 Faltering Reality 2</div>
      <p>카메라 앞의 어색한 거리감은 실제 존재 사이의 틈을 남긴다.</p>

      <img src="./assets/reality/uys_03.jpg" class="work-img">
      <div class="caption">흔들리는 현실 3 Faltering Reality 3</div>
      <p>꽃으로 가려진 시선은 꾸며진 아름다움과 실제 존재 사이의 틈을 만든다.</p>

      <div class="artist-name">유준혁 U Junhyeok</div>
      <div class="image-row two">
        <img src="./assets/reality/ujh_01.jpg">
        <img src="./assets/reality/ujh_02.jpg">
        <img src="./assets/reality/ujh_03.jpg">
      </div>
      <div class="caption">청춘은 아름다운 말이지만</div>
      <p>청춘은 늘 아름다운 시기로 기록된다. 그러나 내가 지나고 있는 청춘은 때로 방황을 잃고 불안하며 쉽게 가라앉을 것만 같은 순간들의 연속이었다.</p>
    </div>
  `,

  simulation: `
    <div class="work-inner">
      <h1 class="work-title">Simulation</h1>
      <div class="work-subtitle">만들어진 이미지</div>
      <p>AI와 합성 기술이 만들어낸 새로운 이미지 환경을 탐구한다. 현실과 가상의 경계 속에서 무엇을 진짜라고 믿는지 되묻는다.</p>

      <div class="artist-name">양지훈 Yang Jihoon</div>
      <img src="./assets/simulation/yjh_01.png" class="work-img">
      <div class="caption">AI 색안경</div>
      <p>최근 해외 커뮤니티 사이트에 모네의 원작 그림을 AI 생성 이미지처럼 재해석한 작업이다.</p>
      <p class="note">*이 작업은 AI를 사용했습니다.</p>

      <img src="./assets/simulation/yjh_02.svg" class="work-img">
      <div class="caption">사진은 있지만, 사람은 없다 Portrait Without a Person</div>
      <p>사진은 오랫동안 존재의 증거로 여겨져 왔다. 그러나 이 작업 속 인물들은 사실 존재하지 않는 허구의 이미지다.</p>
      <p class="note">*이 작업은 AI를 사용했습니다.</p>
    </div>
  `,

  visage: `
    <div class="work-inner">
      <h1 class="work-title">Visage</h1>
      <div class="work-subtitle">자화상</div>
      <p>움직이는 이미지와 소리는 감정과 기억을 축적한다. 영상은 정지된 이미지 너머의 관계와 감각, 그리고 남겨진 잔상을 보여준다.</p>

      <div class="artist-name">김나린 Kim Narin &nbsp; 이정원 Lee Jeongwon</div>
      <video src="./assets/visage/visage.mp4" class="work-img" controls></video>
      <div class="caption">Visage: 자화상</div>
      <p>&lt;Visage : 자화상&gt;은 타인의 시선 속에서 끊임없이 자신을 꾸미고 감추며 살아가는 현대인의 모습을 다룬다.</p>
    </div>
  `,
};

const workContent = document.getElementById("workContent");
const tabs = document.querySelectorAll(".tab");

if (workContent && tabs.length > 0) {
  function showWork(section) {
    workContent.innerHTML = works[section];

    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.section === section);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showWork(tab.dataset.section);
    });
  });

  showWork("persona");
}
