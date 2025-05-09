import { StyleSheet } from 'react-native';
/*
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  credits: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10,
  },
  dedication: {
    fontSize: 14,
    marginTop: 10,
  },
  chapterHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  chapterContainer: {
    marginTop: 10,
  },
  chapterImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "blue",
  },
  chapterContent: {
    fontSize: 16,
    marginTop: 5,
  },
});
*/
const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  imageCoverWidth: {
    width: "100%",
    height: 625,
    resizeMode: "contain",
  },
  imageCover:{
    width: "100%",
    height: 'auto',
    resizeMode: 'cover',
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  credits: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10,
  },
  dedication: {
    fontSize: 14,
    marginTop: 10,
  },
  chapterHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 115,
    marginBottom: 25,
  },
  chapterContainer: {
    marginBottom: 25,
  },
  chapterImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 25,

  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "blue",
  },
  chapterContent: {
    fontSize: 17,
    marginTop: 5,
    marginBottom: 25,

  },
});

export default styles;
