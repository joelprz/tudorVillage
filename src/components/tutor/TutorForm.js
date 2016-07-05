import React, {PropTypes} from 'react';
import TextInput from '../shared/TextInput';
import TextArea from '../shared/TextArea';
import SelectInput from '../shared/SelectInput';

// Stateless functional component form with imported child components
// Destructure all props in argument list of function. Shows what props are required, at a glance
// Args passed to function should be reflected in propTypes!

const TutorForm = ({tutor, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <div className="container">
        <h1>Manage Tutor</h1>
        <TextInput
          name="name"
          label="Name"
          value={tutor.name}
          onChange={onChange}
          error={errors.name} />

        <TextInput
          name="title"
          label="title"
          value={tutor.title}
          onChange={onChange}
          error={errors.title}/>

        <div className="row">
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="city"
              label="city"
              value={tutor.city}
              onChange={onChange}
              error={errors.city} />
          </div>
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="state"
              label="state"
              value={tutor.state}
              onChange={onChange}
              error={errors.length} />
          </div>
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="zip"
              label="zip"
              value={tutor.zip}
              onChange={onChange}
              error={errors.length} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="rate"
              label="rate"
              value={tutor.rate}
              onChange={onChange}
              error={errors.length} />
          </div>
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="isOnline"
              label="isOnline"
              value={tutor.isOnline}
              onChange={onChange}
              error={errors.length} />
          </div>
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="ratingCount"
              label="ratingCount"
              value={tutor.ratingCount}
              onChange={onChange}
              error={errors.length} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="starRating"
              label="starRating"
              value={tutor.starRating}
              onChange={onChange}
              error={errors.length} />
          </div>
          <div className="col-xs-4 col-lg-4">
            <TextInput
              name="rank"
              label="rank"
              value={tutor.rank}
              onChange={onChange}
              error={errors.length} />
          </div>
        </div>
        <TextArea
          name="description"
          label="description"
          value={tutor.description}
          onChange={onChange}
          error={errors.title}/>

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
        </div>
      </form>
  );
};

// Proptypes should match args passed to function!
TutorForm.propTypes = {
  tutor: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default TutorForm;











