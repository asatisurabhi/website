import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import LazyLoading from '../../common/components/LazyLoading/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example';
import { exampleSelector } from '../../redux/selectors/exampleSelector';
import { ErrorBoundary } from '../../common/components/Utilities';

require('../../../style/index.css');

const LazyExample = Loadable({
  loader: () => import('../../common/components/Example/Example'),
  loading: LazyLoading,
})

const mapStateToProps = state => ({
  example: exampleSelector(state),
});

const mapDispatchToProps = {
  ...exampleActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class ExampleView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getAwesomeCode();
  }

  render() {
    return (
      <Fragment>
        <LazyExample {...this.props} />
      </Fragment>
    )
  }
}

export default ExampleView;
