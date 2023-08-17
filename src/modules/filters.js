export const categoryFilter = (goods, value) => {
  // console.log(goods);
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
  // console.log(goods);
  // console.log(minValue);
  // console.log(maxValue);
  console.log(checkValue);

  return goods.filter((goodsItem) => {
    // console.log(goodsItem);
    // return goodsItem.price >= parseInt(minValue) && goodsItem.price <= parseInt(maxValue)
    // console.log(goodsItem);

    const isMin = minValue.trim()
      ? goodsItem.price >= parseInt(minValue.trim())
      : true;
    const isMax = maxValue.trim()
      ? goodsItem.price <= parseInt(maxValue.trim())
      : true;
    const isSale = checkValue ? goodsItem.sale : true;

    return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase());
  });
};
