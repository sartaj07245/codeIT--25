"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const page = ({ params }) => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [nationality, setNationality] = useState(0);

  useEffect(() => {
    fetch(`https://api.agify.io?name=${params.name}`)
      .then((resp) => resp.json())
      .then((result) => setAge(result));
  }, [params.name]);

  // https://api.genderize.io?name=${params.name}
  // https://api.nationalize.io?name=${params.name}

  console.log(age);
  return (
    <div>
      <p>
        სახელი: {age.name}, რაოდენობა {age.count}, საშუალო ასაკი: {age.age}
      </p>
    </div>
  );
};

export default page;
