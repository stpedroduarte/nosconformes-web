import styled from 'styled-components'

export const Container = styled.div`
	background: #E9EFF5;
	width: 100vw;
	min-height: 100vh;
`

export const Body = styled.div`
	background: #E9EFF5;
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 48px;

	.companies-list-utilities {
		display: flex;
		justify-content: space-between;

		.search-input {
			width: 440px;
			background: #FFFFFF;
		}

		.new-company-button {
			width: 220px;
		}
	}
`

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 40px;
`

export const AddNewCompanyContainerDrawer = styled.div`
	display: flex;
	flex-direction: column;
	width: 880px;

	.close-drawer-icon {
		position: absolute;
		left: 26px;
		top: 26px;
		width: 50px;
		height: 50px;
		cursor: pointer;
	}

	.drawer-body {
		margin-top: 120px;
	}
`