//steps to do it

// 1.go to manage your google account
// 2.security
// 3.less secure app access
// 4.Turn on this access

var nodemailer=require('nodemailer'); //need to npm install the node mailer

var transporter= nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user:'thakkinikko@gmail.com',
            pass:'nikhilrao123456'
        }

    }
)

var mailoptions={
    from:'thakkinikko@gmail.com',
    to:'kodativinnu@gmail.com',
    subject: "hello guys I am testing the Nodemailer",
    text: "this is the body of the mail"
}

transporter.sendMail(mailoptions ,(err ,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("email sent");
    }
})