import RBSheet from 'react-native-raw-bottom-sheet';
import theme from '../config/theme';
import Menu from './menu';

const MenuSheet = ({ menuRefRBSheet, categories, products }) => {
  return (
    <RBSheet
      ref={menuRefRBSheet}
      closeOnDragDown={true}
      height={700}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: theme.colors.white,
          paddingHorizontal: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 6.27,

          elevation: 10,
        },
        draggableIcon: {
          backgroundColor: theme.colors.one,
        },
      }}
    >
      <Menu categories={categories} products={products} />
    </RBSheet>
  );
};
export default MenuSheet;
