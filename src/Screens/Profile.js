import React, {Profiler} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Styles/Colors';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const Profile = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Profile'} />

      <View style={{paddingHorizontal: 16, justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: Fonts.MonstSemiBold,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            marginVertical: 10,
          }}>
          Personal Infromation
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            First Name <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'First Name *'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10}}
          />

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Middle Name<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Middle Name'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Last Name<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Last Name *'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Date of Birth <Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Date of Birth *'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Gender<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Gender'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Residence Permit / National ID / Passport
              <Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Residence Permit / National ID / Passport'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Address<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Address'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Country<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Country*'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              State<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'State'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              City<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'City'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Postal Code / Zip Code<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Postal Code / Zip Code'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Email Address<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Email Address'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Land Line No<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Land Line No'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Mobile No<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Mobile No *'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
            />
          </View>
        </ScrollView>
        <ButtonComponent
          onpress={() => {}}
          style={{
            marginVertical: 10,
            backgroundColor: '#4169e1',
            width: 150,
            alignSelf: 'center',
          }}
          text="Update"
        />
      </View>
    </WrapperContainer>
  );
};

export default Profile;
