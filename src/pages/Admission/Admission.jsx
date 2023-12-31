import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthConext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Admission = () => {
const {user} = useContext(AuthConext)
    const namesall = useLoaderData()
    console.log(namesall)

    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("hello")
        const form = e.target;
        const collegeName = form.collegeName.value;
        const name = form.name.value
        const email = form.email.value;
        const adress = form.adress.value;
        const birth = form.birth.value;
        const phoneNumber = form.phoneNumber.value;
        const subject = form.subject.value;
        const image = form.image.value;

        const allInfo = {
            collegeId: namesall._id, collegeName,email,name,adress,birth,phoneNumber,subject,image
        }
        console.log(allInfo)

        fetch("https://college-server-rouge.vercel.app/addmissonform", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(allInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'auth in Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
               navigate('/mycollege')
            }
          });
    }
  return (
    <div className="my-32">
      

          <div className="card flex-shrink-0 w-full ">
      <form onSubmit={handleSubmit}>
            <div className="card-body">
                <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">College Names</span>
                </label>
                <input
                  type="text"
                  placeholder="college Names"
                  name="collegeName"
                  required
                  defaultValue={namesall.name}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Candidate Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate Name"
                  required
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Candidate Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate Name"
                  required
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Candidate SUbject</span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate SUbject"
                  required
                  name="subject"
                 
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number </span>
                </label>
                <input
                  type="text"
                  placeholder="Phoone Number"
                  required
                  name="phoneNumber"
                 
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="text"
                  placeholder="Date of birth"
                  required
                  name="birth"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Adress your"
                  required
                  name="adress"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="url"
                  placeholder="Image"
                  required
                  name="image"
                  defaultValue={namesall?.image}
                  className="input input-bordered"
                />
              </div>

                </div>
             
              <div className="form-control mt-6">
               
                <input
            type="submit"
            value="submit"
            className="btn btn-primary btn-block"
          />
              </div>
            </div>
            </form>

          </div>
    </div>
  );
};

export default Admission;
