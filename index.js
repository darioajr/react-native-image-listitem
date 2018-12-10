/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageItem: {
    width: 80,
    height: 80,
    borderColor: 'grey',
    borderWidth: 2,
  },
});

class ImageListItem extends React.PureComponent {
  _onPress() {
    this.props.onPressItem(this.props.id);
  }

  render() {
    const borderColor = this.props.selected ? 'red' : 'black';
    return (
      // eslint-disable-next-line no-underscore-dangle
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ borderColor, borderWidth: 2 }}>
          <Image style={styles.imageItem} source={{ uri: this.props.uri }} />
        </View>
      </TouchableOpacity>
    );
  }
}

ImageListItem.propTypes = {
  // eslint-disable-next-line no-unused-vars
  onPressItem: (index) => {},
  id: PropTypes.number,
  uri: PropTypes.string,
  selected: PropTypes.bool,
};

export default ImageListItem;
