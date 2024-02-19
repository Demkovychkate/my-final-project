import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  body {
    background: #212549;
    font-size: 62.5%;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }

  .planet {
    position: absolute;
    left: 50%;
    top: 10em;
    margin-left: -15em;
    width: 30em;
    height: 30em;
    background: #ddd;
    border-radius: 50%;
    box-shadow: inset -1.6em 0 0 0 #ccc, 0 0 1em 0 #ccc;

    .crater {
      position: absolute;
    }

    .crater:nth-child(1) {
      left: 5.5em;
      top: 11em;
      width: 7.5em;
      height: 8em;
      border-radius: 50%;
      background: #999;
      box-shadow: inset 0.5em 0 0.1em 0 #777, -0.1em 0 0 0.1px #eee, 0.4em 0 0.2em 0 #ccc;
    }

    .crater:nth-child(2) {
      left: 16.2em;
      top: 25em;
      width: 4em;
      height: 2.8em;
      border-radius: 50%;
      background: #999;
      transform: rotate(-22deg);
      box-shadow: inset 0.2em 0.1em 0.2em 0 #777, -0.1em -0.1em 0 0.1em #eee, 0.2em 0.1em 0.2em 0 #ccc;
    }

    .crater:nth-child(3) {
      left: 25.4em;
      top: 17em;
      width: 2em;
      height: 3em;
      border-radius: 50%;
      background: #999;
      transform: rotate(12deg);
      box-shadow: inset 0.2em 0 0.1em 0 #777, -0.1em 0 0 0.1em #eee;
    }

    .crater:nth-child(4) {
      left: 24.4em;
      top: 24.7em;
      width: 0.8em;
      height: 3em;
      border-radius: 50%;
      transform: rotate(48deg);
      box-shadow: inset 0.4em 0.1em 0 0 #ccc, inset -0.1em 0.1em 0 0 #ccc;
      background: #999;
    }

    .crater:nth-child(5) {
      left: 27.4em;
      top: 5.6em;
      width: 0.8em;
      height: 3.6em;
      border-radius: 50%;
      transform: rotate(-31deg);
      box-shadow: inset 0.4em 0.1em 0 0 #ccc, inset -0.1em 0.1em 0 0 #ccc;
      background: #999;
    }

    .flag {
      position: absolute;
      background: #bb0000;
      padding: 0.2em 0.3em;
      line-height: 1.2em;
      color: #eee;
      border-radius: 0 0.1em 0.1em 0;
      left: 5em;
      white-space: nowrap;
      cursor: default;
      transform: rotate(-32deg);

      &:before {
        content: "";
        position: absolute;
        width: 0.2em;
        height: 2.7em;
        left: -0.1em;
        top: 0;
        background: #444;
      }
    }

    .rover {
      position: absolute;
      transform: rotate(110deg);
      left: 18.7em;
      top: 4.8em;

      .body {
        position: absolute;
        z-index: 99;
        width: 0.9em;
        height: 1.5em;
        border-radius: 0.3em;
        background: #fff;
        box-shadow: -0.1em 0 0 0 #ccc;

        &:after {
          content: "";
          position: absolute;
          top: 0.4em;
          left: 0.3em;
          width: 0.5em;
          height: 0.7em;
          box-shadow: -0.2em -0.1em 0 0 #ccc;
        }
      }

      .wheels {
        position: absolute;
        left: -0.3em;

        &:after,
        &:before {
          content: "";
          position: absolute;
          z-index: 9;
          background: #111;
          width: 1.4em;
          height: 0.6em;
          border-radius: 0.2em;
        }

        &:after {
          top: 0.9em;
        }

        &:before {
          top: 0;
        }
      }

      .trace {
        position: absolute;
        left: -0.6em;
        top: 1.5em;
        transform: rotate(-24deg);

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 1.2em;
          height: 5em;
          border-radius: 50%;
          box-shadow: inset 0.2em 0.3em 0 0 #bebebe;
        }

        &:after {
          left: 0;
        }

        &:before {
          left: 1em;
        }
      }
    }
  }

  .message {
    position: absolute;
    color: #ddd;
    top: 44em;
    width: 100%;
    text-align: center;
    cursor: default;
    text-shadow: 0.1em 0.1em 0 #111;

    p {
      display: inline-block;
      font-size: 1.6em;

      a {
        color: inherit;
        text-decoration: none;
        border-bottom: 0.1rem dotted #999;
      }
    }
  }
`;

export default NotFoundWrapper;
