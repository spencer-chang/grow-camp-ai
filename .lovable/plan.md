

## HeroSection 與導覽列改版計畫

本次修改涵蓋兩個檔案：導覽列（Navbar）和首頁 Hero 區塊（HeroSection）。

---

### 1. 導覽列按鈕調整 (`src/components/layout/Navbar.tsx`)

**未登入狀態下（桌面版與手機版）：**

| 項目 | 目前 | 修改後 |
|------|------|--------|
| 第一個按鈕 | 登入（ghost） | 登入（ghost，保留不變） |
| 第二個按鈕 | 免費註冊（default） | 開始免費適性分析（default），導向 `/survey/pre` |

手機版選單也會做對應調整。

---

### 2. HeroSection 全面改版 (`src/components/home/HeroSection.tsx`)

**2a. 標題文案更新**

| 項目 | 目前 | 修改後 |
|------|------|--------|
| Badge | AI 適性分析 · 天賦側寫 · 成長洞察 | 移除（簡化視覺） |
| 主標題 | 跨越國界，在世界的角落 | 不是每個孩子都適合同一個營隊 |
| 副標題（藍色） | 遇見更出色的孩子 | 讓 AI 找到真正適合你孩子的歐洲夏令營 |
| 說明文字 | 不只是海外營隊。透過 AI... | 7分鐘問卷，基於發展心理學與多元智能理論，產出專屬適性報告，精準推薦最適合的歐洲營隊 |

**2b. 按鈕區調整**

| 項目 | 目前 | 修改後 |
|------|------|--------|
| 主按鈕 | 開始 AI 適性配對 -> `/survey/pre` | 開始免費適性分析 -> `/survey/pre`（帶箭頭圖示） |
| 次要按鈕 | 探索所有夏令營 -> `/camps` | 了解更多（錨點滑動至 `#features`） |

次要按鈕改用 `<a href="#features">` 搭配 `scroll-behavior: smooth` 滑動到下方功能區塊。

**2c. 底部統計改為信任標籤**

移除三個帶圖示的統計卡片（50+、1,200+、95%），改為三個輕量信任標籤：

```text
[brain emoji] 學術理論基礎    [globe emoji] 專注歐洲營隊    [checkmark] 免費開始，無需註冊
```

以 inline-flex pill 樣式呈現，水平排列，風格輕巧。

---

### 3. 功能區塊錨點 (`src/components/home/FeaturesSection.tsx`)

在 FeaturesSection 的最外層 `<section>` 加上 `id="features"`，讓「了解更多」按鈕能正確滑動到該區塊。

---

### 4. 全域平滑捲動 (`src/index.css`)

在 `html` 選擇器加上 `scroll-behavior: smooth`，確保錨點連結有平滑滑動效果。

---

### 技術細節

- **修改檔案**：
  - `src/components/layout/Navbar.tsx` - 導覽列按鈕（桌面 + 手機）
  - `src/components/home/HeroSection.tsx` - Hero 全面改版
  - `src/components/home/FeaturesSection.tsx` - 加上 `id="features"`
  - `src/index.css` - 加上 `scroll-behavior: smooth`
- **不需新增任何依賴套件**
- **移除的 import**：`Globe2`, `Users`, `TrendingUp`（HeroSection 不再需要）
- **保留的 import**：`Sparkles`（如果 badge 保留）或也移除、`ArrowRight`、`Link`、`Button`

