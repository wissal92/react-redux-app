import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            course: {
                title: ""
            }
        };
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.actions.createCourse(this.state.course);

    }

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({course})
    };
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.course.title}
            />
            <input type="submit" value="Save" />
            {this.props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
          </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = ({courses}) =>{
     return {
         courses
     }; 
}

const mapDispatchToPops = dispatch => {
    return {
        actions:  bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToPops)(CoursesPage);