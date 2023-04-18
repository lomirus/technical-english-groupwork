import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Undergraduate from './pages/Undergraduate.vue'
import Postgraduate from './pages/Postgraduate.vue'
import Discipline from './pages/Discipline.vue'
import Research from './pages/Research.vue'

import ContactUs from './pages/about/ContactUs.vue'
import Events from './pages/about/Events.vue'
import GeneralInformation from './pages/about/GeneralInformation.vue'
import Leadership from './pages/about/Leadership.vue'
import Organizations from './pages/about/Organizations.vue'

import DisciplineOverview from './pages/discipline/DisciplineOverview.vue'

import AcademicMasterDegree from './pages/postgraduate/AcademicMasterDegree.vue'
import ProfessionalDegree from './pages/postgraduate/ProfessionalDegree.vue'

import ResearchTeam from './pages/research/ResearchTeam.vue'

import Overview from './pages/undergraduate/Overview.vue'
import TrainingOrientation from './pages/undergraduate/TrainingOrientation.vue'
import TrainingPath from './pages/undergraduate/TrainingPath.vue'

import App from './App.vue'

import './styles/style.css'

const routes = [
    { path: '/', component: Home },
    {
        path: '/about',
        component: About,
        children: [{
            path: 'contact_us',
            component: ContactUs
        }, {
            path: 'events',
            component: Events
        }, {
            path: 'general_information',
            component: GeneralInformation
        }, {
            path: 'leadership',
            component: Leadership
        }, {
            path: 'organizations',
            component: Organizations
        }]
    },
    {
        path: '/undergraduate',
        component: Undergraduate,
        children: [{
            path: 'overview',
            component: Overview
        }, {
            path: 'training_orientation',
            component: TrainingOrientation
        }, {
            path: 'training_path',
            component: TrainingPath
        }]
    },
    {
        path: '/postgraduate',
        component: Postgraduate,
        children: [{
            path: 'academic_master_degree',
            component: AcademicMasterDegree
        }, {
            path: 'professional_degree',
            component: ProfessionalDegree
        }]
    },
    {
        path: '/discipline',
        component: Discipline,
        children: [{
            path: 'discipline_overview',
            component: DisciplineOverview
        }]
    },
    {
        path: '/research',
        component: Research,
        children: [{
            path: 'research_team',
            component: ResearchTeam
        }]
    },
]

const router = createRouter({
    history: createWebHistory(
        "/technical-english-homework"
    ),
    routes,
})


const app = createApp(App)
app.use(router)

app.mount('#app')