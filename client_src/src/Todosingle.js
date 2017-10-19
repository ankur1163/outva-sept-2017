import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-dates/initialize'
import DatePicker from 'react-date-picker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Todosingle extends Component {
  constructor(props){
    super(props);
    this.state={date: new Date(),startDate:"",endDate:"",description:""}

  }


onChange = date => this.setState({ date })


  render() {
           console.log("start date is ",this.state.startDate,"end date is ",this.state.endDate)
    return (
      <div>
          <Tabs>
           <TabList>
             <Tab><i className="fa fa-user-o" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-bars" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-paperclip" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-lock" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-exclamation-circle" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-clock-o" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-eye" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-repeat" aria-hidden="true"></i></Tab>
             <Tab><i className="fa fa-bell" aria-hidden="true"></i></Tab>

             <Tab><i className="fa fa-tags" aria-hidden="true"></i></Tab>

           </TabList>

           <TabPanel>
             <p>Who should do this</p>
             <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              <p>Start date </p>
              <div>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
              </div>

           </TabPanel>
           <TabPanel>
           <textarea rows="12" cols="125">
              {this.state.description}
              </textarea>
           </TabPanel>
           <TabPanel>
             <h2>Any content 1</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 2</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 1</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 2</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 1</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 2</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 1</h2>
           </TabPanel>
           <TabPanel>
             <h2>Any content 2</h2>
           </TabPanel>


        </Tabs>

      </div>
    )


  }
}

export default Todosingle;
