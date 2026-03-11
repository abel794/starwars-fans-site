export default function LoginInput({type,name, placeholder,value,onChange}){

  return(
    <input
    className="input-Login-input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}   // importante
    />
  )

}