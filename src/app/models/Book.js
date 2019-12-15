import Sequelize, { Model } from 'sequelize'

class Book extends Model {
	static init(sequelize) {
		super.init(
			{
				title: Sequelize.STRING,
				isbn: Sequelize.STRING,
				author: Sequelize.STRING,
				publisher: Sequelize.STRING,
				year: Sequelize.DATE,
				language: Sequelize.STRING,
				weight: Sequelize.FLOAT,
				dimension: Sequelize.STRING
			},
			{ sequelize }
		)
		return this
	}
}

export default Book
