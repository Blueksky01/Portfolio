const FIGHTERS = [
  {
    id: "cspts",
    name: "CSPTS",
    tagline: "Project Lifecycle Engine",
    icon: "CS",
    hp: 3200, atk: 520, def: 420, adef: 480,
    desc: "ระบบติดตามวงจรชีวิตโครงงานคอมพิวเตอร์ของ SSKRU ตั้งแต่เสนอเค้าโครง สอบหัวข้อ รายงานความก้าวหน้า สอบ 3 บท สอบ 5 บท จนถึงส่งเล่ม ด้วย lifecycle engine ที่ขับด้วยข้อมูลเป็นแกนกลาง",
    why: "Lifecycle engine ขับด้วยข้อมูล ไม่ใช่ if กระจายในโค้ด",
    before: "กระบวนการเดิมเป็นกระดาษ ไม่รู้ว่าติดที่ใคร ลำดับขั้นอยู่ในหัวคน ลายเซ็นหาย/ย้อนไม่ได้",
    after: "ทุกขั้นเป็น Task ที่มี state ชัดเจน dependsOn บังคับลำดับอัตโนมัติ Decision แบบ append-only + Timeline เล่าเรื่องทั้งโครงงาน",
    features: ["Lifecycle engine เดินผ่าน milestone ตามลำดับ", "Task dependency (dependsOn) ปลดล็อก task ถัดไปอัตโนมัติ", "Decision (ลายเซ็นดิจิทัล) แบบ append-only ตั้ง quorum ได้จากข้อมูล", "Project change request พร้อมสายอนุมัติ", "Timeline + DomainEvent audit trail แบบ real-time (SSE)"],
    stack: ["Next.js 16", "Prisma 7", "PostgreSQL", "NextAuth", "SSE", "TypeScript strict"],
    ultimate: "transitionTaskInstance() เป็นคอขวดเดียวที่เขียน state — ทุก transition emit DomainEvent เสมอ, milestone-worthy เขียน Timeline อัตโนมัติ"
  },
  {
    id: "dorm",
    name: "Dorm Project",
    tagline: "หอพัก + OCR สลิป",
    icon: "DP",
    hp: 2400, atk: 380, def: 300, adef: 280,
    desc: "เว็บแอปบริหารหอพักครบวงจร ผู้เช่าเลือกห้อง ชำระเงิน อัปโหลดสลิปโอนเงิน ระบบอ่านสลิปด้วย OCR (Tesseract) ช่วยตรวจสอบเบื้องต้น ก่อน admin ตรวจสอบ/อนุมัติ/ปฏิเสธผ่าน dashboard",
    why: "ห้ามล็อกห้อง occupied ตรงๆ ต้องผ่านสถานะ pending ก่อนเสมอ",
    before: "ผู้เช่ากด \"ชำระเงิน\" แต่ยังไม่จ่ายจริง ระบบล็อกห้องเป็น \"เช่าแล้ว\" ทันที คนอื่นจองซ้ำไม่ได้ทั้งที่ยังไม่มีใครจ่ายเงิน",
    after: "เพิ่มสถานะ pending คั่นกลาง ห้อง \"เช่าแล้ว\" จริงต่อเมื่อ admin ตรวจสลิปแล้วอนุมัติเท่านั้น",
    features: ["ผู้เช่าเลือกห้อง ชำระเงิน อัปโหลดสลิปโอนเงินเอง", "OCR (Tesseract.js) อ่านสลิปช่วยตรวจสอบเบื้องต้น", "Admin ตรวจสอบ/อนุมัติ/ปฏิเสธผ่าน dashboard", "สถานะห้อง vacant → pending → occupied กันจองซ้ำ", "แยกสิทธิ์ Admin/Tenant คนละ login"],
    stack: ["Next.js 16", "MongoDB", "JWT", "Tesseract.js OCR", "Cloudinary", "Chart.js"],
    ultimate: "แก้บั๊กจองซ้ำด้วยสถานะ pending คั่นกลาง — บิลถูก reject ต้องคืนห้องเป็น vacant เสมอ กันห้องค้าง"
  },
  {
    id: "evalpro",
    name: "EvalPro",
    tagline: "Anonymous Evaluation",
    icon: "EP",
    hp: 2200, atk: 400, def: 460, adef: 500,
    desc: "ระบบประเมินผลองค์กรแบบไม่ระบุตัวตน เน้นความโปร่งใส ความลับ และความแม่นยำทางสถิติ รองรับทั้งประเมินภายในองค์กรแบบปิดและแคมเปญสาธารณะ",
    why: "Anonymity Shield: lock ผล ถ้าผู้ส่งน้อยกว่า 3 หรือ variance สูงผิดปกติ",
    before: "ระบบประเมินทั่วไปเก็บข้อมูลผู้ประเมินคู่กับคะแนน เสี่ยงถูกระบุตัวตนย้อนกลับได้ โดยเฉพาะกลุ่มเล็ก",
    after: "เข้ารหัสผู้ประเมินด้วย SHA-256 แบบ one-way ตัดความสัมพันธ์ผู้ประเมิน-คะแนน พร้อม lock ผลถ้าจำนวนน้อยหรือ variance ผิดปกติ",
    features: ["End-to-End Anonymity ด้วย SHA-256 hash ตัดความสัมพันธ์ผู้ประเมิน-คะแนน", "Anonymity Shield: Result Locking, Variance Shield, Timing Protection (หน่วง 24 ชม.)", "Hybrid Model รองรับทั้งระบบปิดและเปิดผ่าน QR Code", "AI-Powered Forms สร้างแบบประเมินจาก PDF/Docx ด้วย Gemini AI", "Advanced Analytics: Radar Chart, Mean, S.D."],
    stack: ["Next.js 16", "NextAuth", "Gemini AI", "SHA-256", "SheetJS", "Chart.js"],
    ultimate: "One-way hash ตัดความสัมพันธ์ผู้ประเมิน-คะแนน + Timing Protection หน่วงผลลัพธ์ 24 ชม. กัน timing attack"
  },
  {
    id: "idolcard",
    name: "Idol Card Tracker",
    tagline: "Order Status Realtime",
    icon: "IC",
    hp: 1800, atk: 300, def: 260, adef: 240,
    desc: "ระบบติดตามออเดอร์การ์ดไอดอล/ของสะสม ลูกค้าเช็คสถานะออเดอร์และยอดเงินคงเหลือด้วยชื่อบัญชีโซเชียลแบบเรียลไทม์ ไม่ต้องสมัครสมาชิก ส่วนแอดมินจัดการออเดอร์และนำเข้าเป็นชุดผ่าน dashboard",
    why: "ลูกค้าเช็คสถานะเองด้วยชื่อบัญชีโซเชียล ไม่ต้องสมัครสมาชิก",
    before: "รับออเดอร์ผ่านแชท/คอมเมนต์ ลูกค้าถามซ้ำๆ ว่าของถึงไหนแล้ว มัดจำครบยัง แอดมินต้องไล่เปิดแชททีละคน",
    after: "ลูกค้าพิมพ์ชื่อบัญชีโซเชียลค้นเองได้ เห็นสถานะ+ยอดค้างชำระทันที หน้าลูกค้าอัปเดตแบบ realtime ผ่าน Supabase",
    features: ["ลูกค้าค้นสถานะออเดอร์ด้วยชื่อบัญชีโซเชียล แบบเรียลไทม์ (Supabase Realtime)", "Admin นำเข้า/ส่งออกออเดอร์เป็นชุดผ่าน Excel (xlsx)", "Order lifecycle: RESERVED → ORDERED → READY_TO_SHIP → COMPLETED", "ยอดคงเหลือเป็น generated column คำนวณที่ DB + ledger ปรับยอดแยก", "ทุก mutation ต้องผ่าน Server Action ที่เช็ค requireAdmin ก่อน"],
    stack: ["Next.js 16", "Supabase Realtime", "Postgres RLS", "jose JWT", "xlsx"],
    ultimate: "ยอดคงเหลือเป็น generated column คำนวณที่ DB ชั้นเดียว ปรับยอดแยกเป็น ledger ไม่แก้ price_total ตรงๆ"
  },
  {
    id: "jobhub",
    name: "JobHub",
    tagline: "หางาน + แชท Realtime",
    icon: "JH",
    hp: 2000, atk: 350, def: 260, adef: 220,
    desc: "แอปหางาน/โพสต์งาน พัฒนาด้วย Flutter จัดการ state ด้วย GetX เชื่อมต่อ Backend ผ่าน REST API และ Socket เพื่อรองรับการแชทและการแจ้งเตือนแบบเรียลไทม์",
    why: "แอปมือถือเต็มรูปแบบ เชื่อม REST + Socket แชท/แจ้งเตือน",
    before: "หางาน โพสต์งาน คุยกับผู้สมัคร กระจายอยู่คนละช่องทาง ไม่มีที่รวมศูนย์บนมือถือ",
    after: "รวมเป็นแอปเดียวด้วย Flutter+GetX เชื่อม REST API และ Socket.IO ให้แชท/แจ้งเตือนทำงานเรียลไทม์",
    features: ["Jobs: dashboard, ค้นหา, โพสต์งานใหม่, แก้ไข/ลบ", "การสมัครงาน เก็บข้อมูลผู้สมัครผ่าน application_model", "แชท real-time ผ่าน Socket.IO", "แจ้งเตือนพร้อม badge นับจำนวนที่ยังไม่อ่าน", "กระเป๋าเงิน (Wallet) จัดการธุรกรรมในแอป"],
    stack: ["Flutter", "Dart", "GetX", "Socket.IO", "REST API"],
    ultimate: "แยกชั้น controllers / services / model ชัดเจน — chat + notification ทำงาน realtime ผ่าน socket_service"
  },
  {
    id: "markethub",
    name: "MarketHub",
    tagline: "จอง-เช่าล็อคตลาด",
    icon: "MH",
    hp: 2800, atk: 440, def: 380, adef: 360,
    desc: "ระบบจอง-เช่าล็อคตลาดออนไลน์ ผู้ค้าเลือกล็อค จอง ชำระเงิน และดูสัญญาเช่าได้เอง ส่วนแอดมินจัดการโซน ล็อค การอนุมัติจอง การจ่ายเงิน และการคืนเงินผ่าน dashboard เดียว",
    why: "ผูก state ล็อค (ว่าง/จอง/เช่าอยู่) เข้ากับ booking+payment ตรง พร้อม audit log",
    before: "จองล็อคตลาดด้วยกระดาษ/แชท ตรวจสอบล็อคว่างยาก อนุมัติช้า ไม่มีประวัติย้อนกลับได้",
    after: "ระบบจองออนไลน์ผูก state ล็อคเข้ากับ booking+payment ตรง พร้อม audit log ทุกการเปลี่ยนแปลง",
    features: ["ดูล็อค/โซนตลาดพร้อมปฏิทินความว่าง ค้นหา/บุ๊กมาร์กได้", "จองรายวัน/รายสัปดาห์/รายเดือน พร้อมระบบคิวถ้าล็อคไม่ว่าง", "อัปโหลดสลิป ตรวจด้วย OCR ก่อนส่งแอดมินอนุมัติ", "แจ้งเตือนอัตโนมัติ (ต่อสัญญา/สถานะจอง) ผ่าน in-app + email", "Cron job ตรวจสัญญาใกล้หมดอายุ/ปลดล็อคอัตโนมัติ"],
    stack: ["Next.js 16", "MongoDB", "NextAuth v5", "Zod", "Tesseract.js", "Vitest"],
    ultimate: "ห้ามแก้ state ล็อคตรงในฐานข้อมูล — ทุกการเปลี่ยนสถานะสำคัญบันทึกใน AuditLog เสมอ"
  },
  {
    id: "sellingshirts",
    name: "Selling Shirts",
    tagline: "ร้านเสื้อออนไลน์",
    icon: "SS",
    hp: 2100, atk: 360, def: 300, adef: 260,
    desc: "ระบบขายเสื้อออนไลน์แบบ full-stack ลูกค้าเลือกสินค้า สั่งซื้อ อัปโหลดสลิปโอนเงิน แอดมินตรวจสอบและอนุมัติออเดอร์ผ่าน dashboard พร้อมจัดการสต๊อกตามไซซ์/สี",
    why: "โปรเจกต์วิชา ออกแบบ+โค้ดเองทั้งหมด ประเมินด้าน UI/UX",
    before: "ร้านเสื้อขนาดเล็กรับออเดอร์ผ่านแชท/โพสต์ ตามสต๊อกและสถานะจ่ายเงินด้วยมือ สับสน ตกหล่นง่าย",
    after: "เว็บให้ลูกค้าสั่งเอง อัปโหลดสลิปเอง ระบบเก็บ state ออเดอร์ชัดเจน แอดมินกดอนุมัติทีละสถานะ",
    features: ["ลูกค้าเลือกสินค้า สั่งซื้อ อัปโหลดสลิปโอนเงินเอง", "Order lifecycle: pending_payment → verifying_payment → paid → shipping → completed", "แอดมินตรวจสลิปแล้วอนุมัติทีละสถานะผ่าน dashboard", "จัดการสต๊อกตามไซซ์/สี", "Login ด้วยเบอร์โทรหรือ Google OAuth"],
    stack: ["Express 5", "MongoDB", "JWT", "Google OAuth", "Next.js 16", "TanStack Query"],
    ultimate: "ออเดอร์เปลี่ยนสถานะทางเดียวเท่านั้น (ห้ามข้ามขั้น) ผ่าน endpoint แอดมิน ห้ามแก้ status ตรงใน DB"
  },
  {
    id: "slcc",
    name: "SLCC Hub",
    tagline: "ศูนย์พักพิงภัยพิบัติ",
    icon: "SL",
    hp: 2500, atk: 380, def: 340, adef: 320,
    desc: "ระบบบริหารจัดการศูนย์พักพิงและทรัพยากรแบบครบวงจร รองรับสถานการณ์ฉุกเฉิน/ภัยพิบัติ ติดตามความจุ-ผู้อาศัยแบบเรียลไทม์ และกระจายความช่วยเหลือให้ทั่วถึง",
    why: "ศูนย์กลางข้อมูลกระจายความช่วยเหลือ real-time ตอนสถานการณ์ฉุกเฉิน",
    before: "ตอนภัยพิบัติ ข้อมูลศูนย์พักพิง/สต็อกกระจัดกระจาย ไม่รู้ศูนย์ไหนเต็ม-ว่าง จับคู่ความช่วยเหลือช้า",
    after: "ศูนย์กลางข้อมูลเดียว ติดตามความจุ/สต็อกแบบ real-time พร้อม Resource Request System จับคู่อัตโนมัติ",
    features: ["Shelter Management: ติดตามความจุ/ผู้อาศัยจริงแบบ real-time", "Resource Management: ควบคุม-กระจายสิ่งของบรรเทาทุกข์", "Inventory: แยกหมวดหมู่ + วันหมดอายุ + multi-location", "Resource Request System จับคู่ความต้องการกับสต็อกอัตโนมัติ", "Data Visualization ผ่าน Dashboard + แผนที่ (Leaflet)"],
    stack: ["Next.js 16", "MongoDB", "NextAuth", "Recharts", "Leaflet", "TypeScript"],
    ultimate: "3 สิทธิ์ผู้ใช้ (Admin/Staff/User) — Resource Request System จับคู่ความต้องการศูนย์พักพิงกับสต็อกอัตโนมัติ"
  }
];

const roster = document.getElementById("roster");

const DETAIL_PAGES = { cspts: "project-cspts.html" };

FIGHTERS.forEach((f, i) => {
  const hue = i * (360 / FIGHTERS.length);
  const wrap = document.createElement("div");
  wrap.className = "fighter-card-wrap";
  wrap.innerHTML = `
    <div class="fighter-card">
      <span class="rank">SSR</span>
      <div class="icon" style="filter:hue-rotate(${hue}deg)"></div>
      <div class="name">${f.name}</div>
      <p class="card-tagline">${f.tagline}</p>
      <p class="card-desc">${f.desc}</p>
    </div>
    <div class="card-preview">
      <p class="preview-why">${f.why}</p>
    </div>
  `;
  if (DETAIL_PAGES[f.id]) {
    wrap.addEventListener("click", () => {
      window.location.href = DETAIL_PAGES[f.id];
    });
  }
  roster.appendChild(wrap);
});
