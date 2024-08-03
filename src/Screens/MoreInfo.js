import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Styles/Colors';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';
import NavigationStrings from '../Navigations/NavigationStrings';
import ModalComponent from '../Components/ModalComponent';
import {useDispatch, useSelector} from 'react-redux';
import {sign} from '../Store/Actions/Sign';
import {AREAS, BLOCKS, CITIES, COUNTRIES, PROPERTIES, STATES} from './Dammy';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const MoreInfo = ({navigation}) => {
  const [property, setproperty] = useState();
  const [country, setcountry] = useState();
  const [state, setstate] = useState();
  const [city, setcity] = useState();
  const [block, setblock] = useState();
  const [area, setarea] = useState();

  const dispatch = useDispatch();
  const DATA = useSelector(state => state.SignR.data);
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 17;
  const subheadingFontsfamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
        <View
          style={{
            height: 45,
            backgroundColor: Colors.buttonColor,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontFamily: Fonts.MonstBold,
              color: Colors.white,
              marginVertical: 7,
            }}>
            More Information
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                Property<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text={DATA.propertyname ? DATA.propertyname : 'Select Property'}
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                onpress={() => {
                  setproperty(true);
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                State<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                onpress={() => {
                  setstate(true);
                }}
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text="Select State"
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                Area<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                onpress={() => {
                  setarea(true);
                }}
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text="Select Area"
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                Country<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                onpress={() => {
                  setcountry(true);
                }}
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text={DATA.countryname ? DATA.countryname : 'Select Country'}
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                City<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                onpress={() => {
                  setcity(true);
                }}
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text="Select City"
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                  marginVertical: 10,
                }}>
                Block<Text style={{color: 'red'}}> *</Text>
              </Text>

              <ButtonComponent
                onpress={() => {
                  setblock(true);
                }}
                style={{
                  width: 160,
                  height: 35,
                  backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                }}
                text="Select Block"
                textstyle={{
                  fontSize: 13,
                  color: 'gray',
                  fontFamily: Fonts.ComfortaBold,
                }}
                Rightimage={
                  'https://cdn-icons-png.flaticon.com/512/57/57055.png'
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Price
                <Text
                  style={{
                    fontFamily: Fonts.ComfortaBold,
                    color: 'gray',
                    fontSize: 14,
                  }}>
                  {' '}
                  (Per SQ/FT)
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: subheadingFontsfamily,
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                }}>
                ($)
              </Text>
              <TextInputComponent
                placeholder={'Price (Per SQ/FT)'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Total Price<Text style={{color: 'red'}}> *</Text>
                <Text style={{fontSize: 14, color: 'gray'}}> ($)</Text>
              </Text>
              <TextInputComponent
                placeholder={'Total Price'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Fee<Text style={{color: 'red'}}> *</Text>
                <Text style={{fontSize: 16, color: 'gray'}}> ($)</Text>
              </Text>
              <TextInputComponent
                placeholder={'10.00'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Available
                <Text
                  style={{
                    fontFamily: Fonts.ComfortaBold,
                    color: 'gray',
                    fontSize: 13,
                  }}>
                  {' '}
                  (Per SQ/FT)
                </Text>
              </Text>

              <TextInputComponent
                placeholder={'Available (SQ/FT)'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Number Of SQ/FT
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: '500',
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                }}>
                Required<Text style={{color: 'red'}}> *</Text>
              </Text>
              <TextInputComponent
                placeholder={'Number Of SQ/FT'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontsfamily,
                }}>
                Total Price<Text style={{color: 'red'}}> * </Text>
                {/* <Text
                  style={{
                    fontFamily: Fonts.ComfortaBold,
                    color: 'gray',
                    fontSize: 13,
                  }}>
                  (Including
                </Text> */}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.ComfortaBold,
                  color: 'gray',
                }}>
                (Including Fee $)
              </Text>
              <TextInputComponent
                placeholder={'Total Price Includ'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ButtonComponent
            onpress={() => {
              navigation.navigate(NavigationStrings.BASIC_INFORMATION);
            }}
            style={{width: 200, backgroundColor: Colors.buttonColor}}
            text="Previous"
          />
          <ButtonComponent
            onpress={() => {
              navigation.navigate(NavigationStrings.MY_DRAWER);
            }}
            style={{width: 120, backgroundColor: Colors.buttonColor}}
            text="Next"
          />
        </View>
        <ModalComponent
          isVisible={property || country || state || block || city || area}
          onBackdropPress={() => {
            setproperty(false);
            setcountry(false);
            setstate(false);
            setcity(false);
            setblock(false);
            setarea(false);
          }}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <View style={styles.modalstyle}>
            <FlatList
              data={
                property
                  ? PROPERTIES
                  : country
                  ? COUNTRIES
                  : state
                  ? STATES
                  : city
                  ? CITIES
                  : block
                  ? BLOCKS
                  : area
                  ? AREAS
                  : null
              }
              renderItem={({item, index}) => {
                return (
                  <View>
                    {property ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.propertyname}
                        </Text>
                      </TouchableOpacity>
                    ) : country ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.countryname}
                        </Text>
                      </TouchableOpacity>
                    ) : state ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.statename}
                        </Text>
                      </TouchableOpacity>
                    ) : city ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.cityname}
                        </Text>
                      </TouchableOpacity>
                    ) : block ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.blockname}
                        </Text>
                      </TouchableOpacity>
                    ) : area ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(sign(item));
                        }}>
                        <Text style={{fontSize: 16, color: '#000', margin: 5}}>
                          {item.areaname}
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
        </ModalComponent>
      </View>
    </WrapperContainer>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  modalstyle: {
    minHeight: 400,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
});
