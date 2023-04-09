import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
    return <div className="container mx-auto">
        <header className="bg-blue-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow" type="text" placeholder="Search"/>
            <p className="text-white">Xin chào:</p>
        </div>
    </header>
        <h1>Dashboard</h1>
        <Outlet/>
        <footer>
            Footer
        </footer>
    </div>
} 

export default AdminLayout
