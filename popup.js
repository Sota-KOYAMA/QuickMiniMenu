// document.addEventListener('DOMContentLoaded', () => {
//   chrome.tabs.executeScript({
//     code: 'window.getSelection().toString();'
//   }, (selection) => {
//     document.getElementById('selectedText').value = selection[0];
//   });

//   document.getElementById('copyButton').addEventListener('click', () => {
//     const selectedText = document.getElementById('selectedText').value;
//     navigator.clipboard.writeText(selectedText).then(() => {
//       alert('テキストをコピーしました。');
//     }, () => {
//       alert('テキストのコピーに失敗しました。');
//     });
//   });

//   document.getElementById('searchButton').addEventListener('click', () => {
//     const selectedText = document.getElementById('selectedText').value;
//     const query = encodeURIComponent(selectedText);
//     const url = `https://www.google.com/search?q=${query}`;
//     chrome.tabs.create({ url });
//   });
// });
