/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from "./Header";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewStudentView from "../views/NewStudentView";
import { addStudentThunk } from "../../store/thunks";

const hasNumber = /\d/;
const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png";

class NewStudentContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: null,
      campusId: null,
      redirect: false,
      redirectId: null,
    };
  }

  // Capture input data when it is entered
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeNames = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (hasNumber.test(event.target.value) === true) {
      alert("Names must not contain numbers");
      event.target.value = event.target.value.slice(0, -1);
    }
  };

  // Take action after user click the submit button
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent browser reload/refresh after submit.

    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === ""
    ) {
      alert("You have not filled in all inputs.");
      return;
    }
    if (!this.state.email.includes("@")) {
      alert("Email addresses must contain an @");
      return;
    }

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
      email: this.state.email,
      imageURL: `${
        this.state.imageUrl === "" ? defaultImg : this.state.imageUrl
      }`,
      gpa: this.state.gpa,
    };

    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      imageURL: "",
      gpa: "",
      campusId: null,
      redirect: true,
      redirectId: newStudent.id,
    });
  };

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChangeNames={this.handleChangeNames}
        />
      </div>
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewStudentContainer);
