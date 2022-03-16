userName = prompt(`Enter name`);
if (userName === null || userName === ``) {
	userName = (`Georgii`);
} else if (userName !== null) {
	userName = userName.trim(` `, ``)
};

userSurname = prompt(`Enter surname`);
if (userSurname === null || userSurname === ``) {
	userSurname = (`Boshkov`);
} else if (userSurname !== null) {
	userSurname = userSurname.trim(` `, ``)
};


userEmail = prompt(`Enter email`);

if (userEmail === null || userEmail === ``) {
	userEmail = `email not defined`;
} else if (userEmail.startsWith(`@`)) {
	userEmail = `not valid email <b>${userEmail.replaceAll(` `, ``).toLowerCase()}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith(`@`)) {
	userEmail = `not valid email <b>${userEmail.replaceAll(` `, ``).toLowerCase()}</b> (symbol @ find in last place)`;
} else if (userEmail.indexOf(`@`) === -1) {
	userEmail = `not valid email <b>${userEmail.replaceAll(` `, ``).toLowerCase()}</b> (symbol @ not exist)`;
} else if (userEmail !== null) {
	userEmail = userEmail.replaceAll(` `, ``).toLowerCase();
};

year = new Date().getFullYear();
userBirthYear = (prompt(`Enter Birth Year`));

if (userBirthYear === null || userBirthYear === ``) {
	userBirthYear = (`36`)
} else if (userBirthYear !== null) {
	userBirthYear = year - userBirthYear.replaceAll(` `, ``)
};


document.write(`
<ul>
<li style="font-weight: 400;">
	Full name: <b>${userName} ${userSurname}</b>
</li>
<li style="font-weight: 400;">
	Email: ${userEmail}
</li>
<li style="font-weight: 400;">
	Age: <b>${Number(userBirthYear)}</b>
</li>
</ul>
`
);
