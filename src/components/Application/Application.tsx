import React from 'react';

const Application = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
        />
        <label htmlFor='surname'>surname</label>
        <input
          type='text'
          id='surname'
        />
      </fieldset>

      <fieldset>
        <label htmlFor='job-location'>Job Location</label>
        <select
          name='job-location'
          id='job-location'
        >
          <option value=''>Select a country</option>
          <option value='nig'>Niger</option>
          <option value='c'>Select </option>
          <option value='d'>a country</option>
          <option value='f'>t a </option>
          <option value='h'> country</option>
        </select>
      </fieldset>

      <fieldset>
        <label>
          <input
            type='checkbox'
            id='checkbox'
          />
          I agreed to t and conditions
        </label>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};

export default Application;
