import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import TextInputComponent from '../Components/TextInputComponent';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const DirectLevelPr = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Direct Level Profits'} />

      <View style={{paddingHorizontal: 16, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 10
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'7.00'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 20
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'2.50'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 30
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'2.00'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 40
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'1.50'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 50
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'1.25'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 60
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'1.00'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10, marginBottom: 0}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.MonstSemiBold,
              color: DarkMode ? '#fff' : '#000',
              marginVertical: 10,
            }}>
            Level 70
          </Text>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Percentage <Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'0.75'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default DirectLevelPr;

const styles = StyleSheet.create({});
