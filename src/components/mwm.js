import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import 'whatwg-fetch';

// const url = "https://kylelogicapi.herokuapp.com/api"
const url = "http://ec2-18-219-178-121.us-east-2.compute.amazonaws.com:8080/api";
fetch(url)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })

class MWM extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    fetch(url) {
        console.log("got the api")
    };
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div>
                {/* https://kylelogicapi.herokuapp.com/api */}
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                    <h1>This is the league homepage</h1>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>Franchise 1</h1></div>    
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>Franchise 2</h1></div>    
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>Franchise 3</h1></div>    
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>League</Tab>
                    <Tab>
                        <div>
                            <p>Blake</p>
                        </div>
                    </Tab>
                    <Tab>
                        <div>
                            <p>Crockett</p>
                        </div>
                    </Tab>
                    <Tab>
                        <div>
                            <p>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                Doug
                            </p>
                        </div>
                    </Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default MWM;