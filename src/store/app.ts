class App {
	isMobile: boolean = false;

	constructor() {}

	setLayout(isMobile: boolean) {
		this.isMobile = isMobile;
	}
}

const app = new App();
export default app;
