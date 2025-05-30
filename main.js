import { createClient } from 'jsr:@supabase/supabase-js@2'


let year = new Date().getFullYear(); // get current year();
document.querySelector("#year").innerHTML = year;
const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // إيقاف الإرسال مؤقتًا للتحقق

    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthday= document.getElementById("birthday").value.trim();
    const appointmentType = document.querySelector('input[name="appointment_type"]:checked');
    const department = document.getElementById("department").value.trim();
    let errors = [];

    // تحقق من الاسم الأول والأخير
    if (firstName === "") errors.push("First name is required.");
    if (lastName === "") errors.push("Last name is required.");

    // تحقق من البريد الإلكتروني
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Enter a valid email address.");
    }

    // تحقق من رقم الهاتف (يبدأ بـ +213 أو 0 ويحتوي على أرقام فقط)
    if (!/^(?:\+213|0)(5|6|7)\d{8}$/.test(phone)) {
      errors.push("Enter a valid Algerian phone number.");
    }

    // تحقق من نوع الموعد والقسم
    if (!appointmentType) errors.push("Please select an appointment type.");
    if (!department) errors.push("Please select a department.");

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Form is valid ✅\nSubmitting...");
      form.submit(); // يمكنك الإرسال الفعلي هنا
    }
  });
});

  let login = document.getElementById("loginBtn");
  let modal = document.getElementById("loginModal");
  let closeBtn = document.getElementById("closeModal");

  login.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  // Optional: Close modal on background click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

