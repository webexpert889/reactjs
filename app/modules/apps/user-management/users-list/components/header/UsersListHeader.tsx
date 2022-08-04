import {useListView} from '../../core/ListViewProvider'
import {UsersListToolbar} from './UserListToolbar'
import {UsersListGrouping} from './UsersListGrouping'
import {UsersListSearchComponent} from './UsersListSearchComponent'

const UsersListHeader = () => {
  const {selected} = useListView()
  return (
    <>
      {/* <div className='justify-content-end d-flex'>
        <div className='m-7 me-3 mb-0'>
          <a href='#' className='btn btn-primary'>
            Accept
          </a>
        </div>
        <div className='m-7 ms-0 mb-0'>
          <a href='#' className='btn btn-primary'>
            Reject
          </a>
        </div>
      </div> */}
      <div className='card-header border-0 pt-6'>
        <UsersListSearchComponent />
        {/* begin::Card toolbar */}
        <div className='card-toolbar'>
          {/* begin::Group actions */}
          {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />}
          {/* end::Group actions */}
        </div>
        {/* end::Card toolbar */}
      </div>
    </>
  )
}

export {UsersListHeader}
