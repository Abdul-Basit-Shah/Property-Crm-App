import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import Icons from '../themes/Icons';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const DisableMembers = () => {
  const [User, setUser] = useState();
  const [SelectUser, setSelectUser] = useState('Approved Date');
  const [Opensearch, setOpensearch] = useState();
  const [Selectsearch, setSelectsearch] = useState('');
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Members'} />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Leader
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setOpensearch(!Opensearch);
          }}
          style={{
            width: '100%',
            backgroundColor: '#dbd4b4',

            borderBottomLeftRadius: Opensearch ? 0 : 5,
            borderBottomRightRadius: Opensearch ? 0 : 5,
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
            <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
              {Selectsearch}
            </Text>
            <Icons.FontAwesome
              name={Opensearch ? 'caret-up' : 'sort-down'}
              size={18}
              color="gray"
            />
          </View>
          {Opensearch ? (
            <View>
              <TextInputComponent
                maxLength={3}
                inputstyle={{
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 0,
                  height: 40,
                }}
                value={Selectsearch}
                onChangeText={setSelectsearch}
              />
              <Text
                style={{
                  marginBottom: 10,
                  color: '#000',
                  fontFamily: Fonts.ComfortaBold,
                }}>
                {Selectsearch.length === 3
                  ? 'Searching..'
                  : `Please enter ${
                      3 - Selectsearch.length
                    } or more characters`}
              </Text>
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
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: Colors.buttonColor,
            }}
            text="Search"
          />
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: 'red',
            }}
            text="Cancel"
          />
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: Colors.buttonColor,
            }}
            text="Export"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: DarkMode ? '#fff' : '#000',
              fontFamily: Fonts.ComfortaExtraBold,
            }}>
            No Data Available
          </Text>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default DisableMembers;

const styles = StyleSheet.create({});
