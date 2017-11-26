// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Folders } from '@src/components';
import {
  foldersWrapperWidthSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  foldersWrapperWidth: foldersWrapperWidthSelector,
});

export const FoldersConnected = connect(mapStateToProps, {})(Folders);