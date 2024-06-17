function makeMiniMenu() {
  const MiniMenu = document.createElement('div');
  MiniMenu.id = 'MiniMenu';
  const button = document.createElement('button')
  button.textContent = 'pleaseClick';
  // set MiniMenu style
  MiniMenu.style.position = 'absolute';
  MiniMenu.style.backgroundColor = '#f9f9f9';
  MiniMenu.style.border = '1px solid #ccc';
  MiniMenu.style.padding = '8px';
  MiniMenu.style.zIndex = '1000';
  MiniMenu.style.display = 'none';
  // set button
  button.onclick = buttonAction;
  MiniMenu.appendChild(button);
  document.body.appendChild(MiniMenu);
};
var selectedText;
function buttonAction() {
  navigator.clipboard.writeText(selectedText)
  getSelectionPosition()
};
function getSelectionPosition() {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) {
      document.getElementById('output').innerText = '選択されていません。';
      return;
  }

  const range = selection.getRangeAt(0);
  const preRange = range.cloneRange();
  preRange.selectNodeContents(range.startContainer);
  preRange.setEnd(range.startContainer, range.startOffset);

  const startPos = preRange.toString().length;
  const selectedText = range.toString();
  const endPos = startPos + selectedText.length;
};


var oldText = "";
var y_dist;
var x_dist;
window.addEventListener('load', () => {
  console.log("loaded")
  makeMiniMenu()
});

document.addEventListener('mouseup', function(e) {
    selectedText = window.getSelection().toString().trim();
    var MiniMenu = document.getElementById('MiniMenu');
    if ((selectedText !== '') && (selectedText != oldText)) {
        oldText = selectedText
        console.log(e.pageY, typeof e.pageY)
        MiniMenu.style.display = 'block';
        MiniMenu.style.top = e.pageY - 50 + 'px';
        MiniMenu.style.left = e.pageX + 'px';
        // ここに他の処理を追加できます（例：メニュー項目の機能を実装する）
    } else {
        oldText = selectedText
        MiniMenu.style.display = 'none';
    }
});