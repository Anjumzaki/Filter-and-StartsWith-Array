
import React, { Component } from "react";
import Countries from "./Countries";
import Header from "./Header";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre and Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts and Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      filteredcountries: [],
      searchInput: '',
      startsWith:false,
      message: false
    };
    this.start = this.start.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredcountries: this.state.data,
    });
  }

  start() {
    if(this.state.startsWith === true)
    {
    this.setState({
      startsWith: false      
    });
  }
  else{
    this.setState({
      startsWith: true,
    });
  }
  }

  filterTodo(e) {
    if(this.state.startsWith){
      var updatedList = this.state.data;
      updatedList = updatedList.filter((item => {
        if(item.toLowerCase().startsWith(e.target.value))
        return item.toLowerCase().search(
          e.target.value.toLowerCase()) !== -1;
      }));
      this.setState({
        filteredcountries: updatedList,
      });
      if (updatedList == 0) {
        this.setState({
          message: true,
        });
      } else {
        this.setState({
          message: false,
        });
      }
    }    else{
    var updatedList = this.state.data;
    updatedList = updatedList.filter((item => {
      return item.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    }));
    this.setState({
      filteredcountries: updatedList,
    });
    if (updatedList == 0) {
      this.setState({
        message: true,
      });
    } else {
      this.setState({
        message: false,
      });


    }
  }
  }
  render() {
    return (
      <div id='main'>
        <Header headings="Country Search"/>
        <div>
          <div className=" form-control">
          <input type="checkbox"
          name="search fiter"
            className="center-block"
            onChange={this.start}
          />
            Starts with <br></br>
          <input type="text"
            className="center-block"
            placeholder="Search...."
            onChange={this.filterTodo}
          />

          <Countries coData={this.state}/>
          </div>
          
        </div>
      </div>
    );
  }

}
export default App;