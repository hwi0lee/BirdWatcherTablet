import RootPage from './pages/RootPage/RootPage'
import BeakPage from './pages/BeakPage/BeakPage'
import ColorPage from './pages/ColorPage/ColorPage'
import HabitatPage from './pages/HabitatPage/HabitatPage'
import ResultPage from './pages/ResultPage/ResultPage'
import SizePage from './pages/SizePage/SizePage'

const routes = [
    {
        path: '/',
        component: <RootPage/>
    },
    {
        path: '/habitat',
        component: <HabitatPage/>
    },
    {
        path: '/size',
        component: <SizePage/>
    },
    {
        path: '/beak',
        component: <BeakPage/>
    },
    {
        path: '/color',
        component: <ColorPage/>
    },
    {
        path: '/result',
        component: <ResultPage/>
    },
]

export default routes