import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import Account from './component/Account/Account';
import Home from './component/Home/Home';
import Packages from './component/Packages/Packages';
import AddTourPackage from './component/AddTourPackage/AddPackage';
import PackageBooking from './component/PackageBooking/PackageBooking';
import Footer from './component/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './component/NotFound/NotFound';
import MyTours from './component/My Tours/MyTours';
import BookingForm from './component/BookingForm/BookingForm';
import TourDetails from './component/TourDetails/TourDetails';
import TourUpdates from './component/TourUpdates/TourUpdates';
import BookingList from './component/Admin/BookingList/BookingList';
import BookingUpdate from './component/Admin/BookingUpdate/BookingUpdate';
import UpdatePackage from './component/Admin/UpdatePackage/UpdatePackage';
import PackageList from './component/Admin/PackageList/PackageList';
import Contact from './component/Contact/Contact';
import AboutUs from './component/AboutUS/AboutUs';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/account">
              <Account></Account>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/packages">
              <Packages />
            </Route>
            <Route exact path="/packages/:tourPackageID">
              <PackageBooking />
            </Route>
            <PrivateRoute exact path="/booking">
              <BookingForm />
            </PrivateRoute>
            {/* USER PART */}
            <PrivateRoute exact path="/user/tours">
              <MyTours />
            </PrivateRoute>
            <PrivateRoute exact path="/user/tours/:TourBookingID">
              <TourDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/user/tours/update/:TourBookingID">
              <TourUpdates />
            </PrivateRoute>
            {/* Admin Part  */}
            <PrivateRoute exact path="/admin/tours">
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path="/admin/add/tourpackage">
              <AddTourPackage />
              <PrivateRoute exact path="/admin/packages">
                <PackageList />
              </PrivateRoute>
            </PrivateRoute>
            <PrivateRoute path="/admin/packages/update/:PackageID">
              <UpdatePackage />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/tours/update/:TourBookingID">
              <BookingUpdate />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
