const FIGHTERS = [
  {
    id: "cspts",
    name: "CSPTS",
    tagline: "Project Lifecycle Engine",
    icon: "🎓",
    hp: 3200, atk: 520, def: 420, adef: 480,
    why: "Lifecycle engine ขับด้วยข้อมูล ไม่ใช่ if กระจายในโค้ด",
    stack: ["Next.js 16", "Prisma 7", "PostgreSQL", "NextAuth", "SSE", "TypeScript strict"],
    ultimate: "transitionTaskInstance() เป็นคอขวดเดียวที่เขียน state — ทุก transition emit DomainEvent เสมอ, milestone-worthy เขียน Timeline อัตโนมัติ"
  },
  {
    id: "dorm",
    name: "Dorm Project",
    tagline: "หอพัก + OCR สลิป",
    icon: "🏠",
    hp: 2400, atk: 380, def: 300, adef: 280,
    why: "ห้ามล็อกห้อง occupied ตรงๆ ต้องผ่านสถานะ pending ก่อนเสมอ",
    stack: ["Next.js 16", "MongoDB", "JWT", "Tesseract.js OCR", "Cloudinary", "Chart.js"],
    ultimate: "แก้บั๊กจองซ้ำด้วยสถานะ pending คั่นกลาง — บิลถูก reject ต้องคืนห้องเป็น vacant เสมอ กันห้องค้าง"
  },
  {
    id: "evalpro",
    name: "EvalPro",
    tagline: "Anonymous Evaluation",
    icon: "📊",
    hp: 2200, atk: 400, def: 460, adef: 500,
    why: "Anonymity Shield: lock ผล ถ้าผู้ส่งน้อยกว่า 3 หรือ variance สูงผิดปกติ",
    stack: ["Next.js 16", "NextAuth", "Gemini AI", "SHA-256", "SheetJS", "Chart.js"],
    ultimate: "One-way hash ตัดความสัมพันธ์ผู้ประเมิน-คะแนน + Timing Protection หน่วงผลลัพธ์ 24 ชม. กัน timing attack"
  },
  {
    id: "idolcard",
    name: "Idol Card Tracker",
    tagline: "Order Status Realtime",
    icon: "🎴",
    hp: 1800, atk: 300, def: 260, adef: 240,
    why: "ลูกค้าเช็คสถานะเองด้วยชื่อบัญชีโซเชียล ไม่ต้องสมัครสมาชิก",
    stack: ["Next.js 16", "Supabase Realtime", "Postgres RLS", "jose JWT", "xlsx"],
    ultimate: "ยอดคงเหลือเป็น generated column คำนวณที่ DB ชั้นเดียว ปรับยอดแยกเป็น ledger ไม่แก้ price_total ตรงๆ"
  },
  {
    id: "jobhub",
    name: "JobHub",
    tagline: "หางาน + แชท Realtime",
    icon: "💼",
    hp: 2000, atk: 350, def: 260, adef: 220,
    why: "แอปมือถือเต็มรูปแบบ เชื่อม REST + Socket แชท/แจ้งเตือน",
    stack: ["Flutter", "Dart", "GetX", "Socket.IO", "REST API"],
    ultimate: "แยกชั้น controllers / services / model ชัดเจน — chat + notification ทำงาน realtime ผ่าน socket_service"
  },
  {
    id: "markethub",
    name: "MarketHub",
    tagline: "จอง-เช่าล็อคตลาด",
    icon: "🏪",
    hp: 2800, atk: 440, def: 380, adef: 360,
    why: "ผูก state ล็อค (ว่าง/จอง/เช่าอยู่) เข้ากับ booking+payment ตรง พร้อม audit log",
    stack: ["Next.js 16", "MongoDB", "NextAuth v5", "Zod", "Tesseract.js", "Vitest"],
    ultimate: "ห้ามแก้ state ล็อคตรงในฐานข้อมูล — ทุกการเปลี่ยนสถานะสำคัญบันทึกใน AuditLog เสมอ"
  },
  {
    id: "sellingshirts",
    name: "Selling Shirts",
    tagline: "ร้านเสื้อออนไลน์",
    icon: "👕",
    hp: 2100, atk: 360, def: 300, adef: 260,
    why: "โปรเจกต์วิชา ออกแบบ+โค้ดเองทั้งหมด ประเมินด้าน UI/UX",
    stack: ["Express 5", "MongoDB", "JWT", "Google OAuth", "Next.js 16", "TanStack Query"],
    ultimate: "ออเดอร์เปลี่ยนสถานะทางเดียวเท่านั้น (ห้ามข้ามขั้น) ผ่าน endpoint แอดมิน ห้ามแก้ status ตรงใน DB"
  },
  {
    id: "slcc",
    name: "SLCC Hub",
    tagline: "ศูนย์พักพิงภัยพิบัติ",
    icon: "🚨",
    hp: 2500, atk: 380, def: 340, adef: 320,
    why: "ศูนย์กลางข้อมูลกระจายความช่วยเหลือ real-time ตอนสถานการณ์ฉุกเฉิน",
    stack: ["Next.js 16", "MongoDB", "NextAuth", "Recharts", "Leaflet", "TypeScript"],
    ultimate: "3 สิทธิ์ผู้ใช้ (Admin/Staff/User) — Resource Request System จับคู่ความต้องการศูนย์พักพิงกับสต็อกอัตโนมัติ"
  }
];

const roster = document.getElementById("roster");
const selectScreen = document.getElementById("select-screen");
const detailScreen = document.getElementById("detail-screen");

FIGHTERS.forEach(f => {
  const card = document.createElement("div");
  card.className = "fighter-card";
  card.innerHTML = `
    <span class="rank">SSR</span>
    <div class="icon">${f.icon}</div>
    <div class="name">${f.name}</div>
  `;
  card.addEventListener("click", () => showDetail(f));
  roster.appendChild(card);
});

function showDetail(f) {
  document.getElementById("f-portrait").textContent = f.icon;
  document.getElementById("f-name").textContent = f.name.toUpperCase();
  document.getElementById("f-tagline").textContent = f.tagline;
  document.getElementById("f-hp").textContent = f.hp;
  document.getElementById("f-atk").textContent = f.atk;
  document.getElementById("f-def").textContent = f.def;
  document.getElementById("f-adef").textContent = f.adef;
  document.getElementById("f-why").textContent = f.why;
  document.getElementById("f-ultimate").textContent = f.ultimate;

  const skillsRow = document.getElementById("f-skills");
  skillsRow.innerHTML = "";
  f.stack.forEach(s => {
    const pill = document.createElement("span");
    pill.className = "tech-pill";
    pill.textContent = s;
    skillsRow.appendChild(pill);
  });

  selectScreen.classList.remove("active");
  detailScreen.classList.add("active");
  window.scrollTo(0, 0);
}

document.getElementById("back-btn").addEventListener("click", () => {
  detailScreen.classList.remove("active");
  selectScreen.classList.add("active");
});
