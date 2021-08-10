import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`

export const LinkItem = styled.a`
	font-size: 24px;
	line-height: 40px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 24px;
		line-height: 48px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 48px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;
