// js/staff-protect.js

(function() {
  let adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    adminKey = prompt("パスワードを入力してください");
    if (adminKey) {
      sessionStorage.setItem('staff_pass', adminKey);
    }
  }
})();
