import React from 'react'
import { BsBagCheckFill, BsBagFill } from 'react-icons/bs'
import { FaFaceAngry, FaWallet } from 'react-icons/fa6'
import { IoIosAdd } from 'react-icons/io'
import { MdOutlinePermScanWifi } from 'react-icons/md'
import { Link, NavLink, Outlet } from 'react-router'

const DashBoardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-[#caeb66]">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4 text-2xl font-bold"> Zap Shift Dashboard </div>
                </nav>
                {/* Page content here */}
                <div className="p-7">
                    <Outlet> </Outlet>
                </div>

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow bg-[#def2a1]">
                        {/* List item */}
                        <li>
                            <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>

                        <li className='my-1'>
                            <NavLink to={'/dashboard/my-parcels'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My All Parcels">

                                <BsBagFill> </BsBagFill>
                                <span className="is-drawer-close:hidden">All My Parcels</span>

                            </NavLink>
                        </li>

                        <li className='my-1'>
                            <NavLink to={'/dashboard/payment-history'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Payment History">

                                <FaWallet> </FaWallet>
                                <span className="is-drawer-close:hidden">My Payment History</span>

                            </NavLink>
                        </li>

                        <li className='my-1'>
                            <NavLink to={'/dashboard/approve-rider'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Rider">

                                <MdOutlinePermScanWifi> </MdOutlinePermScanWifi>
                                <span className="is-drawer-close:hidden">Approve Rider</span>

                            </NavLink>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashBoardLayout