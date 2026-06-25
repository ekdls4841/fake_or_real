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

    <div class="artist-section">
      <div class="artist-name">서가현 Seo Gahyeon</div>

      <div class="artwork">
        <img src="./assets/persona/sgh_01.jpg">
        <div class="caption">Shell #1</div>
      </div>

      <div class="artwork">
        <img src="./assets/persona/sgh_02.jpg">
        <div class="caption">Shell #2</div>
      </div>

      <div class="artwork">
        <img src="./assets/persona/sgh_03.jpg">
        <div class="caption">Shell #3</div>
      </div>

      <p class="artwork-desc">
        우리는 살아가며 수많은 껍질을 만들어낸다. 타인과 관계 맺고 사회 속에 존재하기 위해 형성된 모습들, 이른바 페르소나는 흔히 진실한 자아와 구분되는 가면으로 여겨진다.<br><br>
        조개의 껍질은 연약한 속살을 감싸면서도 조개 자신으로부터 분리될 수 없다. 사람 또한 저마다의 껍질을 지닌 채 살아가며, 그 껍질은 자신을 감추는 동시에 자신을 드러낸다. 사진 속 푸른빛 손은 인간과 껍질이 같은 근원 위에 놓여 있음을 암시하며, 둘의 관계가 대립이 아니라 서로를 구성하는 것임을 보여준다.<br><br>
        껍질과 속살, 가면과 얼굴, 페르소나와 자아 — 이 모든 경계는 어쩌면 우리가 스스로 그어왔던 선일지도 모른다. 껍질을 벗어낸 자리에 남는 것은 무엇인가. 이 질문은 결국 관람자 자신에게로 향한다.
      </p>
    </div>
  </div>
`,

  desire: `
  <div class="work-inner">
    <h1 class="work-title">Desire</h1>
    <div class="work-subtitle">투영된 욕망</div>
    <p>디지털 미디어가 만들어내는 이상향과 욕망을 조명한다. 성공과 아름다움으로 포장된 이미지 속 현대인의 갈망을 탐색한다.</p>

    <div class="artist-section">
      <div class="artist-name">손지영 Son Jiyoung</div>

      <div class="artwork">
        <img src="./assets/desire/sjy_01.jpeg">
        <div class="caption">향수 <span class="caption-en">Illusion</span></div>
      </div>

      <div class="artwork">
        <img src="./assets/desire/sjy_02.jpeg">
        <div class="caption">구두 <span class="caption-en">Distance</span></div>
      </div>

      <div class="artwork">
        <img src="./assets/desire/sjy_03.jpeg">
        <div class="caption">보석 <span class="caption-en">Impermanence</span></div>
      </div>

      <div class="artwork">
        <img src="./assets/desire/sjy_04.jpeg">
        <div class="caption">립스틱 <span class="caption-en">Projection</span></div>
      </div>

      <p class="artwork-desc">
        현실과 이미지의 경계가 흐려진 시대, 우리는 보이는 것을 현실이라 믿는다. 이미지는 욕망의 대상이 되고, 욕망은 다시 새로운 이미지를 만들어낸다. 본 작업은 이상향을 향한 갈망과 그 이면에 자리한 공허함을 탐색하며, 이미지로 가득한 시대 속 우리가 무엇을 동경하고 믿어왔는지 묻는다.<br><br>
        향수는 손에 닿을 듯 가까이 존재하지만 끝내 붙잡을 수 없는 환상이다. 그것은 우리가 끊임없이 동경하지만 결코 완전히 소유할 수 없는 욕망의 형상을 드러낸다.<br><br>
        구두는 보이는 모습과 존재하는 실체 사이의 틈을 보여준다. 사회가 요구하는 이상적인 이미지와 그 안에 숨겨진 자아가 충돌하는 지점을 상징한다.<br><br>
        보석은 영원히 빛날 것 같은 아름다움을 품고 있지만, 시간의 흐름 속에서 서서히 형태를 잃어간다. 이를 통해 변하지 않을 것이라 믿었던 가치와 욕망의 허상을 드러낸다.<br><br>
        립스틱은 자신을 드러내기 위해 만들어진 이미지다. 덧입혀진 색과 형태는 또 다른 모습을 만들어내며, 가공된 모습이 현실보다 더 진짜처럼 인식되는 순간을 드러낸다.
      </p>
    </div>

    <div class="artist-section">
      <div class="artist-name">이동현 Lee Donghyun</div>

      <div class="artwork">
        <img src="./assets/desire/ldh_01.jpg">
        <div class="caption">과욕 <span class="caption-en">Greed</span></div>
        <p class="artwork-desc single">
          자신의 상황에 맞지 않음에도 끊임없이 갈구하는 인간의 맹목적인 욕망을 시각화하였다. 맨몸 위에 걸친 명품 청자켓, 계절에 맞지 않는 패딩, 제 용도를 잃고 바지가 된 맨투맨은 어긋난 집착을 보여준다. 맞지 않는 옷을 억지로 끼워 입듯, 물질적 욕망의 모순과 그 끝없는 굴레를 폭로하고자 한다.
        </p>
      </div>

      <div class="artwork">
        <img src="./assets/desire/ldh_02.jpg">
        <div class="caption">환상 <span class="caption-en">Illusion</span></div>
        <p class="artwork-desc single">
          인간은 흔하고 아름다운 명품을 통해 삶이 빛나는 환상을 꿈꾼다. 나는 로고가 가득한 옷들과 깨진 유리를 한 화면에 담아, 과시욕이 만든 화려한 환상과 정면으로 부딪치며 그 너머의 진정한 자유를 찾고자 한다.
        </p>
        <p class="note">*이 작업은 AI를 사용했습니다.</p>
      </div>

      <div class="artwork">
        <img src="./assets/desire/ldh_03.jpg">
        <div class="caption">중독 <span class="caption-en">Addiction</span></div>
       <p class="artwork-desc single">
          인간은 원하는 것을 얻는 순간 또 다른 갈망을 좇는다. 한 입 베어 문 채 땅에 지저분하게 버려진 도넛은 끝없는 집착을 뜻한다. 나는 이 비참한 풍경을 통해 채워지지 않는 인간 욕망의 한심하고 덧없는 깊이를 표현하고자 했다.
        </p>
      </div>
    </div>
  </div>
