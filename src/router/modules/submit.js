export default [{
    path: '/success',
    name: 'Submit',
    meta: {
        layout: 'form',
        notRequiresAuth: true,
        // notWithoutAuth: true,
        title: 'Успешно'
    },
    component: () => import('@/pages/Auth/Success.vue')
}
]
