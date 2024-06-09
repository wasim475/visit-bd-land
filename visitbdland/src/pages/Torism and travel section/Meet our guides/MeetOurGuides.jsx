import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// =============Mui====================
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeadingTitle from "../../../Components/Re-use componets/Heading and title/HeadingTitle";
import Swal from "sweetalert2";
import { AuthContex } from "../../../Providers/AuthProvider/AuthProvider";
import UserFeedBack from "./User feedback/UserFeedBack";
// =============Mui====================

const MeetOurGuides = () => {
  let { user } = React.useContext(AuthContex);
  const userName = user?.displayName;

  console.log(userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;

    const reviewData = {
      review,
      rating,
      userName
    };

    fetch("https://visit-bd-land-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your review posted successfully",
            icon: "success",
            confirmButtonText: "Okay"
          });
          setUserFeedbackData((prevFeedbackData) => [
            ...prevFeedbackData,
            reviewData
          ]);
        }
      });
  };

  const [userFeedbackData, setuserFeedbackData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://visit-bd-land-server.vercel.app/review")
      .then((res) => res.json())
      .then((resData) => setuserFeedbackData(resData));
  }, []);

  let GuidesData = useLoaderData();
  // let guidesData = useLoaderData()
  let { id } = useParams();
  let guides = GuidesData.find((pack) => pack.id === parseInt(id));
  // console.log(guides)
  const {
    name,
    specialty,
    experience,
    bio,
    image,
    languages,
    skills,
    education,
    favoriteTour,
    email,
    phone,
    socialMedia,
    certifications,
    address,
    availability
  } = guides;
  return (
    <>
      <div className=" px-5 lg:px-60 md:px-40">
        <section className="md:flex gap-x-9">
          <div className=" w-32 h-32 relative  border-4 border-white rounded-full overflow-hidden">
            <img className="object-cover object-center " src={image} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mt-5">{name}</h1>
            {/* <p className="bg-orange-800 inline-block text-white rounded-full px-2">Experience: {experience}</p> */}
            <ul className="flex gap-x-1 mt-2">
              {skills.map((skill, index) => (
                <li
                  title="Skils"
                  className="bg-green-200 px-2 rounded-lg font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <hr className="mt-20 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </section>

        <section className="lg:flex md:flex md:justify-around ">
          <div>
            <h1 className="font-bold text-2xl">Education</h1>
            <ul className="mt-3">
              {education.map((edu, index) => (
                <>
                  <li className="font-medium" key={index}>
                    {edu.degree}
                  </li>
                  <li key={index}>{edu.University}</li>
                </>
              ))}
            </ul>
            <div className="mt-3">
              <h1 className="text-xl font-semibold">language</h1>
              <ul className="flex gap-x-1">
                {languages.map((language, index) => (
                  <li className="text-green-500 font-semibold" key={index}>
                    {language}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <h1 className="text-xl font-semibold">Availability</h1>
              <p>{availability}</p>
            </div>
          </div>

          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p className="font-bold">Phone:</p>
                  <p>{phone}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p className="font-bold">Email:</p>
                  <p>{email}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p className="font-bold">Address:</p>
                  <p>{address}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p className="font-bold mb-3 mt-3">Social Media:</p>
                  <p className="flex gap-x-10 justify-start">
                    {" "}
                    <Link>
                      <FaFacebook className="text-2xl text-blue-700" />
                    </Link>{" "}
                    <Link>
                      <FaTwitter className="text-2xl text-blue-400" />
                    </Link>{" "}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-5">
          <div>
            <h1 className="text-3xl">About</h1>
            <p>{bio}</p>
          </div>
        </section>
        {/* =========================================================
                                User review section Start  
                =============================================================*/}
        <div>
          <HeadingTitle
            heading={"Share Your Experience"}
            title={"Rate and Review Your Experience"}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="p-10">
              <div className="flex gap-x-4 mb-4">
                <div className="w-1/2 ml-4">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text"></span>
                    </div>
                    <textarea
                      name="review"
                      required
                      placeholder="Write Your Review Here."
                      className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                    ></textarea>
                  </label>
                </div>
                {/* Rating*/}
                <select
                  name="rating"
                  required
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Rating
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <input
                type="submit"
                className="btn btn-block bg-green-500 md:text-xl text-white font-semibold hover:text-green-400 hover:border-2 hover:border-green-400 hover:bg-white"
                value="Book Now"
              />
            </div>
          </form>
        </div>
        {/* =========================================================
                                User review section End  
                =============================================================*/}
        <section>
          <UserFeedBack userFeedbackData={userFeedbackData} />
        </section>
      </div>
    </>
  );
};

export default MeetOurGuides;
