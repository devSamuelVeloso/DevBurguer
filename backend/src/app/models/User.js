import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    // biome-ignore lint/complexity/noThisInStatic: padrão necessário para inicializar o model do Sequelize
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      { sequelize, tableName: "users" },
    );
  }
}

export default User;
