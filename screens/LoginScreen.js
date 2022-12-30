import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Ant from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Entypo';
import NoCheck from 'react-native-vector-icons/Octicons';
import {Formik} from 'formik';
import * as yup from 'yup';

import {loginUser} from '../store/actions/loginActions';
import Input from '../components/login/Input';
import Loginbtn from '../components/login/Loginbtn'; 
import Error from '../components/ui/Error';
import Loading from '../components/ui/loading';
import Colors from '../constants/Color';

const loginValidationSchema = yup.object({
  username: yup.string().trim().required('Username is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const LoginScreen = props => {
  const dispatch = useDispatch();
  const {status, error, loading} = useSelector(state => state.login);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = values => {
    dispatch(loginUser(values));
  };
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={(values,actions) => {
        submitHandler(values);
        actions.resetForm();
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
            style={styles.background}></ImageBackground>
          <View style={styles.buttomView}>
            <View style={{padding: 40}}>
              <Text style={styles.welcometitle}>Welcome</Text>

              <View style={styles.formControl}>
                <Input
                  label="Username"
                  testID="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  
                />
                {!errors.username ? (
                  <Ant name="check" size={20} style={styles.item} />
                ) : (
                  <NoCheck name="x-circle" size={20} style={styles.item} />
                )}
              </View>

              {errors.username && touched.username && (
                <Error error={errors.username} />
              )}

              <View style={styles.formControl}>
                <Input
                  label="Password"
                  testID="password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />

                <Eye
                  size={20}
                  style={styles.item}
                  name={showPassword ? 'eye-with-line' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              {errors.password && touched.password && (
                <Error error={errors.password} />
              )}
              <Loginbtn 
              disabled={loading || !values.password || !values.username}
              onPressbtn={handleSubmit}
              text="login"
              testID="loginId"
              style={{backgroundColor: (loading || !values.password || !values.username) ? '#CACFD2' :   Colors.mauve}}
              />

              {loading && <Loading testID="loadId"/>}
              {status === 'failed' && <Error error={error} />}
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
    height: Dimensions.get('window').height / 3,
  },
  buttomView: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  welcometitle: {
    color: Colors.mauve,
    fontSize: 30,
    fontWeight: 'bold',
  },
  formControl: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  item: {
    marginRight: 20,
    alignSelf: 'flex-end',
    color: Colors.mauve,
  },
});

export const screenOptions = {
  headerShown: false,
};

export default LoginScreen;
