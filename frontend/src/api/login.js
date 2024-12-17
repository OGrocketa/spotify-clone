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
        });
        if(!response.ok){
            throw Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }catch(error){
        console.error(`Failed to fetch access token: ${error}`);
        return null
    }
}