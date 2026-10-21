import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        path: Sequelize.STRING,
        category: Sequelize.STRING,
        url: {
            type: Sequelize.VIRTUAL,
            get(){
                return `http://localhost:3000/products-file/${this.path}`
            }
        }
      },
      { sequelize, tableName: "products" },
    );
  }
}

export default Product;
