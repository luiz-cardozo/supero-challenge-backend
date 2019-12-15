import * as Yup from 'yup'
import { where, Op, col, fn } from 'sequelize'
import { parseISO, startOfYear, endOfYear } from 'date-fns'
import Book from '../models/Book'

class BookController {
	async store(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string().required(),
			isbn: Yup.number()
				.required()
				.test(value => value.toString().length === 13),
			author: Yup.string().required(),
			publisher: Yup.string().required(),
			year: Yup.string().required(),
			language: Yup.string().required(),
			weight: Yup.number().required(),
			dimensions: Yup.string().required()
		})

		if (!(await schema.isValid(req.body))) {
			// TODO export to dictinary
			return res.status(400).json({ error: 'Invalid schema' })
		}

		const book = await Book.create(req.body)
		return res.json(book)
	}

	async index(req, res) {
		const { filterTerm, page, pageSize, dateFrom, dateTo } = req.query
		try {
			const offset = Number(page) * Number(pageSize)
			const limit = Number(pageSize)

			const whereCondition = {}

			if (filterTerm)
				whereCondition[Op.or] = [
					where(fn('lower', col('isbn')), { [Op.like]: `%${filterTerm}%` }),
					where(fn('lower', col('title')), { [Op.like]: `%${filterTerm}%` }),
					where(fn('lower', col('author')), { [Op.like]: `%${filterTerm}%` })
				]

			// See if possible to remove -month-day indicator
			if (dateFrom && dateTo)
				whereCondition.year = {
					[Op.between]: [
						startOfYear(parseISO(`${dateFrom}-01-01`)),
						endOfYear(parseISO(`${dateTo}-12-31`))
					]
				}

			const total = await Book.count({ where: whereCondition })

			const books = await Book.findAll({
				offset,
				limit,
				where: whereCondition
			})

			return res.json({ books, total, page })
		} catch (error) {
			return res.status(400).json({ error })
		}
	}
}

export default new BookController()
