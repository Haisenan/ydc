export async function fetch_form(form){
  let Form = form;
  let oForm = new FormData(Form);
  let res = await fetch(Form.action,{
    method:Form.method,
    body:oForm
  })
  return await res.json()
}

//
// export async function erci(form,Obj){
//   let Form = form;
//   let Obj = new FormData(Form);
//   let res = await fetch(Form.action,{
//     method:Form.method,
//     body:Obj
//   })
// }
