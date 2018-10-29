import React from 'react';
import ErrorBoundary from '@collab-ui/react/ErrorBoundary';
import ErrorContainer from '../ErrorContainer';

// Import Method Show Below
import { Input, Icon } from '@collab-ui/react';

export default class PlaygroundComponent extends React.Component {
  state = {
    value: 'Press or click the clear icon to clear this input'
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  render() {

    const iconNode = (
      <Icon
        name="icon-info_16"
        ariaLabel={'custom icon'}
      />
    );

    const iconButtonNode = (
      <Icon
        name="icon-info_16"
        onClick={() => {}}
        ariaLabel={'custom button icon'}
      />
    );

    return (
      <ErrorBoundary fallbackComponent={<ErrorContainer />}>
        <div>
          <h3>Just Icon Node</h3>
          <div className='row'>
            <Input
              name='clearInput'
              label='Input without clear'
              htmlId='clearInput'
              icon={iconNode}
              inputSize='small-5'
              placeholder='Placeholder Text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <h3>Icon Node with clear prop</h3>
          <div className='row'>
            <Input
              name='clearInput'
              label='Input with clear & icon node'
              htmlId='clearInput'
              icon={iconNode}
              inputSize='small-5'
              placeholder='Placeholder Text'
              value={this.state.value}
              onChange={this.handleChange}
              clear
            />
          </div>
          <h3>Icon Button Node</h3>
          <div className='row'>
            <Input
              name='clearInput'
              label='Icon button node'
              htmlId='clearInput'
              icon={iconButtonNode}
              inputSize='small-5'
              placeholder='Placeholder Text'
              value={this.state.value}
              onChange={this.handleChange}
              clear
            />
          </div>
          <h3>Just clear prop</h3>
          <div className='row'>
            <Input htmlId="test" name="test" label="test" value="test" clear />
          </div>
          <div className='row'>
            <h3>reproduce bug in panel with Clear</h3>
            <div className="cui-panel--form">
              <Input
                name='clearInput'
                label=''
                htmlId='clearInput'
                inputSize='small-5'
                placeholder='Placeholder Text'
                value={this.state.value}
                onChange={this.handleChange}
                clear
              />
            </div>
          </div>
          <div className='row'>
            <h3>reprodcue bug in panel with non-button icon</h3>
            <div className="cui-panel--form">
              <Input
                name='clearInput'
                label=''
                htmlId='clearInput'
                icon={iconNode}
                inputSize='small-5'
                placeholder='Placeholder Text'
                value={this.state.value}
                onChange={this.handleChange}
                clear
              />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

// Sample Class Method Show Below
// export default class PlaygroundComponent extends React.Component {
//   render() {
//     return (
//       <Button label="Playground Button"/>
//     );
//   }
// }
