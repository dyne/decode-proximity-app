/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = styled.TouchableOpacity({
  paddingLeft: 20,
});

const StyledIcon = styled(Icon)(({ theme: { headerPrimaryColor } }) => ({
  color: headerPrimaryColor,
  fontSize: 24,
}));

const MenuIcon = ({ onPress }) => (
  <Button onPress={onPress}>
    <StyledIcon name="navicon" />
  </Button>
);

MenuIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MenuIcon;