`,

  reality: `
  <div class="work-inner">
    <h1 class="work-title">Reality</h1>
    <div class="work-subtitle">이미지 너머의 진실</div>
    <p>완벽한 이미지 뒤에 숨겨진 감정과 서사를 마주한다. 가공되지 않은 기록을 통해 우리가 지켜야 할 진짜 모습을 질문한다.</p>

    <div class="artist-section">
      <div class="artist-name">엄윤성 Um Yunseong</div>

      <div class="artwork">
        <img src="./assets/reality/uys_01.jpg">
        <div class="caption">흔들리는 현실 1 <span class="caption-en">Faltering Reality 1</span></div>
        <p class="artwork-desc single">
          보여지는 이미지와 실제 모습 사이에서, 빛을 가린 손끝은 선명함을 지우고 흐릿한 경계를 만든다. 그 틈으로 우리가 외면한 불완전한 현실과 흔들리는 감각이 조용히 드러난다.
        </p>
      </div>

      <div class="artwork">
        <img src="./assets/reality/uys_02.jpg">
        <div class="caption">흔들리는 현실 2 <span class="caption-en">Faltering Reality 2</span></div>
        <p class="artwork-desc single">
          카메라 앞의 어색한 거리감은 보여주고 싶은 모습과 실제 존재 사이의 틈을 남긴다. 초점 밖의 발걸음은 연출된 장면 너머의 흔들리는 현실과 불안정한 감각을 조용히 드러낸다. 서서히.
        </p>
      </div>

      <div class="artwork">
        <img src="./assets/reality/uys_03.jpg">
        <div class="caption">흔들리는 현실 3 <span class="caption-en">Faltering Reality 3</span></div>
        <p class="artwork-desc single">
          꽃으로 가려진 시선은 꾸며진 아름다움과 실제 존재 사이의 틈을 만든다. 환한 빛 아래 얼굴은 완전해 보이지만, 일부는 끝내 감춰진 현실과 불완전한 감각으로 조용히 남는다. 고요히.
        </p>
      </div>
    </div>

    <div class="artist-section">
      <div class="artist-name">유준혁 U Junhyeok</div>

      <div class="artwork series">
        <img src="./assets/reality/ujh_01.jpg">
        <img src="./assets/reality/ujh_02.jpg">
        <img src="./assets/reality/ujh_03.jpg">

        <div class="caption">청춘은 아름다운 말이지만</div>

        <p class="artwork-desc">
          청춘은 늘 아름다운 시기로 기록된다. 행복하고 과감했던 시간처럼 말이다. 그러나 내가 지나고 있는 청춘은 때로 방향을 잃고 불안하며 쉽게 가라앉을 것만 같은 순간들의 연속이었다.<br><br>
          우리는 모두 저마다의 불안을 품은 채 살아간다. 누군가에게 그 불안은 하루가 되고, 한 달과 일 년이 되어 삶의 일부로 스며든다. 그럼에도 우리는 내일을 준비하고 각자의 방식으로 수면 위에 머무는 법을 배운다. 자유로워 보이는 순간에도 위태로움이 존재하며, 불안한 순간에도 끝내 숨을 고르고 다시 떠오른다.<br><br>
          청춘은 아름다운 말이지만, 그 아름다움은 흔들림과 불안을 외면한 채 존재하지 않는다. 어쩌면 청춘이 아름다운 이유는 가라앉을 것 같은 순간에도 다시 떠오르기를 선택하는 우리의 모습 때문인지도 모른다.
        </p>
      </div>
    </div>
  </div>
