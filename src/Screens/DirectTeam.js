import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Icons from '../themes/Icons';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const DirectTeam = () => {
  const dummy = [
    {
      srNo: '1',
      Name: 'salman usman ghani',
      username: '',
      package: 'Special',
      Amount: '1220.00',
      Joining: '30/09/2023 16:55:32',
      Group: '0.00',
    },
  ];
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: '#fff',
          margin: 10,
          elevation: 5,
          padding: 5,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Sr.No
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.srNo}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Username
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.username}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Package
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.package}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Amount ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.srNo}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Joining Date
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Joining}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Group BV's ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Group}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={"Direct Team BV's"} />
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: Fonts.MonstSemiBold,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            marginVertical: 10,
          }}>
          List
        </Text>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Fonts.ComfortaExtraBold,
              color: '#4169e1',
              marginVertical: 10,
            }}>
            1,220.00$
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: DarkMode ? '#fff' : '#000',
              fontFamily: Fonts.ComfortaBold,
            }}>
            Total Business Volume
          </Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Fonts.ComfortaExtraBold,
              color: '#4169e1',
            }}>
            1
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginVertical: 10,
              color: DarkMode ? '#fff' : '#000',
              fontFamily: Fonts.ComfortaBold,
            }}>
            MY TOTAL DIRECT TEAM
          </Text>
          <Icons.Fontisto name="persons" color="#4169e1" size={30} />
        </View>
        <FlatList data={dummy} renderItem={renderItem} />
      </View>
    </WrapperContainer>
  );
};

export default DirectTeam;

const styles = StyleSheet.create({});
