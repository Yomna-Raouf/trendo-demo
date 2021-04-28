// Handle User SignIn
const onSubmitSignIn = (e) => {
  // Preventing the page from refreshing after submision
  e.preventDefault();

  // POST request to authenticate the user
  fetch(`${base_url}/${api}/${version}/login_by_email`, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      user: {
        email: signInEmail,
        password: signInPassword,
        country_code: countryCode,
        phone_number: signInPhone,
      },
      device: { uid: "3", token: "i" },
    }),
  })
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((userData) => {
      console.log(userData.data.user);
      // need to load user data to share it with other components (using react context api or redux or by initializing user data as a state in the app component then update it after login)

      // change route -- redirect user to home page

      // show an error message in case of wrong credintials
    });
};
