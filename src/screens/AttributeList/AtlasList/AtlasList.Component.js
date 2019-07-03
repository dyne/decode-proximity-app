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
import { FlatList as ListContainer } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { isEmpty, prop } from 'ramda';
import EmptyList from 'lib/Components/EmptyList';
import { Screen } from 'lib/styles';
import ListItem from 'lib/Components/ListItem';

const AtlasList = ({ attributes, navigation: { navigate } }) => {
  const { t } = useTranslation('attributes');
  return (
    <Screen>
      {isEmpty(attributes) ? (<EmptyList text={t('emptyAtlas')} />) : (
        <ListContainer
          data={attributes}
          renderItem={
            ({ item: { name, description } }) => (
              <ListItem
                id={name}
                name={t(name)}
                description={t(description)}
                onPress={() => navigate('EditAttribute', { name })}
              />
            )
          }
          keyExtractor={prop('name')}
        />
      )}
    </Screen>
  );
};

AtlasList.displayName = 'AtlasList';

AtlasList.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

AtlasList.navigationOptions = ({ screenProps: { t } }) => ({
  title: t('attributes:available'),
});


export default AtlasList;
