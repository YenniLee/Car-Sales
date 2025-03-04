import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from '../actions'; 


const AdditionalFeatures = props => {
  console.log(props.additionalFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
