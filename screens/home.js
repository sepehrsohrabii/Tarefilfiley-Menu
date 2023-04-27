import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../config/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Icon } from '@rneui/themed';
import MenuSheet from '../components/menuSheet';
import { useRoute } from '@react-navigation/native';
const homeImage = require('../assets/img/food.jpg');

const HomeScreen = () => {
  const menuRefRBSheet = useRef();
  const currentUrl = window.location.href;
  const restaurantLink = currentUrl.split('/').pop();
  // const route = useRoute();
  // const { restaurantLink } = route.params;
  const [restaurant, setRestaurant] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const fetchMenuData = async () => {
    try {
      const response = await axios.post('https://api.tarefilfiley.me/restaurant/get-data', {
        restaurantLink,
      });
      if (response.status === 200) {
        setRestaurant(response.data.restaurant);
        setCategories(response.data.categories);
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);
  return (
    <SafeAreaProvider>
      {restaurant ? (
        <Container>
          <Row>
            {restaurant.image ? (
              <ImageBackground
                source={restaurant.image}
                resizeMode="cover"
                style={styles.image}
              ></ImageBackground>
            ) : (
              <ImageBackground
                source={homeImage}
                resizeMode="cover"
                style={styles.image}
              ></ImageBackground>
            )}

            <Col>
              <View style={styles.logoContainer}>
                <Image source={restaurant.logo} style={styles.logo} resizeMode="contain" />
              </View>
              <TextBox>
                <Title>{restaurant.persianName}</Title>
              </TextBox>
              <View style={styles.starContainer}>
                <Text style={styles.starText}>(193 نفر)</Text>
                <Icon type="antdesign" name="staro" color={theme.colors.three} size={18} />
                <Icon type="antdesign" name="star" color={theme.colors.three} size={18} />
                <Icon type="antdesign" name="star" color={theme.colors.three} size={18} />
                <Icon type="antdesign" name="star" color={theme.colors.three} size={18} />
                <Icon type="antdesign" name="star" color={theme.colors.three} size={18} />
              </View>
              <TextBox>
                <Text style={styles.description}>
                  مجموعه ی {restaurant.persianName} با منوی آنلاین در خدمت شماست. برای مشاهده ی منو
                  روی دکمه ی پایین صفحه کلیک کنید.
                </Text>
              </TextBox>
              <View style={styles.textContainer}>
                <Icon type="antdesign" name="phone" color={theme.colors.three} size={18} />
                <Text style={styles.normalText}>{restaurant.phoneNumber}</Text>
              </View>
              <View style={styles.textContainer}>
                <Icon type="antdesign" name="clockcircleo" color={theme.colors.three} size={18} />
                <Text style={styles.normalText}>{restaurant.openingHours}</Text>
              </View>
            </Col>
          </Row>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              menuRefRBSheet.current.open();
            }}
          >
            <ButtonText>مشاهده منو</ButtonText>
          </TouchableOpacity>
          <MenuSheet menuRefRBSheet={menuRefRBSheet} categories={categories} products={products} />
        </Container>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaProvider>
  );
};
const Container = styled.View`
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  background: ${theme.colors.one};
`;
const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Col = styled.View`
  flex: 0.5;
  align-self: center;
  text-align: right;
`;
const TextBox = styled.View`
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  margin-bottom: 10%;
`;
const Title = styled.Text`
  font-family: ${theme.typography.heading1.fontFamily};
  font-size: ${theme.typography.heading1.fontSize};
  color: ${theme.colors.white};
`;
const ButtonText = styled.Text`
  font-family: ${theme.typography.subTitle_M.fontFamily};
  font-size: ${theme.typography.subTitle_M.fontSize};
  color: ${theme.colors.white};
  text-align: center;
`;
const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  starContainer: {
    width: '100%',
    textAlign: 'right',
    alignItems: 'end',
    justifyContent: 'end',
    paddingRight: '10%',
    paddingLeft: '10%',
    marginBottom: '10%',
    flexDirection: 'row',
    marginTop: '-4%',
  },
  starText: {
    marginEnd: '5%',
    fontFamily: theme.typography.smallest.fontFamily,
    fontSize: theme.typography.smallest.fontSize,
    color: theme.colors.white,
  },
  logoContainer: {
    width: '100%',
    textAlign: 'right',
    alignItems: 'end',
    paddingRight: '10%',
    paddingLeft: '10%',
    marginBottom: '10%',
  },
  logo: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    width: '70px',
    height: '70px',
  },
  button: {
    backgroundColor: theme.colors.four,
    borderRadius: '20px',
    padding: '13px',
    left: '15%',
    right: '15%',
    position: 'absolute',
    bottom: '7%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  textContainer: {
    width: '100%',
    textAlign: 'right',
    alignItems: 'end',
    paddingRight: '10%',
    paddingLeft: '10%',
    marginBottom: '10%',
  },
  description: {
    fontFamily: theme.typography.paragraph2.fontFamily,
    fontSize: theme.typography.paragraph2.fontSize,
    color: theme.colors.white,
    textAlign: 'justify',
    lineHeight: '25px',
  },
  normalText: {
    fontFamily: theme.typography.paragraph2.fontFamily,
    fontSize: theme.typography.paragraph2.fontSize,
    color: theme.colors.white,
    marginEnd: '5%',
  },
});
export default HomeScreen;