`,

  simulation: `
  <div class="work-inner">
    <h1 class="work-title">Simulation</h1>
    <div class="work-subtitle">만들어진 이미지</div>
    <p>AI와 합성 기술이 만들어낸 새로운 이미지 환경을 탐구한다. 현실과 가상의 경계 속에서 무엇을 진짜라고 믿는지 되묻는다.</p>

    <div class="artist-section">
      <div class="artist-name">양지훈 Yang Jihoon</div>

      <div class="artwork series">
        <img src="./assets/simulation/yjh_01.png">
        <img src="./assets/simulation/yjh_02.png">
        <img src="./assets/simulation/yjh_03.png">

        <div class="caption">AI 색안경</div>

        <p class="artwork-desc">
          최근 해외 커뮤니티 사이트인 ‘레딧’에서 글쓴이가 모네의 원작 그림을 올려두고 ‘AI 생성 그림이니 모네의 원작보다 어떤 면이 열등한지’ 설명해 달라는 글에서 영감받아 한국 스타일로 재해석한 작업이다.<br><br>
          게시물 댓글에는 모네 원작보다 해당 그림이 열등한 각종 이유를 설명했고, 대부분의 사람들이 별로라는 반응을 남겼으나 이후 해당 그림이 모네 원작이었다는 사실이 밝혀져 사람들에게 큰 충격을 줬다.<br><br>
          나는 현시대 사람들이 AI 이미지에 얼마나 큰 반감을 갖고 있는지, 우리는 사진을 보며 어떤 의심을 하는지, AI 꼬리표가 우리에게 주는 인상 그리고 인터넷 세상의 댓글과 각종 글은 정확하지 않고, 비전문적이며 누구나 쓸 수 있다는 사실을 강조하고 싶었다.
        </p>
        <p class="note">*이 작업은 AI를 사용했습니다.</p>
      </div>

      <div class="artwork">
        <img src="./assets/simulation/yjh_04.png">

        <div class="caption">사진은 있지만, 사람은 없다 <span class="caption-en">Portrait Without a Person</span></div>

        <p class="artwork-desc">
          사진은 오랫동안 존재의 증거로 여겨져 왔다. 졸업 앨범 속 얼굴, 증명사진, 가족사진, 셀카는 누군가가 실제로 그 시간과 장소에 있었다는 사실을 증명하는 매체였다.<br><br>
          그러나 이 작업 속 인물들은 사실 존재하지 않는 허구의 이미지일 뿐이다. 어딘가 한 번쯤 봤을 법한 인상, 그들은 정말 학생 처럼 혹은 가족처럼 보이고, 누군가의 친구처럼 보인다. 이름과 옷차림, 포즈, 배경은 모두 실제 기록사진의 포맷을 따르지만, 그들은 현실에 존재하지 않는다.<br><br>
          나는 이 작업을 통해 사진은 여전히 현실 증명의 매체인지 묻고 싶다. 우리는 평균값으로 생성된 이 얼굴들을 낯설게 느끼기보다 오히려 의심 없이 익숙하게 받아들인다. 바로 그 익숙함 속에서, 현실에 존재하지 않는 사람이 가장 그럴듯한 방식으로 존재하기 시작한다.
        </p>
        <p class="note">*이 작업은 AI를 사용했습니다.</p>
      </div>
    </div>
  </div>
`,

  visage: `
  <div class="work-inner">
    <h1 class="work-title">Visage</h1>
    <div class="work-subtitle">자화상</div>
    <p>움직이는 이미지와 소리는 감정과 기억을 축적한다. 영상은 정지된 이미지 너머의 관계와 감각, 그리고 남겨진 잔상을 보여준다.</p>

    <div class="artist-group">
  <span class="artist-name">김나린 Kim Narin</span>
  <span class="artist-name">이정원 Lee Jeongwon</span>
</div>

    <div class="artwork">
      <img src="./assets/visage/visage_thumb.jpg" class="work-img">

      <div class="caption">
        Visage: 자화상
      </div>

      <p class="artwork-desc">
        &lt;Visage : 자화상&gt;은 타인의 시선 속에서 끊임없이 자신을 꾸미고 감추며 살아가는 현대인의 모습을 다룬다. 작품은 GIFT, FEAR, TRUE의 세 챕터를 통해 포장된 자아의 붕괴와 불안, 그리고 스스로를 마주하는 과정을 상징적인 이미지로 표현한다. 완벽한 자신을 찾는 이야기가 아닌, 불완전하고 흔들리는 모습까지도 온전히 받아들이는 순간에 대한 기록이다.
      </p>
    </div>
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
      const section = tab.dataset.section;
      showWork(section);
      history.replaceState(null, "", `#${section}`);
    });
  });

  const sectionFromUrl = window.location.hash.replace("#", "").toLowerCase();
  const validSections = [
    "persona",
    "desire",
    "reality",
    "simulation",
    "visage",
  ];

  if (validSections.includes(sectionFromUrl)) {
    showWork(sectionFromUrl);
  } else {
    showWork("persona");
  }
}
