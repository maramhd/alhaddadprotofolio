
/* 
   script.js — مسؤول عن:
   - قائمة الجوال (menu toggle)
   - تفعيل reveal عند التمرير والتحميل
   - تغيير حالة navbar عند التمرير (scrolled)
*/
/*  1) MENU TOGGLE (للسواقة على الشاشات الصغيرة)  */
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
/* 
   - عند الضغط على زر القائمة (☰) نضيف/نزيل كلاس active على قائمة الروابط لعرضها في الموبايل. */

/*  2) NAVBAR SCROLLED (تغيير لون/حجم الشريط عند النزول)  */
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  if (!navbar) return;
  // أضف كلاس scrolled عندما يتجاوز التمرير 60 بكسل
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', handleNavbarScroll);
window.addEventListener('load', handleNavbarScroll);
/* شرح:
   - هذه الدالة تضيف .scrolled لتطبيق تغييرات الـCSS عندما تنزل الصفحة. */

/* ===== 3) REVEAL ON SCROLL (كشف العناصر مع التأخير) ===== */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const offset = 120; // المسافة من الأسفل ليبدأ الكشف
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - offset) {
      el.classList.add('show');
    }
  });
}

// نفذ مرة عند التحميل ثم عند التمرير
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
/* شرح:
   - كل عنصر يحمل الكلاس .reveal سيحصل على .show عند دخوله نطاق العرض،
     مما يفعل التحول والانتقال المحدد في CSS. */
// بيانات مشاريعك (يمكنك تعديلها كما تشائين)
const projects = [
    {
        title: "New Add Website",
        desc: "Lab Chemical Web Application",
        year: 2025,
        price: "$200",
        img: "img/pro2.jpg"
    },
    {
        title: "Software Development",
        desc: "Flower Shop Management System",
        year: 2020,
        price: "$900",
        img: "img/pro1.png"
    }
];

// بناء الكروت داخل الصفحة
const container = document.getElementById("cardsContainer");

projects.forEach((p, i) => {
    container.innerHTML += `
        <div class="card" onclick="openModal(${i})">
            <img src="${p.img}" alt="${p.title}">
            <div class="card-content">
                <div class="card-title">${p.title}</div>
                <div class="card-desc">${p.desc}</div>
                <div class="card-info">Year: ${p.year}</div>
                <div class="card-info">Price: ${p.price}</div>
            </div>
        </div>
    `;
});

// Modal elements
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalYear = document.getElementById("modalYear");
const modalPrice = document.getElementById("modalPrice");

// Open modal
function openModal(i) {
    const p = projects[i];
    modalImg.src = p.img;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalYear.textContent = p.year;
    modalPrice.textContent = p.price;
    modal.style.display = "flex";
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

