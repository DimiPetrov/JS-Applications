function loadRepos() {
	const username = document.getElementById('username');

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url).then(response => response.json())
	.then(data => {
		const ulElement = document.getElementById('repos');
		ulElement.innerHTML = '';
		Object.values(data).forEach(r => {
			const liElement = document.createElement('li');
			liElement.textContent = r.full_name;
			ulElement.appendChild(liElement);
		});
	});

	
}