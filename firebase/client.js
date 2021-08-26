import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCt3owny4TDAk8hnRUnLtk0EKOb2K147p8",
  authDomain: "twe-dev-32af8.firebaseapp.com",
  projectId: "twe-dev-32af8",
  storageBucket: "twe-dev-32af8.appspot.com",
  messagingSenderId: "419905164010",
  appId: "1:419905164010:web:004cd853a96a55efdebd93",
  measurementId: "G-69FB8XEYY1",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const logWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuth)
}

export const logOut = () => {
  const handleLog = new firebase.auth()
  handleLog.signOut()
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

const mapUserFromFirebaseAuth = (user) => {
  const { email, photoURL, displayName, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const addTw = ({ avatar, content, userId, userName, img }) => {
  return db.collection('tws').add({
    avatar,
    content,
    userId,
    userName,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const mapTwFromFirebaseToTwObject = doc => {
  const data = doc.data()
  const id = doc.id
  const { createdAt } = data

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate()
  }
}

// escuchar actualizaciones en la base de datos

export const listenLatestTws = (cb) => {
  return db
    .collection('tws')
    .orderBy('createdAt', 'desc')
    .limit(20)
    .onSnapshot(({ docs }) => {
      const newTws = docs.map(mapTwFromFirebaseToTwObject)
      cb(newTws)
    })
}

// obtener ultimos tweets

export const fetchLatestTws = () => {
  return db
    .collection('tws')
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map(mapTwFromFirebaseToTwObject)
    })
}

// obtener tweets de un usuario especifico

export const fetchLatestTwsOfUser = () => {
  return db
    .collection('tws')
    .orderBy('createdAt', 'desc')
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        return data
      })
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}