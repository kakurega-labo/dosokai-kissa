// js/staff-protect.js

(function() {
  // セッション（ブラウザを閉じるまで）の間、合言葉を保持
  let adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    adminKey = prompt("スタッフ用パスワードを入力してください");
    if (adminKey) {
      sessionStorage.setItem('staff_pass', adminKey);
    }
  }
})();
