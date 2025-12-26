const tg = window.Telegram.WebApp;

// WebApp ni to‘liq ochish
tg.expand();

// Foydalanuvchi ma’lumotlari
const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById("user").innerText =
    `👤 ${user.first_name} (ID: ${user.id})`;
}

// Botga yuboriladigan ma'lumot
document.getElementById("btn").onclick = () => {
  tg.sendData(JSON.stringify({
    user_id: user.id,
    name: user.first_name
  }));
};
