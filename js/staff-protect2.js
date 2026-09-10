// js/staff-protect2.js

async function updateStatus() {
  const adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    alert("パスワードが設定されていません。ページを再読み込みしてください。");
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
