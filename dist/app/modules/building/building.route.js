"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const building_controller_1 = require("./building.controller");
const router = express_1.default.Router();
router.route('/').get(building_controller_1.BuildingControllers.getAllBuildings);
router.route('/:id').get(building_controller_1.BuildingControllers.getSingleBuilding);
router.route('/').post(building_controller_1.BuildingControllers.createBuilding);
router
    .route('/:id')
    .patch(building_controller_1.BuildingControllers.updateBuilding)
    .delete(building_controller_1.BuildingControllers.deleteBuilding);
// EXPORT ROUTERS
exports.BuildingRoutes = router;
