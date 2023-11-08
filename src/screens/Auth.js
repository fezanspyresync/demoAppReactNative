import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-switch';
import {useNavigation} from '@react-navigation/native';

const AuthScreen = () => {
  const [value, setValue] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signinName, setSigninName] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const navigation = useNavigation();

  const signInHandler = () => {
    if (
      signinName !== '' &&
      signupPassword !== '' &&
      signupName == signinName &&
      signinPassword == signupPassword
    ) {
      navigation.replace('tabRoute');
    } else {
      Alert.alert('plz signup');
    }
  };
  const signUpHandler = () => {
    if (signupName !== '' && signupPassword !== '') {
      setValue(true);
    } else {
      Alert.alert('enter correct info');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: '#7345'}}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 10,
            position: 'absolute',
            top: 20,
            left: 20,
            overflow: 'hidden',
            transform: [{rotate: '15deg'}],
            zIndex: 1, // Control the z-index to stack views
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="cover"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 10,
            position: 'absolute',
            top: 100,
            left: 250,
            overflow: 'hidden',
            transform: [{rotate: '65deg'}, {scale: 1.5}],
            zIndex: 2,
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="cover"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEHswHVyxjQ-muQA6Te6teY_DxAw-cOm-gA&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 10,
            position: 'absolute',
            top: 200,
            left: 50,
            overflow: 'hidden',
            transform: [{rotate: '120deg'}, {scale: 1.5}],
            zIndex: 3,
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="cover"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AmFp0J_NPvt2qDYBuSNZukTl3oaRljYzCA&usqp=CAU',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#4DC88E',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: -30,
          padding: 20,
        }}>
        <View
          style={{
            marginTop: 30,
            padding: 20,
            alignItems: 'center',
            right: 10,
          }}>
          <Switch
            value={value}
            onValueChange={val => setValue(!value)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={27}
            barHeight={30}
            circleBorderWidth={3}
            backgroundActive={'white'}
            backgroundInactive={'white'}
            circleActiveColor={'green'}
            // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{borderColor: 'none'}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={20} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
          />
        </View>

        <TextInput
          placeholder="name"
          value={value ? signinName : signupName}
          onChangeText={value ? setSigninName : setSignupName}
          placeholderTextColor={'#000'}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            paddingLeft: 20,
            marginTop: 30,
            fontSize: 16,
            fontWeight: 'bold',
          }}
        />
        <TextInput
          value={value ? signinPassword : signupPassword}
          onChangeText={value ? setSigninPassword : setSignupPassword}
          placeholder="password"
          placeholderTextColor={'#000'}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            paddingLeft: 20,
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'bold',
          }}
        />
        <TouchableOpacity
          onPress={value ? signInHandler : signUpHandler}
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
            {value ? 'Login' : 'Signup'}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          overflow: 'hidden',
          borderRadius: 100,
          backgroundColor: 'blue',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateX: -60}, {translateY: -85}],
        }}>
        <Image
          resizeMode="cover"
          height={'100%'}
          width={'100%'}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiQO_Ipf811iQLX1i3LkP51yUJy1uIw8S7w&usqp=CAU',
          }}
        />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
