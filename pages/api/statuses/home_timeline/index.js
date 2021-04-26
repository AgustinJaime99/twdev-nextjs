const timeline = [
  {
    username: "Twe-devep1",
    name: "Testing",
    avatar:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
    message: "Hi!, this is a test message !",
  },
  {
    username: "Twe-devep1",
    name: "Testing",
    avatar:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
    message: "Hi!, this is a test message !",
  },
  {
    username: "Twe-devep1",
    name: "Testing",
    avatar:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
    message: "Hi!, this is a test message !",
  },
]

export default (req, res) => {
  res.status(200)
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
