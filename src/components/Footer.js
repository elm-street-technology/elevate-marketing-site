import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";
import config from "../utils/siteConfig";
import SocialLinks from "./SocialLinks";

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Container>
      <div className={classes.grid}>
        <div className={classNames(classes.column, classes.logo)}>
          <Link to="/">
            <svg width={140} viewBox="0 0 200 63">
              <defs />
              <path
                fill="#FFF"
                d="M9.33 47.9A15.54 15.54 0 0 1 6 43.05 15.29 15.29 0 0 1 9.33 26.2a15.89 15.89 0 0 1 4.93-3.29 15.14 15.14 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.6 2.6 0 0 1-2.55 2.59h-23a10 10 0 0 0 3.66 5.46 10 10 0 0 0 6.41 2.18q5.67 0 8.75-3.45a2.4 2.4 0 0 1 1.76-.87 2.51 2.51 0 0 1 1.85.61 2.54 2.54 0 0 1 .2 3.58c-3 3.45-7.23 5.17-12.53 5.17a14.71 14.71 0 0 1-11-4.47m21-13.4a10.37 10.37 0 0 0-20.1 0zM42.94 1.71a2.56 2.56 0 0 1 2.55 2.55v45.61a2.58 2.58 0 0 1-.74 1.81 2.49 2.49 0 0 1-1.81.74 2.43 2.43 0 0 1-1.81-.74 2.51 2.51 0 0 1-.74-1.81V4.26a2.56 2.56 0 0 1 .74-1.81 2.43 2.43 0 0 1 1.81-.74M54.61 47.9a15.54 15.54 0 0 1-3.29-4.85 15.29 15.29 0 0 1 3.29-16.85 15.89 15.89 0 0 1 4.93-3.29 15.17 15.17 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.53 2.53 0 0 1-.74 1.81 2.6 2.6 0 0 1-1.81.78H55.56a9.92 9.92 0 0 0 3.65 5.46 10 10 0 0 0 6.41 2.18q5.67 0 8.76-3.45A2.38 2.38 0 0 1 76.1 43a2.49 2.49 0 0 1 1.85.61 2.54 2.54 0 0 1 .21 3.58c-3 3.45-7.24 5.17-12.54 5.17a14.75 14.75 0 0 1-11-4.47m21-13.4a10.37 10.37 0 0 0-20.1 0zM111.56 8.33a2.27 2.27 0 0 1 .21.94 2.18 2.18 0 0 1-.25 1L99.19 35.94a3 3 0 0 1-5.26 0L81.61 10.3a2.18 2.18 0 0 1-.25-1 2.27 2.27 0 0 1 .21-.94 2.69 2.69 0 0 1 1.56-1.4 3.35 3.35 0 0 1 1.11-.21 3 3 0 0 1 1.07.21 2.57 2.57 0 0 1 1.56 1.35l9.69 20.14 9.66-20.14a2.65 2.65 0 0 1 1.56-1.35 3 3 0 0 1 1.07-.21 3.59 3.59 0 0 1 1.15.21 2.61 2.61 0 0 1 1.56 1.4M140 21.64a2.37 2.37 0 0 1 1.8.78 2.45 2.45 0 0 1 .74 1.81v25.64a2.56 2.56 0 0 1-2.54 2.55 2.66 2.66 0 0 1-1.81-.74 2.48 2.48 0 0 1-.78-1.81v-1.32a14.92 14.92 0 0 1-20.67-.61 15.53 15.53 0 0 1 0-21.74 14.89 14.89 0 0 1 20.67-.66v-1.27a2.67 2.67 0 0 1 2.59-2.63m-12.62 25.68a9.55 9.55 0 0 0 7.07-3 10.51 10.51 0 0 0 0-14.55 9.83 9.83 0 0 0-13.93-.2l-.21.2a10.43 10.43 0 0 0 0 14.55 9.55 9.55 0 0 0 7.07 3M161.08 21.64a2.39 2.39 0 0 1 1.81.78 2.6 2.6 0 0 1 0 3.62 2.48 2.48 0 0 1-1.81.78h-4v23.09a2.56 2.56 0 0 1-2.55 2.55 2.4 2.4 0 0 1-1.76-.74 2.42 2.42 0 0 1-.78-1.81V26.78h-3.95a2.45 2.45 0 0 1-1.81-.79 2.58 2.58 0 0 1 0-3.61 2.62 2.62 0 0 1 1.81-.78H152V4.26a2.59 2.59 0 0 1 2.5-2.59 2.46 2.46 0 0 1 1.85.78 2.49 2.49 0 0 1 .74 1.81v17.38zM169.5 47.9a15.54 15.54 0 0 1-3.29-4.85 15.29 15.29 0 0 1 3.29-16.85 15.89 15.89 0 0 1 4.93-3.29 15.17 15.17 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.53 2.53 0 0 1-.74 1.81 2.6 2.6 0 0 1-1.81.78h-23a10 10 0 0 0 3.66 5.46 10.13 10.13 0 0 0 6.41 2.14q5.67 0 8.75-3.45A2.47 2.47 0 0 1 191 43a2.52 2.52 0 0 1 2.05 4.2c-3 3.45-7.23 5.17-12.53 5.17a14.69 14.69 0 0 1-11-4.43m21-13.4a10.37 10.37 0 0 0-20.1 0z"
              />
              <path
                d="M95.56 41.09L81 59.72a1.32 1.32 0 0 0 1 2.14h29.11a1.32 1.32 0 0 0 1-2.14L97.66 41.09a1.32 1.32 0 0 0-2.1 0z"
                fill="#F15953"
              />
            </svg>
          </Link>
          <div className={classes.copyright}>
            <a
              className={classes.link}
              href={"https://www.elmstreettechnology.com/"}
                  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 24">
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="20.21"
                    y1="11.65"
                    x2="31.57"
                    y2="11.65"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d35e13" />
                    <stop offset="0.11" stopColor="#e07114" />
                    <stop offset="0.26" stopColor="#ee8515" />
                    <stop offset="0.44" stopColor="#f89315" />
                    <stop offset="0.65" stopColor="#fd9c16" />
                    <stop offset="1" stopColor="#ff9e16" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#linear-gradient)"
                  d="M29.06,6.69l-.7.71,0,0h0l.28.28L29,7.36A14.15,14.15,0,0,1,28.73,9c-.05.26-.1.52-.16.77a9.11,9.11,0,0,1-4.26,6,2.94,2.94,0,0,1-1.16.35h-.44a0,0,0,0,1-.05,0V12.47a.54.54,0,0,0-.16-.42.55.55,0,0,0-.4-.15.52.52,0,0,0-.33.11l-.51.39a.09.09,0,0,1-.1,0l-.27-.26a0,0,0,0,1,0,0,0,0,0,0,1,0,0l5-4.86h.07l2.13,2.08.15-.79L26.39,6.75a.72.72,0,0,0-.5-.2.7.7,0,0,0-.5.2l-5,4.86a.75.75,0,0,0-.21.51.7.7,0,0,0,.22.51l.27.26a.8.8,0,0,0,.52.2.75.75,0,0,0,.45-.16l.33-.25v3.46a.71.71,0,0,0,.56.7v0H23a4.63,4.63,0,0,0,1.18-.24,2.81,2.81,0,0,0,.47-.21l.35-.22.06,0a8.87,8.87,0,0,0,2.85-3,11.11,11.11,0,0,0,1.2-2.85l1.78,1.74,0,0,0,0-.27.26a.09.09,0,0,1-.1,0L30,12a.51.51,0,0,0-.32-.1.56.56,0,0,0-.4.16.53.53,0,0,0-.15.39v3.69a0,0,0,0,1,0,0H26.19v0a.32.32,0,0,0-.32.33.32.32,0,0,0,.28.32h2.93a.71.71,0,0,0,.71-.71V12.7l.34.24a.69.69,0,0,0,.44.15.78.78,0,0,0,.52-.21l.27-.26a.71.71,0,0,0,.21-.51.67.67,0,0,0-.21-.51h0l-2.06-2a16.61,16.61,0,0,0,.34-2.25l.37.37.29-.29-1-1Z"
                />
                <path
                  fill="#fff"
                  d="M39.44,15.07a.53.53,0,0,1-.53.53h-3.7a.53.53,0,0,1-.53-.53V8.74a.53.53,0,0,1,.53-.53h3.7a.53.53,0,0,1,.53.53.53.53,0,0,1-.53.53H35.74V11.4h2.42a.53.53,0,1,1,0,1H35.74v2.09h3.17A.53.53,0,0,1,39.44,15.07Z"
                />
                <path
                  fill="#fff"
                  d="M39.87,15.09V8.19a.52.52,0,0,1,.53-.51.51.51,0,0,1,.52.51v6.9a.52.52,0,0,1-.52.53A.53.53,0,0,1,39.87,15.09Z"
                />
                <path
                  fill="#fff"
                  d="M49.13,12.48a.09.09,0,0,1,0,0V15.1a.53.53,0,0,1-.53.53.52.52,0,0,1-.52-.53V12.43a1.08,1.08,0,0,0-2.16,0V15.1a.53.53,0,1,1-1,0V12.43a1.07,1.07,0,0,0-1.07-1.07,1.08,1.08,0,0,0-1.09,1.07V15.1a.52.52,0,1,1-1,0V12.43a2.12,2.12,0,0,1,3.73-1.38,2.08,2.08,0,0,1,1.6-.74,2.14,2.14,0,0,1,2.13,2.12A.07.07,0,0,1,49.13,12.48Z"
                />
                <path
                  fill="#fff"
                  d="M57.21,13.5A2.23,2.23,0,0,1,56.55,15a2.29,2.29,0,0,1-1.68.64H54.8a3.07,3.07,0,0,1-1.75-.53,2.42,2.42,0,0,1-.69-.76.65.65,0,0,1-.09-.29.54.54,0,0,1,.54-.54.52.52,0,0,1,.48.33,1.45,1.45,0,0,0,.39.42,2.13,2.13,0,0,0,1.14.32,1.18,1.18,0,0,0,1.34-1,1,1,0,0,0-.42-.73,2,2,0,0,0-1.09-.32,2.78,2.78,0,0,1-1.79-.71,2,2,0,0,1-.48-2A2.15,2.15,0,0,1,54,8.28a2.24,2.24,0,0,1,.65-.07,3,3,0,0,1,1.83.6,2,2,0,0,1,.64.78.48.48,0,0,1,.06.24.52.52,0,0,1-.52.53A.53.53,0,0,1,56.2,10h0a1,1,0,0,0-.31-.39,2,2,0,0,0-1.23-.38,1.28,1.28,0,0,0-.4,0,1.15,1.15,0,0,0-.87.78.9.9,0,0,0,.24.92,1.82,1.82,0,0,0,1.16.39,3,3,0,0,1,1.61.54A2.1,2.1,0,0,1,57.21,13.5Z"
                />
                <path
                  fill="#fff"
                  d="M60.92,10.82a.54.54,0,0,1-.54.53h-.75v3.77a.54.54,0,0,1-.54.53.52.52,0,0,1-.52-.53V11.35H57.8a.53.53,0,0,1-.52-.53.52.52,0,0,1,.52-.53h.77V8.16a.52.52,0,0,1,.52-.52.53.53,0,0,1,.54.52v2.13h.75A.54.54,0,0,1,60.92,10.82Z"
                />
                <path
                  fill="#fff"
                  d="M64.12,10.82a.54.54,0,0,1-.53.53A1.63,1.63,0,0,0,62,13v2.15a.53.53,0,1,1-1.05,0V13a2.68,2.68,0,0,1,2.68-2.68A.53.53,0,0,1,64.12,10.82Z"
                />
                <path
                  fill="#fff"
                  d="M69.12,13a.52.52,0,0,1-.53.52H64.91a1.61,1.61,0,0,0,1.54,1.1,2.09,2.09,0,0,0,1.19-.35.5.5,0,0,1,.7.25.55.55,0,0,1-.25.7,2.62,2.62,0,0,1-1.64.46,2.68,2.68,0,1,1,0-5.36A2.62,2.62,0,0,1,69.12,13Zm-4.21-.53H68a1.55,1.55,0,0,0-1.54-1.09A1.63,1.63,0,0,0,64.91,12.43Z"
                />
                <path
                  fill="#fff"
                  d="M74.67,13a.52.52,0,0,1-.53.52H70.46A1.61,1.61,0,0,0,72,14.58a2.09,2.09,0,0,0,1.2-.35.5.5,0,0,1,.7.25.55.55,0,0,1-.25.7,2.63,2.63,0,0,1-1.65.46,2.68,2.68,0,0,1,0-5.36A2.62,2.62,0,0,1,74.67,13Zm-4.21-.53h3.08A1.56,1.56,0,0,0,72,11.34,1.62,1.62,0,0,0,70.46,12.43Z"
                />
                <path
                  fill="#fff"
                  d="M78.13,10.82a.53.53,0,0,1-.53.53h-.76v3.77a.53.53,0,1,1-1.06,0V11.35H75a.54.54,0,0,1-.52-.53.53.53,0,0,1,.52-.53h.77V8.16a.53.53,0,0,1,1.06,0v2.13h.76A.53.53,0,0,1,78.13,10.82Z"
                />
                <path
                  fill="#fff"
                  d="M85.58,8.51a.41.41,0,0,0-.42-.42H80.68a.42.42,0,1,0,0,.83H82.5v6.3a.42.42,0,0,0,.42.42.41.41,0,0,0,.42-.42V8.92h1.82A.41.41,0,0,0,85.58,8.51Z"
                />
                <path
                  fill="#fff"
                  d="M85,13a2.67,2.67,0,0,0,2.66,2.66h0a2.65,2.65,0,0,0,1.62-.45.47.47,0,0,0,.22-.57.49.49,0,0,0-.29-.24.3.3,0,0,0-.25,0,2.35,2.35,0,0,1-1.33.39A1.85,1.85,0,0,1,86,13.56l-.06-.18h4a.41.41,0,0,0,.42-.41,2.61,2.61,0,0,0-2.67-2.67A2.67,2.67,0,0,0,85,13Zm4.41-.6,0,.17H85.89l.06-.17a1.85,1.85,0,0,1,1.73-1.23A1.77,1.77,0,0,1,89.43,12.37Z"
                />
                <path
                  fill="#fff"
                  d="M95.17,12.07a.44.44,0,0,0,.58.15.43.43,0,0,0,.14-.58,2.68,2.68,0,1,0-.07,2.78.44.44,0,0,0,.06-.32.37.37,0,0,0-.18-.26.43.43,0,0,0-.58.13,1.83,1.83,0,0,1-1.54.84A1.86,1.86,0,0,1,91.75,13a1.83,1.83,0,0,1,3.42-.91Z"
                />
                <path
                  fill="#fff"
                  d="M99.18,10.3a2.34,2.34,0,0,0-1.28.38l-.2.14V8a.42.42,0,0,0-.43-.41.41.41,0,0,0-.41.41v7.26a.41.41,0,0,0,.41.42.42.42,0,0,0,.43-.42V12.62a1.49,1.49,0,0,1,3,0v2.59a.41.41,0,0,0,.42.42.42.42,0,0,0,.42-.42V12.62A2.32,2.32,0,0,0,99.18,10.3Z"
                />
                <path
                  fill="#fff"
                  d="M105.16,10.3A2.68,2.68,0,0,0,102.49,13v2.24a.41.41,0,0,0,.41.42.42.42,0,0,0,.43-.42V13A1.83,1.83,0,1,1,107,13v2.24a.42.42,0,0,0,.42.42.41.41,0,0,0,.42-.42V13A2.67,2.67,0,0,0,105.16,10.3Z"
                />
                <path
                  fill="#fff"
                  d="M111.25,10.3A2.67,2.67,0,1,0,113.92,13,2.67,2.67,0,0,0,111.25,10.3Zm0,4.5A1.83,1.83,0,1,1,113.08,13,1.83,1.83,0,0,1,111.25,14.8Z"
                />
                <path
                  fill="#fff"
                  d="M115.23,7.55a.41.41,0,0,0-.42.41v7.26a.42.42,0,0,0,.42.42.41.41,0,0,0,.42-.42V8A.42.42,0,0,0,115.23,7.55Z"
                />
                <path
                  fill="#fff"
                  d="M119.18,10.3A2.67,2.67,0,1,0,121.85,13,2.67,2.67,0,0,0,119.18,10.3Zm0,4.5A1.83,1.83,0,1,1,121,13,1.83,1.83,0,0,1,119.18,14.8Z"
                />
                <path
                  fill="#fff"
                  d="M125.19,10.3a2.67,2.67,0,0,0,0,5.33,2.73,2.73,0,0,0,1.62-.55l.21-.16v.88a1.84,1.84,0,0,1-1.83,1.79,1.81,1.81,0,0,1-1.64-1,.43.43,0,0,0-.38-.23.41.41,0,0,0-.18.05.45.45,0,0,0-.22.23.47.47,0,0,0,0,.33,2.67,2.67,0,0,0,5.06-1.17V13A2.68,2.68,0,0,0,125.19,10.3Zm0,4.5A1.83,1.83,0,1,1,127,13,1.85,1.85,0,0,1,125.19,14.8Z"
                />
                <path
                  fill="#fff"
                  d="M132.58,10.35a.41.41,0,0,0-.42.41v2.77a1.28,1.28,0,1,1-2.56,0V10.76a.42.42,0,0,0-.83,0v2.78a2.11,2.11,0,0,0,2.11,2.09,2,2,0,0,0,1.08-.29l.2-.12v1a1.34,1.34,0,0,1-2.53.58.41.41,0,0,0-.24-.21.35.35,0,0,0-.14,0,.47.47,0,0,0-.17,0,.42.42,0,0,0-.2.56,2.17,2.17,0,0,0,4.12-.94v-5.5A.41.41,0,0,0,132.58,10.35Z"
                />
                <path
                  fill="#fff"
                  d="M9.15,15.43,9,14.67H9a2.31,2.31,0,0,1-.8.68,2.37,2.37,0,0,1-1,.18,1.81,1.81,0,0,1-1.25-.41A1.51,1.51,0,0,1,5.46,14c0-1.08.86-1.65,2.59-1.7l.91,0v-.33A1.36,1.36,0,0,0,8.69,11a1.12,1.12,0,0,0-.87-.3,3.58,3.58,0,0,0-1.51.41l-.25-.62A3.84,3.84,0,0,1,7.87,10a2,2,0,0,1,1.42.43,1.75,1.75,0,0,1,.46,1.36v3.65Zm-1.83-.57a1.65,1.65,0,0,0,1.19-.42,1.51,1.51,0,0,0,.43-1.16V12.8l-.81,0a3,3,0,0,0-1.39.3.91.91,0,0,0-.43.83.86.86,0,0,0,.26.67A1.14,1.14,0,0,0,7.32,14.86Z"
                />
                <path
                  fill="#fff"
                  d="M15.08,15.43V12a1.45,1.45,0,0,0-.29-1,1.24,1.24,0,0,0-.94-.32,1.54,1.54,0,0,0-1.23.45,2.32,2.32,0,0,0-.39,1.5v2.81h-.81V10.08h.66l.13.73h0a1.67,1.67,0,0,1,.7-.61A2.19,2.19,0,0,1,14,10a2.07,2.07,0,0,1,1.46.47,2,2,0,0,1,.48,1.49v3.49Z"
                />
                <path
                  fill="#fff"
                  d="M142.31,14a1.32,1.32,0,0,1-.56,1.15,2.61,2.61,0,0,1-1.56.41,3.34,3.34,0,0,1-1.66-.34v-.75a4.57,4.57,0,0,0,.83.31,3.67,3.67,0,0,0,.85.11,2,2,0,0,0,1-.2.71.71,0,0,0,.07-1.16A4.44,4.44,0,0,0,140.2,13a5.77,5.77,0,0,1-1.06-.49,1.4,1.4,0,0,1-.47-.47,1.22,1.22,0,0,1-.15-.63,1.21,1.21,0,0,1,.53-1,2.48,2.48,0,0,1,1.46-.38,4.34,4.34,0,0,1,1.69.35l-.29.66a3.89,3.89,0,0,0-1.46-.33,1.71,1.71,0,0,0-.87.18.57.57,0,0,0-.29.5.61.61,0,0,0,.11.36,1,1,0,0,0,.35.29,8.3,8.3,0,0,0,.94.4,3.44,3.44,0,0,1,1.29.7A1.23,1.23,0,0,1,142.31,14Z"
                />
                <path
                  fill="#fff"
                  d="M148.25,12.75a2.94,2.94,0,0,1-.66,2,2.33,2.33,0,0,1-1.82.74,2.4,2.4,0,0,1-1.28-.34,2.27,2.27,0,0,1-.86-1,3.38,3.38,0,0,1-.3-1.47,2.94,2.94,0,0,1,.66-2,2.56,2.56,0,0,1,3.6,0A2.94,2.94,0,0,1,148.25,12.75Zm-4.08,0a2.57,2.57,0,0,0,.41,1.56,1.63,1.63,0,0,0,2.42,0,2.53,2.53,0,0,0,.41-1.56A2.51,2.51,0,0,0,147,11.2a1.46,1.46,0,0,0-1.22-.53,1.42,1.42,0,0,0-1.2.52A2.53,2.53,0,0,0,144.17,12.75Z"
                />
                <path fill="#fff" d="M150.48,15.43h-.81V7.83h.81Z" />
                <path
                  fill="#fff"
                  d="M153,10.08v3.47a1.4,1.4,0,0,0,.3,1,1.23,1.23,0,0,0,.93.32,1.52,1.52,0,0,0,1.23-.46,2.32,2.32,0,0,0,.39-1.5V10.08h.81v5.35H156l-.12-.72h0a1.63,1.63,0,0,1-.69.61,2.34,2.34,0,0,1-1,.21,2,2,0,0,1-1.46-.47,1.94,1.94,0,0,1-.49-1.48v-3.5Z"
                />
                <path
                  fill="#fff"
                  d="M160.07,14.86a2.73,2.73,0,0,0,.41,0l.32-.07v.62a1.72,1.72,0,0,1-.39.11,4.3,4.3,0,0,1-.46,0c-1,0-1.55-.55-1.55-1.64V10.71h-.77v-.39l.77-.34.34-1.14h.47v1.24h1.55v.63h-1.55v3.15a1,1,0,0,0,.23.74A.8.8,0,0,0,160.07,14.86Z"
                />
                <path
                  fill="#fff"
                  d="M161.8,8.63a.51.51,0,0,1,.14-.41.45.45,0,0,1,.34-.13.44.44,0,0,1,.33.13.64.64,0,0,1,0,.82.49.49,0,0,1-.33.13.49.49,0,0,1-.34-.13A.53.53,0,0,1,161.8,8.63Zm.88,6.8h-.81V10.08h.81Z"
                />
                <path
                  fill="#fff"
                  d="M169,12.75a2.94,2.94,0,0,1-.66,2,2.33,2.33,0,0,1-1.82.74,2.38,2.38,0,0,1-1.28-.34,2.2,2.2,0,0,1-.86-1,3.38,3.38,0,0,1-.3-1.47,3,3,0,0,1,.65-2,2.31,2.31,0,0,1,1.82-.73,2.25,2.25,0,0,1,1.78.75A3,3,0,0,1,169,12.75Zm-4.08,0a2.57,2.57,0,0,0,.41,1.56,1.61,1.61,0,0,0,2.41,0,2.46,2.46,0,0,0,.42-1.56,2.45,2.45,0,0,0-.42-1.55,1.45,1.45,0,0,0-1.22-.53,1.42,1.42,0,0,0-1.2.52A2.53,2.53,0,0,0,164.94,12.75Z"
                />
                <path
                  fill="#fff"
                  d="M174.1,15.43V12a1.4,1.4,0,0,0-.3-1,1.23,1.23,0,0,0-.93-.32,1.54,1.54,0,0,0-1.23.45,2.32,2.32,0,0,0-.39,1.5v2.81h-.81V10.08h.66l.13.73h0a1.64,1.64,0,0,1,.69-.61,2.23,2.23,0,0,1,1-.22,2,2,0,0,1,1.45.47,2,2,0,0,1,.49,1.49v3.49Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.section}>Products</div>
          <Link className={classes.link} to="/elevate_at_a_glance">
            Elevate At-A-Glance
          </Link>
          <Link className={classes.link} to="/socialpro">
            Social Pro&reg;
          </Link>
          <Link className={classes.link} to="/ignite">
            Ignite&reg;
          </Link>
          <Link className={classes.link} to="/elevatedms">
            DMS&reg;
          </Link>
          <Link className={classes.link} to="/dmsplus">
            DMS PLUS&reg;
          </Link>
          <Link className={classes.link} to="/elite">
            Elite&reg;
          </Link>
          <Link className={classes.link} to="/elitepro">
            Elite Pro&trade;
          </Link>
          <Link className={classes.link} to="/boss">
            BOSS&reg;
          </Link>
          <Link className={classes.link} to="/compare_products">
            Compare Products
          </Link>
        </div>

        {/*
        <div className={classes.column}>
          <div className={classes.section}>Solutions</div>
          <Link className={classes.link} to="/agents">
            Agents
          </Link>
          <Link className={classes.link} to="/brokers">
            Brokers
          </Link>
          <Link className={classes.link} to="/teams">
            Teams
          </Link>
        </div>
        */}
      

        <div className={classes.column}>
          <div className={classes.section}>Explore</div>
          <Link className={classes.link} to="/events">
            Educational Programs
          </Link>
          <Link className={classes.link} to="/events_sm">
            Social Media Boot Camp
          </Link>
          <Link className={classes.link} to="/events_lg">
            Lead Gen. Boot Camp
          </Link>
          <Link className={classes.link} to="/markets">
            MLS Markets
          </Link>
          <Link className={classes.link} to="/testimonials">
            Happy Clients
          </Link>
          
        </div>


        <div className={classes.column}>
          <div className={classes.section}>Support</div>
          <a
            className={classes.link}
            href="https://elmstreettechnology.zendesk.com/hc/en-us"
            target="_blank"
          >
            Help Center
          </a>
          <Link className={classes.link} to="/webinars">
            Training Webinars
          </Link>
          <Link className={classes.link} to="/blog">
            Blog
          </Link>
          <Link className={classes.link} to="/dailymarketingtips">
            Daily Marketing Tips
          </Link>
          <Link className={classes.link} to="/free_educational_guides">
            Free Educational Guides
          </Link>
          <Link className={classes.link} to="/terms-of-service">
            Terms of Service
          </Link>
          <Link className={classes.link} to="/pricing-and-refund-policy">
            Pricing &amp; Refund Policy
          </Link>
          <Link className={classes.link} to="/privacy">
            Privacy Policy
          </Link>
          <Link className={classes.link} to="/dmca">
            DMCA Notice
          </Link>
          <SocialLinks className={classes.social} />
        </div>
      </div>
    </Container>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#5A5B5C",
    padding: "48px 16px",

    [theme.breakpoints[900]]: {
      padding: "64px 24px",
    },

    [theme.breakpoints[1200]]: {
      padding: "96px 64px",
    },
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "35px",
    gridRowGap: "32px",

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  copyright: {
    maxWidth: "240px",
    marginTop: "8px",
  },
  section: {
    fontWeight: "700",
    marginBottom: "8px",
    color: "#FFF",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "15px",
    lineHeight: "1.4",
  },
  social: {
    marginTop: "24px",
  },
}))(Footer);
