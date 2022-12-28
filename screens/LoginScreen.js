import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Label,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Entypo';
// import Check from 'react-native-vector-icons/AntDesign';
import NoCheck from 'react-native-vector-icons/Octicons';
import {Formik} from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required('Username is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
});

const LoginScreen = props => {
 
  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={values => {
       // submitHandler(values);
        //actions.resetForm();
       
      }}>
    
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}>
            {/* <View style={styles.title}>
              <Text style={styles.loginTitle}>Login</Text>
            </View> */}
          </ImageBackground>
          <View style={styles.buttomView}>
            <View style={{padding: 40}}>
              <Text style={styles.welcometitle}>Welcome</Text>
              
              <View style={styles.formControl}>
              {/* <Eye name="user" size={25} /> */}
                <Text style={styles.label}>Username:</Text>

                <TextInput
                  style={styles.input}
                  id="username"
                  required
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                {!errors.username ? (
                  <Ant name="check" size={15} style={styles.item} />
                ) : (
                  <NoCheck name="x-circle" size={15} style={styles.item} />
                )}
              </View>

              {errors.username && touched.username && (
                <Text style={styles.errors}>{errors.username}</Text>
              )}

              <View style={styles.formControl}>
                {/* <Icon name="key" size={25} /> */}
                <Text style={styles.label}>Password:</Text>
                <TextInput
                  style={styles.input}
                  id="password"
                  label="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Eye
                size={15} style={styles.item}
                  name={showPassword ? 'eye-with-line' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
             
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  onPress={handleSubmit}
                 
                  style={[
                    styles.button,
                    {backgroundColor: '#A629C2'},
                  ]}>
                  <Text style={styles.buttonText}> Login</Text>
                </TouchableOpacity>
              </View>
            
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  background: {
    height: Dimensions.get('window').height /3,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    paddingBottom:30,
    color: '#A629C2',
    fontSize: 40,
    
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  buttomView: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  welcometitle: {
    color: '#A629C2',
    fontSize: 30,
  },
  formControl: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  label: {
    marginVertical: 2,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '75%',
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  item:{
    marginRight: 20,
    alignSelf: 'flex-end',
    color: '#A629C2',
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  button: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    // shadowColor:'#00acee',
    elevation: 15,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: 'center',
    padding:20
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
  
});

export const screenOptions = {
  headerShown: false,
};
export default LoginScreen;
