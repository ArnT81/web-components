const template = document.createElement('template');
template.innerHTML = `
<style>	
	img {
		width: 100%;
	}

	.user-card {
		width: 350px;
		margin: 10px;
		border: 1px solid black;
		box-shadow: 8px 10px 2px DarkSlateGray;
	}
	
	.user-info {
		padding: 16px;
		padding-bottom: 32px;
	}

	.user-card h3{
		margin-top: 0;
	}

	.user-card p{
		margin-block: .3rem;
	}

	.name {
		color: #007bff;
	}
</style>

<div class="user-card">
	<img />
	<div class="user-info">
		<h3 class="name"></h3>
		<p class="id"></p>
		<p class="email"></p>
		<p class="phone"></p>
		<p class="username"></p>
		<p class="website"></p>
	</div>
</div>
`;

const getNodeText = (userCard, selector, attribute, prepend) => {
	userCard.shadowRoot.querySelector(selector).innerText = prepend ?
		`${prepend}: ${userCard.getAttribute(attribute)}` : userCard.getAttribute(attribute);
};

class UserCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
		getNodeText(this, 'h3', 'name');
		getNodeText(this, '.id', 'id', 'id');
		getNodeText(this, '.email', 'email', 'email');
		getNodeText(this, '.phone', 'phone', 'phone');
		getNodeText(this, '.username', 'username', 'username');
		getNodeText(this, '.website', 'website', 'website');
	};
};

window.customElements.define('user-card', UserCard);