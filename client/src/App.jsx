import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;



// 2 tarikh --- 1300 uthce , tarmoddeh amr hatey nisi (900) -->
//  garage-->300, jamair kaaj (110) ||-->410 ,  ( 445 mahi pabe ) 


// 3 tarikh --- 1300 uthce , jamai+kaua jhalai( 120+40=160 ),
// mojuri-40 , Kaua(tyre-580)||--> 780 , garage --- 300--||-->1080 . Mahi(110)

// Mahi TotalPabe (445+110)-->(($560))

// 4tarikh--> 900( 450 )  560+450=1010 




// 1st day order --> riksha(500 alvi dse)  ,---))> mahi 125 dibo , ami 25 tk pamu , niaz 125 dbo-->alvire

// 2nd day nite jawa -->  jawa(ami+alvee--(150+150+40(polapan ansi))) --> 340/2= (alvi dbo amare)170TK 

//         SUB( 150(ami+alvi) = 250/2=125(alvi) . 150/4 = 37.5tk al(37.5)+Ni(37.5)+Mah(37.5) {
//           ashar time ( ami,alvi,mahi(100)=100/3 = 34tk , (polapan_riksha-100= 100/4 =25 ) alvi(25),ni(25),ma(25) )
//         })

//                        Asha(ami+mahi+alvi --(200)) = 200/3= 67TK  (mahi dbo 67Tk)+(alvi dbo 67Tk) 

//                         Common Hishab ( Shorbot khawon --150) , 150/4 = (mahi dbo 38Tk)+(alvi dbo 38Tk)+
//                                                                           (niaz dbo(38Tk))

//                         total =  alvee(170+67+38 = 275Tk) + Mahi(67+38 = 105Tk) + Niaz(38TK)
//                                                                 97Tk
                        

// 3rd day newa success---> jawa+asha(300+300+200+200) khawon (510) 
//                         polapain Kola kHaise(20)
                        
//                         total 1530 

//                         1530/4 = 382.5  (mahi -382.5Tk)+alvi(382.5TK)+niaz(382.5tk) amare dbi------ 
// --------------------------------------------------------------------------------------------------------

//                         shikol+tala(240+240) = 480 
//                         niaz+alvi(shikol + tala)= 80+80 = 160 .  
// t                        mahi+ami (shikol+tala) = (160+160)=320 

//                         alvi(80)+niaz(80)+mahi(160)---> amare dibi------------ 
                        
//                          , (niaz+mahi+ami(raiter celebration--50+36)) = 86/3 = 29TK
                          
//                          niaz(29TK)+ mahi(29TK)

// amare dibi Final-->(alvi(382.5+80) = 462TK-83=379Tk , Niaz(382.5+80+29)=492-83=409TK , Mahi (382.5+160+29) = 571Tk-167 = 404Tk ---------)
//             (N:B:honoured = 500/3 = 167TK per riksha  -- 167/2=83TK , 334/2 = 167TK ) 



// Total--> alvee( 25+275+379) = 680 TK . 
// Total--> Niaz (38+409) = 447 Tk ,
// Total--> Mahi (105+404) = 510tk , 


// 484/2 = 242 TK 
// Total Alvee (680+242) = 922Tk ,
// Total Niaz (447+242) = 690 Tk ,




// Starrting date-->


// (Mahi+amr)day starting --> pipe-4( 60Tk ) , Bhush (40TK) , kaaj+Bearing(100), Taar 12 gauge+Kostip(360+20)
//                             abr (bearing 2ta 120 ) riksah bhara--10(gaari aante)+ Nut (5Tk)+ breakShow(30Tk)
//                             garage -200Tk , 

//                             Total Khoroch = 945 TK 
//                             Joma Paisos=300 

//                             945-300 = 645 
//                              Mahir kase pamu = 645/2 = 322.5TK 

//                             (amare mahi dibi riksha+khawon=117Tk)

//                             ajk mahir kase pamu ami (322.5+117) = 439.5TK

//                               common(200+150)-->350




// (alvee+Niaz)--> pipe(30TK)-->bhush(20TK)-->Taar+kostip(6gauge (180+20-->200TK))
//                 Joma paise-300 , kaaj gese (30+50+120(2 bearing)-->200TK) grage bhara--100

//                 Total Khoroch --550+234=784    (350 holo ami sharadin e  khaisi 200(without cigerade) + 
//                                                 ->r riksha bhara gese 150)//
//                                                ei puratare 3 bhaag korsi , 2 bhag togo . 1 bhag mahir 

//                                 Joma paisos (300)     
//                                  300-784 = 484(ami toder theke pamu )




// 1st day er hishab holo --> alvee (500 dse rikshawalagore)
//           500/4 = 125 tk  per person  . 
//           shbai alvee re dibi  125
//           ami 150 diya dsilam 
//           ami 25 paamu  


// Mahi total (440+510)= 950 tk
