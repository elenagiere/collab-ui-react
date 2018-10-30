import React from 'react';
import PropTypes from 'prop-types';

/**
 * @category navigation
 * @component breadcrumbs
 * @variations collab-ui-react
 */

class Breadcrumbs extends React.PureComponent {

  render() {
    const { className, children } = this.props;

    const items  = React.Children.map(children, (child, idx) => {
      if (children.length - 1 === idx || !children.length) {
        return React.cloneElement(child, { className: 'current' });
      }

      return child;
    });

    return <ul className={'cui-breadcrumbs' + ` ${className}`}>{items}</ul>;
  }
}

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Breadcrumbs.defaultProps = {
  /** @prop Children nodes to render inside Breadcrumbs | null */
  children: null,
  /** @prop Optional css class string | '' */
  className: ''
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;

/**
* @name Default Breadcrumbs
* @description Badges are useful.
*
* @category navigation
* @component breadcrumbs
* @section default
*
* @js

import { ListItem } from '@collab-ui/react';

export default function Default() {
    return (
      <div className='row'>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
          </Breadcrumbs>
        </div>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
            <li href='javascript:void(0)'>
              Default2
            </li>
          </Breadcrumbs>
        </div>
        <div className='columns small-12'>
          <Breadcrumbs>
            <li href='javascript:void(0)'>
              Default
            </li>
            <li href='javascript:void(0)'>
              Default2
            </li>
            <li href='javascript:void(0)'>
              Default3
            </li>
          </Breadcrumbs>
        </div>
      </div>
    );
  }

**/
