const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers
	.filter(emp => emp.length > 0 && emp.trim() != '')
	.map(emp => {
		emp = emp.toLowerCase().trim();
		return emp[0].toUpperCase() + emp.slice(1);	
	})

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase'],
};

const calcCash = (own, ...cash) => cash.reduce((sum, cur) => sum + cur, own || 0);

const lesson = calcCash(null, ...data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';	
	const sumTech = [...data.react, ...data.add, 'и другие'];
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');	
	console.log(...sumTech);
}

makeBusiness(...['Артем', null, lesson, command, nameCourse]);
