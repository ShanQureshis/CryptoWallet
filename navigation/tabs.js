import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcons } from "../components";
import { connect } from "react-redux";
import { setTradeModalVisibility } from "../stores/tabAction";


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress})=>{
  return(
    <TouchableOpacity className=" justify-center items-center" style={{flex:1}}  onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const Tabs = ({setTradeModalVisibility,isTradeModalVisible}) => {
console.log(isTradeModalVisible);
  function tradeTabButtonOnClickHandler(){
    setTradeModalVisibility(!isTradeModalVisible)
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
          // position: "absolute",
          // bottom: 20,
          // right: 20,
          // left: 20,
         // borderTopRightRadius: 20,
         // borderTopLeftRadius: 20,
          height: 90,
          //paddingBottom:10
        },
        headerShown: false,
        //         Style: {
        //             // backgroundColor: COLORS.black,
        //             // borderTopColor: "transparent",
        //             backgroundColor: "#22358e",
        //   color: "#ffffff",
        //   top: 0,
        //         }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if(!isTradeModalVisible){
            return (
              <TabIcons focused={focused} icon={icons.home} label="Home" />
            )
            }
          },
        }}
        listeners={{
          tabPress: e=>{
            if(isTradeModalVisible){
              e.preventDefault()
            }
          }
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            if(!isTradeModalVisible){
            return (
              <TabIcons
                focused={focused}
                icon={icons.briefcase}
                label="Portfolio"
              />
            );
            }
          },
        }}
        listeners={{
          tabPress: e=>{
            if(isTradeModalVisible){
              e.preventDefault()
            }
          }
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <TabIcons
                focused={focused}
                icon={isTradeModalVisible? icons.close: icons.trade}
                iconStyle={isTradeModalVisible? {
                with:15,
                height:15,
                marginBottom:13,
                marginTop:10,
                }:null}
              
                label="Trade"
                isTrade={true}
              />
            );
          },
          
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
              onPress={() => tradeTabButtonOnClickHandler()}
            />
          ),
          
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            if(!isTradeModalVisible){
            return (
              <TabIcons focused={focused} icon={icons.market} label="Market" />
            );
            }
          },
        }}
        listeners={{
          tabPress: e=>{
            if(isTradeModalVisible){
              e.preventDefault()
            }
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if(!isTradeModalVisible){
            return (
              <TabIcons
                focused={focused}
                icon={icons.profile}
                label="Profile"
              />
            );
            }
          },
        }}
        listeners={{
          tabPress: e=>{
            if(isTradeModalVisible){
              e.preventDefault()
            }
          }
        }}
      />
    </Tab.Navigator>
  );
};

//export default Tabs;

function mapStateToProps(state){
  return{
    isTradeModalVisible: state.tabReducer.isTradeModalVisible
  }
}

function mapDispatchToProps(dispatch){
  return{
    setTradeModalVisibility: (isVisible)=>{
      return dispatch(setTradeModalVisibility(isVisible))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs);