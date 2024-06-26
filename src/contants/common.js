export const PATH = Object.freeze({
  NOT_FOUND: '*',
  HOME: '/',
  DOMAIN_HOME: '/:domain',
  DOMAIN_SIGNIN: '/:domain/sign-in',
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up',
  LANDINGPAGE: '/landing-page',
  REGISTER: '/register',
  BUSSINESSREGISTER: '/business-register',
  CUSTOMERLANDINGPAGE: '/customer-landing-page',
  NEWCUSTOMER: '/new-customer',
  ACTIVITY: '/activity',
  ACTIVITYDETAIL: '/activity/:id',
  TASKDETAIL: '/activity/:id/task/:id',
  ABOUT: '/about',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  CUSTOMER: '/customers',
  CUSTOMERDETAIL: '/customers/:id',
  ACCOUNT: '/accounts',
  NEWACCOUNT: '/new-account',
  ACCOUNTDETAIL: '/accounts/:id',
  PRODUCT: '/products',
  PRODUCTDETAIL: '/products/:id',
  NEWPRODUCT: '/new-product',
  PHASE: '/phases',
  PHASEDETAIL: '/phases/:id',
  NEWPHASE: '/new-phases',
  BOARD: '/board',
  ORGANIZATION: '/organization',
  COMPLAINT: '/complaints',
  COMPLAINTDETAIL: '/complaints/:id',
  COMPLAINTCLASSIFY: '/complaint-classify',
  COMPLAINTTYPECREATE: '/complaint-type-create',
  TABLE: '/tables',
  BILLING: '/billing',
  HOST: 'http://localhost:3000',
  CUSTOME_URL: {
    HOME: '/client',
    COMPLAINT: '/client/complaints',
    NEWCOMPLAINT: '/client/new-complaint',
    COMPLAINTDETAIL: '/client/complaints/:id',
    BILL: '/client/bills',
    BILLDETAIL: '/client/bills/:id',
    QUOTE: '/client/quotes',
    QUOTEDETAIL: '/client/quotes/:id',
    QUOTEREQUEST: '/client/quote-request',
    QUOTEREQUESTDETAIL: '/client/quote-request/:id',
    MESSAGE: '/client/messages',
    PROFILE: '/client/profile'
  }
})
export const LOCAL_STORAGE_ITEM = Object.freeze({
  TOKEN: 'tnt.token',
  REFRESH_TOKEN: 'tnt.refresh_token'
})
export const ROLE = Object.freeze({
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE',
  CUSTOMER: 'CUSTOMER'
})
