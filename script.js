const tabs = document.querySelectorAll('.tab_btn');
tabs.forEach((tab, index) =>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        
        var line = document.querySelector('.active_line');
        line.style.width = e.currentTarget.offsetWidth + "px";
        line.style.left = e.currentTarget.offsetLeft + "px";
    })
})


const line = document.querySelector('.active_line');

function updateLine() {
  const activeTab = document.querySelector('.tab_btn.active');
  if (!activeTab) return;

  line.style.width = activeTab.offsetWidth + "px";
  line.style.left = activeTab.offsetLeft + "px";
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    updateLine();
  });
});


window.addEventListener('resize', updateLine);

updateLine();