import { db } from "./config.js"

import { useState, useEffect } from "react"
import {collection,onSnapshot,addDoc,} from "firebase/firestore"
  function App() {
    const [ setDatas] = useState([])
    const [form, setForm] = useState({
      Name: "",
      Email: "",
      mobile: "",
      address:"",
      latitude:"",
      longitude:"",
      services:"",
      rating:"",
      profileImage:""
    })

    const DatasCollectionRef = collection(db, "Datas")

  useEffect(() => {
    onSnapshot(DatasCollectionRef, snapshot => {
      setDatas(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: true,
          ...doc.data()
        }
      }))
    })
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !form.Name ||
      !form.Email ||
      !form.mobile ||
      !form.address ||
      !form.latitude ||
      !form.longitude ||
      !form.services ||
      !form.rating ||
      !form.profileImage
          ) {
      alert("Please fill out all fields")
      return
    }

    addDoc(DatasCollectionRef, form)

    setForm({
      Name: "",
      Email: "",
      mobile: "",
      address:"",
      latitude:"",
      Services:"",
      longitude:"",
      services:"",
      rating:"",
      profileImage:""
        })

  }

  // const removeData = id => {
  //   deleteDoc(doc(db, "Datas", id))
  // }

  return (
    
    <div className="App">
      <header>
        <h1>Add business</h1>
      </header>

      
      {/* <button id="data" onClick={() => setPopupActive(!popupActive)}>Add Data</button> */}

      {/* <table className="Datas"> */}
      {/* <tr>
              <th>Name</th>
              <th>Email</th>
              <th>mobiles</th>
              <th>Address</th>
              <th>latitude </th>
              <th>Longitude</th>
              <th>Services</th>
              <th>Rating</th>
              <th>Profile Image</th>
            
              

            </tr>

        { Datas.map((Data, i) => (
          <tbody className="Data" key={Data.id}>
            <tr>
            <td>{ Data.Name }</td>
            <td>{ Data.mobile }</td>
            <td dangerouslySetInnerHTML={{ __html: Data.Email }}></td>
            <td>{ Data.address }</td>
            <td>{ Data.latitude }</td>
            <td>{ Data.Services }</td>
            <td>{ Data.longitude }</td>
            <td>{ Data.services }</td>
            <td>{ Data.rating }</td>
            <td>{ Data.profileImage }</td>

            <td className="buttons"> */}
             {/* <button id="edit" ><i class="glyphicon glyphicon-edit"/></button> */}
               {/* <button className="remove" id="remove" onClick={() => removeData(Data.id)}><i class="glyphicon glyphicon-trash"/></button> */}

            {/* </td>
            </tr>
          </tbody>
        ))}
        
      </table> */}

      {/* { popupActive && <div className="popup"> */}
        <div > 
          <h2>Add a new business</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={form.Name} 
                onChange={e => setForm({...form, Name: e.target.value})} />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input 
                type="tel"
                pattern="[0-9]{2}[0-9]{4}[0-9]{4}" 
                placeholder="91 5555 5555 "
                value={form.mobile} 
                onChange={e => setForm({...form, mobile: e.target.value})} />
            </div>
            <div class="two-col">
    <div class="col1">
    <div className=" form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={form.Email} 
                onChange={e => setForm({...form, Email: e.target.value})} />
            </div>
    </div>

    <div class="col2">
    <div className="form-group">
              <label>Address </label>
              <input 
                type="text" 
                value={form.address} 
                onChange={e => setForm({...form, address: e.target.value})} />
            </div>
    </div>
</div>

<div class="two-col">
    <div class="col1">
    <div className="form-group">
              <label>latitude</label>
              <input 
                type="text" 
                value={form.latitude} 
                onChange={e => setForm({...form, latitude: e.target.value})} />   
            </div>
    </div>

    <div class="col2">
    <div className="form-group">
              <label>Longitude</label>
              <input 
                type="text" 
                value={form.Services} 
                onChange={e => setForm({...form, Services: e.target.value})} />
            </div>
    </div>
</div>        

<div class="two-col">
    <div class="col1">  
    <div className="form-group">
              <label>Services</label>
              <input 
                type="text" 
                value={form.longitude} 
                onChange={e => setForm({...form, longitude: e.target.value})} />
            </div>
    </div>

    <div class="col2">
    <div className="form-group">
              <label>Rating</label>
              <div class="rating" >
          <span class="rating__result"></span> 
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
      </div>
            </div>
    </div>
</div>
            
<div class="two-col">
    <div class="col1">
    <div className="form-group">
              <label>Profile Image</label>
              <input placeholder="jpg/jpeg"
                type="file" accept="image/jpg, image/jpeg"
                value={form.rating} 
                onChange={e => setForm({...form, rating: e.target.value})} />
            </div>
    </div>

          
</div>
 
    <div className="buttons">
      <button type="submit">Submit</button>
    </div>

          </form>
        </div>
      </div>
    // </div>
  );
}

export default App;