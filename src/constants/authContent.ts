export const authData = [
  {
    type: 'signin',
    title: 'Sign In to Veritalent',
    subtitle: 'Access solutions to aid your career journey',
    alternateText: "Don't have an account?",
    alternateLinkText: 'Sign up',
    buttons: [
      {
        label: 'Sign in with Google',
        icon: '/assets/icons/google-icon.svg',
      },
      {
        label: 'Sign in with LinkedIn',
        icon: '/assets/icons/linkedin.svg',
      },
    ],
    form: {
      inputLabel: 'Input Email',
      inputLabelPass: 'Password',
      inputPlaceholder: 'Email',
      buttonLabel: 'Sign in',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Password',
    },
    image: {
      src: '/assets/images/signin.webp',
      alt: 'veritalent',
    },
  },
  {
    type: 'signup',
    title: 'Sign Up To Veritalent',
    subtitle: 'Access solutions to aid your career journey',
    alternateText: 'Already have an account?',
    alternateLinkText: 'Sign in',
    buttons: [
      {
        label: 'Sign in with Google',
        icon: '/assets/icons/google-icon.svg',
      },
      {
        label: 'Sign in with LinkedIn',
        icon: '/assets/icons/linkedin.svg',
      },
    ],
    form: {
      inputLabel: 'Input Email',
      inputPlaceholder: 'hello@johndoe.com',
      buttonLabel: 'Sign Up',
      passwordLabel: 'Password',
      passwordPlaceholder: 'password',
    },
    image: {
      src: '/assets/images/Group 27.svg',
      alt: 'veritalent',
    },
  },
];
