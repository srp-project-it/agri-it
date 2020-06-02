import { gql } from "apollo-boost";

gql`
  input AddOnInput {
    addOns: [AddOnType]
  }
`;

gql`
  type AddOnType {
    name: String!
    duration: Int!
    price: Int!
  }
`;

gql`
  input MyRoutineFieldsInputType {
    name: String
    frequency: String
    useNotes: String
    link: String
  }
`;

// Queries

const getClientsQuery = gql`
  {
    clients {
      squareCustomerId
      unsavedSquareCardIDs
      firstName
      lastName
      email
      phoneNumber
      _id
      password
    }
  }
`;

const getEmployeesQuery = gql`
  {
    employees {
      firstName
      lastName
      email
      phoneNumber
      _id
      password
      permanentPasswordSet
      employeeRole
    }
  }
`;

const getAllAppointmentsQuery = gql`
  {
    all_appointments {
      date
      startTime
      endTime
      duration
      price
      treatments {
        name
        duration
        price
      }
      addOns {
        name
        duration
        price
      }
      client {
        _id
        squareCustomerId
        unsavedSquareCardIDs
        firstName
        lastName
        email
        phoneNumber
      }
      bookedWithCardSquareID
      notes
    }
  }
`;

const getOwnAppointmentsQuery = gql`
  {
    own_appointments {
      id
      date
      startTime
      endTime
      duration
      price
      treatments {
        name
        duration
        price
      }
      addOns {
        name
        duration
        price
      }
      client {
        _id
        squareCustomerId
        unsavedSquareCardIDs
        firstName
        lastName
        email
        phoneNumber
      }
      bookedWithCardSquareID
      notes
    }
  }
`;

const getOwnPastAppointmentsQuery = gql`
  {
    own_past_appointments {
      id
      date
      startTime
      endTime
      duration
      price
      treatments {
        name
        duration
        price
      }
      addOns {
        name
        duration
        price
      }
      client {
        _id
        squareCustomerId
        unsavedSquareCardIDs
        firstName
        lastName
        email
        phoneNumber
      }
      bookedWithCardSquareID
      notes
    }
  }
`;

const getAppointmentQuery = gql`
  query getAppointmentQuery(
    $date: String
    $startTime: String
    $endTime: String
    $duration: Int
    $price: Int
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
    $bookedWithCardSquareID: String
  ) {
    appointment(
      date: $date
      startTime: $startTime
      endTime: $endTime
      duration: $duration
      price: $price
      bookedWithCardSquareID: $bookedWithCardSquareID
      client: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNumber: $phoneNumber
      }
    ) {
      date
      startTime
      endTime
      duration
      price
      treatments {
        name
        duration
        price
      }
      addOns {
        name
        duration
        price
      }
      client {
        firstName
        lastName
        email
        phoneNumber
      }
      bookedWithCardSquareID
      notes
    }
  }
`;

const getClientQuery = gql`
  query(
    $_id: ID
    $squareCustomerId: String
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
    $createdAt: String
  ) {
    client(
      _id: $_id
      squareCustomerId: $squareCustomerId
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      createdAt: $createdAt
    ) {
      _id
      squareCustomerId
      unsavedSquareCardIDs
      firstName
      lastName
      email
      phoneNumber
      createdAt
      password
      consentForm {
        date
        surgeryLast3Months
        surgeryLast3MonthsNotes
        anyHealthProblems
        anyHealthProblemsNotes
        listAnyMedications
        chemPeelsLastMonth
        waxingOnFaceLast5Days
        accutaneOrPrescription
        accutaneOrPrescriptionNotes
        anyProductsContainingSalicyclicAcid
        anyProductsContainingGlycolicAcid
        anyProductsContainingLacticAcid
        anyProductsContainingExfoliatingScrubs
        anyProductsContainingVitaminA
        fillersOrBotox
        fillersOrBotoxNotes
        listKnownAllergies
        skinFlakyOrItch
        everDiagnosedWithRosacea
        pregnantOrNursing
        ultimateSkinCareGoals
        anythingElseWeShouldKnow
        consentFormSignature
        createdAt
      }
      myRoutine {
        morningCleanser {
          _id
          name
          frequency
          useNotes
          link
        }
        morningToner {
          _id
          name
          frequency
          useNotes
          link
        }
        morningSerum {
          _id
          name
          frequency
          useNotes
          link
        }
        morningMoisturizer {
          _id
          name
          frequency
          useNotes
          link
        }
        morningSPF {
          _id
          name
          frequency
          useNotes
          link
        }
        morningRX {
          _id
          name
          frequency
          useNotes
          link
        }
        morningEyeCream {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningOilCleanser {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningCleanser {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningExfoliator {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningTreatmentMask {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningToner {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningSerum {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningMoisturizer {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningNightMask {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningOil {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningSpotTreatment {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningRX {
          _id
          name
          frequency
          useNotes
          link
        }
        eveningEyeCream {
          _id
          name
          frequency
          useNotes
          link
        }
      }
    }
  }
`;

