// var Fs = require("fs");
// var file = "../../assets/images/unnamed.jpg";
// require("dotenv").config();
// var Minio = require('minio')
import file from "../../assets/images/unnamed.jpg";
import React, { useEffect, useRef } from "react";
import * as Minio from "minio";

const bucketID = process.env.REACT_APP_BUCKET_ID;

export const FileUploader = (props: any) => {
  console.log(props.file)
  var metaData = {
    "Content-Type": props.type
  };
  // let minioClient: any = useRef(null);
  // useEffect(() => {
    // minioClient = minioClient.current;
    // const minioClient = new Minio.Client({
    //   endPoint: "cdn.samagra.io",
    //   useSSL: true,
    //   accessKey: process.env.REACT_APP_ACCESS_KEY,
    //   secretKey: process.env.REACT_APP_SECRET_KEY,
    //   sessionToken: process.env.REACT_APP_SESSION_TOKEN,
    // });


  // }, []);
  
  // const insertFile = () =>
  // minioClient.fPutObject(
  //   bucketID,
  //   "test-image.png",
  //   props.file,
  //   metaData,
  //   function (err: any, objInfo: any) {
  //     if (err) {
  //       return console.log(err); // err should be null
  //     }
  //     console.log("Success", objInfo);
  //   }
  // );


  useEffect(() => {
    var minioClient = new Minio.Client({
      endPoint: "cdn.samagra.io",
      useSSL: true,
      accessKey: process.env.REACT_APP_ACCESS_KEY,
      secretKey: process.env.REACT_APP_SECRET_KEY,
      sessionToken: process.env.REACT_APP_SESSION_TOKEN,
    });
    const insertFile = () => 
      minioClient.fPutObject(
        bucketID,
        "test-image.png",
        file,
        metaData,
        (err: any, objInfo: any) => {
          if (err) {
            return console.log(err); // err should be null
          }
          console.log("Success", objInfo);
        }
    );
    insertFile();
  }, [metaData]);
  return (
    <>
      {/* <h1>This is a file uploader</h1> */}
      {console.log('entered file uploader')}
      {/* {insertFile()} */}
    </>
  )
}