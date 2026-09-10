// js/staff-protect2.js

async function updateStatus() {
  let adminKey = sessionStorage.getItem('staff_pass');

  if (!adminKey) {
    adminKey = prompt("パスワードを入力してください");
    if (adminKey) {
      sessionStorage.setItem('staff_pass', adminKey);
    } else {
      return;
    }
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
  }
}