const getEmployeeQuery = gql`
  query(
    $_id: ID
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
  ) {
    employee(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
    ) {
      _id
      firstName
      lastName
      email
      phoneNumber
      employeeRole
      permanentPasswordSet
      password
      tokenCount
      createdAt
    }
  }
`;

const loginQuery = gql`
  query($email: String, $password: String) {
    login(email: $email, password: $password) {
      _id
      accessToken
      refreshToken
    }
  }
`;

const adminLoginQuery = gql`
  query($email: String, $password: String) {
    adminLogin(email: $email, password: $password) {
      _id
      accessToken
      refreshToken
    }
  }
`;

// Mutations

const addAppointmentMutation = gql`
  mutation addAppointmentMutation(
    $date: String!
    $startTime: String!
    $endTime: String!
    $duration: Int!
    $price: Int!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $squareCustomerId: String
    $unsavedSquareCardIDs: String
    $bookedWithCardSquareID: String!
    $treatment_name: String!
    $treatment_duration: Int!
    $treatment_price: Int!
    $addOns: [AddOnInput]
    $notes: String
  ) {
    addAppointment(
      date: $date
      startTime: $startTime
      endTime: $endTime
      duration: $duration
      price: $price
      client: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNumber: $phoneNumber
        squareCustomerId: $squareCustomerId
        unsavedSquareCardIDs: $unsavedSquareCardIDs
      }
      treatments: [
        {
          name: $treatment_name
          duration: $treatment_duration
          price: $treatment_price
        }
      ]
      addOns: $addOns
      bookedWithCardSquareID: $bookedWithCardSquareID
      notes: $notes
    ) {
      date
      startTime
      endTime
      duration
      price
      createdAt
      client {
        firstName
        lastName
        email
        phoneNumber
        squareCustomerId
        unsavedSquareCardIDs
      }
      treatments {
        name
        price
        duration
      }
      addOns {
        name
        price
        duration
      }
      bookedWithCardSquareID
      notes
    }
  }
`;

const deleteAppointmentMutation = gql`
  mutation($_id: ID) {
    deleteAppointment(_id: $_id) {
      _id
    }
  }
`;

const deleteMyRoutineItemMutation = gql`
  mutation(
    $morningCleanserID: ID
    $morningTonerID: ID
    $morningSerumID: ID
    $morningMoisturizerID: ID
    $morningSPFID: ID
    $morningRXID: ID
    $morningEyeCreamID: ID
    $eveningOilCleanserID: ID
    $eveningCleanserID: ID
    $eveningExfoliatorID: ID
    $eveningTreatmentMaskID: ID
    $eveningTonerID: ID
    $eveningSerumID: ID
    $eveningMoisturizerID: ID
    $eveningNightMaskID: ID
    $eveningOilID: ID
    $eveningSpotTreatmentID: ID
    $eveningRXID: ID
    $eveningEyeCreamID: ID
  ) {
    deleteMyRoutineItem(
      morningCleanserID: $morningCleanserID
      morningTonerID: $morningTonerID
      morningSerumID: $morningSerumID
      morningMoisturizerID: $morningMoisturizerID
      morningSPFID: $morningSPFID
      morningRXID: $morningRXID
      morningEyeCreamID: $morningEyeCreamID
      eveningOilCleanserID: $eveningOilCleanserID
      eveningCleanserID: $eveningCleanserID
      eveningExfoliatorID: $eveningExfoliatorID
      eveningTreatmentMaskID: $eveningTreatmentMaskID
      eveningTonerID: $eveningTonerID
      eveningSerumID: $eveningSerumID
      eveningMoisturizerID: $eveningMoisturizerID
      eveningNightMaskID: $eveningNightMaskID
      eveningOilID: $eveningOilID
      eveningSpotTreatmentID: $eveningSpotTreatmentID
      eveningRXID: $eveningRXID
      eveningEyeCreamID: $eveningEyeCreamID
    ) {
      morningCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      morningToner {
        _id
        name
        frequency
        useNotes
        link
      }
      morningSerum {
        _id
        name
        frequency
        useNotes
        link
      }
      morningMoisturizer {
        _id
        name
        frequency
        useNotes
        link
      }
      morningSPF {
        _id
        name
        frequency
        useNotes
        link
      }
      morningRX {
        _id
        name
        frequency
        useNotes
        link
      }
      morningEyeCream {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningOilCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningExfoliator {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningTreatmentMask {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningToner {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningSerum {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningMoisturizer {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningNightMask {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningOil {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningSpotTreatment {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningRX {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningEyeCream {
        _id
        name
        frequency
        useNotes
        link
      }
    }
  }
`;

const addClientMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String
  ) {
    addClient(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
    ) {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;

const updateClientInvalidateTokensMutation = gql`
  mutation {
    updateClientInvalidateTokens {
      _id
      squareCustomerId
      firstName
      lastName
      email
      phoneNumber
      password
      createdAt
      tokenCount
    }
  }
`;

const updateConsentFormMutation = gql`
  mutation(
    $date: String!
    $surgeryLast3Months: Boolean!
    $surgeryLast3MonthsNotes: String
    $anyHealthProblems: Boolean!
    $anyHealthProblemsNotes: String
    $listAnyMedications: String
    $chemPeelsLastMonth: Boolean!
    $waxingOnFaceLast5Days: Boolean!
    $accutaneOrPrescription: Boolean!
    $accutaneOrPrescriptionNotes: String
    $anyProductsContainingSalicyclicAcid: Boolean
    $anyProductsContainingGlycolicAcid: Boolean
    $anyProductsContainingLacticAcid: Boolean
    $anyProductsContainingExfoliatingScrubs: Boolean
    $anyProductsContainingVitaminA: Boolean
    $fillersOrBotox: Boolean!
    $fillersOrBotoxNotes: String
    $listKnownAllergies: String
    $skinFlakyOrItch: Boolean
    $everDiagnosedWithRosacea: Boolean
    $pregnantOrNursing: Boolean
    $ultimateSkinCareGoals: String
    $anythingElseWeShouldKnow: String
    $consentFormSignature: String!
  ) {
    updateConsentForm(
      date: $date
      surgeryLast3Months: $surgeryLast3Months
      surgeryLast3MonthsNotes: $surgeryLast3MonthsNotes
      anyHealthProblems: $anyHealthProblems
      anyHealthProblemsNotes: $anyHealthProblemsNotes
      listAnyMedications: $listAnyMedications
      chemPeelsLastMonth: $chemPeelsLastMonth
      waxingOnFaceLast5Days: $waxingOnFaceLast5Days
      accutaneOrPrescription: $accutaneOrPrescription
      accutaneOrPrescriptionNotes: $accutaneOrPrescriptionNotes
      anyProductsContainingSalicyclicAcid: $anyProductsContainingSalicyclicAcid
      anyProductsContainingGlycolicAcid: $anyProductsContainingGlycolicAcid
      anyProductsContainingLacticAcid: $anyProductsContainingLacticAcid
      anyProductsContainingExfoliatingScrubs: $anyProductsContainingExfoliatingScrubs
      anyProductsContainingVitaminA: $anyProductsContainingVitaminA
      fillersOrBotox: $fillersOrBotox
      fillersOrBotoxNotes: $fillersOrBotoxNotes
      listKnownAllergies: $listKnownAllergies
      skinFlakyOrItch: $skinFlakyOrItch
      everDiagnosedWithRosacea: $everDiagnosedWithRosacea
      pregnantOrNursing: $pregnantOrNursing
      ultimateSkinCareGoals: $ultimateSkinCareGoals
      anythingElseWeShouldKnow: $anythingElseWeShouldKnow
      consentFormSignature: $consentFormSignature
    ) {
      date
      surgeryLast3Months
      surgeryLast3MonthsNotes
      anyHealthProblems
      anyHealthProblemsNotes
      listAnyMedications
      chemPeelsLastMonth
      waxingOnFaceLast5Days
      accutaneOrPrescription
      accutaneOrPrescriptionNotes
      anyProductsContainingSalicyclicAcid
      anyProductsContainingGlycolicAcid
      anyProductsContainingLacticAcid
      anyProductsContainingExfoliatingScrubs
      anyProductsContainingVitaminA
      fillersOrBotox
      fillersOrBotoxNotes
      listKnownAllergies
      skinFlakyOrItch
      everDiagnosedWithRosacea
      pregnantOrNursing
      ultimateSkinCareGoals
      anythingElseWeShouldKnow
      consentFormSignature
    }
  }
`;

const updateMyRoutineMutation = gql`
  mutation(
    $morningCleanser: [MyRoutineFieldsInputType]
    $morningToner: [MyRoutineFieldsInputType]
    $morningSerum: [MyRoutineFieldsInputType]
    $morningMoisturizer: [MyRoutineFieldsInputType]
    $morningSPF: [MyRoutineFieldsInputType]
    $morningRX: [MyRoutineFieldsInputType]
    $morningEyeCream: [MyRoutineFieldsInputType]
    $eveningOilCleanser: [MyRoutineFieldsInputType]
    $eveningCleanser: [MyRoutineFieldsInputType]
    $eveningExfoliator: [MyRoutineFieldsInputType]
    $eveningTreatmentMask: [MyRoutineFieldsInputType]
    $eveningToner: [MyRoutineFieldsInputType]
    $eveningSerum: [MyRoutineFieldsInputType]
    $eveningMoisturizer: [MyRoutineFieldsInputType]
    $eveningNightMask: [MyRoutineFieldsInputType]
    $eveningOil: [MyRoutineFieldsInputType]
    $eveningSpotTreatment: [MyRoutineFieldsInputType]
    $eveningRX: [MyRoutineFieldsInputType]
    $eveningEyeCream: [MyRoutineFieldsInputType]
  ) {
    updateMyRoutine(
      morningCleanser: $morningCleanser
      morningToner: $morningToner
      morningSerum: $morningSerum
      morningMoisturizer: $morningMoisturizer
      morningSPF: $morningSPF
      morningRX: $morningRX
      morningEyeCream: $morningEyeCream
      eveningOilCleanser: $eveningOilCleanser
      eveningCleanser: $eveningCleanser
      eveningExfoliator: $eveningExfoliator
      eveningTreatmentMask: $eveningTreatmentMask
      eveningToner: $eveningToner
      eveningSerum: $eveningSerum
      eveningMoisturizer: $eveningMoisturizer
      eveningNightMask: $eveningNightMask
      eveningOil: $eveningOil
      eveningSpotTreatment: $eveningSpotTreatment
      eveningRX: $eveningRX
      eveningEyeCream: $eveningEyeCream
    ) {
      morningCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      morningToner {
        _id
        name
        frequency
        useNotes
        link
      }
      morningSerum {
        _id
        name
        frequency
        useNotes
        link
      }
      morningMoisturizer {
        _id
        name
        frequency
        useNotes
        link
      }
      morningSPF {
        _id
        name
        frequency
        useNotes
        link
      }
      morningRX {
        _id
        name
        frequency
        useNotes
        link
      }
      morningEyeCream {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningOilCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningCleanser {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningExfoliator {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningTreatmentMask {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningToner {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningSerum {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningMoisturizer {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningNightMask {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningOil {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningSpotTreatment {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningRX {
        _id
        name
        frequency
        useNotes
        link
      }
      eveningEyeCream {
        _id
        name
        frequency
        useNotes
        link
      }
    }
  }
`;

const registerClientMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerClient(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      password: $password
      confirmPassword: $confirmPassword
    ) {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;

const updateClientInformationMutation = gql`
  mutation(
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
    $password: String
  ) {
    updateClientInformation(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      password: $password
    ) {
      firstName
      lastName
      email
      phoneNumber
      password
    }
  }
`;

const updateAdminPasswordMutation = gql`
  mutation($password: String) {
    updateAdminPassword(password: $password) {
      _id
      permanentPasswordSet
      firstName
      lastName
      email
      phoneNumber
      password
    }
  }
`;

const updateClientSquareIDMutation = gql`
  mutation(
    $squareCustomerId: String
    $firstName: String
    $lastName: String
    $email: String
  ) {
    updateClientSquareID(
      squareCustomerId: $squareCustomerId
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      squareCustomerId
      firstName
      lastName
      email
    }
  }
`;

const updateUnsavedSquareCardIDsMutation = gql`
  mutation(
    $unsavedSquareCardID: String
    $firstName: String
    $lastName: String
    $email: String
  ) {
    updateUnsavedSquareCardIDs(
      unsavedSquareCardID: $unsavedSquareCardID
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      squareCustomerId
      unsavedSquareCardIDs
      firstName
      lastName
      email
    }
  }
`;

const removeOneUnsavedSquareCardIDsMutation = gql`
  mutation(
    $unsavedSquareCardID: String
    $firstName: String
    $lastName: String
    $email: String
  ) {
    removeOneUnsavedSquareCardIDs(
      unsavedSquareCardID: $unsavedSquareCardID
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      squareCustomerId
      unsavedSquareCardIDs
      firstName
      lastName
      email
    }
  }
`;

export {
  loginQuery,
  adminLoginQuery,
  getClientsQuery,
  getEmployeesQuery,
  getEmployeeQuery,
  getClientQuery,
  getOwnAppointmentsQuery,
  getOwnPastAppointmentsQuery,
  getAllAppointmentsQuery,
  getAppointmentQuery,
  addAppointmentMutation,
  deleteAppointmentMutation,
  deleteMyRoutineItemMutation,
  addClientMutation,
  updateClientInformationMutation,
  updateClientSquareIDMutation,
  updateAdminPasswordMutation,
  updateUnsavedSquareCardIDsMutation,
  removeOneUnsavedSquareCardIDsMutation,
  updateMyRoutineMutation,
  updateConsentFormMutation,
  updateClientInvalidateTokensMutation,
  registerClientMutation,
};
