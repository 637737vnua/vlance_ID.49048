(function(){
    const text = document.querySelector(`#number-bank`).innerHTML;
    const btn = document.querySelector('.number-bank .btn-copy');
    const tab = document.querySelector('.number-bank');
    const icon = document.querySelector('#img-copy');

    function copy() {
      const input =     document.createElement('input');
      input.value = text;
      tab.appendChild(input);
      input.focus();
      input.select();
      document.execCommand("copy");
      tab.removeChild(input);
      icon.src = 'https://hoclammypham.com.vn/wp-content/uploads/icon-check-2.png';
      setTimeout(()=>{
        icon.src = './assets/images/icon_coppy.png'
      }, 3000);
    }

    btn.onclick = () => {
        copy()
    }
})()