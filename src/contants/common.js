export const PATH = Object.freeze({
  NOT_FOUND: '*',
  HOME: '/',
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up',
  LANDINGPAGE: '/landing-page',
  REGISTER: '/register',
  BUSSINESSREGISTER: '/bussiness-register',
  CUSTOMERLANDINGPAGE: '/customer-landing-page',
  NEWCUSTOMER: '/new-customer',
  ACTIVITY: '/activity',
  ACTIVITYDETAIL: '/activity/:id',
  ABOUT: '/about',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  CUSTOMER: '/customers',
  CUSTOMERDETAIL: '/customers/:id',
  EMPLOYEE: '/employees',
  NEWEMPLOYEE: '/new-emplyee',
  EMPLOYEEDETAIL: '/employees/:id',
  PRODUCT: '/products',
  PRODUCTDETAIL: '/products/:id',
  NEWPRODUCT: '/new-product',
  PHASE: '/phases',
  BOARD: '/board',

  ORGANIZATION: '/organization',
  COMPLAINT: '/complaints',

  COMPLAINTDETAIL: 'complaints/:id',
  TYPECOMPLAINT: '/type-complaints',
  TABLE: '/tables',
  BILLING: '/billing',

  HOST: 'http://localhost:3000'
})
export const LOCAL_STORAGE_ITEM = Object.freeze({
  TOKEN: 'tnt.token',
  REFRESH_TOKEN: 'tnt.refresh_token'
})
