# Yile Frontend Exam

以 React 實作的職缺列表頁面，包含篩選、分頁、職缺詳情彈窗，以及含視差互動的背景動畫。

---

## 如何執行

### 環境需求

- Node.js >= 16
- pnpm / npm / yarn（擇一）

### 安裝與啟動

```bash
# 安裝相依套件
pnpm install

# 啟動開發伺服器（預設 http://localhost:3000）
pnpm start
```

### 其他指令

| 指令 | 說明 |
|---|---|
| `pnpm start` | 啟動開發伺服器 |
| `pnpm build` | 建立生產版本至 `build/` |
| `pnpm test` | 執行測試 |
| `pnpm lint` | 執行 ESLint 程式碼檢查 |

> API 由 [MirageJS](https://miragejs.com/) 在瀏覽器端攔截，無需另外啟動後端服務。

---

## 技術

| 類別 | 套件 |
|---|---|
| UI 框架 | React 18 |
| 元件庫 | Material UI v5 |
| 樣式 | Tailwind CSS v3 |
| Mock API | MirageJS |
| 圖片輪播 | Swiper |
| Coding Style | Google JavaScript Style Guide（ESLint） |

---

## 專案架構

```
src/
├── index.js                      # 入口： React + 初始化 MirageJS mock server
├── App.js                        # 根元件，直接渲染 JobListPage
├── pages/
│   └── JobListPage.js            # 組合所有元件與狀態
├── components/
│   ├── BackgroundAnimation.js    # 頁首背景圖 + 滑鼠視差眼球動畫
│   ├── FilterBar.js              # 篩選欄（公司名稱、教育程度、薪資範圍）
│   ├── JobCard.js                # 單筆職缺卡片
│   ├── JobCardSkeleton.js        # 職缺卡片載入骨架屏
│   ├── JobDetailModal.js         # 職缺詳情 Dialog
│   ├── JobDetailModalSkeleton.js # 詳情 Dialog 載入骨架屏
│   └── CompanyPhotoCarousel.js   # 公司照片 Swiper 輪播
├── hooks/
│   ├── useJobs.js                # 取得職缺列表（含教育／薪資 label 合併）
│   ├── useJobDetail.js           # 取得單筆職缺詳情
│   ├── useFilterOptions.js       # 取得教育程度、薪資範圍選項
│   └── useThrottle.js            # throttle hook，限制搜尋觸發頻率
├── services/
│   └── api.js                    # fetch 封裝，統一管理 API 呼叫
└── constants/
    ├── jobList.js                # 職缺 mock 資料
    ├── educationList.js          # 教育程度 mock 資料
    └── salaryList.js             # 薪資範圍 mock 資料
```

---

## 邏輯說明

### 資料取得（`hooks/`）

- **`useJobs`**：同時呼叫職缺列表、教育程度、薪資範圍三支 API（`Promise.all`），將 `educationId` / `salaryId` 轉換為 `educationLabel` / `salaryLabel` 後回傳，省去各元件自行查找的需要。
- **`useJobDetail`**：僅在 `id` 存在時發出請求，避免無效呼叫。
- **`useFilterOptions`**：在篩選欄初始化時取得下拉選單選項。
- **`useThrottle`**：對搜尋、重設按鈕套用 1 秒節流，防止短時間內重複送出請求。

### 頁面狀態（`JobListPage.js`）

| 狀態 | 說明 |
|---|---|
| `filters` | 目前生效的篩選條件 |
| `page` | 目前分頁頁碼 |
| `selectedId` | 被點擊的職缺 id，驅動 `JobDetailModal` 開啟 |

觸發搜尋時同時將 `page` 重設為 1，避免篩選後停留在超出範圍的頁碼。

每頁筆數（`PRE_PAGE`）依據 MUI `useMediaQuery` 判斷裝置寬度：手機 4 筆、桌機 6 筆。

### 骨架（Skeleton）

資料載入中以 `JobCardSkeleton` / `JobDetailModalSkeleton` 佔位，資料就緒後以 MUI `Fade` 淡入，提升視覺過渡體驗。

### 背景動畫（`BackgroundAnimation.js`）

監聽 `window mousemove` 事件，計算滑鼠相對螢幕中心的偏移比例，對左右眼圖片套用對應的 `translate` transform，模擬眼球跟隨視線移動的效果。

## 專案遇到的困難

1. 圖片輪播 UI/UX

### 問題及解決方法

1. 圖片輪播的 UI/UX 調整難與 Figma 吻合:
解法: 先嘗試用 react-material-ui-carousel 但發現最後張圖片預覽不好處理，透過 ChatGPT 找了另一個 Swipper 剛好有提供預覽
節省了處理 UI/UX 的時間

## 回饋
好玩! 尤其看到要製作眼睛飄移，一開始還在思考該怎麼處理，想說眼睛不是整顆的難道要自己再畫一顆，但設計師通常不會刁難工程師，看到了重點"微服移動"，
鬆了一口氣，自己本身喜歡嘗試有趣的動畫，覺得這個測驗非常有趣!
