import React from "react";
import Hero from "../components/Hero";
import * as API from "../utils/API";
import Card from "../components/Card";
import Wrapper from '../components/Wrapper';

class Employee extends React.Component {
    state = {
        employees: [],
        renderemployees: []
    };

    handleSortBy = (property) => {
        if (property === 'First') {
            console.log("sort by first name, then set state")
        }
    }


    componentDidMount() {
        this.populateTable()
    };

    populateTable = () => {
        API.getAllEmployees()
            .then(res => {
                console.log(res);
                this.setState({ employees: res.data.results })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Hero backgroundImage="https://acavideoremoteinterpreting.com/wp-content/uploads/2018/12/deaf-employee-video-remote-asl.jpg">
                    <h1>Employee Directory</h1>
                </Hero>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" onClick={() => this.handleSortBy('First')}>First</th>
                            <th scope="col">ID</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <Card
                                id={employee.id}
                                key={employee.id.value}
                                name={employee.name.first}
                                picture={employee.picture}
                                email={employee.email}
                                phone={employee.phone}
                                dob={employee.dob}
                            />
                        ))}
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}

export default Employee