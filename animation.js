 const roles = ["Data Analyst", "Web-Designer", "Developer", "Graphics-designer"];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const roleElement = document.getElementById('role');

    function type() {
      if (index >= roles.length) index = 0;
      currentText = roles[index];

      if (isDeleting) {
        roleElement.innerHTML = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index++;
        }
      } else {
        roleElement.innerHTML = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, isDeleting ? 80 : 150);
    }

    type();