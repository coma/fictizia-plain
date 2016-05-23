export default (from, to) => ['$state', state => {

	if (state.is(from)) {

		state.go(to);
	}
}];
