import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string,
  onPress?: () => void,
  styles?: any,
  iconName?: string
  iconVisiable?: boolean
}

function PrimaryButton({ title, onPress }: ButtonProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#FE3809', '#FF0640']}
      style={styles.gradient}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const TextLinkButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text style={styles.textLinkButton}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export {
  PrimaryButton,
  TextLinkButton
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Metropolis-Medium',
  },
  primartButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d7d7d7',
    color: '#7f7f7f',
    backgroundColor: '#9600ff',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    paddingLeft: '2%',
    paddingTop: '4%',
    paddingBottom: '4%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textLinkButton: {
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 12,
    color: '#050050',
    fontFamily: 'Metropolis-SemiBold',
  }
});
