const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQzZDUwZDQ1YjBjY2Q5MmRjMjZjZjBlOTMzZTUxMSIsInN1YiI6IjY1MzBiYzUzYzQzOWMwMDBjNDZmZmZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UjlpeN5KgI7zKxqjqR8tE5n40Dp-htGXPkRoPoZVHjE'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then((response) => response.json())
    .then((response) => {
        // API 요청이 성공하고 응답을 받아오는 부분

        console.log(response)
        console.log(response.results)

        const data = response.results


        // 1. 데이터가 들어갈 item이라는 이름을 가진 div 박스를 가져오기
        const newBox = document.getElementById('item')

        // 2️. 가져왔으면 그 안에 이제 텍스트로 original_title과 overview, vote_average를 넣을건데,
        // 리스트는 배열 형태로 엄청 많으니 반복문을 통해 하나씩 화면에 넣어주기
        data?.forEach((ele, key) => {
            // data 라는 애를 반복해서 돌릴건데 이때, 아래와 같이 콘솔을 찍어보면 리스트들이 순서대로 반복되는 것을 볼 수 있음
            console.log(ele)

            // 반복되는 것을 확인했다면, 이제 태그를 만들어서 넣어주기만 하면 됨
            const itemBox = document.createElement('div')
            const poster_path = document.createElement('img');
           

            itemBox.classList.add("item_box");

            itemBox.innerHTML = `
                <h4>${ele.original_title}</h4>
                <img src='https://image.tmdb.org/t/p/w500${ele.poster_path}'></img>
                <p>평점: ${ele.vote_average}</p>
                <div>${ele.overview}</div>`

            // 3️. 내가 가져온 newBox라는 div태그의 자식으로 itemBox를 넣어주면 끝
            newBox.appendChild(itemBox)




        })
    })
    .catch((err) => console.error(err))