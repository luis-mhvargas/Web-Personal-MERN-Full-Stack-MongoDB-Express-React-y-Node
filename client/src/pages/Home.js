import React from "react";
import HomeCourses from "../components/Web/HomeCourses";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>HuskCode</title>
        <meta
          name="description"
          content="Home | Web sobre programacion"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  );
}
