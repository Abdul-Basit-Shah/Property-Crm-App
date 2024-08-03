import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import Header3 from '../Components/Header3';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const SettingCore = ({navigation}) => {
  const [getimage, setimage] = useState();
  const [Menu, setMenu] = useState();
  const [SelectedMenu, setSelectedMenu] = useState('Disable');
  const [Menu1, setMenu1] = useState();
  const [SelectedMenu1, setSelectedMenu1] = useState('Disable');
  const [Menu2, setMenu2] = useState();
  const [SelectedMenu2, setSelectedMenu2] = useState('Disable');
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  const PickImage = () => {
    launchImageLibrary({
      presentationStyle: 'pageSheet',
      selectionLimit: 0,
    }).then(image => {
      setimage(image.assets[0]);
    });
  };

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Settings'} />
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Withdraw Fee Percentage <Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'5.00'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Voucher Fee Percentage <Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'0.00'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
                marginBottom: 10,
              }}>
              Direct WithDraw Request Status
              <Text style={{color: 'red'}}> *</Text>
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setMenu(!Menu);
              }}
              style={{
                width: '100%',
                backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                height: Menu ? 70 : 45,
                borderBottomLeftRadius: Menu ? 0 : 5,
                borderBottomRightRadius: Menu ? 0 : 5,
                borderRadius: 5,
                paddingHorizontal: 16,
              }}>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: DarkMode ? '#fff' : '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  {SelectedMenu}
                </Text>
                <FontAwesome
                  name={Menu ? 'caret-up' : 'sort-down'}
                  size={18}
                  color="gray"
                />
              </View>
              {Menu ? (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMenu(
                      SelectedMenu === 'Disable' ? 'Enable' : 'Disable',
                    );
                    setMenu(false);
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                      fontFamily: Fonts.ComfortaBold,
                    }}>
                    {SelectedMenu === 'Disable' ? 'Enable' : 'Disable'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
                marginVertical: 10,
              }}>
              Daily WithDraw Request Status
              <Text style={{color: 'red'}}> *</Text>
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setMenu1(!Menu1);
              }}
              style={{
                width: '100%',
                backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                height: Menu1 ? 70 : 45,
                borderBottomLeftRadius: Menu1 ? 0 : 5,
                borderBottomRightRadius: Menu1 ? 0 : 5,
                borderRadius: 5,
                paddingHorizontal: 16,
              }}>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: DarkMode ? '#fff' : '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  {SelectedMenu1}
                </Text>
                <FontAwesome
                  name={Menu1 ? 'caret-up' : 'sort-down'}
                  size={18}
                  color="gray"
                />
              </View>
              {Menu1 ? (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMenu1(
                      SelectedMenu1 === 'Disable' ? 'Enable' : 'Disable',
                    );
                    setMenu1(false);
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                      fontFamily: Fonts.ComfortaBold,
                    }}>
                    {SelectedMenu1 === 'Disable' ? 'Enable' : 'Disable'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
                marginVertical: 10,
              }}>
              Team WithDraw Request Status<Text style={{color: 'red'}}> *</Text>
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setMenu2(!Menu2);
              }}
              style={{
                width: '100%',
                backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                height: Menu2 ? 70 : 45,
                borderBottomLeftRadius: Menu2 ? 0 : 5,
                borderBottomRightRadius: Menu2 ? 0 : 5,
                borderRadius: 5,
                paddingHorizontal: 16,
              }}>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: DarkMode ? '#fff' : '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  {SelectedMenu2}
                </Text>
                <FontAwesome
                  name={Menu2 ? 'caret-up' : 'sort-down'}
                  size={18}
                  color="gray"
                />
              </View>
              {Menu2 ? (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMenu2(
                      SelectedMenu2 === 'Disable' ? 'Enable' : 'Disable',
                    );
                    setMenu2(false);
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                      fontFamily: Fonts.ComfortaBold,
                    }}>
                    {SelectedMenu2 === 'Disable' ? 'Enable' : 'Disable'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Popup Messages<Text style={{color: 'red'}}> * </Text>
              <Text style={{fontSize: 10, color: 'gray'}}>
                use # for not showing
              </Text>
            </Text>
            <TextInputComponent
              placeholder={
                'Asalam-O-Alikum!  Withdrawal is closed now. withdrawal will be paid in next 10 working days. Thankyou'
              }
              placeholderTextColor="gray"
              inputstyle={{height: 60, marginTop: 10, marginBottom: 5}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? '#fff' : '#000',
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
                marginVertical: 10,
              }}>
              Team WithDraw Request Status<Text style={{color: 'red'}}> *</Text>
            </Text>

            <TouchableOpacity
              onPress={PickImage}
              activeOpacity={0.9}
              style={{
                borderRadius: 5,
                height: 40,
                backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 40,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    fontSize: subheadingFontsize,
                    fontFamily: subheadingFontFamily,
                    color: '#000',
                    marginVertical: 8,
                  }}>
                  Choose File
                </Text>
              </View>
              <Text
                style={{
                  fontSize: subheadingFontsize,
                  fontFamily: Fonts.ComfortaBold,
                  marginHorizontal: 15,
                  color: DarkMode ? '#fff' : '#000',
                }}>
                {getimage ? getimage.fileName : ' No file chosen'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ButtonComponent
          onpress={() => {}}
          style={{
            backgroundColor: Colors.buttonColor,
            width: 150,
            alignSelf: 'center',
            marginVertical: 15,
          }}
          text="Update"
        />
      </View>
    </WrapperContainer>
  );
};

export default SettingCore;

const styles = StyleSheet.create({});
