// 配列
var results = [
  '大吉', '中吉', '小吉', '吉', '凶'
];

// 要素の取得
var btn = document.getElementById('omikuji_image');
var text = document.getElementById('text');

// クリックイベント
btn.addEventListener('click', function () {
  // ランダムな数値を生成
  var random = Math.floor(Math.random() * results.length);
  // おみくじ結果に変更
  text.innerHTML = '<span class="result">' + results[random] + '</span>';
});