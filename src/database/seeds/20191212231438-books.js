module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'books',
			[
				{
					title: 'Harry Potter e a pedra filosofal',
					isbn: '9788532530783',
					author: 'J. K. Rowling',
					publisher: 'Rocco',
					year: '2017-08-19T10:00:00-03:00',
					language: 'Portugês',
					weight: 354,
					dimension: '23x15,8x1,8',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Harry Potter e a Câmara Secreta',
					isbn: '9788532530790',
					author: 'J. K. Rowling',
					publisher: 'Rocco',
					year: '2019-08-19T10:00:00-03:00',
					language: 'Portugês',
					weight: 449,
					dimension: '23x15,4x1,8',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Harry Potter e o cálice de fogo - EDIÇÃO ILUSTRADA',
					isbn: '97885325315440002709813026',
					author: 'J. K. Rowling',
					publisher: 'Rocco',
					year: '2019-10-08T10:00:00-03:00',
					language: 'Português',
					weight: 572,
					dimension: ' 27,4x22,8x3,8',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Harry Potter e o prisioneiro de Azkaban - Ilustrado',
					isbn: '9788532531025',
					author: 'J. K. Rowling',
					publisher: 'Rocco',
					year: '2019-05-02T10:00:00-03:00',
					language: 'Português',
					weight: 200,
					dimension: '112x12x12',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'O Senhor dos Anéis: A Sociedade do Anel',
					isbn: '9788595084759',
					author: 'J.R.R. Tolkien',
					publisher: 'HarperCollins',
					year: '2019-11-25T10:00:00-03:00',
					language: 'Português',
					weight: 726,
					dimension: '21,4x14,2x3,4',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'O Senhor dos Anéis: As duas torres',
					isbn: '9788595084766',
					author: 'J.R.R. Tolkien',
					publisher: 'HarperCollins',
					year: '2019-11-25T10:00:00-03:00',
					language: 'Português',
					weight: 612,
					dimension: '21,4x14,2x2,8',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'O guia do mochileiro das galáxias: 1',
					isbn: '9788599296578',
					author: 'Douglas Adams',
					publisher: 'Arqueiro',
					year: '2011-11-03T10:00:00-03:00',
					language: 'Português',
					weight: 159,
					dimension: '20,8x14x1,4',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'O restaurante no fim do universo: 2',
					isbn: '9788599296585',
					author: 'Douglas Adams',
					publisher: 'Arqueiro',
					year: '2011-11-03T10:00:00-03:00',
					language: 'Português',
					weight: 372,
					dimension: '20,4x13,2x0,6',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Beyond Good and Evil',
					isbn: '9781936041305',
					author: 'Friedrich Wilhelm Nietzsche',
					publisher: 'Simon & Brown',
					year: '2010-10-13T10:00:00-03:00',
					language: 'Inglês',
					weight: 272,
					dimension: '15,2x1x22,9',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Jogos Vorazes',
					isbn: '9788579800245',
					author: 'Suzanne Collins',
					publisher: 'Rocco',
					year: '2012-02-15T10:00:00-03:00',
					language: 'Portugês',
					weight: 476,
					dimension: '20x13x2',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Sapiens - Uma Breve História da Humanidade',
					isbn: '9788525432186',
					author: 'Yuval Noah Harari',
					publisher: 'L&PM',
					year: '2015-03-02T10:00:00-03:00',
					language: 'Portugês',
					weight: 726,
					dimension: '22x15x2',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'The Catcher in the Rye',
					isbn: '9787543321724',
					author: 'J. D. Salinger',
					publisher: 'Little Brown and Company',
					year: '1991-05-01T10:00:00-03:00',
					language: 'Inglês',
					weight: 91,
					dimension: '10x1x17',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'The Great Gatsby',
					isbn: '9781847496140',
					author: 'F. Scott Fitzgerald',
					publisher: 'Alma Classics',
					year: '2016-10-20T10:00:00-03:00',
					language: 'Inglês',
					weight: 209,
					dimension: '12x2x19',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Cien Anos de Soledad',
					isbn: '9780307474728',
					author: 'Gabriel Garcia Marquez',
					publisher: 'Vintage Books USA',
					year: '2009-09-22T10:00:00-03:00',
					language: 'Espanhol',
					weight: 363,
					dimension: '13x2x20',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'A Divina Comédia',
					isbn: '9788573261202',
					author: 'Dante Alighieri',
					publisher: 'Editora 34',
					year: '1998-01-01T10:00:00-03:00',
					language: 'Português',
					weight: 1200,
					dimension: '23x16x4',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Crime e Castigo',
					isbn: '9788573266467',
					author: 'Fiódor Dostoiévski',
					publisher: 'Editora 34',
					year: '2016-11-15T10:00:00-03:00',
					language: 'Português',
					weight: 889,
					dimension: '22x16x2',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Os Miseráveis',
					isbn: '9788544000007',
					author: 'Victor Hugo',
					publisher: 'Martin Claret',
					year: '2014-10-7T10:00:00-03:00',
					language: 'Português',
					weight: 2200,
					dimension: '24x17x7',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Anna Kariênina',
					isbn: '9788535929225',
					author: 'Liev Tolstoi',
					publisher: 'Companhia das Letras',
					year: '2017-07-7T10:00:00-03:00',
					language: 'Português',
					weight: 1200,
					dimension: '23x16x4',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'Mindset',
					isbn: '9788547000240',
					author: 'Carol S. Dweck',
					publisher: 'Objetiva',
					year: '2017-01-18T10:00:00-03:00',
					language: 'Português',
					weight: 490,
					dimension: '22x16x1',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					title: 'A revolução dos bichos: Um conto de fadas',
					isbn: '9788535909555',
					author: 'George Orwell',
					publisher: 'Companhia das Letras',
					year: '2007-01-10T10:00:00-03:00',
					language: 'Português',
					weight: 227,
					dimension: '20x13x1',
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		)
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('books', null, {})
	}
}
