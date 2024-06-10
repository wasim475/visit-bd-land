import{ useContext } from 'react';
import { AuthContex } from '../../../../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const GuideProfile = () => {
    let { user } = useContext(AuthContex);

 const usersData = useLoaderData()
 const users = usersData.users;
 const guide =users.find((usr)=>usr.email=== user.email)
 const email = guide.email
 console.log(email);



    const handleSubmit= (e)=>{
        e.preventDefault();

    const form = e.target;
    const name =form.name.value;
    const experience=form.experience.value;
    const bio=form.bio.value;
    const image=form.image.value;
    const languages=form.languages.value.split(',').map(lang => lang.trim());
    const Address=form.address.value
    const skills=form.skills.value.split(',').map(skill => skill.trim());
    const favoriteTour=form.favoriteTour.value;
    const certifications=form.certifications.value.split(',').map(certificate => certificate.trim());
    const  availability=form.availability.value;
    const  university=form.university.value;
    const  degree=form.degree.value;
    const  phone=form.phone.value;
    const  email=form.email.value;

    const guideData ={name,experience,bio,image,languages,favoriteTour, availability,certifications, Address, skills,university, degree,phone, email}

    
    fetch(`https://visit-bd-land-server.vercel.app/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(guideData)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Your Data Added Successfully",
              icon: "success",
              confirmButtonText: "Exit"
            });
            form.name = "";
            form.experience = "";
            form.bio = "";
            form.image = "";
            form.languages = "";
            form.address = "";
            form.skills = "";
            form.favoriteTour = "";
            form.certifications = "";
            form.availability = "";
          }
        });



    }
    return (
        <>
           <div>
            <section></section>
            <section>
                <div>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Update your Information</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={user.displayName}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Experience</label>
        <input
          type="number"
          name="experience"
          className="w-full px-3 py-2 border rounded"
          placeholder='write in year'
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bio</label>
        <textarea
          name="bio"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          name="image"
          value={user?.photoURL}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Languages</label>
        <input
          type="text"
          name="languages"
        //   value={languages}
          
          className="w-full px-3 py-2 border rounded"
          placeholder="Comma separated (e.g., Bengali, English)"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Favorite Tour</label>
        <input
          type="text"
          name="favoriteTour"
       
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={user?.email}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
        //   value={phone}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Facebook</label>
        <input
          type="text"
          name="facebook"
        //   value={facebook}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Twitter</label>
        <input
          type="text"
          name="twitter"
        //   value={twitter}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Certifications</label>
        <input
          type="text"
          name="certifications"
        //   value={certifications}
          
          className="w-full px-3 py-2 border rounded"
          placeholder="Comma separated (e.g., Certified Cultural Guide, Event Management Certification)"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
        //   value={address}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Availability</label>
        <input
          type="text"
          name="availability"
        //   value={availability}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Skills</label>
        <input
          type="text"
          name="skills"
        //   value={skills}
          
          className="w-full px-3 py-2 border rounded"
          placeholder="Comma separated (e.g., Event Planning, Cultural Knowledge, Public Speaking)"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Degree</label>
        <input
          type="text"
          name="degree"
        //   value={degree}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">University</label>
        <input
          type="text"
          name="university"
        //   value={university}
          
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
    </form>
                </div>
            </section>
           </div> 
        </>
    );
};

export default GuideProfile;