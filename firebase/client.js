import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCt3owny4TDAk8hnRUnLtk0EKOb2K147p8",
    authDomain: "twe-dev-32af8.firebaseapp.com",
    projectId: "twe-dev-32af8",
    storageBucket: "twe-dev-32af8.appspot.com",
    messagingSenderId: "419905164010",
    appId: "1:419905164010:web:004cd853a96a55efdebd93",
    measurementId: "G-69FB8XEYY1"
  };

  !firebase.apps.length && firebase.initializeApp(firebaseConfig)

  export const logWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
      .then(mapUserFromFirebaseAuth)
  }

  export const logOut = () => {
    const handleLog = new firebase.auth();
    handleLog.signOut();
  }

  export const onAuthStateChanged = (onChange) => {
    return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = 
      mapUserFromFirebaseAuth(user);
      onChange(normalizedUser )
    })
    
  }

  const mapUserFromFirebaseAuth = (user) => {
    const { additionalUserInfo } = user
    const { username, profile } = additionalUserInfo
    const { avatar_url, blog } = profile
        
    return {
          avatar: avatar_url,
          username,
          url:blog
        }
  }