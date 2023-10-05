export default async function handleFormSubmit(evt: any, setStatus: any, formRef: any) {
    evt.preventDefault();
    localStorage.setItem("popupFormStats", JSON.stringify({lastShown: new Date().getTime(), isSent: true}))
    const formData = new FormData(evt.currentTarget);
    const formProps = Object.fromEntries(formData);
    
    try{
        setStatus("loading")
        await fetch("https://formsubmit.co/1d3032db0df0eed839a581a7605a8689",{
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
        console.log("HEY")
        setStatus("success")
        formRef.current.reset()
    }

  }