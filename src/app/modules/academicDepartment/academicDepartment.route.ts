import express from 'express';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);
router.get('/:id', AcademicDepartmentControllers.getSingleAcademicDepartment);

router.post(
  '/',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentControllers.createAcademicDepartment
);

router
  .route('/:id')
  .patch(AcademicDepartmentControllers.updateAcademicDepartment)
  .delete(AcademicDepartmentControllers.deleteAcademicDepartment);

// EXPORT ROUTERS
export const AcademicDepartmentRoutes = router;
