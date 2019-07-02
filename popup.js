        var link = document.querySelector(".send-form");
        var popup = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var login = popup.querySelector("[name=login]");
        var email = popup.querySelector("[name=email]")
        var form = popup.querySelector("form");
      
        link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
        });
         
        close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });  
         
        form.addEventListener("submit", function (evt) {
            if (!login.value || !email.value) {
            evt.preventDefault();
                popup.classList.add("modal-error");
            }
        });
         
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });
