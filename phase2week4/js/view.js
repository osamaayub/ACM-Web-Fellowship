// This import is only for jsdoc typings and intellisense
import Store from './store.js';

export default class View {
	$ = {};
	$$ = {};

	constructor() {
		this.$.menu = this.#qs('[data-id="menu"]');
		this.$.menuBtn = this.#qs('[data-id="menu-btn"]');
		this.$.menuItems = this.#qs('[data-id="menu-items"]');
		this.$.resetBtn = this.#qs('[data-id="reset-btn"]');
		this.$.newRoundBtn = this.#qs('[data-id="new-round-btn"]');
		this.$.modal = this.#qs('[data-id="modal"]');
		this.$.modalText = this.#qs('[data-id="modal-text"]');
		this.$.modalBtn = this.#qs('[data-id="modal-btn"]');
		this.$.turn = this.#qs('[data-id="turn"]');
		this.$.p1Wins = this.#qs('[data-id="p1-wins"]');
		this.$.p2Wins = this.#qs('[data-id="p2-wins"]');
		this.$.ties = this.#qs('[data-id="ties"]');
		this.$.grid = this.#qs('[data-id="grid"]');

		this.$$.squares = this.#qsAll('[data-id="square"]');

		this.$.menuBtn.addEventListener('click', (event) => {
			this.#toggleMenu();
		});
	}

	render(game, stats) {
		const { playerWithStats, ties } = stats;
		const {
			moves,
			currentPlayer,
			status: { isComplete, winner },
		} = game;

		this.#closeAll();
		this.#clearMoves();
		this.#updateScoreboard(
			playerWithStats[0].wins,
			playerWithStats[1].wins,
			ties
		);
		this.#initializeMoves(moves);

		if (isComplete) {
			this.#openModal(winner ? `${winner.name} wins!` : 'Tie!');
			return;
		}

		this.#setTurnIndicator(currentPlayer);
	}

	bindGameResetEvent(handler) {
		this.$.resetBtn.addEventListener('click', handler);
		this.$.modalBtn.addEventListener('click', handler);
	}

	bindNewRoundEvent(handler) {
		this.$.newRoundBtn.addEventListener('click', handler);
	}

	bindPlayerMoveEvent(handler) {
		this.#delegate(this.$.grid, '[data-id="square"]', 'click', handler);
	}

	#updateScoreboard(p1Wins, p2Wins, ties) {
		this.$.p1Wins.innerText = `${p1Wins} wins`;
		this.$.p2Wins.innerText = `${p2Wins} wins`;
		this.$.ties.innerText = `${ties} ties`;
	}

	#openModal(message) {
		this.$.modal.classList.remove('hidden');
		this.$.modalText.innerText = message;
	}

	#closeAll() {
		this.#closeModal();
		this.#closeMenu();
	}

	#clearMoves() {
		this.$$.squares.forEach((square) => {
			square.replaceChildren();
		});
	}

	#initializeMoves(moves) {
		this.$$.squares.forEach((square) => {
			const existingMove = moves.find((move) => move.squareId === +square.id);

			if (existingMove) {
				this.#handlePlayerMove(square, existingMove.player);
			}
		});
	}

	#closeModal() {
		this.$.modal.classList.add('hidden');
	}

	#closeMenu() {
		this.$.menuItems.classList.add('hidden');
		this.$.menuBtn.classList.remove('border');

		const icon = this.$.menuBtn.querySelector('i');

		icon.classList.add('fa-chevron-down');
		icon.classList.remove('fa-chevron-up');
	}

	#toggleMenu() {
		this.$.menuItems.classList.toggle('hidden');
		this.$.menuBtn.classList.toggle('border');

		const icon = this.$.menuBtn.querySelector('i');

		icon.classList.toggle('fa-chevron-down');
		icon.classList.toggle('fa-chevron-up');
	}

	#handlePlayerMove(squareEl, player) {
		const icon = document.createElement('i');
		icon.classList.add('fa-solid', player.iconClass, player.colorClass);
		squareEl.replaceChildren(icon);
	}

	#setTurnIndicator(player) {
		const icon = document.createElement('i');
		const label = document.createElement('p');

		icon.classList.add('fa-solid', player.colorClass, player.iconClass);

		label.classList.add(player.colorClass);
		label.innerText = `${player.name}, you're up!`;

		this.$.turn.replaceChildren(icon, label);
	}

	#qs(selector, parent) {
		const el = parent
			? parent.querySelector(selector)
			: document.querySelector(selector);

		if (!el) throw new Error('Could not find element');

		return el;
	}

	#qsAll(selector) {
		const elList = document.querySelectorAll(selector);

		if (!elList) throw new Error('Could not find elements');

		return elList;
	}

	#delegate(el, selector, eventKey, handler) {
		el.addEventListener(eventKey, (event) => {
			if (event.target.matches(selector)) {
				handler(event.target);
			}
		});
	}
}
