import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsExtraAction } from "../../redux/slices/products/extraActions";
import { allProductsSelector } from "../../redux/slices/products/selectors";

export default function Products() {
  const dispatch = useDispatch();

  const allProducts = useSelector(allProductsSelector);

  console.log("allProducts: ", allProducts);

  useEffect(() => {
    dispatch(allProductsExtraAction());
  }, [dispatch]);

  return <div>Products</div>;
}
