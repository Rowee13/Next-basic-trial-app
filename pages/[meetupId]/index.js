import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG"
			title="A First Meetup"
			address="Some street 5, Some City"
			description="The meetup description"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{ 
				params: {
					meetupId: 'm1',
				},
			},
			{ 
				params: {
					meetupId: 'm2',
				},
			},
		]
	}
}

export async function getStaticProps(context) {

	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG',
				id: meetupId,
				title: 'A First Meetup',
				address: 'Some street 5, Some City',
				description: 'The meetup description',
			}
		}
	}
}


export default MeetupDetails;
