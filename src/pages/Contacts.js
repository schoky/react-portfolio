const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакты</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Расположение</h2>
						<p>Воронеж, Россия</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79003027035">+7 (900) 302-70-35</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Почта</h2>
						<p>
							<a href="mailto:danya.safonov.07@mail.ru">
								danya.safonov.07@mail.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;