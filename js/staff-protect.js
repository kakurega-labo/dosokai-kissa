// js/staff-protect.js

(function() {
  let adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    adminKey = prompt("パスワードを入力してください");
    if (adminKey && adminKey.trim() !== "") {
      sessionStorage.setItem('staff_pass', adminKey);
    } else {
      document.body.innerHTML = '<div style="color: white; text-align: center; margin-top: 50px;"><h2>サーバーエラー。</h2><p>ページを再読み込みしてパスワードを入力してください。</p></div>';
    }
  }
})();
