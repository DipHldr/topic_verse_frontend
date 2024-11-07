import {useState} from 'react'
// import axios from 'axios'
interface SignupFormState{
  name:string;
  username:string;
  dob:Date | null;
  bio?:string;
  email:string;
  password:string;
  avatar?:string;
}

const SignupForm= () => {
  const [formData,setFormData]=useState<SignupFormState>({
    name:'',
    username:'',
    dob:null,
    bio:'',
    email:'',
    password:'',
    avatar:''
  })

  const handleSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()

    console.log(formData)

    // try{
    //   const response=await axios.post('')

    //   console.log(response)
    // }catch(error){
    //   console.log(error)
    // }


  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    

    const {name,value}=e.target;

    if (name === 'dob') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value ? new Date(value) : null, // Convert the date input to a Date object
      }));
    }else{
      setFormData((prevData)=>({...prevData,[name]:value}))
    }

  }
  return (
    <>
    <div className='flex border-red-500 border-2 justify-center w-[700px] h-[925px] rounded-[10px]'>
         <form onSubmit={handleSubmit} className='flex flex-col gap-5 border-blue-600 border-2 w-[550px] m-9 p-5 rounded-[10px]'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} className='border-red-500 border-2 h-[40px] rounded-[5px]'/>

          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} className='border-red-500 border-2 h-[40px] rounded-[5px]' />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} className='border-red-500 border-2 h-[40px] rounded-[5px]'/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} className='border-red-500 border-2 h-[40px] rounded-[5px]'/>

          <label htmlFor="bio">Bio</label>
          <input type="text" name="bio" id="bio" onChange={handleChange} value={formData.bio} className='border-red-500 border-2 h-[40px] rounded-[5px]'/>

          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={handleChange}
            value={formData.dob ? formData.dob.toISOString().split('T')[0] : ''}
            className='border-red-500 border-2 h-[40px] rounded-[5px]'
          />

          <button type='submit' className='border-red-500 border-2 h-[40px] rounded-[5px]'>Submit</button>


         </form> 
      </div>
    </>
  )
}

export default SignupForm;

