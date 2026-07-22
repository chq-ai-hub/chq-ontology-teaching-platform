# 本体论与知识图谱互动教学平台

> Ontology & Knowledge Graph Interactive Teaching Platform

© 2026 陳宏强 Richard Chen · IBM Consulting · FutureNow Center China · All Rights Reserved

基于汽车零部件供应链案例的本体论教学课件（Reveal.js 42页）+ 知识图谱可视化建模平台（力导图/本体编辑/三类函数演示），支持教师 Speaker View 演讲话术与学生同步浏览。

## 技术栈

- 课件框架：Reveal.js v5
- 可视化：D3.js · ECharts
- 前端：原生 HTML / CSS / JavaScript
- 部署：GitHub Pages（零后端）

## 文件结构

```
index.html              ← 门户入口（先打开这个）
courseware.html         ← 课件（42张幻灯片，Reveal.js）
ontology-platform.html  ← 知识图谱可视化建模平台
js/
  teacher-auth.js       ← 统一教师认证模块
  data.js               ← 本体数据（实体/关系/进化阶段）
```

## 使用方法

### 启动本地预览

```bash
cd ontology-platform
python3 -m http.server 8765
# 浏览器打开 http://localhost:8765
```

### 访问入口

打开 `index.html` 门户页，解锁教师身份后进入课件或平台。

### 账号信息

| 用途 | 用户名/访问码 | 密码 |
|------|--------------|------|
| 教师（课件+门户） | — | `ontology-teacher-2026` |
| 知识图谱平台 - 教师 | `teacher` | `teacher123` |
| 知识图谱平台 - 学生 | `student01` / `student02` | `student123` |
| 知识图谱平台 - 管理员 | `admin` | `admin123` |

## 教师操作

1. 打开 `index.html` → 右上角解锁教师 → 输入 `ontology-teacher-2026`
2. 点"进入课件" → 课件加载，教师身份自动共享
3. **按 S 键** → Reveal.js Speaker View 弹出（左边幻灯片+右边话术），学生看不到
4. 方向键/点击翻页，Speaker View 同步显示话术
5. 右下角浮动按钮可快速打开知识图谱平台

## 版权声明

© 2026 陳宏强 Richard Chen · IBM Consulting · FutureNow Center China
All Rights Reserved · 教学专用
