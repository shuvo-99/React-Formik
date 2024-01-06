//  ===== Video - 3 =====

import { useFormik } from "formik";

function OldYoutubeForm() {
  const formik = useFormik({});

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel" name="channel" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default OldYoutubeForm;

//  ===== Video - 4 =====

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    channel: "",
  },
});

console.log(formik.values); // returns info as objects

<input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
<input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
<input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

//  ===== Video - 5 =====

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    channel: "",
  },
  onSubmit: values => {
    console.log(values) // // returns info as objects
  }
});

<form onSubmit={formik.handleSubmit}>

</form>

//  ===== Video - 7 =====

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    channel: "",
  },
  onSubmit: values => {
    console.log(values) // // returns info as objects
  },
  validate: values => {
    let errors = {}
  
    if (!value.name){
      error.name = 'Require'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format'
    }

    if (!values.channel) {
      errors.channel = 'Required'
    }

    return errors
  }
  
});

// ===== REFACTOR =====


const initialValues = {
  name: 'Vishwas',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}

const formik = useFormik({
  initialValues,
  onSubmit,
  validate
  
});

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====

//  ===== Video -   =====
