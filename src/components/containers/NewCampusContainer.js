import Header from "./Header";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewCampusView from "../views/NewCampusView";
import { addStudentThunk } from "../../store/thunks";

class NewCampusContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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

  // Take action after user click the submit button
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent browser reload/refresh after submit.

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
    };

    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: "",
      lastname: "",
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
        <NewCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
