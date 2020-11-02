import users from '../images/user/Add_user.svg'
import tasks from '../images/user/add_tasks.svg'
import reports from '../images/user/hiring.svg'

export const dashboardItems = [
  {
    key: 'employees',
    title: 'Аккаунты работников',
    text: `Создайте, измените или удалите - аккаунт работника. Выберите для них роль "Работник" или "Управляющий".`,
    imgLink: users,
    link: '/employees'
  },
  {
    key: 'tasks',
    title: 'Задачи',
    text: `Создайте, измените или удалите - задачи для управляющих. Выберите для них приоритет, а так же время на выполнение.`,
    imgLink: tasks,
    link: '/tasks'
  },
  {
    key: 'reports',
    title: 'Отчёты работников',
    imgLink: reports,
    text: `Создайте, просмотрите или удалите - отчёты.`,
    link: '/reports'
  }
]

