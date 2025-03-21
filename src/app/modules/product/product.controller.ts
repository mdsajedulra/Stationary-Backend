import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

const createProduct = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await productServices.createProduct(payload);

  sendResponse(res, {
    message: "product create Seccussfully",
    statudeCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getProduct = catchAsync(async (req, res, next) => {
  const result = await productServices.getProduct();
  sendResponse(res, {
    message: "product fetch Seccussfully",
    statudeCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getSpecificProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await productServices.getSpecificProduct(id);
  sendResponse(res, {
    message: "product fetch Seccussfully",
    statudeCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// delete product
const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await productServices.deleteProduct(id);
  sendResponse(res, {
    message: "product deleted Seccussfully",
    statudeCode: StatusCodes.OK,
    success: true,
    data: result,
  });

})
  // update product by id
const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
    const payload = req.body;
    const result = await productServices.updateProduct(id, payload);
    sendResponse(res, {
      message: "product updated Seccussfully",
      statudeCode: StatusCodes.OK,
      success: true,
      data: result,
    });
});


export const productController = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteProduct,
  updateProduct
};
