import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {LoadDetailPage} from '../pages/loadDetail/loadDetailPage'
import {BookLoads} from '../pages/loadDetail/bookLoads'
import {PastLoads} from '../pages/loadDetail/pastLoads'
import {PendingLoads} from '../pages/loadDetail/pendingLoads'
import {SubDispatcher} from '../pages/dispatcher/subDispatcher'
import {DetailDispatcher} from '../pages/dispatcher/detailDispatcher'
import {FindLoads} from '../pages/loadDetail/findLoads'
import {UserProfile} from '../pages/accountPages/userProfile'
import {UseTerms} from '../pages/accountPages/useTerms'
import {PolicyTerms} from '../pages/accountPages/policyTerms'
import {ChangePassword} from '../pages/accountPages/changePassword'
import {AllDrivers} from '../pages/dispatcher/allDrivers'
import {AllVehicles} from '../pages/dispatcher/allVehicles'
import {Login} from '../modules/auth/components/Login'
import {DetailTabs} from '../modules/accounts/components/detailTabs'
import {VehicleDetail} from '../pages/dispatcher/vehicleDetail'
import {DriverDetail} from '../pages/dispatcher/driverDetail'
import {DriverInfo} from '../modules/accounts/components/settings/driverInfo'
import {PickupInspection} from '../pages/vehicleInspection/pickupInspection'
import {UploadDoc} from '../pages/vehicleInspection/uploadDoc'
// import {CompleteInspection} from '../pages/vehicleInspection/completeInspection'
import {SortFilterDetails} from '../pages/loadDetail/sortFilter'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const CompleteInspection = lazy(() => import('../pages/vehicleInspection/completeInspection'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='findLoads' element={<FindLoads />} />
        <Route path='loadDetails' element={<LoadDetailPage />} />
        <Route path='bookLoads' element={<BookLoads />} />
        <Route path='pastLoads' element={<PastLoads />} />
        <Route path='pendingLoads' element={<PendingLoads />} />
        <Route path='dispatcher' element={<SubDispatcher />} />
        <Route path='detailDispatcher' element={<DetailDispatcher />} />
        <Route path='vehicleDetail' element={<VehicleDetail />} />
        <Route path='driverDetail' element={<DriverDetail />} />
        <Route path='profile' element={<UserProfile />} />
        <Route path='terms' element={<UseTerms />} />
        <Route path='changePassword' element={<ChangePassword />} />
        <Route path='drivers' element={<AllDrivers />} />
        <Route path='vehicles' element={<AllVehicles />} />
        <Route path='policy' element={<PolicyTerms />} />
        <Route path='detailTab' element={<DetailTabs />} />
        <Route path='driverInfo' element={<DriverInfo />} />
        <Route path='inspection' element={<PickupInspection />} />
        <Route path='upload' element={<UploadDoc />} />
        <Route path='completeInspection' element={<CompleteInspection />} />
        <Route path='moreOptions' element={<SortFilterDetails />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
