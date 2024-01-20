import React from 'react';
import {
    View,
    Text
} from 'react-native';
import MainLayout from './mainLayout';
import { connect } from 'react-redux';
import { getCoinMarket, getHoldings } from '../stores/market/marketAction';
import { holdings } from '../constants/dummy';


const Home = ({getHoldings,getCoinMarket,myHoldings,coins}) => {
    return (
        <MainLayout>
        <View>
            <Text className="justify-center items-center">Home</Text>
        </View>
        </MainLayout>
    )
}

//export default Home;

function mapStateToProps(state) {
    return {
      myholdings:state.marketReducer.myHoldings,
      coins: state.marketReducer.coins
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getHoldings:(holdings,currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page)=>{
            return dispatch(getHoldings(holdings,currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page))
        },
        getCoinMarket: (currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page)=>{
            return dispatch(getCoinMarket(currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page))
        }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);