const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
    setTimeout(() => {
        // textの文字を2秒後に置き換える
        text.textContent = 'ボタンをクリックしました';
    },2000);    
});