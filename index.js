import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Image } from 'react-native'

const propTypes = {
  onPress: (index) => {},
  id: PropTypes.number,
  uri: PropTypes.string,
  selected: PropTypes.bool,
  styles: PropTypes.object
}

const defaultProps = {
  styles: {
    imageItem: {
      width: 80,
      height: 80,
      borderColor: 'grey',
      borderWidth: 2
    }
  }
}

class ImageListItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress (e) {
    this.props.onPress(e.props.id)
  }

  render () {
    const styles = this.props.styles || {}
    const borderColor = this.props.selected ? 'red' : 'black'
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}>
        <View style={{ borderColor: borderColor, borderWidth: 2 }}>
          <Image style={styles.imageItem} source={{ uri: this.props.uri }} />
        </View>
      </TouchableOpacity>
    )
  }
}

ImageListItem.propTypes = propTypes
ImageListItem.defaultProps = defaultProps

export default ImageListItem
