export const searchFilter = (goods, value) => {
  // console.log(goods);
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
    // console.log(goods);
    return goods.filter((goodsItem) => {
      return goodsItem.category === value
    });
  };