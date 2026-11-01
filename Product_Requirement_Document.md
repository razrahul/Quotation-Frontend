# Product Requirement Document (PRD) & Technical Implementation Guide
## Project: TechTimes Quotation Generator (Quotations-Frontend)

---

## 1. Document Overview
This Product Requirement Document (PRD) outlines the features, architecture, user flows, API integration details, and state management of the **TechTimes Quotation Generator** frontend application. 

It has been structured specifically to serve as a comprehensive specification for **TestSprite (https://www.testsprite.com/)** or other automated agents to perform complete end-to-end (E2E) testing, component verification, and API contract validation.

---

## 2. Project Overview & Business Goals
The TechTimes Quotation Generator is a web application designed to allow users to generate, customize, preview, and download professional quotation PDFs instantly. 

### Key Business Goals:
*   **Instant Quotation Generation**: Enable users to fill out details (company logo, signature, items, GST, discounts) and generate A4/Letter PDF quotations.
*   **Dynamic Design Customization**: Provide interactive custom themes (colors, fonts, margins, scaling) with live, in-browser previews.
*   **Authentication & Persistency**: Secure route protection, permitting authenticated users to save quotes, view past lists in a dashboard, update details, and manage profile security settings.
*   **Multi-tenant landing framework**: Host a new landing page schema alongside original marketing and product paths.

---

## 3. Technology Stack & Directory Layout

### Core Tech Stack:
*   **Framework**: React 19 (React-DOM 19)
*   **Build Tool**: Vite 7
*   **Language**: TypeScript 5.9
*   **Styling**: Sass (`.scss`) and Tailwind CSS v4 (`@tailwindcss/vite`)
*   **State Management**: Redux Toolkit (React Redux 9)
*   **Routing**: React Router DOM v7
*   **HTTP Client**: Axios (with credentials and bearer interceptors)
*   **Key Utilities**: `uuid`, `swiper`, `html2pdf.js`

### Key Path Aliases:
In [vite.config.ts](file:///d:/TechTimes/Quotations-%20project/Quotations-Frontend/vite.config.ts), the following path aliases are configured:
*   `@components-new` -> `src/components-new`
*   `@assets-new` -> `src/assets-new`
*   `@pages-new` -> `src/pages-new`

### Source Directory Layout (`src/`):
*   `assets/` & `assets-new/`: Static graphics, logos, icons.
*   `components/`: Original components (auth, layout, quotationComponents, legal).
*   `components-new/`: Components developed for the new landing page and layout.
*   `pages/`: Main application pages (Quotation form, Preview, Dashboard, Profile, legal documents).
*   `pages-new/`: Redesigned product pages (Home, About, Contact, Under Development).
*   `redux/`: State slices (`authSlice.ts`, `quotationSlice.ts`), actions (`userActions.ts`, `quotationActions.ts`), and global store setup.
*   `routes/`: Route wrappers (e.g., `ProtectedRoute.tsx`).
*   `services/`: Axios instance (`axios.ts`) and global interceptors.
*   `types/`: TypeScript definitions for quotation formats, UI state, and API requests.
*   `utils/`: Utility scripts (e.g., scroll handler, country phone codes, number-to-words).

---

## 4. Routing & Page Architecture
All application routes are registered in [src/App.tsx](file:///d:/TechTimes/Quotations-%20project/Quotations-Frontend/src/App.tsx).

### 4.1 Public Routes (No Authentication Required)
1.  **`/`**: New Homepage (`NewHomePage` in `src/pages-new/Home/Home`) - Main landing area with products, why-choose sections, etc.
2.  **`/nexquote`**: Original Homepage (`QuotationHome` in `src/pages/Home/Home`) - Landing section with the interactive quotation form embedded.
3.  **`/about`**: New About Page (`NewAboutPage` in `src/pages-new/AboutUs/AboutUs`).
4.  **`/contact`**: New Contact Us Page (`NewContactPage` in `src/pages-new/ContactUs/ContactUs`).
5.  **`/contact-us`**: Original Contact Page (`ContactPage` in `src/pages/ContactUs/ContactPage`).
6.  **`/login`**: User Sign-in Page (`Login` in `src/pages/Auth/Login/Login`).
7.  **`/register`**: User Registration Page (`Register` in `src/pages/Auth/Register/Register`).
8.  **`/terms`**: Terms of Service Page (`TermsPage` in `src/pages/legal/TermsPage`).
9.  **`/privacy-policy`**: Privacy Policy Page (`PrivacyPolicyPage`).
10. **`/disclaimer`**: Disclaimer Page (`DisclaimerPage`).
11. **`/preview`**: Quotation Preview Page (`QuotationPreview` in `src/pages/QuotationPreview/QuotationPreview`) - Allows users to preview their quotes instantly. Authentication is only prompted when users attempt to Save, Print, or Download.
12. **`/invoice-generator`**, **`/gst-calculator`**, **`/smm-panel`**: Render `UnderDevelopmentPage` (placeholders for upcoming features).

### 4.2 Protected Routes (Authentication Required)
Users must be logged in; otherwise, they are redirected to `/login`. Configured inside [src/routes/ProtectedRoute.tsx](file:///d:/TechTimes/Quotations-%20project/Quotations-Frontend/src/routes/ProtectedRoute.tsx).
1.  **`/dashboard`**: User Dashboard (`DashboardPage` in `src/pages/Dashboard/DashboardPage`) - Displays a list of saved quotations.
2.  **`/profile`**: Profile Settings Page (`ProfilePage` in `src/pages/Profile/ProfilePage`) - Layout containing tabs:
    *   `/profile` (index): Personal Information Form (Name, email, country, update/delete profiles).
    *   `/profile/security`: Account Security Form (Change password).
3.  **`/quotation`**: Full-screen Quotation Form (`QuotationPage` in `src/pages/Quotation/QuotationPage`) - Wrapped in a public layout but behaves dynamically (fetches existing quotes if navigated with state).

---

## 5. Core User Flows & Technical Implementation

### 5.1 Authentication Flow
*   **Token Storage**: JSON Web Tokens (JWT) are stored in `localStorage` under the key `tt_token`.
*   **Session Lifecycle**:
    1.  On app load, [App.tsx](file:///d:/TechTimes/Quotations-%20project/Quotations-Frontend/src/App.tsx) checks if `tt_token` exists. If yes, it dispatches `loadUser()` which hits `GET /auth/me`.
    2.  If authenticated, `isAuthenticated` becomes `true` and the user profile data is loaded into Redux.
    3.  If the token is invalid or missing, it triggers `logoutUser()` which removes the token and clears the state.
*   **Redirection State**: If an unauthenticated user tries to Save/Download a quote from the `/preview` page, they are redirected to `/login` with `location.state` carrying the quotation payload. Post-login, they are redirected back to `/preview` to complete the action.

---

## 6. State Management System (Redux Toolkit)

### 6.1 `auth` Slice
Tracks active sessions and profile operations.
*   **State Interface**:
    ```typescript
    type AuthSliceState = {
      isAuthenticated: boolean;
      loading: boolean;
      user: User | null;
      error: string | null;
      success: boolean;
      authChecked: boolean;
    };
    ```
*   **Actions**:
    *   `authRequest()`: Starts load/update indicator.
    *   `authFail(error)`: Sets failure message and sets `authChecked: true`.
    *   `authRegister(data)`: Captures registered user profile and triggers session.
    *   `loadUserSuccess(user)`: Resolves logged-in session data.
    *   `login(data)`: Stores logged-in user profile.
    *   `logout()`: Clears active session, deletes local storage token.
    *   `updateProfileSucess(data)`, `deleteProfileSucess()`, `changePasswordSucess()`: Manages profile changes.

### 6.2 `quotation` Slice
Handles database state and local calculations.
*   **State Interface**:
    ```typescript
    type QuotationSliceState = {
      loading: boolean;
      quotation: QuoteApiResponse | null;
      quotationList: QuoteRecord[] | null;
      error: string | null;
      success: boolean;
      items: any[];
    };
    ```
*   **Actions**:
    *   `quotationRequest()`: Sets loading state.
    *   `quotationFail(error)`: Catches API errors.
    *   `createQuoteSuccess(payload)`: Stores newly created quotation response.
    *   `getQuoteSuccess(payload)`: Captures loaded single quote.
    *   `getQuotationListbyProfileSuccess(list)`: Populates the dashboard grid.
    *   `finalizeQuoteSuccess()`: Resets operations on successful PDF extraction.

---

## 7. API Contract & Payload Specifications
All requests go to `VITE_SERVER_BASEURL` (Local: `http://localhost:5000/api/V1`, Production: Render Backend). The `Authorization: Bearer <token>` header is automatically appended to requests when `tt_token` is present in local storage.

### 7.1 Testing Credentials (Active Staging Environment)
To perform authenticated tests and verification, use the following pre-created staging credentials:
*   **Email**: `raz@gmail.com`
*   **Password**: `Test@12345`

### 7.2 Authentication Endpoints

#### Register User
*   **Route**: `POST /auth/register`
*   **Payload**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "Password123",
      "country": "India"
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "success": true,
      "message": "User registered successfully",
      "data": {
        "user": { "id": 1, "name": "John Doe", "email": "john@example.com", "country": "India" },
        "token": "eyJhbGciOi..."
      }
    }
    ```

#### Login User
*   **Route**: `POST /auth/login`
*   **Payload**:
    ```json
    {
      "email": "raz@gmail.com",
      "password": "Test@12345"
    }
    ```
*   **Response (200 OK)**: (Same structure as registration response)

#### Get Current Session
*   **Route**: `GET /auth/me`
*   **Headers**: `Authorization: Bearer <token>`
*   **Response (200 OK)**:
    ```json
    {
      "success": true,
      "message": "User retrieved",
      "data": { "id": 12, "name": "Raz", "email": "raz@gmail.com", "country": "India" }
    }
    ```

---

### 7.3 Quotation Endpoints
Quotation creation and updates rely on **`multipart/form-data`** to support company logo and signature file uploads. The non-file payload must be serialized as a JSON string under the field `payload`.

#### Create Quotation
*   **Route**: `POST /quote`
*   **Headers**: `Content-Type: multipart/form-data`
*   **FormData Parameters**:
    *   `quoteName`: string
    *   `quoteNo`: string
    *   `quoteDate`: string (YYYY-MM-DD)
    *   `currency`: string (e.g. "INR")
    *   `totalAmount`: string (decimal representing grand total)
    *   `payload`: JSON string (contains details: company, client, items, gst, design configurations)
    *   `companyLogo`: File (Optional logo file upload)
    *   `signature`: File (Optional authorized signature file upload)
*   **Response (200 OK)**:
    ```json
    {
      "success": true,
      "message": "Quotation created successfully",
      "data": {
        "id": 101,
        "userId": 12,
        "quoteName": "Web Development Quote",
        "quoteNo": "QT-001",
        "quoteDate": "2026-06-25",
        "status": "DRAFT",
        "currency": "INR",
        "totalAmount": "25000",
        "createdAt": "2026-06-25T12:00:00.000Z",
        "updatedAt": "2026-06-25T12:00:00.000Z",
        "payload": { ... }
      }
    }
    ```

---

## 8. TestSprite RnD & Verification Guidelines

When writing or executing tests via TestSprite, target the following areas:

### 8.1 Automated API Testing Scenarios
1.  **Registration Validation**: Check input error states for duplicate emails, weak passwords, and invalid formats.
2.  **Protected Routes Verification**: Verify that sending API requests to `GET /auth/me` or `GET /quote/user/me/list` without a valid Bearer token triggers a `401 Unauthorized` response.
3.  **Multipart Serialization**: Validate that the backend correctly extracts the JSON string from `payload` inside `multipart/form-data` and returns the uploaded image urls.
4.  **PDF Binary Conversion**: Verify that `POST /quote/finalize` and `GET /quote/:id/download` return a binary header `content-type: application/pdf` with non-zero length.

### 8.2 End-to-End (E2E) Browser Scenarios
1.  **Quotation Calculator Check**:
    *   Insert 2 items in the `/quotation` form table: Item A (`qty: 2`, `rate: 500`) and Item B (`qty: 1`, `rate: 2000`).
    *   Verify that subtotal reads `3000`.
    *   Enable GST at `18%`.
    *   Assert that GST reads `540` and Grand Total reads `3540`.
    *   Assert that "Total in Words" matches "Three Thousand Five Hundred Forty Rupees Only".
2.  **Theme Color Application**:
    *   Select color `#0f4c81` in the custom design settings.
    *   Verify that elements carry the correct inline styles or CSS properties on the preview screen `/preview`.
3.  **Authentication Success and Dashboard Redirect**:
    *   Navigate to the `/login` page.
    *   Enter valid test credentials: email `raz@gmail.com`, password `Test@12345`.
    *   Click the "Login" button.
    *   Verify redirect to `/dashboard` and check that user's name matches the registered profile display.
4.  **Save & Continue Flow**:
    *   Submit the quote form as an anonymous user.
    *   On `/preview` page, click "Download PDF" or "Print".
    *   Confirm it redirects to `/login`.
    *   Perform login with credentials, and verify that it automatically loads `/preview` page back with the correct quote contents.

---

## 9. Environment Variables Configuration
To run and execute the application locally, the following environment variables must be declared in a `.env` file in the root directory:
```ini
# Backend API Base URL
VITE_SERVER_BASEURL=http://localhost:5000/api/V1
```
For production staging or rendering tests, use the live base URL:
```ini
VITE_SERVER_BASEURL=https://quotation-backend-lnl8.onrender.com/api/v1
```
