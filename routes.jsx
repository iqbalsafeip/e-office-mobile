import DataJabatan from './pages/DataJabatan';
import DataPegawai from './pages/DataPegawai';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import ProfilePreview from './pages/ProfilePreview';
import Splash from './pages/Splash';

const routes = [
    {
        name : 'Home',
        component: Home
    },
    {
        name : 'Login',
        component: Login
    },
    {
        name : 'Splash',
        component: Splash
    },
    {
        name : 'Profile',
        component: Profile
    },
    {
        name : 'Menu',
        component: Menu
    },
    {
        name: 'Data_Pegawai',
        component: DataPegawai
    },
    {
        name: 'Data_Jabatan',
        component: DataJabatan
    },
    {
        name: 'Profile_Preview',
        component: ProfilePreview
    }
]



export default routes