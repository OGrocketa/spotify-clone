

export async function sendUserLoginAndPassword (loginData){
    const url = `http://localhost:8000/login_for_access_token`

    const formData = new URLSearchParams();
    formData.append("username",loginData.username);
    formData.append("password",loginData.password);

    try{
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:formData,
            credentials: 'include',
        });
        if(!response.ok){
            throw Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    }catch(error){
        console.error(`Failed to fetch access token: ${error}`);
        return null
    }
}

export async function registerUser(userData){
    const url = "http://localhost:8000/create_account";
    const formData = new URLSearchParams();
    formData.append("username",userData.username);
    formData.append("password",userData.password);
    formData.append("email", userData.email);
    formData.append("confirm_password", userData.confirmPassword);
    try{
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
            },
            body:formData,
        });
    
        if(!response.ok){
            throw Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    }catch(error){
        console.error(`Couldn't register a user try again!: ${error}`);
        return null
    }

}

export async function logout_user(){
    const url = "http://localhost:8000/logout"
    try{
        const response = await fetch(url,{
            method:"POST",
        });

        if(!response.ok){
            throw Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
        
    }catch(error){
        console.error(`Couldn't logout a user!: ${error}`);
        return null
    }
}
