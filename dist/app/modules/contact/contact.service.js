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
exports.ContactService = void 0;
const http_status_codes_1 = require("http-status-codes");
const appError_1 = __importDefault(require("../../errors/appError"));
const contact_model_1 = require("./contact.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createContactIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.create(payload);
    return result;
});
const getAllContactsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const contactQuery = new QueryBuilder_1.default(contact_model_1.Contact.find(), query).paginate();
    const meta = yield contactQuery.countTotal();
    const result = yield contactQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const updateContactIntoDB = (contactId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const contact = yield contact_model_1.Contact.isContactExists(contactId);
    if ((contact === null || contact === void 0 ? void 0 : contact.photo) &&
        (contact === null || contact === void 0 ? void 0 : contact.photo.length) > 0 &&
        ((_a = updatedData === null || updatedData === void 0 ? void 0 : updatedData.photo) === null || _a === void 0 ? void 0 : _a.length) == 0) {
        updatedData.photo = contact.photo;
    }
    const result = yield contact_model_1.Contact.findByIdAndUpdate(contactId, updatedData, {
        new: true,
    });
    return result;
});
const deleteContactFromDB = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contact_model_1.Contact.isContactExists(contactId);
    if (!contact) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Contact does not exist!");
    }
    yield contact_model_1.Contact.findByIdAndDelete(contactId);
    return null;
});
exports.ContactService = {
    createContactIntoDB,
    getAllContactsFromDB,
    updateContactIntoDB,
    deleteContactFromDB,
};
