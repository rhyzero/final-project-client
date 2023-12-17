/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";

const HomePageView = () => {
  // Render Home page view

  return (
    <div>
      <h1>Home Page</h1>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div
          className="all-campuses"
          style={{
            backgroundColor: "white",
            paddingLeft: 64,
            paddingRight: 64,
            paddingBottom: 64,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h2 style={{ marginBottom: 24 }}>View Campuses</h2>
          <Link
            to={"/campuses"}
            style={{
              width: 128,
              height: 36,
              alignSelf: "center",
              marginBottom: 32,
            }}
          >
            <button
              style={{
                width: 128,
                height: 36,
                alignSelf: "center",
                marginBottom: 32,
              }}
            >
              Campuses
            </button>
          </Link>
          <img
            src="https://images.unsplash.com/photo-1622604647545-0cada2f34470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
            style={{ width: 480 }}
          ></img>
        </div>
        <div
          className="all-students"
          style={{
            backgroundColor: "white",
            paddingLeft: 64,
            paddingRight: 64,
            paddingBottom: 64,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>View Students</h2>
          <Link
            to={"/students"}
            style={{
              width: 128,
              height: 36,
              alignSelf: "center",
              marginBottom: 32,
            }}
          >
            <button
              style={{
                width: 128,
                height: 36,
                alignSelf: "center",
                marginBottom: 32,
              }}
            >
              Students
            </button>
          </Link>
          <img
            src="https://sterlinggroupunited.com/wp-content/uploads/2022/03/cheerful-college-students-walking-out-campus-together-posing-outdoors-camera-having-break-classes-free-space-175174081.jpg"
            style={{ width: 480 }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
