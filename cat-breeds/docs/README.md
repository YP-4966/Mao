# 喵星球 · 品种猫百科

> 一个介绍各类品种猫的静态网站，包含品种图鉴、分类筛选、详情弹窗与养猫贴士。

---

## 一、项目简介

「喵星球 · 品种猫百科」是一个纯前端的品种猫介绍网站，收录 **12 种**热门品种猫。
页面以暖色系风格呈现，每只猫都配有专属形象图，并提供性格、原产地、体重、寿命、被毛及饲养建议等详细资料。

- **在线访问**：https://yp-4966.github.io/Mao/
- **源码仓库**：https://github.com/YP-4966/Mao （GitHub Pages 部署，公开仓库）
- **本地源码**：`/workspace/cat-breeds/`

---

## 二、目录结构

```
cat-breeds/
├── index.html        # 页面结构：导航、Hero、品种区、养猫贴士、详情弹窗
├── style.css         # 全部样式：暖色主题、卡片、弹窗、响应式适配
├── main.js           # 品种数据（12 种）+ 渲染、筛选、弹窗交互逻辑
├── README.md         # 项目完整说明文档（主文档）
└── docs/
    └── README.md     # 完整文档副本（本文件）
```

> 说明：仓库根目录 `README.md` 为项目完整文档，本文件为其副本，内容保持一致。

---

## 三、技术栈

| 技术 | 用途 |
| ---- | ---- |
| HTML5 | 页面语义化结构 |
| CSS3 | 布局与视觉（flex / grid、CSS 变量、动画、媒体查询响应式） |
| 原生 JavaScript | 数据驱动渲染、分类筛选、详情弹窗交互 |
| 静态托管 | GitHub Pages（免费、公开访问、无需后端） |

无任何外部依赖与构建工具，直接打开即用。

---

## 四、功能特性

1. **品种图鉴**：12 种品种猫卡片，含中文名、英文名、分类标签与简介。
2. **分类筛选**：按「全部 / 短毛猫 / 长毛猫 / 无毛猫」一键过滤。
3. **详情弹窗**：点击卡片弹出完整资料——
   - 品种标签与性格标签
   - 原产地 / 体重 / 寿命 / 被毛
   - 详细介绍 + 饲养建议
   - 支持点击遮罩或按 `Esc` 关闭
4. **养猫贴士**：科学喂养、定期清洁、健康免疫、陪伴玩耍、环境安全、领养代替购买 6 大通用建议。
5. **响应式设计**：桌面端网格布局，移动端自动切换为单列、弹窗上下排布。
6. **动画效果**：卡片入场渐显、悬停上浮、弹窗弹入、Hero 爪印漂浮。

---

## 五、收录品种（12 种）

| 品种 | 英文名 | 分类 |
| ---- | ------ | ---- |
| 英国短毛猫 | British Shorthair | 短毛猫 |
| 美国短毛猫 | American Shorthair | 短毛猫 |
| 布偶猫 | Ragdoll | 长毛猫 |
| 暹罗猫 | Siamese | 短毛猫 |
| 缅因猫 | Maine Coon | 长毛猫 |
| 波斯猫 | Persian | 长毛猫 |
| 苏格兰折耳猫 | Scottish Fold | 短毛猫 |
| 斯芬克斯猫 | Sphynx | 无毛猫 |
| 中华田园猫 | Chinese Domestic | 短毛猫 |
| 金渐层 | Golden Chinchilla | 短毛猫 |
| 异国短毛猫 | Exotic Shorthair | 短毛猫 |
| 俄罗斯蓝猫 | Russian Blue | 短毛猫 |

> 新增品种：在 `main.js` 的 `breeds` 数组中追加一个对象即可，
> 字段包括 `name / en / cat / tags / personality / image / origin / weight / lifespan / coat / desc / care`。

---

## 六、图片生成机制

- 图片通过 **AI 文生图接口** 动态生成，无需本地图片文件。
- 接口地址：`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image`
- 用法：`?prompt=<URL 编码的英文提示词>&image_size=square`
- 每只猫的 `image` 字段存英文提示词，运行时会自动 URL 编码并拼接为图片链接。
- 提示词采用「脸部特写、正对镜头、眼睛看向观众、居中头部构图」的写法，确保猫咪脸部完整露出。

---

## 七、本地运行

```bash
# 方式一：Python 内置服务器
cd /workspace/cat-breeds
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080

# 方式二：任意静态服务器均可，双击 index.html 亦可（无跨域限制）
```

---

## 八、部署与更新（GitHub Pages）

**当前部署状态**：已上线，最新链接 **https://yp-4966.github.io/Mao/**。

日常更新流程：

```bash
cd /workspace/cat-breeds
git add .
git commit -m "更新内容说明"
git push
```

推送后 GitHub Pages 约 1 分钟内自动构建发布。

**仓库信息**：
- 仓库：`YP-4966/Mao`（公开，默认分支 `main`）
- Pages 来源：`main` 分支根目录
- 已删除历史仓库 `YP-4966/cat-breeds`（网站内容已合并至 `Mao`）

---

## 九、下线/删除操作指引（备用）

> 仅作参考，当前站点保持在线。

| 目标 | 操作方式 |
| ---- | -------- |
| 只关闭网站、保留代码 | 仓库 Settings → Pages → Source 选择 `None` → Save |
| 删除整个仓库 | 仓库 Settings → Danger Zone → Delete this repository |
| 命令行删除仓库 | `gh repo delete YP-4966/Mao --yes`（需 `delete_repo` 权限） |

---

## 十、注意事项

- 折耳猫条目中包含骨骼疾病提醒，属刻意保留的科普警示内容。
- 图片由 AI 生成，可能与真实品种存在细微差异，品种信息仅供参考。
- 无后端、无数据统计，数据全部内置于 `main.js`。
