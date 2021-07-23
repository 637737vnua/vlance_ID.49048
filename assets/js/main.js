(function(){
    function copyToClipboard(text, icon) {
      if (window.clipboardData && window.clipboardData.setData) {
          return clipboardData.setData("Text", text); 
  
      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
          let textarea = document.createElement("textarea");
          textarea.textContent = text;
          document.body.appendChild(textarea);
          textarea.select();
          try {
              icon.src = 'https://hoclammypham.com.vn/wp-content/uploads/icon-check-2.png';
              setTimeout(()=>{
                icon.src = './assets/images/icon_coppy.png'
              }, 2000);
              return document.execCommand("copy");
          } catch (ex) {
              return false;
          } finally {
              document.body.removeChild(textarea);
          }
      }
    }

    $('.number-bank .btn-copy').click(function(){
      const icon = this.lastElementChild;
      const text = this.parentElement.innerText.split(' ');
      copyToClipboard(text[1].trim(), icon);
    });
})()