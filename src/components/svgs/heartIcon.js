import React from 'react';
import {TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import {SvgCss} from 'react-native-svg';

const HeartIcon = props => {
  const {size, color, onPress, loading, background, full, style} = props;
  const sizes = size ? size : 35;

  const fill = `<svg xmlns="http://www.w3.org/2000/svg" width="17.597" height="16.243" viewBox="0 0 17.597 16.243">
  <path id="Icon_ionic-md-heart-empty" data-name="Icon ionic-md-heart-empty" d="M16.132,4.5c-1.54,0-3.959,1.857-3.959,1.857S9.754,4.5,8.214,4.5A4.784,4.784,0,0,0,3.375,9.369c0,3.363,2.991,6.061,7.521,10.224l1.277,1.151,1.277-1.151c4.53-4.162,7.521-6.861,7.521-10.224A4.784,4.784,0,0,0,16.132,4.5Z" transform="translate(-3.375 -4.5)" fill="#0da11c"/>
</svg>`;

  const empty = `<svg xmlns="http://www.w3.org/2000/svg" width="17.597" height="16.243" viewBox="0 0 17.597 16.243">
<path id="Icon_ionic-md-heart-empty" data-name="Icon ionic-md-heart-empty" d="M16.132,4.5a5.2,5.2,0,0,0-3.959,1.857A5.2,5.2,0,0,0,8.214,4.5,4.784,4.784,0,0,0,3.375,9.369c0,3.363,2.991,6.061,7.521,10.224l1.277,1.151,1.277-1.151c4.53-4.162,7.521-6.861,7.521-10.224A4.784,4.784,0,0,0,16.132,4.5ZM12.715,18.429l-.178.165-.364.33-.364-.33-.178-.165a53.765,53.765,0,0,1-5.19-5.161,6.206,6.206,0,0,1-1.709-3.9,3.518,3.518,0,0,1,1-2.508A3.442,3.442,0,0,1,8.214,5.854a3.879,3.879,0,0,1,2.923,1.375l1.036,1.231L13.21,7.228a3.865,3.865,0,0,1,2.923-1.375A3.459,3.459,0,0,1,18.615,6.86a3.526,3.526,0,0,1,1,2.508,6.239,6.239,0,0,1-1.709,3.9A53.874,53.874,0,0,1,12.715,18.429Z" transform="translate(-3.375 -4.5)" fill="#a8a8a8"/>
</svg>`;

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        iconStyles.container,
        style,
        {
          width: sizes,
          height: sizes,
          backgroundColor: background ? 'white' : 'transparent',
        },
      ]}>
      {loading ? (
        <ActivityIndicator style={{position: 'absolute'}} />
      ) : (
        <SvgCss xml={full ? fill : empty} width="100%" height="100%" />
      )}
    </TouchableOpacity>
  );
};
export default HeartIcon;

const iconStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 8,
  },
});
