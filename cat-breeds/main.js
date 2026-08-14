/* ===== 品种猫数据 ===== */
const IMG_BASE = "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image";

const breeds = [
  {
    name: "英国短毛猫",
    en: "British Shorthair",
    cat: "短毛猫",
    tags: ["圆脸", "安静", "适合新手"],
    personality: ["性格温顺", "独立", "黏人"],
    image: "professional studio photography of a blue-gray British Shorthair cat with a round chubby face, big copper-orange eyes, plush short coat, sitting calmly on a cream studio background, warm soft lighting, high detail",
    origin: "英国",
    weight: "4.0 ~ 8.0 kg",
    lifespan: "12 ~ 17 年",
    coat: "短毛 · 密实双层被毛",
    desc: "英短是猫界的「小圆脸」，自带憨态可掬的橘黄色大眼睛和丰厚饱满的双腮，性格沉稳温和，喜欢安静地陪在你身边，是新手养猫的首选品种之一。",
    care: "英短易发胖，需控制食量与保证运动；蓝灰色系被毛打理简单，每周梳毛一两次即可。",
  },
  {
    name: "美国短毛猫",
    en: "American Shorthair",
    cat: "短毛猫",
    tags: ["健康", "活泼", "强健"],
    personality: ["友善", "好动", "聪明"],
    image: "professional studio photography of a silver classic tabby American Shorthair cat with vivid green eyes, muscular athletic body, bold tabby stripes, sitting on a wooden floor, warm natural lighting, high detail",
    origin: "美国",
    weight: "3.6 ~ 6.8 kg",
    lifespan: "15 ~ 20 年",
    coat: "短毛 · 硬挺防水的毛质",
    desc: "美短是健壮而活泼的「运动型选手」，标志性的银色虎斑纹帅气干练。它们身体强健、寿命较长，性格友善爱玩，非常适合有小朋友的家庭。",
    care: "精力旺盛，建议准备猫爬架和互动玩具；被毛短而密，每周梳理两三次减少掉毛。",
  },
  {
    name: "布偶猫",
    en: "Ragdoll",
    cat: "长毛猫",
    tags: ["温柔", "黏人", "仙女颜值"],
    personality: ["亲人", "温顺", "安静"],
    image: "professional studio photography of a gorgeous seal point Ragdoll cat with striking blue eyes, long silky cream and brown pointed fur, lying gracefully on a soft beige blanket, dreamy soft lighting, high detail",
    origin: "美国",
    weight: "4.5 ~ 9.0 kg",
    lifespan: "12 ~ 17 年",
    coat: "长毛 · 丝滑无底绒",
    desc: "布偶猫被称为「猫中仙女」，一身丝绒般的长毛搭配湛蓝眼眸，性格更是温柔到骨子里——抱起来像布偶一样放松，喜欢黏在主人身边。",
    care: "长毛需每日梳毛防打结；肠胃较敏感，需稳定喂食；价格较高，购买请认准正规猫舍。",
  },
  {
    name: "暹罗猫",
    en: "Siamese",
    cat: "短毛猫",
    tags: ["话痨", "粘人", "贵族气质"],
    personality: ["爱叫", "聪明", "忠诚"],
    image: "professional studio photography of an elegant seal point Siamese cat with brilliant sapphire blue eyes, sleek cream body with dark brown ears face paws and tail, graceful upright sitting pose, clean background, soft lighting, high detail",
    origin: "泰国",
    weight: "3.0 ~ 5.0 kg",
    lifespan: "12 ~ 20 年",
    coat: "短毛 · 重点色被毛",
    desc: "暹罗猫是泰国皇室御猫，蓝宝石般的眼睛和深色重点色极具辨识度。它们聪明话痨、黏人热情，会用叫声和你「聊天」，是名副其实的社交小达人。",
    care: "非常怕孤独，长期独处会抑郁，适合陪伴时间多的家庭；被毛打理简单。",
  },
  {
    name: "缅因猫",
    en: "Maine Coon",
    cat: "长毛猫",
    tags: ["巨无霸", "温顺", "狗系性格"],
    personality: ["亲人", "聪明", "随和"],
    image: "professional studio photography of a majestic Maine Coon cat with dense brown tabby fur, distinctive tufted ears, fluffy tail, large gentle amber eyes, regal posture on a rustic wooden table, soft window lighting, high detail",
    origin: "美国",
    weight: "5.0 ~ 11.0 kg",
    lifespan: "12 ~ 15 年",
    coat: "长毛 · 防水的双层被毛",
    desc: "缅因猫是体型最大的家猫品种之一，成年公猫可达 10kg 以上，但性格却温柔得像只大狗，能学会开门、接飞盘，对家人尤其友善。",
    care: "食量巨大、开销不低；长毛需要高频梳毛；喜欢攀爬，建议准备大型猫爬架。",
  },
  {
    name: "波斯猫",
    en: "Persian",
    cat: "长毛猫",
    tags: ["优雅", "安静", "贵族范"],
    personality: ["文静", "温柔", "慵懒"],
    image: "professional studio photography of a stunning white Persian cat with a flat doll-like face, extremely long fluffy white fur, calm gentle expression, sitting on a silk cushion, elegant aristocratic atmosphere, soft studio lighting, high detail",
    origin: "伊朗（波斯）",
    weight: "3.5 ~ 6.8 kg",
    lifespan: "12 ~ 17 年",
    coat: "长毛 · 浓密顺滑",
    desc: "波斯猫是古典优雅的代名词，扁平面庞配上一身华贵长毛，性情安静慵懒，是「陪伴型」猫咪的典范，适合喜欢安静生活的铲屎官。",
    care: "扁平脸易有泪痕，需每日清洁眼周；长毛必须每天梳毛并预防毛球；畏寒怕热，注意室温。",
  },
  {
    name: "苏格兰折耳猫",
    en: "Scottish Fold",
    cat: "短毛猫",
    tags: ["折耳", "圆眼睛", "呆萌"],
    personality: ["温顺", "安静", "粘人"],
    image: "professional studio photography of an adorable gray Scottish Fold cat with cute folded ears, round owl-like amber eyes, chubby round face, fluffy gray short coat, sitting like a little owl on a white background, soft lighting, high detail",
    origin: "英国",
    weight: "3.0 ~ 6.0 kg",
    lifespan: "11 ~ 15 年",
    coat: "短毛 / 长毛 · 可选",
    desc: "折耳猫因一对可爱的折耳和圆滚滚的脸蛋圈粉无数，性格温和安静，像只小圆面包一样惹人怜爱，是社交媒体上的「顶流猫猫」。",
    care: "⚠️ 折耳基因可能伴随骨骼疾病，务必定期体检；如出现关节疼痛症状请及时就医，理性繁育。",
  },
  {
    name: "斯芬克斯猫",
    en: "Sphynx",
    cat: "无毛猫",
    tags: ["无毛", "独特", "暖宝宝"],
    personality: ["粘人", "好奇", "活泼"],
    image: "professional studio photography of a Sphynx hairless cat with soft wrinkled pinkish skin, large bat-like ears, bright green eyes, sleek elegant sitting pose on a minimalist beige background, warm studio lighting, high detail",
    origin: "加拿大",
    weight: "3.0 ~ 5.5 kg",
    lifespan: "12 ~ 15 年",
    coat: "无毛 · 仅细微绒毛",
    desc: "斯芬克斯猫以独特的无毛外貌闻名，触感温热如小暖炉。它们性格极度粘人爱撒娇，好奇心旺盛，是「外表高冷、内心火热」的反差萌代表。",
    care: "无毛皮脂分泌多，需每周洗澡去油；夏天防晒、冬天保暖，怕冷怕晒需要细心呵护。",
  },
  {
    name: "中华田园猫",
    en: "Chinese Domestic",
    cat: "短毛猫",
    tags: ["皮实", "聪明", "颜值在线"],
    personality: ["独立", "机警", "忠诚"],
    image: "professional studio photography of a handsome orange tabby Chinese domestic cat with bright amber eyes, sleek orange striped coat, playful curious expression, sitting by a sunny window with plant shadows, warm natural light, high detail",
    origin: "中国",
    weight: "3.0 ~ 6.0 kg",
    lifespan: "15 ~ 20 年",
    coat: "短毛 · 品种多样",
    desc: "橘猫、狸花猫、奶牛猫……中华田园猫是土生土长的「国货之光」。它们身体皮实、聪明机警，颜值与性格俱佳，领养渠道多，性价比满分。",
    care: "户外流浪史可能带来坏习惯，需耐心社会化；健康好养，是「领养代替购买」的绝佳选择。",
  },
  {
    name: "金渐层",
    en: "Golden Chinchilla",
    cat: "短毛猫",
    tags: ["贵气", "金灿灿", "大饼脸"],
    personality: ["温顺", "安静", "亲人"],
    image: "professional studio photography of a luxurious golden chinchilla cat with shimmering golden-tipped fur, round doll-like face, big green eyes, black outlined golden coat, sitting on a luxury cream sofa, warm golden lighting, high detail",
    origin: "英国",
    weight: "3.5 ~ 6.5 kg",
    lifespan: "12 ~ 17 年",
    coat: "短毛 · 金色渐层被毛",
    desc: "金渐层是英短的「豪华升级版」，一身如阳光般的金色渐层被毛搭配翠绿眼眸，贵气十足。性格继承了英短的温顺稳重，安静又黏人。",
    care: "易肥胖，注意控食；渐层色需要护理毛发光泽，可适当补充鱼油和营养。",
  },
  {
    name: "异国短毛猫",
    en: "Exotic Shorthair",
    cat: "短毛猫",
    tags: ["加菲", "大饼脸", "呆萌"],
    personality: ["温和", "安静", "依赖"],
    image: "professional studio photography of a cute cream and brown Exotic Shorthair cat (Garfield-style) with a flat round face, big round orange eyes, chubby cheeks, plush short coat, sitting with a sleepy sweet expression, soft studio lighting, high detail",
    origin: "美国",
    weight: "3.5 ~ 6.5 kg",
    lifespan: "12 ~ 15 年",
    coat: "短毛 · 短密柔软",
    desc: "异国短毛猫俗称「加菲猫」，长着一张呆萌的大饼脸和圆溜溜的大眼睛。性格温和安静、黏人爱撒娇，兼具波斯猫的温柔与短毛的易打理。",
    care: "扁平脸泪痕多，需每日擦拭；鼻腔短易打呼噜，注意呼吸道健康与环境清洁。",
  },
  {
    name: "俄罗斯蓝猫",
    en: "Russian Blue",
    cat: "短毛猫",
    tags: ["银蓝色", "绿宝石眼", "优雅"],
    personality: ["文静", "聪明", "专一"],
    image: "professional studio photography of an elegant Russian Blue cat with short dense silver-blue coat, luminous emerald green eyes, slim graceful body, refined aristocratic sitting pose, minimal neutral background, soft diffused lighting, high detail",
    origin: "俄罗斯",
    weight: "3.0 ~ 5.5 kg",
    lifespan: "12 ~ 18 年",
    coat: "短毛 · 银蓝色双层被毛",
    desc: "俄罗斯蓝猫一身银蓝色的短毛泛着微光，配上绿宝石般的眼眸，气质清冷优雅。它们性格文静内敛，认主后十分忠诚，是「低调贵族」般的存在。",
    care: "性格敏感怕生，需温柔耐心相处；被毛细腻掉毛少，打理轻松。",
  },
];

