$(function (){
  $.validator.setDefaults( {
    submitHandler: function () {
      alert( 'submitted!' );
    }
  } );
  $( '#signupForm' ).validate( {
    rules: {
      surname: 'required',
      firstname: 'required',
      department: 'required',
      manager: 'required',
      equipment: 'required',
      defect: 'required',
      request_type: 'required',
      dateout: 'required',
      returndate: 'required',
      staffid: {
        required: true,
        minlength: 4
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: '#password'
      },
      email: {
        required: true,
        email: true
      },
      agree: 'required'
    },
    messages: {
      surname: 'Please enter your surname',
      firstname: 'Please enter your firstname',
      defect: 'Please enter your defect',
      department: 'Please enter your department',
      manager: 'Please enter your manager',
      equipment: 'Please enter your equipment',
      request_type: 'Please enter your request type',
      staffid: {
        required: 'Please enter a staffid',
        minlength: 'Your staffid must consist of at least 4 characters'
      },
      password: {
        required: 'Please provide a password',
        minlength: 'Your password must be at least 5 characters long'
      },
      confirm_password: {
        required: 'Please provide a password',
        minlength: 'Your password must be at least 5 characters long',
        equalTo: 'Please enter the same password as above'
      },
      dateout: 'Please enter date the equipment is taken',
      returndate: 'Please enter date the equipment will be returned',
      agree: 'Please accept the I.T policy'
    },
    errorElement: 'em',
    errorPlacement: function ( error, element ) {
      // Add the `help-block` class to the error element
      error.addClass( 'form-control-feedback' );
      if ( element.prop( 'type' ) === 'checkbox' ) {
        error.insertAfter( element.parent( 'label' ) );
      } else {
        error.insertAfter( element );
      }
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).addClass( 'form-control-danger' ).removeClass( 'form-control-success' );
      $( element ).parents( '.form-group' ).addClass( 'has-danger' ).removeClass( 'has-success' );
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).addClass( 'form-control-success' ).removeClass( 'form-control-danger' );
      $( element ).parents( '.form-group' ).addClass( 'has-success' ).removeClass( 'has-danger' );
    }
  });
});
