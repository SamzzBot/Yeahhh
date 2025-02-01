const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman reload

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xbldykzy", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message!",
                icon: "error"
            });
        }
    }).catch(error => console.error("Error:", error));
});
 
 resumeBtns.forEach((btn, idx) => {
   btn.addEventListener('click', () => {
     const resumeDetails = document.querySelectorAll('.resume-detail');
     
     resumeBtns.forEach(btn => {
       btn.classList.remove('active');
     });
     btn.classList.add('active');
     
     resumeDetails.forEach(detail => {
       detail.classList.remove('active');
     });
     resumeDetails[idx].classList.add('active');
   });
 });
 
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
 
 window.onscroll = () => {
   sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');
     
     if(top >= offset && top < offset + height){
       navLinks.forEach(links => {
         links.classList.remove('active');
         document.querySelector('header nav a[href*="' + id + '"]').classList.add('active')
       })
     }
   })
 }




menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
 }