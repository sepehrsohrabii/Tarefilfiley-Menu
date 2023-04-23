import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import theme from '../config/theme';

const Menu = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // set first category as selected by default

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleCategoryPress(item)}
      style={[
        styles.categoryItem,
        selectedCategory?._id === item._id && styles.selectedCategoryItem,
        index == 0 ? styles.marginEnd : null,
      ]}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory?._id === item._id && styles.selectedCategoryText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>منو</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          inverted
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item._id.toString()}
        />

        {selectedCategory && (
          <View style={styles.productsContainer}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={products.filter((product) => product.category === selectedCategory._id)}
              renderItem={({ item }) => (
                <View style={styles.singleProductBox}>
                  <View style={styles.priceBox}>
                    <Text style={styles.tooman}>تومان</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                  <View style={styles.flexBox}>
                    <View>
                      <Text style={styles.productTitle}>{item.title}</Text>
                      <Text style={styles.subTitle}>{item.description}</Text>
                    </View>
                    {item.image ? (
                      <Image source={{ uri: item.image }} style={styles.img} />
                    ) : (
                      <Image source={require('../assets/img/food.jpg')} style={styles.img} />
                    )}
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              style={styles.productListContainer}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  marginEnd: {
    marginRight: 40,
  },
  singleProductBox: {
    borderColor: theme.colors.one,
    padding: 10,
    borderWidth: 0,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    backgroundColor: theme.colors.white,
    elevation: 11,
    marginBottom: 10,
    zIndex: 11, // works on ios
    marginHorizontal: 10,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 20,
  },
  productTitle: {
    fontFamily: theme.typography.productTitle.fontFamily,
    fontSize: theme.typography.productTitle.fontSize,
    color: theme.colors.darkTextColor,
    textAlign: 'right',
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: theme.typography.productSubTitle.fontFamily,
    fontSize: theme.typography.productSubTitle.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: 'right',
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooman: {
    fontFamily: theme.typography.productSubTitle.fontFamily,
    fontSize: theme.typography.productSubTitle.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: 'right',
  },
  price: {
    fontFamily: theme.typography.productPrice.fontFamily,
    fontSize: theme.typography.productPrice.fontSize,
    color: theme.colors.darkTextColor,
    textAlign: 'right',
    marginLeft: 5,
  },
  title: {
    fontFamily: theme.typography.heading3.fontFamily,
    fontSize: theme.typography.heading3.fontSize,
    color: theme.colors.defaultTextColor,
    paddingHorizontal: 40,
    marginTop: 30,
    marginBottom: 40,
  },
  container: {},
  categoryItem: {
    marginRight: 16,
    padding: 8,
    borderRadius: 10,
    backgroundColor: theme.colors.lighterGray,
  },
  selectedCategoryItem: {
    backgroundColor: theme.colors.one,
  },
  categoryText: {
    fontFamily: theme.typography.heading6.fontFamily,
    fontSize: theme.typography.heading6.fontSize,
    color: theme.colors.lightTextColor,
  },
  productsContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
  },
  productListContainer: {
    paddingTop: 5,
    height: '500px',
  },
  selectedCategoryText: {
    fontFamily: theme.typography.heading6.fontFamily,
    fontSize: theme.typography.heading6.fontSize,
    color: theme.colors.white,
  },
});

export default Menu;
