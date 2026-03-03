import Api from './Api'
import HomeController from './HomeController'
import DashboardController from './DashboardController'
import FacultyController from './FacultyController'
import DepartmentController from './DepartmentController'
import SubjectController from './SubjectController'
import ClassController from './ClassController'
import LectureController from './LectureController'
import ProfessorController from './ProfessorController'
import StudentController from './StudentController'
import EmployeeController from './EmployeeController'
import AdministrationController from './AdministrationController'
import Settings from './Settings'
const Controllers = {
    Api: Object.assign(Api, Api),
HomeController: Object.assign(HomeController, HomeController),
DashboardController: Object.assign(DashboardController, DashboardController),
FacultyController: Object.assign(FacultyController, FacultyController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
SubjectController: Object.assign(SubjectController, SubjectController),
ClassController: Object.assign(ClassController, ClassController),
LectureController: Object.assign(LectureController, LectureController),
ProfessorController: Object.assign(ProfessorController, ProfessorController),
StudentController: Object.assign(StudentController, StudentController),
EmployeeController: Object.assign(EmployeeController, EmployeeController),
AdministrationController: Object.assign(AdministrationController, AdministrationController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers