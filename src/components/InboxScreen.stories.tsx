import React from 'react';
import { Provider } from 'react-redux';
import { PureInboxScreen } from './InboxScreen';
import { store } from '../lib/store';

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
};

export const Default = () => <PureInboxScreen />;

export const Error = (error: string) => <PureInboxScreen error={error} />
