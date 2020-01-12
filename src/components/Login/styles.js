import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingHorizontal: 20,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100;
`;

export const Input = styled.TextInput`
  height: 45;
  width: 100%;
  color: #354894;
  border-width: 1;
  border-color: #354894;
  border-radius: 4;
  margin-top: 10;
  padding-left: 10;
  font-family: Roboto-Medium;
`;

export const Button = styled.TouchableOpacity`
  height: 45;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #354894;
  margin-top: 20;
  border-radius: 5;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-size: 16;
  font-family: Roboto-Bold;
`;
