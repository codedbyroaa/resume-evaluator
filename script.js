// 1. تحديد العناصر من صفحة HTML وتخزينها في متغيرات
const form = document.getElementById("evaluator-form");
const jobDescriptionInput = document.getElementById("job-description");
const fileInput = document.getElementById("resume");
const resultsDiv = document.getElementById("results");

// 2. إضافة مراقب للحدث (Event Listener) عند الضغط على زر الإرسال (Submit)
form.addEventListener("submit", function (event) {
  // يمنع المتصفح من إعادة تحميل الصفحة عند الإرسال
  event.preventDefault(); 

  // 3. قراءة القيم التي أدخلها المستخدم
  const jobDescriptionText = jobDescriptionInput.value.trim(); // .trim() تحذف المسافات الفارغة الزائدة
  
  // 4. التحقق من صحة البيانات (Validation)
  // هل الوصف الوظيفي فارغ؟
  if (jobDescriptionText === "") {
    resultsDiv.innerHTML = '<p style="color: red;">Please enter a job description.</p>';
    return; // يوقف تشغيل باقي الكود
  }

  // هل تم رفع ملف؟
  if (fileInput.files.length === 0) {
    resultsDiv.innerHTML = '<p style="color: red;">Please upload a PDF resume.</p>';
    return; // يوقف تشغيل باقي الكود
  }

  // 5. إذا كانت البيانات صحيحة، نعرض رسالة النجاح
  const fileName = fileInput.files[0].name; // جلب اسم الملف المرفوع
  
  resultsDiv.innerHTML = `
    <p style="color: green;">
      <strong>Success!</strong><br><br>
      Evaluating <em>${fileName}</em> against the job description...<br>
      (ChatGPT integration coming in Stage 5)
    </p>
  `;
});