# Application for working time management

In the application you can register your organization. After registration, you can create users who are part of 
the organization and assign them roles: "Employee", "Manager". The manager gives tasks to the employees. 
Employees can see the tasks on their Tasks page and get involved in the work. 
After completion of the task, the employee can send a report on the work performed in the "Reports" section. 

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
- **src/components** - *.js files that contains react components with some content
- **src/services** - files that work with the network (make requests and get an answer)
- **src/styles** - css styles for page
- **src/validation** - include validation rules and error or help messages for inputs.

## Using frameworks

* [Ant-design](https://ant.design/) - For styling pages and elements
* [React JS](https://nextjs.org/) - A JavaScript library for building user interfaces

## Build with

* [Webpack](https://webpack.js.org/) - a static module bundler for JavaScript applications

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mWorkTime/web/blob/master/LICENSE) file for details
