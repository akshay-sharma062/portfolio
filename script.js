
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    });

//--------------- storing data in local storage --------------------


    const name= document.getElementById('name')
    const email= document.getElementById('email')
    const message= document.getElementById('message')
    const submit= document.getElementById('submit')
    const userdetails=[]
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const names = name.value
        const messages = message.value
        const emails = email.value
        userdetails.push({
            'name':names,
            'email':emails,
            'message':messages
                     })
        localStorage.setItem('details',JSON.stringify([userdetails]))
        // localStorage.setItem('email',JSON.stringify([emails]))
        // localStorage.setItem('message',JSON.stringify([messages]))
    })