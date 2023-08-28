"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OhmValueCalculator = void 0;
const colors_model_1 = __importDefault(require("./colors.model"));
class OhmValueCalculator {
    calculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const colorA = yield colors_model_1.default.findOne({ color: bandAColor });
                const colorB = yield colors_model_1.default.findOne({ color: bandBColor });
                const colorC = yield colors_model_1.default.findOne({ color: bandCColor });
                const colorD = yield colors_model_1.default.findOne({ color: bandDColor });
                console.log(colorA, colorB, colorC, colorD);
                if (((colorA === null || colorA === void 0 ? void 0 : colorA.value) === undefined || colorA.value === null) ||
                    ((colorB === null || colorB === void 0 ? void 0 : colorB.value) === undefined || colorB.value === null) ||
                    ((colorC === null || colorC === void 0 ? void 0 : colorC.value) === undefined || colorC.value === null) ||
                    ((colorD === null || colorD === void 0 ? void 0 : colorD.value) === undefined || colorD.value === null)) {
                    return { value: null, tolerance: null };
                }
                const significantFigures = colorA.value * 10 + colorB.value;
                const multiplier = 10 ** colorC.value;
                const tolerance = colorD.tolerance;
                console.log(tolerance);
                console.log(significantFigures * multiplier);
                return { value: significantFigures * multiplier, tolerance };
            }
            catch (error) {
                console.error("Error calculating ohm value:", error);
                return { value: null, tolerance: null };
            }
        });
    }
}
exports.OhmValueCalculator = OhmValueCalculator;
