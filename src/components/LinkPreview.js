import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CORS_API =
  "https://transcendent-eclair-fd16ae.netlify.app/.netlify/functions/meta";

async function getPreviewData(requestUrl) {
  const encodedUrl = encodeURIComponent(requestUrl);
  const url = `${CORS_API}?url=${encodedUrl}`;

  const { data } = await axios(url);
  return data;
}
function parseData(data) {
  if (Object.keys(data).length === 0) return {};
  const title = data.title;
  const image = data.image.url;
  const description = data.description;
  const url = data.url;
  return {
    title,
    image,
    description,
    url
  };
}
function App() {
  const [previewData, setPreviewData] = useState({});
  useEffect(() => {
    getPreviewData(
      "https://medium.com/@foyshalrahman27/getting-started-with-react-router-4e54f13aaee0"
    ).then((resp) => {
      setPreviewData(resp);
    });
  }, []);

	const { title = "", image = "", description = "", url = "" } = parseData(previewData);
		return (
			<StyledCard href={url} target="_blank">
				<div className="preview-data">
					<h2 className="title">{title}</h2>
					<p className="description">{description}</p>
					<span className="link">{url}</span>
				</div>
				<div className="preview-image">
					<img src={image} alt="preview" />
				</div>
			</StyledCard>
		);
}

const StyledCard=styled.a`
background-color: black;
width: 503px;
border-radius: 5px;
display: flex;
border: 1px solid #4D4D4D;  
text-decoration: none;
  .preview-data {
    flex-grow: 2;
		padding: 24px;

    .title {
			font-size: 16px;
			font-family: 'Lato', sans-serif;
			margin-bottom: 20px;
			color: #CECECE;
    }
    .description {
			font-size: 11px;
			margin-bottom: 20px;
			color: #9B9595;
    }
    .link {
     font-size: 11px;
		 color: #CECECE;
    }
  }
  .preview-image {
   
    img {
			width: 155px;
			height: 100%;
    }
  }
`
export default App;