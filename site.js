'use strict';
for(const button of document.querySelectorAll('[data-copy-checksum]'))button.addEventListener('click',async()=>{
 const target=document.getElementById(button.dataset.copyChecksum);if(!target)return;
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText(target.textContent.trim());status.textContent='Контрольная сумма скопирована';button.textContent='Скопировано';}
 catch{const selection=getSelection(),range=document.createRange();range.selectNodeContents(target);selection.removeAllRanges();selection.addRange(range);status.textContent='Сумма выделена. Скопируйте её обычной командой копирования.';}
});
