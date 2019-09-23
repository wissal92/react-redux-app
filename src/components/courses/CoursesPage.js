import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends Component{   
    componentDidMount(){
        this.props.actions.loadCourses().catch(err => {
            alert("Loading courses failed" + err);
        })
    }
    render() {
        return (
          <>
            <h2>Courses</h2>
            {this.props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
          </>
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