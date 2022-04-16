console.log("Starting up server...");

function handleForm(e){
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    

    //sending success report
    const div = document.querySelector('.success')
    const report = document.createElement('strong')
    report.innerHTML = "Successfully data added...."
    div.append(report)

    const style = document.createElement('style')
    style.innerHTML= '.success{'+ 
    'background-color: #198754;'+
    'color: white;'+
    'width: 100%;'+
    'height: auto;'+
    'padding: 10px;'+
    'border-radius: 5px;'+
    '}'
    div.append(style)



    //adding data to the contain
    const addData = document.querySelector('#contain')
    const span = document.createElement('span')
    span.innerHTML = `<fieldset><legend>${fname} ${lname}</legend>`+ 
    `First Name:${fname}<br>Last Name:${lname}`+
    `<br>Email:${email}`+
    `<br>Contact:${contact}<br> </fieldset>`
    addData.append(span)

    form = document.querySelector('form')
    form.reset();
    
    setTimeout(()=>{div.style='display:none'},1500)
}

