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
import { Dimensions } from 'react-native';
import { childrenPropTypes } from 'lib/utils';
import styled from 'styled-components/native';

const StyledTitle = styled.Text({
  textAlign: 'center',
  fontSize: 40,
  color: '#fff',
  paddingBottom: 15,
});

const StyledSubtitle = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  paddingHorizontal: 10,
  color: '#fff',
  marginBottom: 60,
});

export const Title = ({ children }) => (
  <StyledTitle allowFontScaling={false}>
    {children}
  </StyledTitle>
);

Title.propTypes = ({
  children: childrenPropTypes.isRequired,
});

export const Subtitle = ({ children }) => (
  <StyledSubtitle allowFontScaling={false}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = ({
  children: childrenPropTypes.isRequired,
});

export const CarouselImage = styled.Image({
  width: '95%',
  height: Dimensions.get('window').height / 2,
});
