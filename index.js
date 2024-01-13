const getMockedUsers = () => (
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			if (response.ok) return response.json();
			else console.log(response.statusText)
		})
		.then((response) => response)
		.catch((error) => console.log(`%c ${error}`, 'color: orange;'))
)

const appendUserDataToUserCardAttribute = (users) => {
	let cardContent = '';

	users.forEach(user => {
		cardContent += `
					<user-card
						avatar="https://randomuser.me/api/portraits/men/${user.id}.jpg"
						name="${user.name}"
						id="${user.id}"
						email="${user.email}"
						phone="${user.phone}"
						username="${user.username}"
						website="${user.website}"
					></user-card>
					`
	});

	$('#card-container').html(cardContent);
}


$(async () => {
	let users = await getMockedUsers();
	appendUserDataToUserCardAttribute(users);
})