(function(){
  var dlg=document.getElementById('lightbox');
  if(!dlg||typeof dlg.showModal!=='function')return; // no-JS / old browsers: links open the full image
  var img=dlg.querySelector('img'),cap=dlg.querySelector('.lb-cap'),list=[],i=0;
  function show(n){i=(n+list.length)%list.length;var a=list[i];img.src=a.getAttribute('href');img.alt=a.querySelector('img').alt;cap.textContent=a.dataset.title+' — slide '+(i+1)+' of '+list.length;}
  document.querySelectorAll('.strip').forEach(function(strip){
    var links=[].slice.call(strip.querySelectorAll('a'));
    links.forEach(function(a,k){a.addEventListener('click',function(e){e.preventDefault();list=links;show(k);dlg.showModal();});});
  });
  dlg.querySelector('[data-prev]').addEventListener('click',function(){show(i-1);});
  dlg.querySelector('[data-next]').addEventListener('click',function(){show(i+1);});
  dlg.querySelector('[data-close]').addEventListener('click',function(){dlg.close();});
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
  dlg.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);});
})();
