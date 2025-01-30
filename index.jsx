/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, View, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  imageItem: {
    width: 80,
    height: 80,
    borderColor: 'grey',
    borderWidth: 2,
  },
});

class ImageListItem extends React.PureComponent {
  onPress() {
    const { id } = this.props;
    this.props.onPressItem(id);
  }

  render() {
    const { selected, uri } = this.props;
    const borderColor = selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ borderColor, borderWidth: 2 }}>
          <Image style={styles.imageItem} source={{ uri }} />
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