/* ===== 图片 URL 生成 ===== */
const imageUrl = (prompt) =>
  `${IMG_BASE}?prompt=${encodeURIComponent(prompt)}&image_size=square`;

/* ===== 渲染卡片 ===== */
const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const modal = document.getElementById("modal");
let currentCat = "all";

function renderGrid() {
  const list = currentCat === "all" ? breeds : breeds.filter((b) => b.cat === currentCat);
  if (!list.length) {
    grid.innerHTML = `<div class="empty">暂无该分类的猫咪，敬请期待 🐾</div>`;
    return;
  }
  grid.innerHTML = list
    .map(
      (b) => `
      <article class="card" data-name="${b.name}" data-id="${b.name}">
        <img class="card-img" src="${imageUrl(b.image)}" alt="${b.name}" loading="lazy" />
        <div class="card-body">
          <div class="card-name">${b.name}<span class="en">${b.en}</span></div>
          <div class="card-tags">
            <span class="tag cat">${b.cat}</span>
            ${b.tags.slice(0, 2).map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <p class="card-desc">${b.desc}</p>
        </div>
      </article>`
    )
    .join("");
}

/* ===== 筛选 ===== */
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentCat = btn.dataset.cat;
  renderGrid();
});

/* ===== 详情弹窗 ===== */
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const breed = breeds.find((b) => b.name === card.dataset.name);
  if (!breed) return;

  document.getElementById("modalImg").src = imageUrl(breed.image);
  document.getElementById("modalImg").alt = breed.name;
  document.getElementById("modalName").textContent = breed.name;
  document.getElementById("modalEn").textContent = breed.en;
  document.getElementById("modalTags").innerHTML =
    `<span class="tag cat">${breed.cat}</span>` +
    breed.tags.map((t) => `<span class="tag">${t}</span>`).join("") +
    breed.personality.map((p) => `<span class="tag personality">${p}</span>`).join("");
  document.getElementById("modalDesc").textContent = breed.desc;
  document.getElementById("modalFacts").innerHTML =
    `<li><b>原产地</b>：${breed.origin}</li>` +
    `<li><b>体重</b>：${breed.weight}</li>` +
    `<li><b>寿命</b>：${breed.lifespan}</li>` +
    `<li><b>被毛</b>：${breed.coat}</li>`;
  document.getElementById("modalCare").textContent = breed.care;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ===== 初始化 ===== */
renderGrid();
