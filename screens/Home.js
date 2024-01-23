import React from "react";
import { View, Text } from "react-native";
import { MainLayout } from "./";
import { connect, useSelector } from "react-redux";
import { getCoinMarket, getHoldings } from "../stores/market/marketAction";
import { COLORS, SIZES, dummyData, icons } from "../constants";
import { useFocusEffect } from "@react-navigation/native";
import { BalanceInfo, IconTextButton,Chart } from "../components";
import { selectMyHoldings } from "../stores/market/marketReducer";

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {
  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData.holdings));

      getCoinMarket();
    }, [])
  );

  console.log("my holding hom", myHoldings);

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);

  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        {/* Balance Info */}
        <BalanceInfo
          title="Your Wallet"
          displayAmounts={totalWallet}
          changePct={percChange}
          containerStyle={{
            marginTop: 50,
          }}
        />

        {/* Button */}

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Transfer"
            icon={icons.send}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("Transfer")}
          />
          <IconTextButton
            label="Withdraw"
            icon={icons.withdraw}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("Withdraw")}
          />
        </View>
      </View>
    );
  }

  return (
    <MainLayout>
      <View className="flex-1" style={{ backgroundColor: COLORS.black }}>
        {/* Header - Wallet Info */}
        {renderWalletInfoSection()}

        {/* Chart */}
        <Chart
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
          chartPrices={coins[0]?.sparkline_in_7d?.price}
        />

        {/* Top Cryptocurrency */}
      </View>
    </MainLayout>
  );
};

//export default Home;

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      //coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          //coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
