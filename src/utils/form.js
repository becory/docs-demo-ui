export const checkForm = (form)=>{
    const result = []
    Object.keys(form).forEach((key)=>{
        if(!form[key]||form[key]===''){
            result.push(`${key} is required.`)
        }
    })
    if(result.length>0){
        return Promise.reject(new Error(result.join("|")))
    }
    return Promise.resolve(true)
}