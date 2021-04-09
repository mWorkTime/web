# Application for working time management

In the application you can register your organization. After registration, you can create users who are part of 
the organization and assign them roles: "Employee", "Manager". The manager gives tasks to the employees. 
Employees can see the tasks on their Tasks page and get involved in the work. 
After completion of the task, the employee can send a report on the work performed in the "Reports" section. 

## Application view
<p align="center">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/main.png?raw=true" alt="main page">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/page-employees.png?raw=true" alt="page employees">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/page-tasks.png?raw=true" alt="page tasks">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/report-page.png?raw=true" alt="page report">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/send-report.png?raw=true" alt="send report">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/Create-department'.png?raw=true" alt="create-department" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/check-task.png?raw=true" alt="Check task" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/create-new-employee.png?raw=true" alt="Create new employee" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/create-new-task-for-employee.png?raw=true" alt="Create new task for employee" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/dismiss-employee.png?raw=true" alt="Dismiss employee" height="250px">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/auth-user.png?raw=true" alt="Auth-user" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/edit-employee.png?raw=true" alt="Edit-employee" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/edit-profile.png?raw=true" alt="edit-profile" height="250px">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/employee-task.png?raw=true" alt="employee-task">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/mail-employee.png?raw=true" alt="mail-employee">
  <img src="https://raw.githubusercontent.com/mWorkTime/web/master/docs/images/main-auth.png?raw=true" alt="main auth">
</p>

## How to install
- Clone this repository on your PC
- Run `yarn install` 
- Run `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Structure

- **node_modules** - libraries.
- **public** - static images, logo, icons
- **src** - source folder with necessary files for application
- **src/actions** - includes files with different types of events.
- **src/axios** - includes a file with default settings and interceptors for request and response.
- **src/components** - *.js files that contains react components with some content
- **src/images** - includes default images, icons, logos app.
- **src/items** - includes data files that are needed to render some components
- **src/pages** - includes pages that are rendered for non-authorized users
- **src/reducers** - specify how the application's state changes in response to actions sent to the store
- **src/routes** - includes the file with routes for application. 
- **src/services** - files that work with the network (make requests and get a response)
- **src/styles** - css styles for page
- **src/types** - includes the file with constants.
- **src/validators** - include validation rules and error or help messages for inputs.

## Using frameworks

* [Ant-design](https://ant.design/) - For styling pages and elements
* [React JS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux JS](https://redux.js.org/) - A Predictable State Container for JS Apps

## Build with

* [Webpack](https://webpack.js.org/) - a static module bundler for JavaScript applications

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mWorkTime/web/blob/master/LICENSE) file for details
