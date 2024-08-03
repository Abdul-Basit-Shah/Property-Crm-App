import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import Icons from '../themes/Icons';
import WrapperContainer from '../Components/WrapperContainer';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const Reports = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const [type, settype] = useState();
  const [selectType, setselectType] = useState('Direct Bonus');
  const dammy = [
    {
      user: 'User',
      source: 'Salmanusman',
      amount: '85.40',
      date: '03/10/2023 23:24:31',
    },
  ];

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
            User
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.user}
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
            Source
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.source}
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
            {item.amount}
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
            Dated
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Account Reports'} />
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            settype(!type);
          }}
          style={{
            width: '100%',
            backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
            marginVertical: 10,
            borderBottomLeftRadius: type ? 0 : 5,
            borderBottomRightRadius: type ? 0 : 5,
            borderRadius: 5,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              marginVertical: 11,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontFamily: Fonts.ComfortaBold,
              }}>
              {selectType}
            </Text>
            <Icons.FontAwesome
              name={type ? 'caret-up' : 'sort-down'}
              size={18}
              color="gray"
            />
          </View>
          {type ? (
            <View>
              <FlatList
                data={['Direct Bonus', 'Daily ROI', 'Team ROI']}
                renderItem={({item, index}) => {
                  if (selectType === item) {
                    return;
                  }
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectType(item);
                        settype(false);
                      }}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 15,
                          color: DarkMode ? '#fff' : '#000',
                          fontFamily: Fonts.ComfortaBold,
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaExtraBold,
          }}>
          Total :{' '}
          <Text style={{fontFamily: Fonts.ComfortaBold, fontSize: 15}}>
            $85.40
          </Text>
        </Text>

        <FlatList data={dammy} renderItem={renderItem} />
      </View>
    </WrapperContainer>
  );
};

export default Reports;
