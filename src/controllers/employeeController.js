import controller from './controller';
import employee from '../../model/employee';
import employeeService from '../services/employeeService';

const employeeServiceObj = new employeeService(
    new employee().getInstance()
);

class employeeController extends controller {

    constructor(service) {
        super(service);
    }
}
export default new employeeController(employeeServiceObj);