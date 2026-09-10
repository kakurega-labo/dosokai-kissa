// js/konzatdo.js

(async function() {
  document.body.style.display = 'none';

  let adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    adminKey = prompt("パスワードを入力してください");
  }

  if (!adminKey) {
    showAccessDenied("パスワードを入力してください。");
    return;
  }

  try {
    await db.collection("settings").doc("auth_check").set({
      admin_key: adminKey
    });

    sessionStorage.setItem('staff_pass', adminKey);
    document.body.style.display = '';
  } catch (error) {
    sessionStorage.removeItem('staff_pass');
    showAccessDenied("パスワードが違います。");
  }

  function showAccessDenied(message) {
    document.body.innerHTML = `<div style="color: white; padding: 50px; text-align: center; font-size: 20px;">${message}<br><br><button onclick="location.reload()" style="padding: 10px 20px; font-size: 16px;">再試行</button></div>`;
    document.body.style.display = '';
  }
})();

async function updateStatus() {
  const adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    alert("パスワードが設定されていません。画面を再読み込みします。");
    location.reload();
    return;
  }

  const status = document.getElementById('statusSelect').value;

  try {
    await db.collection("settings").doc("status").set({
      status: status,
      admin_key: adminKey
    });

    await database.ref('status').set(status);

    alert('混雑状況を反映しました');
  } catch (error) {
    alert('送信エラー：パスワードが正しいか確認してください。');
    sessionStorage.removeItem('staff_pass');
    location.reload();
  }
}
