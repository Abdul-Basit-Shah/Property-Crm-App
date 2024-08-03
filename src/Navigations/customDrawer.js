import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import NavigationStrings from './NavigationStrings';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icons from '../themes/Icons';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';
import TextInputComponent from '../Components/TextInputComponent';

const UserView = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '100%',
          paddingTop: 100,
          paddingBottom: 10,
          paddingHorizontal: 20,
        }}>
        <TextInputComponent
          placeholder={'Type a message'}
          placeholderTextColor={'#ebebeb'}
          inputstyle={{
            backgroundColor: Colors.whiteOpacity50,
            borderRadius: 30,
            height: 45,
          }}
          RightView={<Icons.Feather name="search" size={20} color="#fff" />}
        />
      </View>
    </View>
  );
};

const CustomDrawer = props => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const navigation = useNavigation();
  const [currentIndex, setCurentIndex] = useState();
  const flexStart = 'flex-start';
  const marginHorizontal = 30;
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: currentIndex === index ? null : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          margin: 5,

          marginHorizontal: 15,
          alignSelf: 'flex-start',
        }}
        onPress={() => {
          if (currentIndex === index) {
            setCurentIndex(null);
          } else {
            setCurentIndex(index);
          }
          switch (index) {
            case 0:
              navigation?.navigate('tabs');
              break;
            case 1:
              navigation?.navigate('Home');
              break;
            case 2:
              navigation?.navigate('Profile');
              break;
            case 8:
              navigation?.navigate('Register');
              break;
            case 4:
              break;

            case 5:
              break;

            default:
              break;
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            {index === 0 ? (
              <Icons.AntDesign name="home" size={24} color="#fff" />
            ) : index === 1 ? (
              <Icons.AntDesign name="dashboard" size={24} color="#fff" />
            ) : index === 2 ? (
              <Icons.AntDesign name="profile" size={24} color="#fff" />
            ) : index === 3 ? (
              <Icons.MaterialCommunityIcons
                name="account-box-outline"
                size={25}
                color="#fff"
              />
            ) : index === 4 ? (
              <Icons.AntDesign name="appstore-o" size={24} color="#fff" />
            ) : index === 5 ? (
              <Icons.MaterialCommunityIcons
                name="account-group-outline"
                size={24}
                color="#fff"
              />
            ) : index === 6 ? (
              <Icons.SimpleLineIcons name="settings" size={24} color="#fff" />
            ) : index === 7 ? (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/9727/9727324.png',
                }}
                style={{width: 25, height: 25, tintColor: '#fff'}}
              />
            ) : index === 8 ? (
              <Icons.FontAwesome5 name="registered" size={24} color="#fff" />
            ) : index === 9 ? (
              <Icons.FontAwesome name="support" size={24} color="#fff" />
            ) : null}
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontFamily: Fonts.ComfortaBold,
                marginHorizontal: 30,
              }}>
              {item}
            </Text>
          </View>
          {[3, 4, 5, 6, 7, 9].includes(index) && (
            <Icons.AntDesign
              name={currentIndex === index ? 'up' : 'down'}
              size={15}
              color="#fff"
            />
          )}
        </View>
        {currentIndex === index ? (
          index === 3 ? (
            <>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('FundeTransfers')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,

                    fontSize: 13,
                  }}>
                  Fund Transfers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('SignupPin')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  SignUp Pin
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('Rewards')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Rewards
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('WithDr')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Withdrawal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('Reports')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Report
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('WithReport')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Withdraw Report
                </Text>
              </TouchableOpacity>
            </>
          ) : index === 4 ? (
            <>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('TreeOwn')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Tree
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('DirectTeam')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Direct Team BV's
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('GenReports')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Report
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('GenPendingMembers')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Pending Members
                </Text>
              </TouchableOpacity>
            </>
          ) : index === 5 ? (
            <>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}
                  onPress={() => navigation?.navigate('PendingMem')}>
                  Pending
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}
                  onPress={() => navigation?.navigate('ActivatedMembers')}>
                  Activated
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}
                  onPress={() => navigation?.navigate('FreezeMembers')}>
                  Freeze
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}
                  onPress={() => navigation?.navigate('DisableMembers')}>
                  Disable
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('AllMem')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  All Members
                </Text>
              </TouchableOpacity>
            </>
          ) : index === 6 ? (
            <>
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('trasn')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Transaction Pin
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}
                onPress={() => navigation?.navigate('ChangePassword')}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </>
          ) : index === 7 ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PackagesLvl');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Package Levels ROI
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SettingCore');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LevelSetting');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Level Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DirectLevelPr');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Direct Level Profits
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DailyReturns');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Daily Returns
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserReward');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  User Rewards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PaymentTypes');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Payment Types
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Sessions');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Sessions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CurrencyRates');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Currency Rate
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Roles');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Roles
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Users');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Users
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MemberKyc');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Member Kyc
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('History');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </>
          ) : index === 9 ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CreateTicket');
                }}
                style={{
                  marginVertical: 15,
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Create Ticket
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TicketHistory');
                }}
                style={{
                  marginHorizontal: marginHorizontal,
                  alignSelf: flexStart,
                }}>
                <Text
                  style={{
                    color: Colors.DrawerItemViewColor,
                    fontFamily: Fonts.ComfortaMedium,
                    fontSize: 13,
                  }}>
                  Ticket History
                </Text>
              </TouchableOpacity>
            </>
          ) : null
        ) : null}
      </TouchableOpacity>
    );
  };
  const IICon = ({size, color}) => {
    <Icons.MaterialCommunityIcons
      name="account-circle"
      size={24}
      color="black"
    />;
  };
  return (
    <View style={{flex: 1}}>
      <UserView />
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Home',
            'Dashborad',
            'Profile',
            'Accounts',
            'Geneology',
            'Members',
            'Settings',
            'Core',
            'Register',
            'Support',
          ]}
          renderItem={({item, index}) =>
            renderItem(item, index, navigation, DarkMode)
          }
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          margin: 5,

          marginHorizontal: 15,
          alignSelf: 'flex-start',
        }}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.8E92ZiqboR-GqhX-TRX93gHaHb?rs=1&pid=ImgDetMain',
          }}
          style={{width: 35, height: 35, borderRadius: 20}}
        />
        <View>
          <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 15,
              fontFamily: Fonts.ComfortaBold,
              marginHorizontal: 25,
              width: 150,
            }}>
            Sigham Vishnoi
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 10,
              fontFamily: Fonts.ComfortaRegular,
              marginHorizontal: 25,
              width: 150,
            }}>
            Product Designer
          </Text>
        </View>
      </TouchableOpacity>

      {/* <DrawerItem
        onPress={() => {
          navigation.navigate(NavigationStrings.AUTH);
        }}
        style={{marginBottom: 20, marginHorizontal: 23}}
        icon={() => (
          <Icons.MaterialCommunityIcons
            name="account-circle"
            size={35}
            color="#fff"
          />
        )}
        label={'Signout'}
        labelStyle={{
          color: '#fff',
          fontSize: 15,
          fontFamily: Fonts.ComfortaBold,
        }}
        
      /> */}
    </View>
  );
};

export default CustomDrawer;
