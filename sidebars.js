const { getFilesOf, getDirectoriesOf, removePriority } = require('./src/utils');
const { SUB_CATEGORY_SLUGS } = require('./src/utils/constants');

const categories = getDirectoriesOf('docs');
const getSubCategories = (category) => getDirectoriesOf(`docs/${category}`);

const createSubCategoryItem = (category, subCategory) => ({
  type: 'category',
  label: SUB_CATEGORY_SLUGS[removePriority(subCategory)],
  items: getFilesOf(`docs/${category}/${subCategory}`).map(
    (fileName) => `${category}/${subCategory}/${fileName}`
  ),
});

const res = categories.reduce(
  (sidebars, category) => ({
    ...sidebars,
    [category]: getSubCategories(category).map((subCategory) =>
      createSubCategoryItem(category, subCategory)
    ),
  }),
  {}
);

module.exports = res;
