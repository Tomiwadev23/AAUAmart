import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage)
  },
  {
    path: 'verifyemail',
    loadComponent: () => import('./verifyemail/verifyemail.page').then(m => m.VerifyemailPage)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then(m => m.Tab4Page)
  },
  {
    path: 'farmproduce',
    loadComponent: () => import('./farmproduce/farmproduce.page').then(m => m.FarmproducePage)
  },
  {
    path: 'livestocks',
    loadComponent: () => import('./livestocks/livestocks.page').then(m => m.LivestocksPage)
  },
  {
    path: 'clothes',
    loadComponent: () => import('./clothes/clothes.page').then(m => m.ClothesPage)
  },
  {
    path: 'track-order',
    loadComponent: () => import('./track-order/track-order.page').then(m => m.TrackOrderPage)
  },
  {
    path: 'details-page',
    loadComponent: () => import('./details-page/details-page.page').then(m => m.DetailsPagePage)
  },
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.page').then(m => m.AdminDashboardPage)
  },
  {
    path: 'options',
    loadComponent: () => import('./options/options.page').then(m => m.OptionsPage)
  },
  {
    path: 'buyers-page',
    loadComponent: () => import('./buyers-page/buyers-page.page').then(m => m.BuyersPagePage)
  },
  {
    path: 'seller-page',
    loadComponent: () => import('./seller-page/seller-page.page').then(m => m.SellerPagePage)
  },
  {
    path: 'admin-page',
    loadComponent: () => import('./admin-page/admin-page.page').then(m => m.AdminPagePage)
  },


  {
    path: 'buyersignup',
    loadComponent: () => import('./buyersignup/buyersignup.page').then(m => m.BuyersignupPage)
  },
  {
    path: 'sellersignuppage',
    loadComponent: () => import('./sellersignuppage/sellersignuppage.page').then(m => m.SellersignuppagePage)
  },
  {
    path: 'adminsignuppage',
    loadComponent: () => import('./adminsignuppage/adminsignuppage.page').then(m => m.AdminsignuppagePage)
  },
  {
    path: 'seller-tabs',
    loadComponent: () => import('./seller-tabs/seller-tabs.page').then(m => m.SellerTabsPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./seller-tabs/dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'products',
        loadComponent: () => import('./seller-tabs/products/products.page').then(m => m.ProductsPage)
      },
      {
        path: 'orders',
        loadComponent: () => import('./seller-tabs/orders/orders.page').then(m => m.OrdersPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./seller-tabs/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: 'admin-tabs',
    loadComponent: () => import('./admin-tabs/admin-tabs.page').then( m => m.AdminTabsPage),
    children:[
{
    path: 'dashboard',
    loadComponent: () => import('./admin-tabs/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'sellers',
    loadComponent: () => import('./admin-tabs/sellers/sellers.page').then( m => m.SellersPage)
  },
  {
    path: 'buyers',
    loadComponent: () => import('./admin-tabs/buyers/buyers.page').then( m => m.BuyersPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./admin-tabs/profile/profile.page').then( m => m.ProfilePage)
  },
  {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }


    ]
  },
  {
    path: 'createseller-page',
    loadComponent: () => import('./createseller-page/createseller-page.page').then( m => m.CreatesellerPagePage)
  },
  {
    path: 'createproductpage',
    loadComponent: () => import('./createproductpage/createproductpage.page').then( m => m.CreateproductpagePage)
  },
  {
    path: 'order-history',
    loadComponent: () => import('./order-history/order-history.page').then( m => m.OrderHistoryPage)
  },
  {
    path: 'buyer-address',
    loadComponent: () => import('./buyer-address/buyer-address.page').then( m => m.BuyerAddressPage)
  },
  {
    path: 'buyer-profile',
    loadComponent: () => import('./buyer-profile/buyer-profile.page').then( m => m.BuyerProfilePage)
  },
  {
    path: 'editprofile',
    loadComponent: () => import('./editprofile/editprofile.page').then( m => m.EditprofilePage)
  },
  {
    path: 'editproduct',
    loadComponent: () => import('./editproduct/editproduct.page').then( m => m.EditproductPage)
  }
  
];
