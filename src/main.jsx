import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/components/app/App'
import Analystic from './assets/components/analystic'
import ECommerce from './assets/components/view/E-commerce'
import Projects from './assets/components/view/projects'
import Setting from './assets/components/view/setting'
import Pricing from './assets/components/view/pricing'
import Profile from './assets/components/view/profile'
import Invoice from './assets/components/view/Invoice'
import Calendar from './assets/components/view/calendar'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <section className='overflow-x-hidden'>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/analystic' element={<Analystic />} />
                <Route path='/ecommerce' element={<ECommerce />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/projetcs' element={<Projects />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/calendar' element={<Calendar />} />
            </Routes>
        </Router>
    </section>
)
