function showForm(formId) {
   document.querySelectorAll("btn employee active").forEach(form => form.classList.remove("active"));
   document.getElementById(formId).classList.add("active");
}