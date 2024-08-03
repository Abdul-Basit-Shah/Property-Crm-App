import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header3 from '../Components/Header3';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';
import Colors from '../Styles/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const History = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  const dammy = [
    {
      option: 'Wallet',
    },
    {
      option: 'Withdraw',
    },
    {
      option: 'Topup',
    },
    {
      option: 'Downline',
    },
  ];
  const [type, settype] = useState();
  const [selectType, setselectType] = useState('Wallet');
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'History'} />
      <View style={{flex: 1, paddingHorizontal: 16, justifyContent: 'center'}}>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Member
        </Text>
        <ButtonComponent
          style={{
            width: '100%',
            backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
            height: 40,
            marginBottom: 0,
          }}
          text={'salman usman ghani (Salmanusman)'}
          textstyle={{
            marginTop: -2,
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaExtraBold,
          }}
          Rightimage={'https://cdn-icons-png.flaticon.com/512/57/57055.png'}
        />

        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Type
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            settype(!type);
          }}
          style={{
            width: '100%',
            backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,

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
            <FontAwesome
              name={type ? 'caret-up' : 'sort-down'}
              size={18}
              color="gray"
            />
          </View>
          {type ? (
            <View>
              <FlatList
                data={dammy}
                renderItem={({item, index}) => {
                  if (selectType === item.option) {
                    return;
                  }
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectType(item.option);
                        settype(false);
                      }}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 15,
                          color: DarkMode ? '#fff' : '#000',
                          fontFamily: Fonts.ComfortaBold,
                        }}>
                        {item.option}
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
            color: DarkMode ? '#fff' : '#000',
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          From Date
          <Text style={{fontSize: 10, color: 'gray'}}>
            {' '}
            (Format : MM/DD/YYYY)
          </Text>
        </Text>
        <TextInputComponent
          placeholder={'From Date '}
          placeholderTextColor="gray"
          inputstyle={{height: 40, marginBottom: 0}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
        />
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          To Date
          <Text style={{fontSize: 10, color: 'gray'}}>
            {' '}
            (Format : MM/DD/YYYY)
          </Text>
        </Text>
        <TextInputComponent
          placeholder={'To Date'}
          placeholderTextColor="gray"
          inputstyle={{height: 40}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 30,
            justifyContent: 'space-around',
          }}>
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: Colors.buttonColor,
              width: 150,
              alignSelf: 'center',
            }}
            text="Search"
          />
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: 'red',
              width: 150,
              alignSelf: 'center',
            }}
            text="Cancel"
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default History;

const styles = StyleSheet.create({});
