export default async function handleFormSubmit(evt: any, setStatus: any, formRef: any) {
    evt.preventDefault();
    localStorage.setItem("popupFormStats", JSON.stringify({lastShown: new Date().getTime(), isSent: true}))
    const formData = new FormData(evt.currentTarget);
    const formProps = Object.fromEntries(formData);
    
    try{
        setStatus("loading")
        await fetch("https://formsubmit.co/speedsprayllc@gmail.com",{
            method: "POST",
            body: JSON.stringify(formProps),
            headers: {
                'Content-Type': 'application/json'
              }
        })
    }catch(err){
        console.error(err)
        setStatus("error")
    }finally{
        setStatus("success")
        formRef.current.reset()
    }

  }