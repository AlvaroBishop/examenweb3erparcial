import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Error404 from './Components/Error/404'
import { CV } from './Components/CV/CV';
import { Portafolio } from './Components/Portafolio/Portafolio';
import Form from './Components/Forms/Form';
import Timer from './Components/Pomodoro/Timer';
import Numbers from './Components/PureComponent/Numbers';
import Calculator from './Components/Calculator/Calculator';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<CV />} />
            <Route path='/contact' element={<Form />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/portafolio/1' element={<Timer />} />
            <Route path='/portafolio/2' element={<Numbers />} />
            <Route path='/portafolio/3' element={<Calculator />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;