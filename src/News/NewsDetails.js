import React from 'react';
import styled from 'styled-components';
import {getSelectedArticleDetails} from "../redux/selectors";
import {connect} from "react-redux";
import NoData from "../shared/NoData";

function NewsDetails(props) {
	const {article} = props;

	if (!article) {
		return <NoData/>
	}

	if (article) {
		return (
			<Wrapper>
				<h1>{article.title}</h1>

				<Image src={article.urlToImage}/>

				<p>{article.content}</p>

				<button>Go back</button>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	display: flex;
    flex-direction: column;
    padding: 15px;
`
const Image = styled.img`
   width: 100%;
  height: auto;
`

const mapStateToProps = state => {
	const article = getSelectedArticleDetails(state);
	return {article};
};

export default connect(mapStateToProps)(NewsDetails);

