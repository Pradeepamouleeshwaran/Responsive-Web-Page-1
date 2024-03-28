


function validate(){
    var name=document.getElementById('name').value;
  
    var password1=document.getElementById('password1').value;
  
    
    if(name===''){
        alert('Please Enter Your Name');
        return;
    }
  
    if(password1===''){
        alert('Please Enter Your Password');
        return;
    }
  
    
    var form=document.getElementById('myform')
    form.addEventListener('submit',function(){
        alert('Account Created Successfully')
    
    })

    

}

function login(){
    var email1=document.getElementById('email1').value;
    var password3=document.getElementById('password3').value;
    var password4=document.getElementById('password4').value;


    if(email1==''){
    alert('Please Enter Your Email id');
    return;
}
    if(password3===''){
        alert('Please Enter Your Password');
        return;
}
    if(password4===''){
        alert('Please Re-Type Your Password');
        return;

}
    if(password3 != password4){
        alert('Please Enter Your Correct Password ')
        return;
}

    


    var form1=document.getElementById('login')
    form1.addEventListener('submit',function(){
        window.location.assign("home.html")
    alert('logged in Successfully')


})

   
}

var click=document.getElementById('mybutton')
click.addEventListener('submit',function(){
    console.log('added')
})