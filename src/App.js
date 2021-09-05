import React from "react";
//import Cards from "./components/Cards/Cards";
//import Chart from "./components/Chart/Chart";
//import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './Images/image.png'


class App extends React.Component {

    state= {
        data : {},
        country:'',
    }



    async componentDidMount(){

        const fetchedData= await fetchData();
        this.setState({ data : fetchedData });
    }


    handleCountryChange = async (country) => {

        const fetchedData=await fetchData(country);

        //console.log(fetchedData);
       // console.log(country);
       this.setState({ data : fetchedData , country: country});

        //fetch the data
        //set the state
    }

    render() {                   //npm install --save axios react-chartjs-2 react-countup classnames
        //it is install for chart purpose to show data and count the number of cases we use countup

        const { data ,country } = this.state;



        return (
            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data= { data }/>
                <Chart data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>

                
            </div>
        )
    }

}
export default App;