import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG",
		address: "Some address 5, 12345 Some City",
		description: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/c0/Giovanni_Antonio_Canal%2C_il_Canaletto_-_London_-_Westminster_Abbey%2C_with_a_Procession_of_Knights_of_the_Bath_-_WGA03950.jpg",
		address: "Some address 10, 12345 Major City",
		description: "This is a second meetup!",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}
// }

export async function getStaticProps() {
	return {
		props: {
			meetups: DUMMY_MEETUPS
		},
		revalidate: 1
	}
}

export default HomePage;
